import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '/style.css';

// Create React root and render App
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 