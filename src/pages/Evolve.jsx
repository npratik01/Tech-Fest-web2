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
  Sparkles,
  Zap,
  Award,
  Battery,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const Evolve = () => {
  const rounds = [
    {
      number: 1,
      title: "Logic Rescue",
      description:
        "Challenge your problem-solving abilities and logical thinking. Navigate through complex scenarios and rescue solutions with your analytical skills.",
      icon: Brain,
    },
    {
      number: 2,
      title: "Spark Simulate",
      description:
        "Dive into EV simulations and electrical concepts. Test your understanding of electric vehicle technology through practical simulations.",
      icon: Zap,
    },
    {
      number: 3,
      title: "Battle of Charge",
      description:
        "The ultimate showdown in battery management and charging systems. Demonstrate your expertise in EV power systems and energy optimization.",
      icon: Battery,
    },
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "EV Innovation",
      description:
        "Explore cutting-edge electric vehicle technology and concepts",
    },
    {
      icon: Users,
      title: "Team Flexibility",
      description: "Participate individually or in a team of 2 members",
    },
    {
      icon: Trophy,
      title: "Win ₹1,500",
      description: "₹1,000 for 1st place and ₹500 for 2nd place",
    },
    {
      icon: Award,
      title: "Certificates",
      description: "All participants receive certificates of participation",
    },
  ];

  const rules = [
    "Open to students of all engineering branches",
    "Team size: Individual or Group of 2 members",
    "Participation fee: ₹30 for Individual, ₹60 for Team",
    "All three rounds are compulsory",
    "Venue: Room No. 17 and 19, GCOE Jalgaon",
    "Teams must complete all rounds to be eligible for prizes",
    "Certificates will be provided to all participants",
    "Decisions of judges will be final",
  ];

  const prizes = [
    {
      position: "1st Place",
      amount: "₹1,000",
      icon: "🥇",
    },
    {
      position: "2nd Place",
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
              <Sparkles className="w-20 h-20 text-pink-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Evolve
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Electric Vehicle Innovation Challenge
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Team Trionix EV Club
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-pink-400" />
                <span>14 November 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-red-400" />
                <span>Room No. 17 & 19, GCOE Jalgaon</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-pink-400" />
                <span>Individual or Team of 2</span>
              </div>
              <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-red-400" />
                <span>₹30 Individual / ₹60 Team</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              About Evolve
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A three-round technical competition by Team Trionix (EV Club) that
              challenges participants to push the boundaries of electric vehicle
              innovation. Test your knowledge, simulation skills, and
              understanding of EV charging systems.
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/30 rounded-xl p-6 hover:border-pink-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {round.number}
                  </div>
                  <h3 className="text-2xl font-bold">{round.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{round.description}</p>
                <round.icon className="w-10 h-10 text-pink-400 ml-auto" />
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
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
          >
            Prize Pool - ₹1,500
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-pink-500/10 to-red-500/10 border-2 border-pink-500/50 rounded-2xl p-8 text-center hover:border-pink-400 transition-all"
              >
                <div className="text-6xl mb-4">{prize.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{prize.position}</h3>
                <p className="text-5xl font-bold text-pink-400 mb-2">
                  {prize.amount}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 text-center"
          >
            <Award className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Certificates for All</h3>
            <p className="text-gray-300">
              Every participant receives a certificate of participation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
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
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Evolve?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Team Trionix EV Club for an electrifying journey into the
              future of electric vehicles!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/tgR4owzvyPu1KUgj7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all"
              >
                Register Now - ₹30/₹60
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span>
                  Individual or Team of 2 | Open to all engineering branches
                </span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venue: Room No. 17 and 19, Government College of Engineering,
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

// Import Brain icon at the top
import { Brain } from "lucide-react";

export default Evolve;
