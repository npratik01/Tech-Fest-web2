import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  Laptop,
  CheckCircle2,
  Trophy,
  Cog,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const BlackBoxControl = () => {
  const rounds = [
    {
      number: 1,
      title: "Build and Design",
      description:
        "Design your control system architecture and plan your implementation strategy.",
    },
    {
      number: 2,
      title: "Build the Brain",
      description:
        "Develop the core intelligence and processing unit of your control system.",
    },
    {
      number: 3,
      title: "Build The Control Loop",
      description:
        "Implement and test the complete closed-loop control system.",
    },
  ];

  const highlights = [
    {
      icon: Cog,
      title: "Hands-on Engineering",
      description: "Design, build, and implement real control systems",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with 3-member teams to solve complex challenges",
    },
    {
      icon: Trophy,
      title: "Win ₹2,000",
      description: "Compete for exciting prizes and recognition",
    },
    {
      icon: Laptop,
      title: "Bring Your Setup",
      description: "Use your own laptops for maximum familiarity",
    },
  ];

  const rules = [
    "Team size is compulsory: 3 students per team",
    "Open to students of all engineering branches",
    "Each team must bring their own laptops",
    "Participation fee: ₹30 per team",
    "Teams must complete all three rounds",
    "Decisions of judges will be final",
    "Participants must follow all safety guidelines",
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
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 group"
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
              <Cog className="w-20 h-20 text-teal-400 animate-spin-slow" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              The Black Box Control System Race
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Instrumentation Engineering Student Association
              (INSAT-A)
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Department of Instrumentation Engineering
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-teal-400" />
                <span>January 18, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>10:30 AM</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-teal-400" />
                <span>Room No. 124, GCOEJ</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>3 Members per Team</span>
              </div>
              <div className="flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-teal-400" />
                <span>₹30 per Team</span>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-teal-500/20 rounded-xl p-6 hover:border-teal-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rounds Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/30 rounded-xl p-6 hover:border-teal-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {round.number}
                  </div>
                  <h3 className="text-2xl font-bold">{round.title}</h3>
                </div>
                <p className="text-gray-300">{round.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border-2 border-teal-500/50 rounded-2xl p-12 text-center"
          >
            <Trophy className="w-20 h-20 text-teal-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Prize Pool
            </h2>
            <p className="text-6xl font-bold text-white mb-4">₹2,000</p>
            <p className="text-gray-400 text-lg">
              Exciting prizes await the winning teams!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Rules & Regulations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-teal-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300 text-lg">{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Race?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us for an exciting journey into control systems engineering!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/KVA2LMF1wDAxJ1Gd9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all"
              >
                Register Now
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Laptop className="w-5 h-5" />
                <span>Requirement: Each team must bring their own laptops</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venue: Room No. 124, Government College of Engineering,
                  Jalgaon
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

export default BlackBoxControl;
