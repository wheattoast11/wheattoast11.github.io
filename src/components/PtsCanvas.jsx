import React, { useEffect, useRef } from 'react';
import { CanvasSpace, Create, Pt, Num } from 'pts';

const PtsCanvas = ({ currentSection }) => {
  const canvasRef = useRef(null);
  const spaceRef = useRef(null);
  const particlesRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create space with proper cleanup
    spaceRef.current = new CanvasSpace(canvasRef.current).setup({
      bgcolor: 'transparent',
      resize: true,
      retina: true,
      offscreen: false
    });

    const space = spaceRef.current;
    const form = space.getForm();
    
    // Increase particle count and size
    const particles = Create.distributeRandom(space.innerBound, 150);
    particlesRef.current = particles;

    const colors = {
      hero: ['#9ECFD0', '#7A9E9F', '#506C7F'].map(c => `${c}CC`),
      'vision-solutions': ['#7A9E9F', '#9ECFD0', '#506C7F'].map(c => `${c}CC`),
      manifesto: ['#506C7F', '#7A9E9F', '#9ECFD0'].map(c => `${c}CC`)
    };
    
    const isOutOfBounds = (p) => {
      return p.x < 0 || p.x > space.width || p.y < 0 || p.y > space.height;
    };

    let isDestroyed = false;

    const animate = (time, ftime) => {
      if (isDestroyed) return;

      const sectionColors = colors[currentSection] || colors.hero;
      const pts = particlesRef.current;
      if (!pts) return;

      timeRef.current += 0.01;
      form.composite('screen');
      
      // Enhanced animation patterns based on section
      if (currentSection === 'hero') {
        pts.forEach((p, i) => {
          const n = Num.randomRange(-1, 1);
          const ang = (n + timeRef.current) * Math.PI * 2;
          p.add(new Pt(Math.cos(ang), Math.sin(ang)).multiply(0.8));
          
          form.fillOnly(sectionColors[i % 3]).point(p, 2 + Math.abs(n));
          
          if (isOutOfBounds(p)) {
            p.to(space.center);
          }
        });
      } 
      else if (currentSection === 'vision-solutions') {
        pts.forEach((p, i) => {
          const d = p.$subtract(space.pointer).magnitude();
          const n = Num.randomRange(-1, 1);
          const ang = (n + timeRef.current) * Math.PI;
          
          p.rotate2D(ang * 0.15, space.center);
          if (d < 100) p.add(p.$subtract(space.pointer).normalize().multiply(1.5));
          
          form.fillOnly(sectionColors[i % 3]).point(p, 2.5 + Math.abs(n));

          if (isOutOfBounds(p)) {
            p.to(space.center);
          }
        });
      }
      else if (currentSection === 'manifesto') {
        pts.forEach((p, i) => {
          const d = p.$subtract(space.center).magnitude();
          p.rotate2D(d * 0.003, space.center);
          
          const n = Num.randomRange(-1, 1);
          form.fillOnly(sectionColors[i % 3]).point(p, 2 + Math.abs(n) * 2);
          
          if (d > space.size.minValue() * 0.6) {
            p.to(space.center);
          }
        });
      }

      // Enhanced connecting lines
      form.composite('screen');
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = pts[i].$subtract(pts[j]).magnitude();
          if (d < 100) {
            const alpha = 1 - d / 100;
            form.stroke(`rgba(158, 207, 208, ${alpha * 0.3})`).line([pts[i], pts[j]]);
          }
        }
      }
    };

    space.add({ animate });

    const handleResize = () => {
      if (isDestroyed) return;
      particlesRef.current = Create.distributeRandom(space.innerBound, 150);
    };

    space.bindMouse().bindTouch().play();
    window.addEventListener('resize', handleResize);

    return () => {
      isDestroyed = true;
      window.removeEventListener('resize', handleResize);
      
      if (particlesRef.current) {
        particlesRef.current.length = 0;
        particlesRef.current = null;
      }

      if (spaceRef.current) {
        spaceRef.current.removeAll();
        spaceRef.current.stop();
        spaceRef.current.dispose();
        spaceRef.current = null;
      }

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
  }, [currentSection]);

  return (
    <canvas 
      ref={canvasRef} 
      className="pts-canvas" 
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        mixBlendMode: 'screen',
        opacity: 0.8,
        pointerEvents: 'none'
      }}
    />
  );
};

export default PtsCanvas; 
