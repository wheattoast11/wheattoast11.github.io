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
    if ('performance' in window) {
      window.performance.mark('app_start');
    }
    
    const logWebVitals = (metric) => {
      console.log('Web Vital:', metric);
      if (metric.value > 0) {
        console.log('Metric details:', {
          name: metric.name,
          value: metric.value,
          rating: metric.rating
        });
      }
    };

    reportWebVitals(logWebVitals);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingState />}>
          <Canvas />
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