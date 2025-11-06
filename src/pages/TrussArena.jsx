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
  Building2,
  Ruler,
  Weight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const TrussArena = () => {
  const rounds = [
    {
      number: 1,
      title: "Design Submission",
      description:
        "Teams submit a truss design sketch showcasing their engineering approach and structural planning.",
    },
    {
      number: 2,
      title: "Model Construction",
      description:
        "Teams build the truss model within the given time using provided materials and tools.",
    },
    {
      number: 3,
      title: "Load Testing",
      description:
        "Trusses are tested for maximum load capacity before failure to determine the winner.",
    },
  ];

  const highlights = [
    {
      icon: Building2,
      title: "Structural Engineering",
      description: "Design and build real truss structures from scratch",
    },
    {
      icon: Users,
      title: "Duo Teams",
      description: "Work with a partner to create the perfect design",
    },
    {
      icon: Trophy,
      title: "Win ₹3,000",
      description: "Compete for a total prize pool of ₹3,000",
    },
    {
      icon: Weight,
      title: "Load Testing",
      description: "Test your design's strength and stability",
    },
  ];

  const judgingCriteria = [
    {
      icon: Weight,
      title: "Load-Bearing Capacity",
      description: "Maximum weight the truss can support before failure",
    },
    {
      icon: Building2,
      title: "Stability",
      description: "Structural integrity and resistance to deformation",
    },
    {
      icon: Ruler,
      title: "Design Efficiency",
      description: "Optimal use of materials and innovative design approach",
    },
  ];

  const rules = [
    "Team size is compulsory: 2 students per team (duo)",
    "Open to students of all engineering branches",
    "Participation fee: ₹50 per team",
    "Total event duration: 4 to 4.5 hours",
    "Teams must complete all three rounds",
    "All construction must be done within the given time limit",
    "Materials and tools will be provided on-site",
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
              className="flex items-center gap-2 text-orange-400 hover:text-orange-300 mb-8 group"
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
              <Building2 className="w-20 h-20 text-orange-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Truss Arena
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              The Ultimate Engineering Challenge
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Civil Engineering Student Association (CESA)
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Department of Civil Engineering
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span>14 November 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-amber-400" />
                <span>4 - 4.5 Hours</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Room No. 225, GCOEJ</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-amber-400" />
                <span>2 Members per Team</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-orange-400" />
                <span>₹50 per Team</span>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-orange-400 mb-4" />
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
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

      {/* Judging Criteria Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/40 transition-all text-center"
              >
                <criteria.icon className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">{criteria.title}</h3>
                <p className="text-gray-400">{criteria.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/50 rounded-2xl p-12 text-center"
          >
            <Trophy className="w-20 h-20 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Prize Pool
            </h2>
            <p className="text-6xl font-bold text-white mb-8">₹3,000</p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-5xl mb-2">🥇</div>
                <p className="text-2xl font-bold text-yellow-400 mb-2">
                  1st Prize
                </p>
                <p className="text-4xl font-bold text-white">₹2,000</p>
              </div>
              <div className="bg-gradient-to-br from-gray-500/20 to-orange-500/20 border border-gray-500/30 rounded-xl p-6">
                <div className="text-5xl mb-2">🥈</div>
                <p className="text-2xl font-bold text-gray-300 mb-2">
                  2nd Prize
                </p>
                <p className="text-4xl font-bold text-white">₹1,000</p>
              </div>
            </div>
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
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Rules & Regulations
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-orange-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Ready to Build?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us for the ultimate structural engineering challenge!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/bPx74nRNnGVCToQUA"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Register Now
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Users className="w-5 h-5" />
                <span>Expected Participants: 25 Teams</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>
                  Venue: Room No. 225, Government College of Engineering,
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

export default TrussArena;
