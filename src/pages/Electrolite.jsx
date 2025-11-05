import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  User,
  IndianRupee,
  CheckCircle2,
  Trophy,
  CircuitBoard,
  Zap,
  Award,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const Electrolite = () => {
  const rounds = [
    {
      number: 1,
      title: "The Blind Spark",
      description:
        "Test your electrical knowledge and quick thinking in this challenging first round. Demonstrate your understanding of electrical concepts.",
      icon: Zap,
      duration: "Round 1",
    },
    {
      number: 2,
      title: "Circuitrix",
      description:
        "Circuit name will be provided to the participants, and they will build the circuit on a breadboard within the time limit.",
      icon: CircuitBoard,
      duration: "30-40 minutes",
    },
    {
      number: 3,
      title: "Debug the Circuit",
      description:
        "Finalists will be given a faulty electrical circuit (ON ELECTRICAL MACHINE). Identify and fix the issues to win.",
      icon: Wrench,
      duration: "Final Round",
    },
  ];

  const highlights = [
    {
      icon: CircuitBoard,
      title: "Hands-on Experience",
      description:
        "Build real circuits on breadboards and debug electrical machines",
    },
    {
      icon: Zap,
      title: "3-Round Challenge",
      description: "Progress through Blind Spark, Circuitrix, and Debug rounds",
    },
    {
      icon: Trophy,
      title: "Win ₹3,000",
      description: "Compete for a prize pool of ₹3,000",
    },
    {
      icon: User,
      title: "Individual Competition",
      description: "Showcase your electrical expertise solo",
    },
  ];

  const rules = [
    "Open to all branches of the institute",
    "Individual participation only",
    "Participation fee: ₹30 per individual",
    "Total duration: Approximately 2 hours",
    "All three rounds are compulsory for finalists",
    "Round 2 (Circuitrix): 30-40 minutes time limit",
    "Round 3 conducted on actual electrical machines",
    "Expected participants: 40-60 students",
    "Venue: Lab No. 20, GCOEJ",
    "Decisions of judges will be final",
  ];

  const prizes = [
    {
      title: "Total Prize Pool",
      amount: "₹3,000",
      description: "Cash prizes for top performers",
      icon: "🏆",
    },
    {
      title: "Certificates",
      amount: "All Participants",
      description: "Certificate of participation for everyone",
      icon: "📜",
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
              className="flex items-center gap-2 text-green-400 hover:text-green-300 mb-8 group"
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
              <CircuitBoard className="w-20 h-20 text-green-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Circuitethive
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Electrical Engineering Challenge
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Electrical Engineering Students Association (EESA
              Club)
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-green-400" />
                <span>January 18, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-emerald-400" />
                <span>Approximately 2 Hours</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>Lab No. 20, GCOEJ</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                <User className="w-5 h-5 text-emerald-400" />
                <span>Individual Participation</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-green-400" />
                <span>₹30 per Individual</span>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-green-400 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              About Circuitethive
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A comprehensive three-round electrical engineering competition
              designed to test your theoretical knowledge, practical
              circuit-building skills, and debugging expertise. Open to all
              branches!
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 hover:border-green-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {round.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{round.title}</h3>
                    <p className="text-sm text-green-400">{round.duration}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{round.description}</p>
                <round.icon className="w-10 h-10 text-green-400 ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Prizes & Recognition
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/50 rounded-2xl p-8 text-center hover:border-green-400 transition-all"
              >
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                <p className="text-4xl font-bold text-green-400 mb-2">
                  {prize.amount}
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
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Rules & Eligibility
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Ready to Spark Your Skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Test your electrical engineering knowledge through three
              challenging rounds. Build circuits, debug machines, and win
              exciting prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/ow38mPA4DQhWmLuS7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
              >
                Register Now - ₹30
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                <span>Individual Participation | Open to all branches</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <span>
                  Duration: Approximately 2 hours | Expected: 40-60 participants
                </span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venue: Lab No. 20, Government College of Engineering, Jalgaon
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

export default Electrolite;
