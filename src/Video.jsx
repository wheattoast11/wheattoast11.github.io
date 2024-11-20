import React from 'react';
import { Player } from '@remotion/player';
import { AbsoluteFill } from 'remotion';
import { createNoise4D } from 'simplex-noise';

const BackgroundAnimation = () => {
  const noise4D = createNoise4D();
  
  React.useEffect(() => {
    const canvas = document.getElementById('remotionCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrame;
    let particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5
    }));

    const animate = (time) => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(122, 158, 159, 0.05)');
      gradient.addColorStop(1, 'rgba(80, 108, 127, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        const noiseX = noise4D(particle.x * 0.001, particle.y * 0.001, time * 0.0001, 0);
        const noiseY = noise4D(particle.x * 0.001, particle.y * 0.001, 0, time * 0.0001);
        
        particle.x += particle.speedX + noiseX;
        particle.y += particle.speedY + noiseY;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(122, 158, 159, ${0.1 + Math.abs(noiseX) * 0.5})`;
        ctx.fill();
      });

      // Draw flowing lines
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(122, 158, 159, 0.1)';
      ctx.lineWidth = 1;

      for (let i = 0; i < canvas.width; i += 50) {
        const startY = canvas.height / 2;
        ctx.moveTo(i, startY);

        for (let x = 0; x < canvas.width; x += 10) {
          const y = startY + Math.sin(x * 0.01 + time * 0.001) * 50 +
                    noise4D(x * 0.001, startY * 0.001, time * 0.0001, 0) * 30;
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
  }, []);

  return (
    <AbsoluteFill style={{ background: 'transparent' }}>
      <canvas
        id="remotionCanvas"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.6,
          mixBlendMode: 'screen'
        }}
      />
    </AbsoluteFill>
  );
};

export const RemotionVideo = () => {
  return (
    <Player
      component={BackgroundAnimation}
      durationInFrames={300}
      compositionWidth={1920}
      compositionHeight={1080}
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