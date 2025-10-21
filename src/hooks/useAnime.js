import { useEffect, useRef } from "react";
import anime from "animejs";

/**
 * Custom hook for anime.js animations
 * Optimized for mobile devices with reduced motion support
 */
export const useAnime = (animationConfig, dependencies = []) => {
  const animationRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return; // Skip animations for accessibility
    }

    if (elementRef.current && animationConfig) {
      // Create animation with mobile optimization
      animationRef.current = anime({
        targets: elementRef.current,
        ...animationConfig,
        // Auto-optimize for mobile
        duration:
          typeof animationConfig.duration === "number"
            ? animationConfig.duration
            : 1000,
      });
    }

    return () => {
      // Cleanup animation on unmount
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, dependencies);

  return elementRef;
};

/**
 * Stagger animation for multiple elements
 */
export const useStaggerAnime = (selector, animationConfig, trigger = true) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !trigger) {
      return;
    }

    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector);

      anime({
        targets: elements,
        ...animationConfig,
        delay: anime.stagger(animationConfig.stagger || 100),
      });
    }
  }, [selector, trigger]);

  return containerRef;
};

/**
 * Scroll-triggered animation
 */
export const useScrollAnime = (animationConfig, options = {}) => {
  const elementRef = useRef(null);
  const animationRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            if (options.once !== false) {
              hasAnimated.current = true;
            }

            animationRef.current = anime({
              targets: elementRef.current,
              ...animationConfig,
            });
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  return elementRef;
};
