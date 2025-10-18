import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-background"></div>

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
        <div className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-gray-50 mt-2">
          Government College of Engineering Jalgaon's
        </div>
        <br />
        <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-gray-200 mt-1 uppercase">
          Technical Council
        </div>
        <br />
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
            className="space-y-8"
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
              className="font-heading text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 font-bold uppercase tracking-wide"
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
