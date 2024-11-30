import React from 'react';
import { motion } from 'framer-motion';

const LoadingState = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg 
            width="50" 
            height="50" 
            viewBox="0 0 50 50"
            fill="none"
          >
            {/* Add your logo SVG path here */}
            <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" />
          </svg>
        </motion.div>
        
        <motion.div
          className="loading-dots"
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((_, i) => (
            <motion.span
              key={i}
              className="dot"
              animate={{
                y: ["0%", "-50%", "0%"],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingState; 