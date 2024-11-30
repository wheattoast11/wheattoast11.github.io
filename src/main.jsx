import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../style.css';
import { initPerformanceMonitoring } from './utils/performance';

if (process.env.NODE_ENV === 'development') {
  initPerformanceMonitoring();
}

// Create React root and render App
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 