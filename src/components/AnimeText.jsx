import { useEffect, useRef } from 'react';
import anime from 'animejs';

/**
 * Animated text component with various effects
 */
const AnimeText = ({ 
  children, 
  effect = 'fadeUp', 
  delay = 0, 
  duration = 1000,
  className = '',
  stagger = 50,
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    if (!textRef.current) return;

    // Split text into characters for animation
    const text = textRef.current.textContent;
    textRef.current.innerHTML = '';
    
    // Create spans for each character
    const chars = text.split('').map((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      return span;
    });

    chars.forEach((char) => textRef.current.appendChild(char));

    // Animation configurations
    const animations = {
      fadeUp: {
        opacity: [0, 1],
        translateY: [30, 0],
      },
      fadeIn: {
        opacity: [0, 1],
      },
      scale: {
        opacity: [0, 1],
        scale: [0.5, 1],
      },
      rotate: {
        opacity: [0, 1],
        rotate: [-90, 0],
      },
      slideRight: {
        opacity: [0, 1],
        translateX: [-50, 0],
      },
      wave: {
        translateY: [
          { value: -20, duration: 400 },
          { value: 0, duration: 400 },
        ],
      },
    };

    // Apply animation
    anime({
      targets: textRef.current.querySelectorAll('span'),
      ...animations[effect],
      duration,
      delay: anime.stagger(stagger, { start: delay }),
      easing: 'easeOutExpo',
    });
  }, [effect, delay, duration, stagger]);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export default AnimeText;
