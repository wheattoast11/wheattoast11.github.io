import React from 'react';
import { m } from 'framer-motion';
import PlatformMarquee from '../components/PlatformMarquee';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const buttonHover = {
  hover: { 
    y: -2,
    transition: { duration: 0.2 }
  },
  tap: { 
    y: 0,
    transition: { duration: 0.1 }
  }
};

const consultationButtonHover = {
  hover: { 
    y: -2,
    boxShadow: '0 0 40px rgba(122, 158, 159, 0.4)',
    transition: { duration: 0.2 }
  },
  tap: { 
    y: 0,
    boxShadow: '0 0 30px rgba(122, 158, 159, 0.3)',
    transition: { duration: 0.1 }
  }
};

const Home = () => {
  return (
    <>
      <m.div 
        className="hero-content"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
      >
        <h1 className="company-name gradient-text">
          Intuition Labs
        </h1>
        <p className="hero-tagline">
          Pioneering the future of AI through intuitive design
        </p>
      </m.div>
      
      <m.div 
        className="cta-container"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <m.a 
          href="#services" 
          className="cta-button primary"
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Explore Our Services</span>
        </m.a>
        <m.a 
          href="#manifesto" 
          className="cta-button secondary"
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Read Our Manifesto</span>
        </m.a>
        <m.a 
          href="https://zcal.co/i/terminals" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cta-button consultation"
          variants={consultationButtonHover}
          whileHover="hover"
          whileTap="tap"
        >
          <span>Schedule Consultation</span>
        </m.a>
      </m.div>

      <PlatformMarquee />
    </>
  );
};

export default Home;