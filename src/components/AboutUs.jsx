import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, Lightbulb } from "lucide-react";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To foster innovation, creativity, and technical excellence among students",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a strong network of tech enthusiasts and innovators",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Promoting quality education and cutting-edge research",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Encouraging creative thinking and problem-solving skills",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
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
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-wider">
            <span className="gradient-text">About Us</span>
          </h2>
          <p className="font-heading text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-widest">
            GCOEJ's Technical Council
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Logo for Mobile - Above text */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs">
                <img
                  src="/techLogo.png"
                  alt="GCOEJ Technical Council Logo"
                  className="w-full h-full object-contain bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-6"
                />
              </div>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-black text-white mb-6 tracking-wide">
              Empowering Future Engineers
            </h3>
            <div className="font-body space-y-4 text-gray-300 leading-relaxed">
              <p>
                The Technical Council of Government College of Engineering,
                Jalgaon (GCOEJ) is dedicated to fostering technical excellence
                and innovation among students. We organize various technical
                events, workshops, and competitions throughout the year to
                enhance practical knowledge and skills.
              </p>
              <p>
                Tech Fest 2025 is our flagship event, bringing together
                brilliant minds from across the institute to showcase their
                talents, compete in challenging competitions, and learn from
                industry experts. It's a platform where creativity meets
                technology, and ideas transform into reality.
              </p>
              <p>
                Our vision is to create an ecosystem that nurtures innovation,
                promotes collaborative learning, and prepares students for the
                challenges of the modern technological landscape.
              </p>
            </div>
          </motion.div>

          {/* Right Visual - Technical Council Logo (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Technical Council Logo Image */}
              <img
                src="/techLogo.png"
                alt="GCOEJ Technical Council Logo"
                className="w-full h-full object-contain bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm p-4 sm:p-6 md:p-8"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                ></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
