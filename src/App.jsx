import React, { Suspense, lazy, useEffect } from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
  UNSAFE_DataRouterContext,
  UNSAFE_DataRouterStateContext
} from 'react-router-dom';
import LoadingState from './components/LoadingState';
import Canvas from './components/Canvas';
import ErrorBoundary from './components/ErrorBoundary';
import reportWebVitals from './utils/reportWebVitals';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const Manifesto = lazy(() => import('./pages/Manifesto'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/manifesto",
    element: <Manifesto />,
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  useEffect(() => {
    if ('performance' in window) {
      window.performance.mark('app_start');
    }
    reportWebVitals(console.log);
  }, []);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;