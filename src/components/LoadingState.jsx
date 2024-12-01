import React from 'react';

const LoadingState = () => {
  return (
    <div
      className="loading-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 9999,
        opacity: 0,
        animation: 'fadeIn 0.3s ease forwards'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem'
        }}
      >
        <div
          className="spinner"
          style={{
            width: '48px',
            height: '48px',
            border: '2px solid rgba(158, 207, 208, 0.3)',
            borderRadius: '50%',
            borderTopColor: 'rgba(158, 207, 208, 0.8)',
            position: 'relative',
            boxShadow: '0 0 20px rgba(158, 207, 208, 0.2)',
            animation: 'spin 1s linear infinite'
          }}
        />
        
        <div
          className="loading-text"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-display)',
            fontWeight: '200',
            letterSpacing: '0.15em',
            textTransform: 'lowercase',
            opacity: 0,
            transform: 'translateY(10px)',
            animation: 'slideUp 0.5s ease 0.2s forwards'
          }}
        >
          Initializing
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '3rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.75rem'
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="loading-dot"
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'rgba(158, 207, 208, 0.8)',
                boxShadow: '0 0 10px rgba(158, 207, 208, 0.4)',
                animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingState; 