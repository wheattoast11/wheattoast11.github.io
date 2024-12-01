import React, { useEffect, useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scene } from '../three/Scene';
import { useMouseEffect } from '../hooks/useMouseEffect';

function Manifesto({ onMount }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  
  const { glow } = useMouseEffect(containerRef, {
    intensity: 0.15,
    ease: 0.1
  });

  useEffect(() => {
    onMount?.();
    
    const container = document.getElementById('manifesto-canvas');
    if (container) {
      sceneRef.current = new Scene(container, {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.dispose();
      }
    };
  }, [onMount]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <div 
      className="manifesto-page"
      ref={containerRef}
    >
      <canvas id="manifesto-canvas" className="background-canvas" />
      
      <m.div 
        className="manifesto-content"
        style={{ opacity, scale }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <m.header variants={itemVariants}>
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Our Manifesto</h1>
          <p className="tagline">Shaping the future of AI with purpose and responsibility</p>
        </m.header>

        <m.section className="section manifesto-content" variants={itemVariants}>
          <div className="manifesto-grid">
            <m.div 
              className="manifesto-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Purpose</h2>
              <p>We believe AI should augment human capabilities, not replace them. Our mission is to create AI systems that enhance human potential while maintaining ethical boundaries and promoting sustainable innovation.</p>
            </m.div>

            <m.div 
              className="manifesto-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Innovation</h2>
              <p>True innovation comes from understanding both the technical and human aspects of AI. We combine cutting-edge technology with deep industry knowledge to create solutions that matter.</p>
            </m.div>

            <m.div 
              className="manifesto-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Ethics</h2>
              <p>We are committed to developing AI systems that are transparent, fair, and accountable. Our ethical framework ensures that every solution we create considers its impact on society and individuals.</p>
            </m.div>

            <m.div 
              className="manifesto-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2>Collaboration</h2>
              <p>The best solutions emerge from diverse perspectives. We work closely with our clients, fostering partnerships that drive meaningful transformation and sustainable growth.</p>
            </m.div>
          </div>
        </m.section>
      </m.div>
      
      <div className="interactive-background">
        <div className="glow-gradient" />
        <div className="pattern-overlay" />
      </div>
    </div>
  );
}

export default Manifesto;