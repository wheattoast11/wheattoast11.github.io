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
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error Info:', errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
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
            {process.env.NODE_ENV === 'development' && (
              <div style={{ 
                marginTop: '2rem',
                textAlign: 'left',
                maxWidth: '800px'
              }}>
                <details>
                  <summary style={{ cursor: 'pointer', marginBottom: '1rem' }}>
                    Error Details
                  </summary>
                  <pre style={{ 
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    background: '#111',
                    padding: '1rem',
                    borderRadius: '4px'
                  }}>
                    {this.state.error && this.state.error.toString()}
                    {this.state.errorInfo && this.state.errorInfo.componentStack}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 