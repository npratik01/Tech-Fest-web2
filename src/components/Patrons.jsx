import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Patrons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="patrons"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-wider">
            <span className="gradient-text">Under the Guidance of</span>
          </h2>
        </motion.div>

        {/* Principal Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          {/* Name */}
          <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Dr. Suhas S. Gajre
          </h3>

          {/* Position */}
          <p className="font-body text-lg sm:text-xl text-gray-300 mb-2">
            Hon. Principal
          </p>

          {/* Institution */}
          <p className="font-body text-base sm:text-lg text-gray-400">
            Government College of Engineering Jalgaon
          </p>
        </motion.div>

        {/* Technical Incharges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {/* Dr. R. B. Kamble */}
          <div className="text-center">
            {/* Name */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Dr. R. B. Kamble
            </h3>

            {/* Position */}
            <p className="font-body text-base sm:text-lg text-gray-300 mb-2">
              Dean Student Activities
            </p>

            {/* Institution */}
            <p className="font-body text-sm sm:text-base text-gray-400">
              Government College of Engineering Jalgaon
            </p>
          </div>

          {/* Dr. M. S. Patil */}
          <div className="text-center">
            {/* Name */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Dr. M. S. Patil
            </h3>

            {/* Position */}
            <p className="font-body text-base sm:text-lg text-gray-300 mb-2">
              Technical Incharge
            </p>

            {/* Institution */}
            <p className="font-body text-sm sm:text-base text-gray-400">
              Technical Council
            </p>
            <p className="font-body text-sm sm:text-base text-gray-400">
              Government College of Engineering Jalgaon
            </p>
          </div>

          {/* Mr. S. D. Cheke */}
          <div className="text-center">
            {/* Name */}
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
              Mr. S. D. Cheke
            </h3>

            {/* Position */}
            <p className="font-body text-base sm:text-lg text-gray-300 mb-2">
              Technical Incharge
            </p>

            {/* Institution */}
            <p className="font-body text-sm sm:text-base text-gray-400">
              Technical Council
            </p>
            <p className="font-body text-sm sm:text-base text-gray-400">
              Government College of Engineering Jalgaon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Patrons;
