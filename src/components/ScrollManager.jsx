import React, { useEffect, useRef, useState } from 'react';

const ScrollManager = ({ children, onSectionChange }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const section = entry.target;
        if (section.classList.contains('site-header')) return;
        
        if (entry.isIntersecting) {
          section.classList.add('visible');
          setActiveSection(section.id);
          onSectionChange(section.id);
        } else {
          section.classList.remove('visible');
        }
      });
    }, options);

    const sections = document.querySelectorAll('.section');
    if (sections.length > 0) {
      sections[0].classList.add('visible');
      setActiveSection(sections[0].id);
    }
    
    sections.forEach(section => {
      if (!section.classList.contains('site-header')) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [onSectionChange]);

  return (
    <div className={`scroll-container ${activeSection ? `section-${activeSection}` : ''}`}>
      {children}
    </div>
  );
};

export default ScrollManager; 