import React, { useEffect, useRef, useState } from 'react';
import { Scene } from '../three/Scene';

function Canvas() {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [scene, setScene] = useState(null);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight
        });
      }
    };

    // Initial size
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize scene
  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0 || dimensions.height === 0) {
      return;
    }

    try {
      const newScene = new Scene(containerRef.current, dimensions);
      setScene(prev => {
        if (prev) {
          prev.dispose();
        }
        return newScene;
      });

      // Start animation
      const animate = () => {
        if (newScene) {
          newScene.animate();
        }
        requestAnimationFrame(animate);
      };
      animate();

      return () => {
        if (newScene) {
          newScene.dispose();
        }
      };
    } catch (error) {
      console.error('Error initializing scene:', error);
    }
  }, [dimensions]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: '#000000',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
}

export default Canvas; 