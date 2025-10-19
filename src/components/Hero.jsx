import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Hero = () => {
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
  const binaryNumbers = Array.from({ length: 15 }, () =>
    Math.random() > 0.5 ? "1" : "0"
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-background"></div>

      {/* Circuit Board Lines - Animated */}
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
          {/* Horizontal lines */}
          <motion.line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="0"
            y1="40%"
            x2="100%"
            y2="40%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />
          <motion.line
            x1="0"
            y1="60%"
            x2="100%"
            y2="60%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.5,
            }}
          />
          <motion.line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
              delay: 1.5,
            }}
          />
          {/* Vertical lines */}
          <motion.line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "linear",
              delay: 0.7,
            }}
          />
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1.2,
            }}
          />
          <motion.line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="url(#circuitGradient)"
            strokeWidth="1"
            animate={{ pathLength: [0, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "linear",
              delay: 0.3,
            }}
          />
        </svg>
      </div>

      {/* Floating Tech Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techSymbols.map((symbol, index) => (
          <motion.div
            key={`symbol-${index}`}
            className="absolute text-2xl font-mono font-bold text-cyan-400/20"
            style={{
              left: `${(index * 15) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "linear",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {binaryNumbers.map((num, index) => (
          <motion.div
            key={`binary-${index}`}
            className="absolute text-sm font-mono text-green-400/30"
            style={{
              left: `${(index * 7) % 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ["0vh", "110vh"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "linear",
            }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="mb-2">
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Geometric Shapes - Hexagons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`hex-${index}`}
            className="absolute"
            style={{
              left: `${(index * 20) % 100}%`,
              top: `${(index * 15) % 80}%`,
              width: "60px",
              height: "60px",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 10 + index,
              repeat: Infinity,
              delay: index * 0.8,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50 1 95 25 95 75 50 99 5 75 5 25"
                fill="none"
                stroke="rgba(168, 85, 247, 0.4)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Floating Data Nodes with Connection Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg className="w-full h-full">
          {/* Create nodes */}
          {[...Array(8)].map((_, index) => {
            const x = 10 + ((index * 12) % 80);
            const y = 15 + ((index * 17) % 70);
            return (
              <motion.g key={`node-${index}`}>
                {/* Connection lines */}
                {index < 7 && (
                  <motion.line
                    x1={`${x}%`}
                    y1={`${y}%`}
                    x2={`${10 + (((index + 1) * 12) % 80)}%`}
                    y2={`${15 + (((index + 1) * 17) % 70)}%`}
                    stroke={
                      index % 3 === 0
                        ? "#00f0ff"
                        : index % 3 === 1
                        ? "#a855f7"
                        : "#ec4899"
                    }
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeInOut",
                    }}
                  />
                )}
                {/* Node circles */}
                <motion.circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill={
                    index % 3 === 0
                      ? "#00f0ff"
                      : index % 3 === 1
                      ? "#a855f7"
                      : "#ec4899"
                  }
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut",
                  }}
                />
                {/* Outer glow ring */}
                <motion.circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="8"
                  fill="none"
                  stroke={
                    index % 3 === 0
                      ? "#00f0ff"
                      : index % 3 === 1
                      ? "#a855f7"
                      : "#ec4899"
                  }
                  strokeWidth="1"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                />
              </motion.g>
            );
          })}
        </svg>
      </div>

      {/* Floating Shapes - Responsive */}
      <div className="floating-shapes">
        <div className="shape w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-neon-blue top-10 sm:top-20 left-5 sm:left-10 animate-float"></div>
        <div
          className="shape w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-neon-purple top-20 sm:top-40 right-10 sm:right-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="shape w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-neon-pink bottom-10 sm:bottom-20 left-1/4 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* GCOEJ Text - Below Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 pt-20 sm:pt-24 pb-2 sm:pb-4 px-4 text-center"
      >
        <div
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-50 mt-2"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Government College of Engineering Jalgaon
        </div>
        <div
          className="text-sm sm:text-base md:text-lg font-bold italic text-gray-300 mt-2"
          style={{ fontFamily: "'Times New Roman', serif" }}
        >
          (An Autonomous Institute of Government of Maharashtra)
        </div>
        <div
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-gray-200 mt-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Technical Council
        </div>
        <div className="font-body text-base sm:text-lg md:text-xl font-light italic text-gray-300 mt-1">
          presents
        </div>
      </motion.div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-wider"
            >
              <span className="block gradient-text">Tech Fest 2025</span>
              {/* <span className="block text-white mt-2">2025</span> */}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 font-bold tracking-wide capitalize"
            >
              Institute Level Technical Events
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="max-w-3xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              A celebration of innovation, creativity, and engineering
              brilliance — join us for an exciting lineup of events,
              exhibitions, and competitions!
            </motion.p>

            {/* Date & Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <Calendar className="w-5 h-5 text-neon-blue" />
                <span className="text-sm sm:text-base">14th November 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <Clock className="w-5 h-5 text-neon-purple" />
                <span className="text-sm sm:text-base">9:00 AM onwards</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
