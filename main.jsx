import { Scene } from './src/three/Scene';
import { CardEffects } from './src/ui/CardEffects';
import { ScrollEffects } from './src/ui/ScrollEffects';
import { createRoot } from 'react-dom/client';
import { RemotionVideo } from './src/Video';
import React from 'react';

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

// Create React root and render Remotion video
const root = createRoot(videoContainer);
root.render(React.createElement(RemotionVideo));