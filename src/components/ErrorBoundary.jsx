import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
    console.log('ErrorBoundary constructed');
  }

  static getDerivedStateFromError(error) {
    console.log('ErrorBoundary getDerivedStateFromError:', {
      error,
      type: error?.constructor?.name,
      message: error?.message,
      stack: error?.stack
    });
    
    if (error && 
        !error.message?.includes('Failed to load resource') &&
        !error.message?.includes('Loading chunk') &&
        !error.message?.includes('Loading CSS chunk')) {
      return { hasError: true };
    }
    return null;
  }

  componentDidCatch(error, errorInfo) {
    console.log('ErrorBoundary componentDidCatch:', {
      error,
      type: error?.constructor?.name,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack
    });
    
    if (error && 
        !error.message?.includes('Failed to load resource') &&
        !error.message?.includes('Loading chunk') &&
        !error.message?.includes('Loading CSS chunk')) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      });
    }
  }

  componentDidMount() {
    console.log('ErrorBoundary mounted');
  }

  componentDidUpdate() {
    console.log('ErrorBoundary updated', {
      hasError: this.state.hasError,
      error: this.state.error
    });
  }

  render() {
    console.log('ErrorBoundary rendering', {
      hasError: this.state.hasError
    });

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
            {process.env.NODE_ENV === 'development' && (
              <pre style={{
                marginTop: '2rem',
                textAlign: 'left',
                fontSize: '0.8rem',
                color: '#666'
              }}>
                {this.state.error && this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 