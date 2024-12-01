import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to your preferred error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            background: 'var(--background)',
            color: 'var(--text)',
            textAlign: 'center'
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, var(--text) 0%, var(--glow) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            Something went wrong
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.125rem',
              maxWidth: '600px',
              marginBottom: '2rem',
              opacity: 0.8
            }}
          >
            We're working on fixing this. Try refreshing the page or come back later.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '4px',
              color: 'var(--text)',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'transform 0.2s ease'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Refresh Page
          </motion.button>

          {process.env.NODE_ENV === 'development' && this.state.error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                marginTop: '2rem',
                padding: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontFamily: 'monospace',
                textAlign: 'left',
                maxWidth: '100%',
                overflow: 'auto'
              }}
            >
              <details>
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details
                </summary>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                  {'\n\n'}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            </motion.div>
          )}
        </motion.div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 