import React, { useEffect, useRef } from 'react';
import { m } from 'framer-motion';

const MouseInteraction = () => {
  const mouseTrailRef = useRef(null);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update mouse trail
      if (mouseTrailRef.current) {
        mouseTrailRef.current.style.left = `${e.clientX}px`;
        mouseTrailRef.current.style.top = `${e.clientY}px`;
        mouseTrailRef.current.style.opacity = '0.3';
      }

      // Update card hover effects
      const cards = document.querySelectorAll('.card, .ecosystem-drawer');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    const handleScroll = () => {
      if (scrollProgressRef.current) {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          const scrolled = mainContent.scrollTop;
          const max = mainContent.scrollHeight - mainContent.clientHeight;
          const percent = (scrolled / max) * 100;
          scrollProgressRef.current.style.transform = `scaleX(${percent / 100})`;
        }
      }
    };

    const handleMouseLeave = () => {
      if (mouseTrailRef.current) {
        mouseTrailRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (mainContent) {
        mainContent.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <>
      <m.div 
        ref={mouseTrailRef} 
        className="mouse-trail"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
      />
      <m.div 
        ref={scrollProgressRef} 
        className="scroll-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />
    </>
  );
};

export default MouseInteraction; 