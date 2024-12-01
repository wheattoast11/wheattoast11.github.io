import React from 'react';
import { m, AnimatePresence } from 'framer-motion';

const Navigation = ({ sections, currentSection, onNavigate }) => {
  return (
    <m.nav 
      className="fixed-navigation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="nav-indicators">
        {sections.map(section => (
          <m.button
            key={section.id}
            className={`nav-item ${currentSection === section.id ? 'active' : ''}`}
            onClick={() => onNavigate(section.id)}
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <m.div 
              className="nav-dot"
              initial={{ scale: 0.8 }}
              animate={{ 
                scale: currentSection === section.id ? 1 : 0.8,
                backgroundColor: currentSection === section.id ? 'var(--accent)' : 'transparent'
              }}
              transition={{ duration: 0.3 }}
            />
            <m.span 
              className="nav-label"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: currentSection === section.id ? 1 : 0.6,
                color: currentSection === section.id ? 'var(--accent)' : 'var(--text)'
              }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {section.label}
            </m.span>
          </m.button>
        ))}
      </div>
    </m.nav>
  );
};

export default Navigation; 