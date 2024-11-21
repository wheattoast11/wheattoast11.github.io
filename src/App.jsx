import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Manifesto from './pages/Manifesto';
import { Scene } from './three/Scene';
import { CardEffects } from './ui/CardEffects';
import { ScrollEffects } from './ui/ScrollEffects';
import { RemotionVideo } from './Video';

function App() {
  const [scene, setScene] = useState(null);
  const [effects, setEffects] = useState({ card: null, scroll: null });

  useEffect(() => {
    // Initialize Three.js scene
    const newScene = new Scene();
    newScene.animate();
    setScene(newScene);

    // Initialize UI effects
    const cardEffects = new CardEffects();
    const scrollEffects = new ScrollEffects();
    setEffects({ card: cardEffects, scroll: scrollEffects });

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
      // Cleanup
      if (scene) {
        scene.dispose();
      }
      if (videoContainer.parentNode) {
        videoContainer.parentNode.removeChild(videoContainer);
      }
    };
  }, []);

  // Reinitialize effects on route change
  const handleRouteChange = () => {
    if (effects.card) effects.card.init();
    if (effects.scroll) effects.scroll.init();
  };

  return (
    <Router>
      <canvas id="bg"></canvas>
      <Routes>
        <Route path="/" element={<Home onMount={handleRouteChange} />} />
        <Route path="/manifesto" element={<Manifesto onMount={handleRouteChange} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;