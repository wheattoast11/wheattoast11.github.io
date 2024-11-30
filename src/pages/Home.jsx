import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home({ onMount }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    onMount?.();
    setIsLoaded(true);
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
    <motion.div
      className="home-container"
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.section className="hero-section" variants={itemVariants}>
        <h1 className="gradient-text">Intuition Labs</h1>
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
            <h3>Enterprise AI Strategy</h3>
            <p>Comprehensive AI implementation and transformation roadmaps</p>
            <div className="card-content">
              <ul>
                <li>Enterprise AI Implementation Strategy</li>
                <li>LLM & Agent System Architecture</li>
                <li>GTM Strategy Development</li>
                <li>Complex System Integration</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>LLM Systems</h3>
            <p>Custom language model development and integration</p>
            <div className="card-content">
              <ul>
                <li>Custom AI Agent Development</li>
                <li>Advanced Prompt Engineering</li>
                <li>Multi-modal System Design</li>
                <li>Process Automation & Optimization</li>
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
  );
}

export default Home;