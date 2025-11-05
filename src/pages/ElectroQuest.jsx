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
  Zap,
  Monitor,
  Wrench,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const ElectroQuest = () => {
  const rounds = [
    {
      number: 1,
      title: "Buzz-Off Battle",
      description:
        "Fast-paced quiz on electronics fundamentals. Test your knowledge and quick thinking in this exciting buzzer round.",
      icon: Zap,
      type: "Quiz Round",
    },
    {
      number: 2,
      title: "Simulation Challenge",
      description:
        "Circuit design and simulation on Proteus/Tinkercad. Demonstrate your virtual circuit-building expertise.",
      icon: Monitor,
      type: "Simulation Round",
    },
    {
      number: 3,
      title: "Circuit Relay",
      description:
        "Hands-on hardware building under time pressure. Build real circuits and showcase your practical skills.",
      icon: Wrench,
      type: "Hardware Round",
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Think",
      description: "Fast-paced quiz on electronics fundamentals and concepts",
    },
    {
      icon: Monitor,
      title: "Buzz",
      description: "Circuit simulation using Proteus/Tinkercad software",
    },
    {
      icon: Wrench,
      title: "Build",
      description: "Hands-on hardware circuit building under time pressure",
    },
    {
      icon: Trophy,
      title: "Win ₹1,000",
      description: "Compete for exciting cash prizes",
    },
  ];

  const rules = [
    "Open to all branches of the institute",
    "Individual or team of maximum 2 participants",
    "Participation fee: ₹40 per team (Team of 2 members)",
    "Total duration: Approximately 4 hours",
    "All three rounds are compulsory",
    "Round 1: Fast-paced quiz format (Buzz-Off Battle)",
    "Round 2: Use Proteus or Tinkercad for circuit simulation",
    "Round 3: Hardware building with time constraints",
    "Expected participants: 40 students",
    "Venues: Classroom 117, Room 118, and E&TC Lab (Room 122)",
    "Decisions of judges will be final",
  ];

  const prizes = [
    {
      title: "Total Prize Pool",
      amount: "₹1,000",
      description: "Cash prizes for top-performing teams",
      icon: "🏆",
    },
    {
      title: "Certificates",
      amount: "All Participants",
      description: "Certificate of participation for everyone",
      icon: "📜",
    },
  ];

  const venues = [
    { name: "Classroom 117", purpose: "Quiz & Registration" },
    { name: "Room 118", purpose: "Simulation Round" },
    { name: "E&TC Lab (Room 122)", purpose: "Hardware Building" },
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
              className="flex items-center gap-2 text-pink-400 hover:text-pink-300 mb-8 group"
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
              <Zap className="w-20 h-20 text-pink-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              ElectroQuest 2K25
            </h1>
            <p className="text-3xl text-gray-300 mb-4 font-bold">
              Think. Buzz. Build.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Electronics & Telecommunication Engineering (e-TESA
              Club)
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-pink-400" />
                <span>January 18, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>Approximately 4 Hours</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>GCOE Jalgaon</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Individual or Team of 2</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-pink-400" />
                <span>₹40 per Team</span>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl p-6 hover:border-pink-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-pink-400 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              About ElectroQuest
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A comprehensive three-round technical competition designed to test
              your aptitude, technical knowledge, and practical circuit skills.
              Encourages analytical thinking, teamwork, and innovation in
              electronics and telecommunication engineering.
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-6 hover:border-pink-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {round.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{round.title}</h3>
                    <p className="text-sm text-pink-400">{round.type}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{round.description}</p>
                <round.icon className="w-10 h-10 text-pink-400 ml-auto" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Event Venues
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl p-6 text-center"
              >
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{venue.name}</h3>
                <p className="text-gray-400">{venue.purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-2 border-pink-500/50 rounded-2xl p-8 text-center hover:border-pink-400 transition-all"
              >
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                <p className="text-4xl font-bold text-pink-400 mb-2">
                  {prize.amount}
                </p>
                <p className="text-gray-300">{prize.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Rules & Eligibility
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-pink-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Quest?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Think fast, buzz in, and build circuits! Join ElectroQuest 2K25
              for an electrifying experience across quiz, simulation, and
              hardware challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="#register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                Register Now - ₹40
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span>Individual or Team of 2 | Open to all branches</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Duration: ~4 hours | Expected: 40 participants</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venues: Classroom 117, Room 118, E&TC Lab (Room 122), GCOE
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

export default ElectroQuest;
