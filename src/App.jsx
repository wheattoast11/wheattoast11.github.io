import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingState from './components/LoadingState';
import Canvas from './components/Canvas';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './utils/reportWebVitals';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Manifesto = lazy(() => import('./pages/Manifesto'));

function App() {
  useEffect(() => {
    reportWebVitals(console.log);
    
    if ('performance' in window) {
      window.performance.mark('app_start');
    }
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Canvas />
        <Suspense fallback={<LoadingState />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manifesto" element={<Manifesto />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;