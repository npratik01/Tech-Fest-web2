import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import anime from 'animejs';
import AnimeText from './AnimeText';

const HeroWithAnime = () => {
  const techSymbolsRef = useRef(null);
  const floatingShapesRef = useRef(null);
  const mainContentRef = useRef(null);

  // Generate random tech symbols
  const techSymbols = [
    "{ }",
    "< >",
    "/>",
    "[ ]",
    "( )",
    "01",
    "10",
    "λ",
    "Σ",
    "Δ",
    "∫",
    "∂",
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate tech symbols with anime.js
    if (techSymbolsRef.current) {
      const symbols = techSymbolsRef.current.querySelectorAll('.tech-symbol');
      
      anime({
        targets: symbols,
        translateY: [
          { value: -20, duration: 0 },
          { value: -100, duration: 3000 }
        ],
        opacity: [
          { value: 0, duration: 0 },
          { value: 0.5, duration: 1000 },
          { value: 0, duration: 2000 }
        ],
        rotate: {
          value: 360,
          duration: 4000,
          easing: 'linear'
        },
        loop: true,
        delay: anime.stagger(500),
        easing: 'linear',
      });
    }

    // Animate floating shapes
    if (floatingShapesRef.current) {
      const shapes = floatingShapesRef.current.querySelectorAll('.floating-shape');
      
      shapes.forEach((shape, index) => {
        anime({
          targets: shape,
          translateY: [
            { value: -30, duration: 4000, easing: 'easeInOutSine' },
            { value: 30, duration: 4000, easing: 'easeInOutSine' },
            { value: 0, duration: 4000, easing: 'easeInOutSine' }
          ],
          translateX: [
            { value: 30, duration: 4000, easing: 'easeInOutSine' },
            { value: -30, duration: 4000, easing: 'easeInOutSine' },
            { value: 0, duration: 4000, easing: 'easeInOutSine' }
          ],
          scale: [
            { value: 1.1, duration: 6000, easing: 'easeInOutQuad' },
            { value: 1, duration: 6000, easing: 'easeInOutQuad' }
          ],
          loop: true,
          delay: index * 1000,
        });
      });
    }

    // Animate main content entrance
    if (mainContentRef.current) {
      anime.timeline()
        .add({
          targets: mainContentRef.current.querySelector('.main-heading'),
          opacity: [0, 1],
          translateY: [50, 0],
          scale: [0.9, 1],
          duration: 1200,
          easing: 'easeOutExpo',
        })
        .add({
          targets: mainContentRef.current.querySelectorAll('.animate-element'),
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          delay: anime.stagger(150),
          easing: 'easeOutExpo',
        }, '-=800');
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-background"></div>

      {/* Circuit Board Lines - Keep existing SVG animations */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient
              id="circuitGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0" y1="20%" x2="100%" y2="20%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="0" y1="40%" x2="100%" y2="40%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          <motion.line
            x1="0" y1="60%" x2="100%" y2="60%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
        </svg>
      </div>

      {/* Floating Tech Symbols with Anime.js */}
      <div ref={techSymbolsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {techSymbols.map((symbol, index) => (
          <div
            key={`symbol-${index}`}
            className="tech-symbol absolute text-2xl font-mono font-bold text-cyan-400/20"
            style={{
              left: `${(index * 15) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Floating Shapes with Anime.js */}
      <div ref={floatingShapesRef} className="floating-shapes">
        <div className="floating-shape shape w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-neon-blue top-10 sm:top-20 left-5 sm:left-10"></div>
        <div className="floating-shape shape w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-neon-purple top-20 sm:top-40 right-10 sm:right-20"></div>
        <div className="floating-shape shape w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-neon-pink bottom-10 sm:bottom-20 left-1/4"></div>
      </div>

      {/* GCOEJ Text */}
      <div className="relative z-10 pt-20 sm:pt-24 pb-2 sm:pb-4 px-4 text-center">
        <AnimeText 
          effect="fadeUp" 
          delay={200}
          stagger={30}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-50 mt-2"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Government College of Engineering Jalgaon
        </AnimeText>
        <AnimeText
          effect="fadeIn"
          delay={800}
          className="text-sm sm:text-base md:text-lg font-bold italic text-gray-300 mt-2 block"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          (An Autonomous Institute of Government of Maharashtra)
        </AnimeText>
        <AnimeText 
          effect="scale"
          delay={1200}
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-gray-200 mt-4 block"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Technical Council
        </AnimeText>
        <AnimeText
          effect="fadeIn"
          delay={1500}
          className="font-body text-base sm:text-lg md:text-xl font-light italic text-gray-300 mt-1 block"
        >
          presents
        </AnimeText>
      </div>

      {/* Main Content */}
      <div ref={mainContentRef} className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="main-heading font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-wider opacity-0">
              <span className="block gradient-text">Tech Fest 2025</span>
            </h1>

            <p className="animate-element font-heading text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 font-bold tracking-wide capitalize opacity-0">
              Institute Level Technical Events
            </p>

            <p className="animate-element max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed opacity-0">
              A celebration of innovation, creativity, and engineering
              brilliance — join us for an exciting lineup of events,
              exhibitions, and competitions!
            </p>

            {/* Date & Time */}
            <div className="animate-element flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200 opacity-0">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <Calendar className="w-5 h-5 text-neon-blue" />
                <span className="text-sm sm:text-base">14th November 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <Clock className="w-5 h-5 text-neon-purple" />
                <span className="text-sm sm:text-base">9:00 AM onwards</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-element flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 opacity-0">
              <motion.a
                href="#events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-semibold text-white text-center overflow-hidden glow-effect"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-neon-purple hover:bg-neon-purple/10 rounded-full font-semibold text-white text-center transition-all duration-300"
              >
                Explore Events
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithAnime;
