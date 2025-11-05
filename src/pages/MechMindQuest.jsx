import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  IndianRupee,
  IdCard,
  CheckCircle2,
  Trophy,
  Brain,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const MechMindQuest = () => {
  const rounds = [
    {
      number: 1,
      title: "Aptitude Test",
      description:
        "Test your knowledge with multiple-choice questions from core engineering branches. Prove your theoretical foundation.",
      icon: Brain,
    },
    {
      number: 2,
      title: "Tool Identification",
      description:
        "Identify mechanical tools by name, function, and working principle. Show your practical expertise.",
      icon: Award,
    },
    {
      number: 3,
      title: "Idea Presentation",
      description:
        "Propose innovative solutions to real-world problems. Present your creative engineering ideas.",
      icon: Trophy,
    },
  ];

  const highlights = [
    {
      icon: Brain,
      title: "Test Your Knowledge",
      description:
        "Challenge yourself with MCQs from core engineering subjects",
    },
    {
      icon: Award,
      title: "Identify the Tools",
      description: "Showcase your practical knowledge of mechanical tools",
    },
    {
      icon: Trophy,
      title: "Present Your Ideas",
      description:
        "Share innovative solutions and creative engineering concepts",
    },
    {
      icon: User,
      title: "Individual Competition",
      description: "Compete solo and prove your technical prowess",
    },
  ];

  const rules = [
    "Open to all engineering branches and years",
    "Individual participation - no team required",
    "Participation fee: ₹30 per participant",
    "College ID is mandatory for entry",
    "Report 10 minutes before the event start time",
    "All three rounds are compulsory",
    "Decisions of judges will be final",
    "Certificates will be provided to all participants",
  ];

  const prizes = [
    {
      position: "Winners",
      reward: "Cash Prizes & Trophies",
      description: "Top performers receive exciting cash prizes and trophies",
    },
    {
      position: "All Participants",
      reward: "Certificates",
      description: "Every participant receives a certificate of participation",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticlesBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-8 group"
            >
              <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <Brain className="w-20 h-20 text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              MECH MIND QUEST 2025
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              "Test Your Knowledge, Identify the Tools, Present Your Ideas!"
            </p>
            <p className="text-xl text-gray-300 mb-4">
              Organized by MESA Club – Mechanical Department
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Under Mini Tech Fest 2025
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-yellow-400" />
                <span>14th November 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-orange-400" />
                <span>Time: TBA</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Room No. 16, Mechanical Dept.</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <User className="w-5 h-5 text-orange-400" />
                <span>Individual Participation</span>
              </div>
              <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-yellow-400" />
                <span>₹30 per Participant</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/20 rounded-xl p-6 hover:border-yellow-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Event Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A 3-round technical competition designed to test aptitude, tool
              knowledge, and creativity. Open to all engineering branches —
              think smart, act faster, and innovate!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rounds Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            Competition Rounds
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-xl p-6 hover:border-yellow-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {round.number}
                  </div>
                  <h3 className="text-2xl font-bold">{round.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{round.description}</p>
                <round.icon className="w-10 h-10 text-yellow-400 ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            Prizes & Certificates
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/50 rounded-2xl p-8 text-center"
              >
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{prize.position}</h3>
                <p className="text-3xl font-bold text-yellow-400 mb-4">
                  {prize.reward}
                </p>
                <p className="text-gray-300">{prize.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            Rules & Requirements
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Challenge Yourself?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us for an exciting test of your mechanical engineering
              knowledge and creativity!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all"
              >
                Register Now
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <IdCard className="w-5 h-5" />
                <span>
                  Requirement: College ID mandatory | Report 10 minutes before
                  start
                </span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venue: Room No. 16, Mechanical Department, GCOE Jalgaon
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MechMindQuest;
