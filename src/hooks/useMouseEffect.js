import { useEffect, useState, useCallback, useRef } from 'react';

export function useMouseEffect(ref, options = {}) {
  const {
    intensity = 0.02,
    threshold = 0.5,
    debounceMs = 16
  } = options;

  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [isMoving, setIsMoving] = useState(false);
  const lastUpdate = useRef(0);
  const lastPos = useRef({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;

    const header = document.querySelector('.site-header');
    if (header) {
      const headerRect = header.getBoundingClientRect();
      if (e.clientY <= headerRect.bottom) {
        return;
      }
    }

    const now = Date.now();
    if (now - lastUpdate.current < debounceMs) return;
    lastUpdate.current = now;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const deltaX = Math.abs(x - lastPos.current.x);
    const deltaY = Math.abs(y - lastPos.current.y);
    
    if (deltaX > threshold || deltaY > threshold) {
      const newX = lastPos.current.x + (x - lastPos.current.x) * intensity;
      const newY = lastPos.current.y + (y - lastPos.current.y) * intensity;
      
      setPosition({ x: newX, y: newY });
      lastPos.current = { x: newX, y: newY };
      setIsMoving(true);
    } else {
      setIsMoving(false);
    }
  }, [intensity, threshold, debounceMs]);

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0.5, y: 0.5 });
    lastPos.current = { x: 0.5, y: 0.5 };
    setIsMoving(false);
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mousemove', handleMouseMove, { passive: true });
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseLeave]);

  return { position, isMoving };
} 