import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, FlaskConical, Atom, ArrowRight } from "lucide-react";

const ScienceExhibition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="science-exhibition"
      className="py-20 md:py-32 relative overflow-hidden bg-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual - Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Mobile Button - Above Poster */}
            <motion.a
              href="https://forms.gle/frfmg64dCkwNg1pG7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="lg:hidden mb-10 inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-white glow-effect group"
            >
              Participate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl mt-2">
              {/* Actual Poster Image */}
              <img
                src="/Poster.png"
                alt="Science Exhibition Poster"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Optional Overlay for better stat visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-gray-800/90 backdrop-blur-sm border border-cyan-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                15+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Schools Invited
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gray-800/90 backdrop-blur-sm border border-cyan-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                50+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">
                Expected Participants
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-6"
            >
              <span className="text-sm text-cyan-400 font-semibold">
                Special Event
              </span>
            </motion.div>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-wider">
              <span className="block text-white">Science Today,</span>
              <span className="block gradient-text">Engineers Tomorrow</span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              An exclusive science exhibition designed for school students to
              explore the wonders of science and technology. Witness fascinating
              experiments, interactive demonstrations, and innovative projects
              that inspire the next generation of engineers.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Microscope className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Interactive Demonstrations
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Hands-on experience with cutting-edge scientific equipment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Live Experiments
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Watch exciting chemistry, physics, and engineering
                    experiments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Atom className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    STEM Learning
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Inspiring curiosity and innovation in young minds
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Button - Right Content */}
            <motion.a
              href="https://forms.gle/frfmg64dCkwNg1pG7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full font-semibold text-white glow-effect group"
            >
              Participate Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScienceExhibition;
