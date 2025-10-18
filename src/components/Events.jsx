import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  Zap,
  Trophy,
  ExternalLink,
} from "lucide-react";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      id: 1,
      title: "Coding Competition",
      description:
        "Test your programming skills in this challenging competition. Solve complex problems and compete with the best coders.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      registerLink: "#register",
    },
    {
      id: 2,
      title: "Hackathon",
      description:
        "Build innovative solutions in 24 hours. Collaborate, code, and create groundbreaking projects.",
      icon: Cpu,
      color: "from-purple-500 to-pink-500",
      registerLink: "#register",
    },
    {
      id: 3,
      title: "Innovation Challenge",
      description:
        "Present your innovative ideas and solutions to real-world problems. Win exciting prizes!",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      registerLink: "#register",
    },
    {
      id: 4,
      title: "Robotics Workshop",
      description:
        "Learn about robotics, automation, and AI. Hands-on experience with cutting-edge technology.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      registerLink: "#register",
    },
    {
      id: 5,
      title: "Tech Quiz",
      description:
        "Test your technical knowledge across various domains. Compete for the title of Tech Master!",
      icon: Zap,
      color: "from-red-500 to-pink-500",
      registerLink: "#register",
    },
    {
      id: 6,
      title: "Project Showcase",
      description:
        "Display your innovative projects and get feedback from industry experts and professors.",
      icon: Trophy,
      color: "from-indigo-500 to-purple-500",
      registerLink: "#register",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="events"
      className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-gray-950 to-gray-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Featured Events</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our exciting lineup of competitions, workshops, and
            exhibitions
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Icon */}
                <div
                  className={`relative z-10 w-14 h-14 bg-gradient-to-br ${event.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={event.registerLink}
                      className={`flex-1 px-4 py-2 bg-gradient-to-r ${event.color} text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 text-center`}
                    >
                      Register
                    </a>
                    <button className="px-4 py-2 border border-gray-600 hover:border-neon-purple rounded-lg text-gray-300 hover:text-white transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-blue/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
