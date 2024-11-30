import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Scene } from '../three/Scene';

function Canvas() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [handleResize]);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    try {
      if (!sceneRef.current) {
        sceneRef.current = new Scene(containerRef.current, dimensions);
        sceneRef.current.animate(0);
      } else {
        sceneRef.current.resize(dimensions);
      }
    } catch (error) {
      console.error('Scene initialization error:', error);
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
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

export default React.memo(Canvas); 