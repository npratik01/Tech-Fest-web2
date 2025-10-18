import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Github, Instagram } from "lucide-react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Faculty Coordinator",
      role: "Technical Council Head",
      image: "👨‍🏫",
      social: {
        linkedin: "#",
        email: "mailto:faculty@gcoej.ac.in",
      },
    },
    {
      name: "Student President",
      role: "Technical Council President",
      image: "👨‍💼",
      social: {
        linkedin: "#",
        email: "mailto:president@gcoej.ac.in",
        instagram: "#",
      },
    },
    {
      name: "Vice President",
      role: "Technical Council VP",
      image: "👩‍💼",
      social: {
        linkedin: "#",
        email: "mailto:vp@gcoej.ac.in",
        instagram: "#",
      },
    },
    {
      name: "Event Coordinator",
      role: "Events & Logistics Head",
      image: "👨‍💻",
      social: {
        linkedin: "#",
        email: "mailto:events@gcoej.ac.in",
        github: "#",
      },
    },
    {
      name: "Technical Head",
      role: "Technology & Development",
      image: "👩‍💻",
      social: {
        linkedin: "#",
        email: "mailto:tech@gcoej.ac.in",
        github: "#",
      },
    },
    {
      name: "PR Head",
      role: "Public Relations",
      image: "👨‍🎨",
      social: {
        linkedin: "#",
        email: "mailto:pr@gcoej.ac.in",
        instagram: "#",
      },
    },
    {
      name: "Design Head",
      role: "Creative & Design",
      image: "👩‍🎨",
      social: {
        linkedin: "#",
        email: "mailto:design@gcoej.ac.in",
        instagram: "#",
      },
    },
    {
      name: "Marketing Head",
      role: "Marketing & Sponsorship",
      image: "👨‍💼",
      social: {
        linkedin: "#",
        email: "mailto:marketing@gcoej.ac.in",
      },
    },
  ];

  return (
    <section
      id="team"
      className="py-20 md:py-32 relative overflow-hidden bg-gray-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full filter blur-3xl"></div>
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
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Meet the brilliant minds behind Tech Fest 2025
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-neon-purple/50 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 transition-all duration-300"></div>

              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                {/* Online Indicator */}
                <div className="absolute bottom-0 right-1/2 transform translate-x-8 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>

              {/* Info */}
              <div className="relative text-center mb-4">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-blue transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>

              {/* Social Links */}
              <div className="relative flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                )}
                {member.social.email && (
                  <a
                    href={member.social.email}
                    className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="w-8 h-8 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 text-white" />
                  </a>
                )}
                {member.social.instagram && (
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>

              {/* Top Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
