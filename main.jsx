import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import './style.css';

// Create React root for main app
const root = createRoot(document.getElementById('root'));
root.render(<App />);