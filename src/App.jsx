import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import { Scene } from './three/Scene';
import { CardEffects } from './ui/CardEffects';
import { ScrollEffects } from './ui/ScrollEffects';
import { RemotionVideo } from './Video';

function App() {
  useEffect(() => {
    // Initialize Three.js scene
    const scene = new Scene();
    scene.animate();

    // Initialize UI effects
    new CardEffects();
    new ScrollEffects();

    // Initialize Remotion video
    const videoContainer = document.createElement('div');
    videoContainer.id = 'remotion-video';
    document.body.appendChild(videoContainer);

    const root = document.createElement('div');
    root.id = 'remotion-root';
    videoContainer.appendChild(root);
    
    const videoRoot = createRoot(root);
    videoRoot.render(<RemotionVideo />);

    return () => {
      if (videoContainer.parentNode) {
        videoContainer.parentNode.removeChild(videoContainer);
      }
    };
  }, []);

  return (
    <Router>
      <canvas id="bg"></canvas>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;