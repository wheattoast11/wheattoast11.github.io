import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { initPerformanceMonitoring } from './utils/performance';
import '../style.css';

// Initialize performance monitoring
if (process.env.NODE_ENV === 'development') {
  initPerformanceMonitoring();
}

// Configure Framer Motion
const motionConfig = {
  reducedMotion: 'user',
  transition: { 
    duration: 0.5,
    ease: [0.32, 0.72, 0, 1]
  },
  features: domAnimation
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LazyMotion strict features={motionConfig.features}>
      <MotionConfig 
        reducedMotion={motionConfig.reducedMotion} 
        transition={motionConfig.transition}
      >
        <App />
      </MotionConfig>
    </LazyMotion>
  </React.StrictMode>
); 