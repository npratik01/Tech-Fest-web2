import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
// import anime from "animejs";
import {
  Code,
  Cpu,
  Lightbulb,
  Rocket,
  Zap,
  Trophy,
  ExternalLink,
  Brain,
  Plane,
  Shield,
  Sparkles,
  CircuitBoard,
  Users,
  Presentation,
  Microscope,
  FlaskConical,
  Car,
  Construction,
  Cog,
} from "lucide-react";

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardsRef = useRef([]);

  // Anime.js entrance animations when cards come into view
  // useEffect(() => {
  //   if (!isInView) return;

  //   const prefersReducedMotion = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)"
  //   ).matches;
  //   if (prefersReducedMotion) return;

  //   // Staggered card entrance animation
  //   anime({
  //     targets: cardsRef.current,
  //     opacity: [0, 1],
  //     translateY: [60, 0],
  //     rotateX: [-15, 0],
  //     scale: [0.9, 1],
  //     duration: 1000,
  //     delay: anime.stagger(150, { start: 300 }),
  //     easing: "easeOutExpo",
  //   });

  //   // Animate icons with bounce
  //   anime({
  //     targets: ".event-icon",
  //     scale: [0, 1],
  //     rotate: [180, 0],
  //     duration: 800,
  //     delay: anime.stagger(150, { start: 600 }),
  //     easing: "easeOutElastic(1, .6)",
  //   });

  //   // Animate event numbers
  //   anime({
  //     targets: ".event-number",
  //     opacity: [0, 1],
  //     scale: [1.5, 1],
  //     duration: 600,
  //     delay: anime.stagger(150, { start: 500 }),
  //     easing: "easeOutQuad",
  //   });
  // }, [isInView]);

  const events = [
    {
      id: 1,
      title: "HackNex",
      description:
        "24 hrs ultimate hackathon by COMPACT - Computer Association for Creative Technocrats. Build innovative solutions, collaborate with brilliant minds, and create groundbreaking projects.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      registerLink: "https://forms.gle/77R5Z7kVq8FMQa5E6",
      organizer: "COMPACT",
      detailsLink: "/events/hacknex",
    },
    {
      id: 2,
      title: "AeroSim",
      description:
        "Time-based drone racing simulation competition by Team Third Axis (Drone Club). Experience cutting-edge drone technology and master aerial racing navigation.",
      icon: Plane,
      color: "from-purple-500 to-pink-500",
      registerLink: "https://forms.gle/Dw1PvVpnZgBhE6eq9",
      organizer: "Team Third Axis",
      detailsLink: "/events/aerosim",
    },
    {
      id: 3,
      title: "Asterix's Rover Challenge",
      description:
        "High-speed remote control car racing competition by Team Asterix. Test your driving skills, strategy, and reflexes in this adrenaline-pumping race.",
      icon: Car,
      color: "from-cyan-500 to-blue-500",
      registerLink: "https://forms.gle/4mYvPKSjC5dy3qGBA",
      organizer: "Team Asterix",
      detailsLink: "/events/rc-car-racing",
    },
    {
      id: 4,
      title: "ElectroQuest",
      description:
        "Three-round technical competition by e-TESA to test aptitude, technical knowledge, and practical circuit skills. Encourages analytical thinking, teamwork, and innovation.",
      icon: Zap,
      color: "from-pink-500 to-purple-500",
      registerLink: "https://forms.gle/WipLcsSaqgNAQ2Uf9",
      organizer: "e-TESA",
      detailsLink: "/events/electroquest",
    },
    {
      id: 5,
      title: "Cyber Shield",
      description:
        "Hands-on cybersecurity event by Cyber Security Club. Identify phishing scams, decode ciphers, and use OSINT to uncover digital clues in this thrilling challenge.",
      icon: Shield,
      color: "from-indigo-500 to-purple-500",
      registerLink: "https://forms.gle/NskPo4aaFMMP4pge7",
      organizer: "Cyber Security Club",
      detailsLink: "/events/cyber-shield",
    },
    {
      id: 6,
      title: "Black Box Control System",
      description:
        "Design, build, and control loop event by INSAT-A. Challenge your instrumentation and control system skills in this hands-on technical competition.",
      icon: Cog,
      color: "from-teal-500 to-cyan-500",
      registerLink: "https://forms.gle/KVA2LMF1wDAxJ1Gd9",
      organizer: "INSAT-A",
      detailsLink: "/events/blackbox-control",
    },
    {
      id: 7,
      title: "Truss Arena",
      description:
        "Design and construct a truss using popsicle sticks by CESA. Build the strongest truss possible with creativity, engineering thinking, and teamwork.",
      icon: Construction,
      color: "from-orange-500 to-red-500",
      registerLink: "https://forms.gle/bPx74nRNnGVCToQUA",
      organizer: "CESA",
      detailsLink: "/events/truss-arena",
    },
    {
      id: 8,
      title: "Evolve",
      description:
        "Three-round technical competition by Team Trionix (EV Club). Push the boundaries of electric vehicle innovation and showcase your technical prowess.",
      icon: Sparkles,
      color: "from-red-500 to-pink-500",
      registerLink: "https://forms.gle/tgR4owzvyPu1KUgj7",
      organizer: "Team Trionix",
      detailsLink: "/events/evolve",
    },
    {
      id: 9,
      title: "Mech Mind Quest",
      description:
        "Engaging technical competition by MESA to test aptitude, technical knowledge, tool identification, and innovative thinking through a structured three-round format.",
      icon: Brain,
      color: "from-yellow-500 to-orange-500",
      registerLink: "https://forms.gle/AcBCyKFNxv7VGZwd9",
      organizer: "MESA",
      detailsLink: "/events/mech-mind-quest",
    },
    {
      id: 10,
      title: "Circuithive",
      description:
        "Three-round electrical engineering competition by EESA featuring The Blind Spark, Circuitrix, and Debug the Circuit challenges. Showcase your electrical expertise.",
      icon: CircuitBoard,
      color: "from-green-500 to-emerald-500",
      registerLink: "https://forms.gle/ow38mPA4DQhWmLuS7",
      organizer: "EESA",
      detailsLink: "/events/electrolite",
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
        <div className="absolute top-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
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
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-wider">
            <span className="gradient-text">Featured Events</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our exciting lineup of competitions, workshops, and
            exhibitions
          </p>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id}
                ref={(el) => (cardsRef.current[index] = el)}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                // onMouseEnter={(e) => {
                //   // Anime.js hover effect
                //   const card = e.currentTarget;
                //   const icon = card.querySelector(".event-icon");
                //   const topAccent = card.querySelector(".top-accent");
                //   const particles = card.querySelectorAll(".event-particle");

                //   if (icon) {
                //     anime({
                //       targets: icon,
                //       rotate: [0, 360],
                //       scale: [1, 1.2, 1],
                //       duration: 600,
                //       easing: "easeOutElastic(1, .6)",
                //     });
                //   }
                //   if (topAccent) {
                //     anime({
                //       targets: topAccent,
                //       scaleX: [0, 1],
                //       duration: 400,
                //       easing: "easeOutExpo",
                //     });
                //   }
                //   if (particles.length) {
                //     anime({
                //       targets: particles,
                //       opacity: [0, 1, 0],
                //       translateY: [-20, -60],
                //       translateX: () => anime.random(-20, 20),
                //       scale: [0, 1, 0.5],
                //       duration: 1000,
                //       delay: anime.stagger(100),
                //       easing: "easeOutQuad",
                //     });
                //   }
                // }}
                className="group relative bg-gray-900/40 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Top Accent Line */}
                <div
                  className={`top-accent absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${event.color} transform scale-x-0 transition-transform duration-500 origin-left`}
                ></div>

                {/* Card Content */}
                <div className="relative z-10 p-5 sm:p-6 lg:p-8">
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div
                      className={`event-icon relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/50 transition-all duration-500`}
                    >
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      {/* Icon Glow */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Event Number Badge */}
                    <div className="event-number font-display text-6xl sm:text-7xl font-black text-gray-800/30 group-hover:text-cyan-500/20 transition-colors duration-500">
                      0{event.id}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 tracking-wide uppercase">
                    {event.title}
                  </h3>

                  {/* Organizer Badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gray-800/60 border border-gray-700 rounded-full text-xs sm:text-sm text-cyan-400 font-medium">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      {event.organizer}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-body text-gray-400 text-sm sm:text-base mb-6 leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={event.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r ${event.color} text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center transform hover:-translate-y-0.5 active:translate-y-0`}
                    >
                      Register Now
                    </a>
                    {event.detailsLink ? (
                      <Link
                        to={event.detailsLink}
                        className="sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-gray-700 hover:border-cyan-500 rounded-xl text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-cyan-500/10"
                      >
                        <span className="text-sm sm:text-base font-semibold">
                          Details
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    ) : (
                      <button className="sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-gray-700 hover:border-cyan-500 rounded-xl text-gray-300 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-cyan-500/10">
                        <span className="text-sm sm:text-base font-semibold">
                          Details
                        </span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Corner Accent */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl ${event.color} rounded-tl-full opacity-0 group-hover:opacity-10 transition-all duration-500 transform translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0`}
                ></div>

                {/* Shooting Stars Effect on Hover */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-1 h-12 bg-gradient-to-b ${event.color} opacity-0 group-hover:opacity-100 group-hover:animate-shoot-star rounded-full blur-sm`}
                      style={{
                        left: `${20 + i * 25}%`,
                        top: "-10%",
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: "1.5s",
                      }}
                    ></div>
                  ))}
                </div>

                {/* Glowing Dots Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div
                    className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>

                {/* Scanning Line Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100">
                  <div
                    className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:animate-scan-line`}
                    style={{ top: "0%" }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
