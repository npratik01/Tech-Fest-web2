import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  IndianRupee,
  CheckCircle2,
  Trophy,
  Car,
  Zap,
  Timer,
  Flag,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const RCCarRacing = () => {
  const highlights = [
    {
      icon: Car,
      title: "RC Cars Provided",
      description:
        "Built and designed by Team Asterix using motors, batteries, wheels, and controllers",
    },
    {
      icon: Zap,
      title: "Thrilling Track",
      description:
        "Navigate through turns, barriers, and challenging obstacles",
    },
    {
      icon: Timer,
      title: "Fastest Lap Wins",
      description: "Race against time - the fastest lap time takes victory",
    },
    {
      icon: Trophy,
      title: "Win ₹1,500",
      description: "₹1,000 for winner and ₹500 for runner-up",
    },
  ];

  const judgingCriteria = [
    {
      title: "Completion Time",
      description: "How fast you complete the track - speed is key!",
      icon: Timer,
    },
    {
      title: "Control & Handling",
      description: "Demonstrate precision driving and excellent RC car control",
      icon: Car,
    },
    {
      title: "Penalties for Obstacles",
      description: "Avoid hitting barriers - each collision adds penalty time",
      icon: Flag,
    },
  ];

  const rules = [
    "Open to all years: 1st, 2nd, 3rd, and 4th year students",
    "Each participant gets a fixed time slot to complete the race",
    "RC cars are provided by the organizing team",
    "Navigate through track filled with turns, barriers, and challenges",
    "Fastest lap time determines the winner",
    "Penalties will be added for hitting obstacles",
    "Entry fee: ₹19 per participant",
    "Decisions of judges will be final",
  ];

  const prizes = [
    {
      position: "Winner",
      amount: "₹1,000",
      icon: "🥇",
    },
    {
      position: "Runner-Up",
      amount: "₹500",
      icon: "🥈",
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
              <Car className="w-20 h-20 text-cyan-400 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ASTERIX'S ROVER CHALLENGE
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Experience the Thrill of Speed and Engineering!
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Team Asterix
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>14 November 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>GCOE Jalgaon</span>
              </div>
              <div className="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-cyan-400" />
                <span>Individual Participation</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-blue-400" />
                <span>₹19 Entry Fee</span>
              </div>
            </div>

            <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-6 py-3 rounded-lg">
              <p className="text-lg text-gray-300">
                <span className="font-bold text-cyan-400">Event Type:</span>{" "}
                Racing & Technical Challenge
              </p>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold mb-4">RC Cars Provided</h3>
              <p className="text-gray-300">
                RC cars are built and designed by the organizing team using
                motors, batteries, wheels, and controllers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold mb-4">Navigate the Track</h3>
              <p className="text-gray-300">
                Participants will drive the RC car through the track filled with
                turns, barriers, and challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-8 text-center"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold mb-4">Fastest Lap Wins</h3>
              <p className="text-gray-300">
                The fastest lap time wins the race! Demonstrate speed, control,
                and precision driving.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Judging Criteria
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {judgingCriteria.map((criteria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-400 transition-all"
              >
                <criteria.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{criteria.title}</h3>
                <p className="text-gray-300">{criteria.description}</p>
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
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Prize Pool - ₹1,500
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-2 border-cyan-500/50 rounded-2xl p-8 text-center hover:border-cyan-400 transition-all"
              >
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{prize.position}</h3>
                <p className="text-5xl font-bold text-cyan-400 mb-2">
                  {prize.amount}
                </p>
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
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            Competition Rules
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-cyan-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Race?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the thrill of speed and engineering. Show your driving
              skills and win exciting prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/4mYvPKSjC5dy3qGBA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Register Now - ₹19 Only
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Car className="w-5 h-5" />
                <span>
                  RC Cars provided by Team Asterix - Just bring your racing
                  spirit!
                </span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Venue: Government College of Engineering, Jalgaon</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RCCarRacing;
