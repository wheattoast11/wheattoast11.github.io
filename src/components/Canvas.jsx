import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Scene } from './Scene';

function Canvas() {
  const containerRef = useRef(null);
  const [scene, setScene] = useState(null);

  useEffect(() => {
    // Only initialize if container exists
    if (!containerRef.current) return;

    // Wait for next frame to ensure DOM measurements are accurate
    requestAnimationFrame(() => {
      try {
        const newScene = new Scene(containerRef.current);
        setScene(newScene);

        return () => {
          if (newScene) {
            newScene.dispose();
          }
        };
      } catch (error) {
        console.error('Error initializing scene:', error);
      }
    });
  }, []);

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
        background: '#000000'
      }}
    />
  );
}

export default Canvas; 