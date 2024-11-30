import React from 'react';

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
    if (error && !error.message?.includes('Failed to load resource')) {
      return { hasError: true };
    }
    return null;
  }

  componentDidCatch(error, errorInfo) {
    if (error && !error.message?.includes('Failed to load resource')) {
      console.error('ErrorBoundary caught an error:', error);
      console.error('Error Info:', errorInfo);
      
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '2rem', 
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: '#000000',
          color: 'white',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div>
            <h1>Something went wrong</h1>
            <p>Please refresh the page or try again later.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 