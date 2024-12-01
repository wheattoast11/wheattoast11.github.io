import React, { useRef, useEffect } from 'react';
import { m, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const CardInteraction = ({ children, className, style }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });
  const scale = useSpring(1, { stiffness: 300, damping: 30 });
  
  const glowTemplate = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, var(--glow) 0%, transparent 70%)`;

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    let rafId = null;
    let isHovered = false;

    const updateMousePosition = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);

      if (isHovered) {
        const rotX = ((y - rect.height / 2) / rect.height) * -20;
        const rotY = ((x - rect.width / 2) / rect.width) * 20;
        rotateX.set(rotX);
        rotateY.set(rotY);
      }
    };

    const handleMouseEnter = () => {
      isHovered = true;
      scale.set(1.02);
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseX.set(card.offsetWidth / 2);
      mouseY.set(card.offsetHeight / 2);
      rotateX.set(0);
      rotateY.set(0);
      scale.set(1);
    };

    card.addEventListener('mousemove', updateMousePosition, { passive: true });
    card.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Initial center position
    mouseX.set(card.offsetWidth / 2);
    mouseY.set(card.offsetHeight / 2);

    return () => {
      card.removeEventListener('mousemove', updateMousePosition);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, rotateX, rotateY, scale]);

  return (
    <m.div
      ref={cardRef}
      className={`card-interaction ${className || ''}`}
      style={{
        ...style,
        position: 'relative',
        transformStyle: 'preserve-3d',
        transformOrigin: 'center center',
        willChange: 'transform',
        isolation: 'isolate',
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(122, 158, 159, 0.1)',
        padding: '2rem',
        overflow: 'hidden',
        scale,
        rotateX,
        rotateY,
        z: 0
      }}
    >
      {/* Glow effect */}
      <m.div
        className="card-glow"
        style={{
          position: 'absolute',
          inset: -1,
          background: glowTemplate,
          opacity: 0.15,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          zIndex: 0,
          mixBlendMode: 'screen'
        }}
      />

      {/* Pattern overlay */}
      <m.div
        className="pattern-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(45deg, rgba(122, 158, 159, 0.05) 25%, transparent 25%)`,
          backgroundSize: '3px 3px',
          opacity: 0.1,
          pointerEvents: 'none',
          borderRadius: 'inherit',
          zIndex: 0
        }}
      />

      {/* Content wrapper */}
      <m.div
        style={{
          position: 'relative',
          zIndex: 1,
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </m.div>
    </m.div>
  );
};

export default CardInteraction; 