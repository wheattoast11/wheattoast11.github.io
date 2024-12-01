import React, { useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { FlowField } from '../three/FlowField';
import PtsCanvas from './PtsCanvas';
import { RemotionVideo } from '../Video';
import { Scene } from '../three/Scene';
import { useMouseEffect } from '../hooks/useMouseEffect';

const LayeredBackground = ({ currentSection }) => {
  const flowFieldRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);
  
  const { position, isMoving } = useMouseEffect(containerRef, {
    intensity: 0.03,
    threshold: 0.1,
    debounceMs: 16
  });

  useEffect(() => {
    if (containerRef.current) {
      // Initialize FlowField
      flowFieldRef.current = new FlowField();

      // Initialize Scene
      const canvas = document.querySelector('.scene-canvas');
      if (canvas) {
        sceneRef.current = new Scene(canvas);
      }

      // Animation loop
      const animate = (time) => {
        if (flowFieldRef.current) {
          flowFieldRef.current.update(time * 0.001);
        }
        if (sceneRef.current?.initialized) {
          sceneRef.current.animate(time);
        }
        animationFrameRef.current = requestAnimationFrame(animate);
      };
      
      animationFrameRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        if (flowFieldRef.current) {
          flowFieldRef.current.dispose();
        }
        if (sceneRef.current) {
          sceneRef.current.dispose();
        }
      };
    }
  }, []);

  useEffect(() => {
    // Update section
    if (flowFieldRef.current) {
      flowFieldRef.current.updateSection(currentSection);
    }
    if (sceneRef.current?.initialized) {
      sceneRef.current.updateSection(currentSection);
    }
  }, [currentSection]);

  return (
    <div className="layered-background" ref={containerRef}>
      {/* Base gradient background */}
      <m.div 
        className="background-layer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          backgroundColor: currentSection === 'hero' ? 'rgba(0, 0, 0, 0.75)' : 'rgba(5, 5, 5, 0.7)'
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />

      {/* Three.js Scene */}
      <m.canvas 
        className="scene-canvas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      />

      {/* PtsCanvas Layer */}
      <PtsCanvas currentSection={currentSection} />

      {/* Remotion Video Layer */}
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.5 }}
        style={{ 
          position: 'absolute', 
          inset: 0,
          zIndex: 2,
          mixBlendMode: 'screen',
          willChange: 'transform'
        }}
      >
        <RemotionVideo />
      </m.div>

      {/* Mouse-following glow effect */}
      <m.div 
        className="glow-gradient"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isMoving ? 0.4 : 0.2,
          background: `radial-gradient(
            circle at ${position.x * 100}% ${position.y * 100}%,
            var(--glow-primary) 0%,
            transparent 70%
          )`
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Flow field overlay */}
      <m.div 
        className="flow-field-layer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentSection === 'manifesto' ? 0.7 : 0.5,
          background: `radial-gradient(
            circle at ${position.x * 100}% ${position.y * 100}%,
            rgba(158, 207, 208, 0.1),
            transparent 70%
          )`
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Pattern overlay */}
      <m.div 
        className="pattern-overlay"
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentSection === 'vision-solutions' ? 0.2 : 0.1,
          transform: isMoving ? 'scale(1.05)' : 'scale(1)'
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Gradient overlay */}
      <m.div 
        className="gradient-overlay"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          background: `radial-gradient(
            circle at ${position.x * 100}% ${position.y * 100}%,
            rgba(158, 207, 208, 0.1),
            transparent 70%
          )`
        }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </div>
  );
};

export default LayeredBackground; 