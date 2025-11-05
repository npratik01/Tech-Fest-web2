import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Code,
  Zap,
  Target,
  ArrowLeft,
  CheckCircle2,
  Gift,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const HackNex = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const eventDetails = {
    title: "HackNex",
    tagline: "24 Hours of Innovation & Code",
    duration: "24 Hours",
    date: "January 18-19, 2025",
    time: "9:00 AM onwards",
    venue: "Government College of Engineering Jalgaon",
    organizer: "COMPACT",
    teamSize: "2-4 members",
    registrationFee: "₹500 per team",
  };

  const highlights = [
    {
      icon: Code,
      title: "Build & Ship",
      description: "Develop a working prototype in 24 hours",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with brilliant minds from various domains",
    },
    {
      icon: Trophy,
      title: "Win Prizes",
      description: "Compete for exciting prizes worth ₹50,000+",
    },
    {
      icon: Zap,
      title: "Mentorship",
      description: "Get guidance from industry experts",
    },
  ];

  const schedule = [
    { time: "9:00 AM", event: "Registration & Breakfast" },
    { time: "10:00 AM", event: "Opening Ceremony & Problem Statement Release" },
    { time: "11:00 AM", event: "Hacking Begins!" },
    { time: "1:00 PM", event: "Lunch Break" },
    { time: "6:00 PM", event: "Mid-evaluation & Dinner" },
    { time: "12:00 AM", event: "Midnight Snacks & Coffee" },
    { time: "8:00 AM", event: "Breakfast (Day 2)" },
    { time: "11:00 AM", event: "Code Freeze - Hacking Ends" },
    { time: "11:30 AM", event: "Project Submissions & Lunch" },
    { time: "1:00 PM", event: "Presentations Begin" },
    { time: "4:00 PM", event: "Winner Announcement & Prize Distribution" },
  ];

  const prizes = [
    {
      place: "1st Prize",
      amount: "₹20,000",
      color: "from-yellow-500 to-orange-500",
    },
    {
      place: "2nd Prize",
      amount: "₹12,000",
      color: "from-gray-400 to-gray-600",
    },
    {
      place: "3rd Prize",
      amount: "₹8,000",
      color: "from-orange-600 to-yellow-700",
    },
    {
      place: "Special Prizes",
      amount: "₹10,000+",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const rules = [
    "Team size must be between 2-4 members",
    "All team members must be college students",
    "Code must be written during the hackathon only",
    "Use of pre-built libraries and APIs is allowed",
    "Plagiarism will lead to immediate disqualification",
    "Final submission must include source code and presentation",
    "Decision of judges will be final and binding",
  ];

  const themes = [
    "Healthcare & Wellness",
    "Education Technology",
    "Sustainable Development",
    "Smart Cities",
    "FinTech Solutions",
    "Open Innovation",
  ];

  return (
    <div className="min-h-screen bg-gray-950 relative">
      <ParticlesBackground />
      <Navbar />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 animated-background"></div>

          {/* Background Glow Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            {/* Back Button */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Events</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 font-semibold mb-6">
                <Code className="w-5 h-5" />
                <span>By {eventDetails.organizer}</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-wider">
                <span className="gradient-text">{eventDetails.title}</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-gray-300 font-heading mb-8">
                {eventDetails.tagline}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  <span>{eventDetails.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>{eventDetails.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>GCOEJ</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#register"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section
          ref={ref}
          className="py-20 bg-gradient-to-b from-gray-950 to-gray-900"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12"
            >
              <span className="gradient-text">Event Highlights</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Problem Themes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {themes.map((theme, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Target className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-semibold">{theme}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Event Schedule</span>
            </h2>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-4 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-24 text-cyan-400 font-bold">
                    {item.time}
                  </div>
                  <div className="flex-1 text-gray-300">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="py-20 bg-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Prizes & Rewards</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prizes.map((prize, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${prize.color} rounded-full flex items-center justify-center`}
                  >
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    {prize.place}
                  </h3>
                  <p
                    className={`text-3xl font-black bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}
                  >
                    {prize.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Rules & Guidelines</span>
            </h2>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6">
              <span className="gradient-text">Register Your Team</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Team Size: {eventDetails.teamSize}
            </p>

            <p className="text-2xl text-cyan-400 font-bold mb-8">
              Registration Fee: {eventDetails.registrationFee}
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact for Registration
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>compact@gcoej.ac.in</span>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold text-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Register Now
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default HackNex;
