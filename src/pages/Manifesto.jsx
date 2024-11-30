import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Manifesto({ onMount }) {
  useEffect(() => {
    onMount?.();
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
      id="app"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <canvas id="bg"></canvas>
      <motion.header variants={itemVariants}>
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Our Manifesto</h1>
        <p className="tagline">Shaping the future of AI with purpose and responsibility</p>
      </motion.header>

      <motion.section className="section manifesto-content" variants={itemVariants}>
        <div className="manifesto-grid">
          <div className="manifesto-item">
            <h2>Purpose</h2>
            <p>We believe AI should augment human capabilities, not replace them. Our mission is to create AI systems that enhance human potential while maintaining ethical boundaries and promoting sustainable innovation.</p>
          </div>

          <div className="manifesto-item">
            <h2>Innovation</h2>
            <p>True innovation comes from understanding both the technical and human aspects of AI. We combine cutting-edge technology with deep industry knowledge to create solutions that matter.</p>
          </div>

          <div className="manifesto-item">
            <h2>Ethics</h2>
            <p>We are committed to developing AI systems that are transparent, fair, and accountable. Our ethical framework ensures that every solution we create considers its impact on society and individuals.</p>
          </div>

          <div className="manifesto-item">
            <h2>Collaboration</h2>
            <p>The best solutions emerge from diverse perspectives. We work closely with our clients, fostering partnerships that drive meaningful transformation and sustainable growth.</p>
          </div>
        </div>

        <div className="principles">
          <h2>Our Guiding Principles</h2>
          <ul className="experience-list">
            <li>Human-centered AI development that prioritizes user needs and experiences</li>
            <li>Continuous learning and adaptation to emerging technologies and methodologies</li>
            <li>Transparent communication and collaboration with stakeholders</li>
            <li>Sustainable and responsible AI implementation practices</li>
            <li>Commitment to diversity, equity, and inclusion in AI development</li>
          </ul>
        </div>
      </motion.section>

      <motion.footer variants={itemVariants}>
        <div className="social-links">
          <a href="https://www.linkedin.com/company/intuition-labs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/wheattoast11" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.youtube.com/@IntuitionLabsLLC" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
        <p className="copyright">© 2024 Intuition Labs LLC. Pioneering the future of AI.</p>
      </motion.footer>
    </motion.div>
  );
}

export default Manifesto;