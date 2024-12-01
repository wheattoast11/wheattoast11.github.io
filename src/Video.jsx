import React from 'react';
import { Player } from '@remotion/player';
import { AbsoluteFill } from 'remotion';
import { createNoise4D } from 'simplex-noise';

const BackgroundAnimation = () => {
  const canvasRef = React.useRef(null);
  const animationFrameRef = React.useRef(null);
  const noise4D = React.useMemo(() => createNoise4D(), []);
  const particlesRef = React.useRef(null);
  const lastTimeRef = React.useRef(0);
  
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener('resize', debouncedResize);
    handleResize();
    
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true,
      willReadFrequently: false
    });
    if (!ctx) return;

    canvas.width = dimensions.width * window.devicePixelRatio;
    canvas.height = dimensions.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Initialize particles only once
    if (!particlesRef.current) {
      particlesRef.current = Array.from({ length: 200 }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        hue: Math.random() * 20 + 180
      }));
    }

    let isDestroyed = false;

    const animate = (time) => {
      if (isDestroyed) return;
      
      // Throttle to 60fps
      if (time - lastTimeRef.current < 16.67) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTimeRef.current = time;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Draw background gradient (cached version)
      const gradient = ctx.createRadialGradient(
        dimensions.width / 2,
        dimensions.height / 2,
        0,
        dimensions.width / 2,
        dimensions.height / 2,
        dimensions.width * 0.8
      );
      gradient.addColorStop(0, 'rgba(158, 207, 208, 0.05)');
      gradient.addColorStop(0.5, 'rgba(122, 158, 159, 0.03)');
      gradient.addColorStop(1, 'rgba(80, 108, 127, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      // Batch particle updates
      ctx.globalCompositeOperation = 'screen';
      const particles = particlesRef.current;
      const currentTime = time * 0.0002;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Update position with noise
        const noiseX = noise4D(particle.x * 0.002, particle.y * 0.002, currentTime, 0) * 3;
        const noiseY = noise4D(particle.x * 0.002, particle.y * 0.002, 0, currentTime) * 3;
        
        particle.x += particle.speedX + noiseX;
        particle.y += particle.speedY + noiseY;

        // Wrap around screen with buffer
        if (particle.x < -100) particle.x = dimensions.width + 100;
        if (particle.x > dimensions.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = dimensions.height + 100;
        if (particle.y > dimensions.height + 100) particle.y = -100;

        // Draw particle with optimized glow
        const glow = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        const color = `hsla(${particle.hue}, 70%, 70%,`;
        glow.addColorStop(0, `${color} ${particle.opacity})`);
        glow.addColorStop(0.5, `${color} ${particle.opacity * 0.5})`);
        glow.addColorStop(1, `${color} 0)`);
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Draw optimized flowing lines
      ctx.globalCompositeOperation = 'screen';
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(158, 207, 208, 0.1)';
      ctx.lineWidth = 1;

      const lineCount = Math.floor(dimensions.width / 40);
      const stepSize = dimensions.width / lineCount;

      for (let i = 0; i < lineCount; i++) {
        const startX = i * stepSize;
        const startY = dimensions.height / 2;
        ctx.moveTo(startX, startY);

        for (let x = startX; x < startX + stepSize; x += 4) {
          const noise = noise4D(x * 0.003, startY * 0.003, currentTime, 0);
          const y = startY + 
                   Math.sin(x * 0.02 + time * 0.001) * 40 +
                   noise * 60;
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      isDestroyed = true;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, noise4D]);

  return (
    <AbsoluteFill style={{ background: 'transparent', zIndex: 3 }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.9,
          mixBlendMode: 'screen',
          pointerEvents: 'none',
          willChange: 'transform'
        }}
      />
    </AbsoluteFill>
  );
};

// Debounce utility function
const debounce = (fn, ms) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), ms);
  };
};

export const RemotionVideo = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 100);

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
        zIndex: 3,
        opacity: 0.9,
        mixBlendMode: 'screen'
      }}
      loop
    />
  );
};