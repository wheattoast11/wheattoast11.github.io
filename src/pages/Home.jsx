import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scene } from '../three/Scene';
import { CardEffects } from '../ui/CardEffects';
import { ScrollEffects } from '../ui/ScrollEffects';

function Home({ onMount }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const sceneRef = useRef(null);
  const scrollEffectsRef = useRef(null);
  const cardEffectsRef = useRef(null);

  useEffect(() => {
    if (!isLoaded) {
      const initializeApp = async () => {
        try {
          onMount?.();
          
          // Initialize Three.js scene
          const container = document.getElementById('bg-canvas');
          if (container) {
            sceneRef.current = new Scene(container, {
              width: window.innerWidth,
              height: window.innerHeight
            });
            sceneRef.current.animate(0);
          }

          // Initialize effects
          scrollEffectsRef.current = new ScrollEffects();
          cardEffectsRef.current = new CardEffects();
          
          setIsLoaded(true);
        } catch (error) {
          console.error('Initialization error:', error);
        } finally {
          setIsLoading(false);
        }
      };

      initializeApp();
      
      return () => {
        sceneRef.current?.dispose();
        scrollEffectsRef.current?.dispose();
      };
    }
  }, [isLoaded, onMount]);

  if (isLoading) {
    return <LoadingState />;
  }
  
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

  const PlatformMarquee = React.memo(() => {
    const platforms = [
      { name: 'terminals', className: 'platform-terminals' },
      { name: 'radical', className: 'platform-radical' },
      { name: 'pathfinder', className: 'platform-pathfinder' },
      { name: 'wuji', className: 'platform-wuji' },
      { name: 'boom', className: 'platform-boom' }
    ];

    return (
      <div className="platforms-marquee">
        <div className="platforms-track">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="platform-set">
              {platforms.map(({ name, className }) => (
                <motion.span
                  key={`${setIndex}-${name}`}
                  className={`platform-name ${className}`}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {name}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <>
      <canvas id="bg-canvas" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'black'
      }} />
      <motion.div
        className="home-container"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.section className="hero-section" variants={itemVariants}>
          <h1 className="gradient-text" data-text="Intuition Labs">
            Intuition Labs
          </h1>
          <p className="tagline">Pioneering the future of AI through intuitive design</p>
          <div className="cta-container">
            <motion.a
              href="https://zcal.co/terminals"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.a>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/manifesto" className="cta-button secondary">
                Read Our Manifesto
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <PlatformMarquee />

        <motion.section 
          className="section solutions-grid"
          variants={itemVariants}
          data-parallax="0.2"
        >
          <h2>Featured Solutions</h2>
          <div className="grid">
            <motion.div 
              className="card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3>AI Strategy</h3>
              <p>Transforming enterprises through human-centric AI systems</p>
              <div className="card-content">
                <ul>
                  <li>Intuitive AI Systems for Complex Process Modeling</li>
                  <li>Multi-Modal Agent Networks for Emergent Intelligence</li>
                  <li>Research-Driven Innovation & Discovery Platforms</li>
                  <li>Human-AI Collaborative Workflows for Industrial Solutions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="card"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3>LLM Systems</h3>
              <p>Engineering advanced language models for intelligence at scale</p>
              <div className="card-content">
                <ul>
                  <li>Autonomous Processes for Novel Use Cases</li>
                  <li>Human-Centric Prompt Design & Response Patterns</li>
                  <li>Multi-Modal Understanding & Reasoning Tracing</li>
                  <li>Extensible Collaborative Intelligence Networks</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          className="section vision-section"
          variants={itemVariants}
          data-parallax="0.4"
        >
          <div className="vision-content">
            <h2>Our Vision</h2>
            <p>Transforming enterprises through cutting-edge AI solutions and polymathic expertise</p>
            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Add tech stack logos/icons here */}
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}

export default Home;