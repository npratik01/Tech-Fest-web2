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
    date: "13-14 November 2025",
    time: "11:30 AM onwards",
    venue: "Reading Hall, Government College of Engineering Jalgaon",
    organizer: "COMPACT",
    teamSize: "4 members (exactly)",
    registrationFee: "₹400 per team",
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
    { time: "Day 1 - 13th Nov", event: "", isHeader: true },
    { time: "9:00 AM - 9:30 AM", event: "Team Registration" },
    { time: "9:30 AM - 10:30 AM", event: "Inauguration & Welcome Address" },
    { time: "10:30 AM - 11:30 AM", event: "Idea Pitching Session" },
    { time: "11:30 AM", event: "Official 24-Hour Hackathon Begins" },
    { time: "1:30 PM - 2:30 PM", event: "Lunch Break" },
    { time: "5:00 PM", event: "Snacks & Tea" },
    { time: "8:00 PM - 9:00 PM", event: "Dinner" },
    { time: "12:00 Midnight", event: "Midnight Snacks & Energy Break" },
    { time: "Day 2 - 14th Nov", event: "", isHeader: true },
    { time: "3:00 AM", event: "Refreshing Tea Break" },
    { time: "8:00 AM - 9:00 AM", event: "Breakfast" },
    { time: "10:30 AM", event: "Final Coding Ends" },
    { time: "11:30 AM", event: "PPT Submission & Hackathon Ends" },
    { time: "11:30 AM - 12:30 PM", event: "Relaxation Break" },
    { time: "12:30 PM - 1:00 PM", event: "Lunch" },
    { time: "1:00 PM Onwards", event: "Final Presentations & Judging" },
    {
      time: "After Presentations",
      event: "Valedictory Ceremony & Prize Distribution",
    },
  ];

  const prizes = [
    {
      place: "1st Prize",
      amount: "Cash Prize",
      color: "from-yellow-500 to-orange-500",
    },
    {
      place: "2nd Prize",
      amount: "Cash Prize",
      color: "from-gray-400 to-gray-600",
    },
    {
      place: "3rd Prize",
      amount: "Cash Prize",
      color: "from-orange-600 to-yellow-700",
    },
    {
      place: "All Participants",
      amount: "Certificate",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const rules = [
    "Each team must have exactly 4 members (compulsory)",
    "Members may belong to different departments, but must be students of GCOEJ",
    "A participant can be part of only one team",
    "Each team must nominate one Team Leader for official communication",
    "Registration Fee: ₹400 per team (non-refundable)",
    "Registration Deadline: 7th November 2025, 11:59 PM",
    "All participants must sign the Code of Conduct Form before event starts",
    "Code must be written during the hackathon only",
    "Use of pre-built libraries and APIs is allowed",
    "Plagiarism will lead to immediate disqualification",
    "Decision of judges will be final and binding",
  ];

  const themes = [
    "AI-Powered Smart Campus Innovation",
    "Real-Time Smart Agriculture using AI & ML",
    "Sustainable Healthcare & Environmental Intelligence",
  ];

  const importantDates = [
    {
      date: "7th Nov 2025 (11:59 PM)",
      title: "Registration Deadline",
      description: "Register via official QR/link",
    },
    {
      date: "8th Nov 2025 (10:00 AM)",
      title: "Problem Statement Release",
      description:
        "Problem statements and PPT format shared with team leaders via email",
    },
    {
      date: "10th Nov 2025 (11:59 PM)",
      title: "PPT Submission Deadline",
      description: "Submit idea presentation (PPT)",
    },
    {
      date: "12th Nov 2025 (12:00 PM)",
      title: "Result Announcement (PPT Round)",
      description: "Shortlisted teams announced for final round",
    },
    {
      date: "13th Nov 2025",
      title: "Final Round (On-Campus)",
      description:
        "Offline registration at 8:30 AM, followed by inauguration and hackathon start",
    },
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
                  <span>Reading Hall, GCOEJ</span>
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
              <span className="gradient-text">Official Themes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <p className="text-center text-gray-400 mt-6">
              Problem statements will be based on these themes
            </p>
          </div>
        </section>

        {/* Important Dates Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Important Dates</span>
            </h2>

            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg font-bold text-center">
                        {item.date}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12">
              <span className="gradient-text">Hackathon Timeline</span>
            </h2>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`${
                    item.isHeader
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      : "bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-500/50"
                  } rounded-xl p-4 flex items-center gap-4 transition-all duration-300`}
                >
                  {item.isHeader ? (
                    <div className="w-full text-center font-bold text-lg">
                      {item.time}
                    </div>
                  ) : (
                    <>
                      <div className="flex-shrink-0 w-32 md:w-40 text-cyan-400 font-bold text-sm md:text-base">
                        {item.time}
                      </div>
                      <div className="flex-1 text-gray-300">{item.event}</div>
                    </>
                  )}
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
