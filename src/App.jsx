import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

    // Create React root for video
    const videoRoot = createRoot(videoContainer);
    videoRoot.render(<RemotionVideo />);

    // Cleanup on unmount
    return () => {
      if (videoContainer.parentNode) {
        videoContainer.parentNode.removeChild(videoContainer);
      }
    };
  }, []);

  return (
    <>
      <canvas id="bg"></canvas>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;