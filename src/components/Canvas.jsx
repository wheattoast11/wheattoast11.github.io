import React, { useEffect, useRef } from 'react';
import { Scene } from '../three/Scene';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const scene = new Scene(canvasRef.current);
    scene.init();
    scene.animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: '#000000'
      }}
    />
  );
};

export default Canvas; 