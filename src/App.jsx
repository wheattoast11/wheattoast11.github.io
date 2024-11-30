import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingState from './components/LoadingState';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Manifesto = lazy(() => import('./pages/Manifesto'));
const Scene = lazy(() => import('./three/Scene').then(module => ({ default: module.Scene })));

function App() {
  const [scene, setScene] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Initialize Three.js scene
        const newScene = new Scene();
        await newScene.init(); // Assuming we make init async
        setScene(newScene);
        
        // Simulate minimum loading time for smooth transition
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading assets:', error);
        setIsLoading(false);
      }
    };

    preloadAssets();

    return () => {
      if (scene) {
        scene.dispose();
      }
    };
  }, []);

  // Debounced resize handler
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (scene) {
          scene.handleResize();
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [scene]);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <Router>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route 
            path="/" 
            element={<Home onMount={() => scene?.animate()} />} 
          />
          <Route 
            path="/manifesto" 
            element={<Manifesto onMount={() => scene?.animate()} />} 
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;