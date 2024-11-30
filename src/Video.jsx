import React from 'react';
import { Player } from '@remotion/player';
import { AbsoluteFill } from 'remotion';
import { createNoise4D } from 'simplex-noise';

const BackgroundAnimation = () => {
  const noise4D = createNoise4D();
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  React.useEffect(() => {
    const canvas = document.getElementById('remotionCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    
    // Increase number of particles and add variation
    const particles = Array.from({ length: 150 }, () => ({
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1
    }));

    const animate = (time) => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      // Enhanced gradient background
      const gradient = ctx.createRadialGradient(
        dimensions.width / 2,
        dimensions.height / 2,
        0,
        dimensions.width / 2,
        dimensions.height / 2,
        dimensions.width * 0.7
      );
      gradient.addColorStop(0, 'rgba(122, 158, 159, 0.03)');
      gradient.addColorStop(0.5, 'rgba(80, 108, 127, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles with enhanced effects
      particles.forEach(particle => {
        const noiseX = noise4D(particle.x * 0.001, particle.y * 0.001, time * 0.0001, 0) * 2;
        const noiseY = noise4D(particle.x * 0.001, particle.y * 0.001, 0, time * 0.0001) * 2;
        
        particle.x += particle.speedX + noiseX;
        particle.y += particle.speedY + noiseY;

        // Improved wrapping logic
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Draw particle with glow effect
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 2
        );
        glow.addColorStop(0, `rgba(122, 158, 159, ${particle.opacity})`);
        glow.addColorStop(1, 'rgba(122, 158, 159, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      });

      // Draw flowing lines with enhanced effect
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(122, 158, 159, 0.05)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < canvas.width; i += 30) {
        const startY = canvas.height / 2;
        ctx.moveTo(i, startY);

        for (let x = 0; x < canvas.width; x += 5) {
          const noise = noise4D(x * 0.002, startY * 0.002, time * 0.0001, 0);
          const y = startY + 
                   Math.sin(x * 0.01 + time * 0.001) * 30 +
                   noise * 50;
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [dimensions]);

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      <canvas
        id="remotionCanvas"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.8,
          mixBlendMode: 'screen'
        }}
      />
    </AbsoluteFill>
  );
};

export const RemotionVideo = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Player
      component={BackgroundAnimation}
      durationInFrames={300}
      compositionWidth={dimensions.width}
      compositionHeight={dimensions.height}
      fps={30}
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      loop
    />
  );
};