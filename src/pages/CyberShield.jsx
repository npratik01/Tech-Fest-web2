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
  Shield,
  Mail,
  Key,
  Search,
  AlertTriangle,
  Award,
  Timer,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const CyberShield = () => {
  const rounds = [
    {
      number: 1,
      title: "Phishing Awareness Quiz",
      description:
        "A timed quiz with multiple-choice questions and image-based identification tasks. Identify real vs phishing emails and spot phishing indicators.",
      icon: Mail,
      details: [
        "Multiple-choice questions format",
        "Image-based email identification",
        "Identify phishing indicators",
        "Submit via online quiz platform",
        "Points awarded per correct answer",
      ],
    },
    {
      number: 2,
      title: "Cipher Run (Easy Cryptography)",
      description:
        "Decipher various ciphertexts including famous quotes, common words, or cybersecurity terms using straightforward ciphers like Base64.",
      icon: Key,
      details: [
        "Decode straightforward ciphers (Base64, etc.)",
        "Famous quotes & cybersecurity terms",
        "Decoded plaintext is the flag",
        "Flags are case-sensitive",
        "Submit exact plaintext required",
      ],
    },
    {
      number: 3,
      title: "OSINT Round (Open Source Intelligence)",
      description:
        "Use publicly available information from social media, public records, and search engines to find specific details about a fictional target.",
      icon: Search,
      details: [
        "Investigate using public information",
        "Social media & search engines allowed",
        "Follow initial clues (e.g., images)",
        "Find specific details (city, date, quote)",
        "Submit the discovered flag",
      ],
    },
  ];

  const highlights = [
    {
      icon: Shield,
      title: "Hands-on Cybersecurity",
      description:
        "Practical CTF challenges in phishing, cryptography, and OSINT",
    },
    {
      icon: Timer,
      title: "3-Hour Challenge",
      description: "Complete all rounds within the 3-hour time limit",
    },
    {
      icon: Trophy,
      title: "Win ₹1,000",
      description: "Prize pool for top-performing teams",
    },
    {
      icon: Users,
      title: "Team or Solo",
      description: "Participate individually or in teams of 2",
    },
  ];

  const generalRules = [
    {
      title: "Fair Play",
      description:
        "All participants must play fair. Any attempt to disrupt the CTF infrastructure, attack other teams/participants, or violate rules will result in immediate disqualification.",
    },
    {
      title: "Team Size",
      description:
        "Maximum team size is 2 participants. Individual participation is also allowed.",
    },
    {
      title: "Scoring",
      description:
        "Points are awarded for correct flag submissions or successful round completion. Highest total score wins.",
    },
    {
      title: "Time Limit",
      description:
        "Total CTF duration is 3 hours. All rounds must be completed within this time.",
    },
    {
      title: "Collaboration",
      description:
        "Collaboration within your team is encouraged. Sharing flags, answers, or direct methods with other teams is strictly prohibited.",
    },
    {
      title: "Internet Access",
      description:
        "Internet access is allowed for research. Use any online resources or tools (unless restricted). Use your own devices (laptops, phones) responsibly.",
    },
    {
      title: "Disputes",
      description:
        "All decisions made by CTF organizers are final. Report disputes or technical issues immediately to organizers.",
    },
  ];

  const entryFees = [
    {
      type: "Individual",
      fee: "₹25",
      icon: "👤",
    },
    {
      type: "Team of 2",
      fee: "₹50",
      icon: "👥",
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
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 group"
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
              <Shield className="w-20 h-20 text-indigo-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Cyber Shield
            </h1>
            <p className="text-2xl text-gray-300 mb-4 font-semibold">
              Capture The Flag (CTF) Cybersecurity Challenge
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Cyber Security Club
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <span>January 18, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>3 Hours Duration</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span>GCOE Jalgaon</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-purple-400" />
                <span>Individual or Team of 2</span>
              </div>
            </div>

            <div className="inline-block bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 px-6 py-3 rounded-lg">
              <p className="text-lg text-gray-300">
                <span className="font-bold text-indigo-400">
                  Good Luck & Have Fun!
                </span>{" "}
                🛡️
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-indigo-400 mb-4" />
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            CTF Rounds
          </motion.h2>

          <div className="space-y-8">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8 hover:border-indigo-400 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                      {round.number}
                    </div>
                    <round.icon className="w-12 h-12 text-indigo-400 mx-auto" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-3">{round.title}</h3>
                    <p className="text-gray-300 text-lg mb-4">
                      {round.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {round.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-400">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General Rules Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            General Rules
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {generalRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-indigo-500/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-indigo-400">
                      {rule.title}
                    </h3>
                    <p className="text-gray-300">{rule.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Fees & Prize Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Entry Fees */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Entry Fees
              </h2>
              <div className="space-y-4">
                {entryFees.map((fee, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/30 rounded-xl p-6 text-center"
                  >
                    <div className="text-5xl mb-3">{fee.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{fee.type}</h3>
                    <p className="text-4xl font-bold text-indigo-400">
                      {fee.fee}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prize Pool */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prize Pool
              </h2>
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/50 rounded-2xl p-12 text-center h-full flex flex-col justify-center">
                <Trophy className="w-24 h-24 text-indigo-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Total Prize Pool</h3>
                <p className="text-7xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text mb-4">
                  ₹1,000
                </p>
                <p className="text-gray-400 text-lg">
                  For top-performing teams
                </p>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Defend?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Test your cybersecurity skills in this thrilling CTF challenge.
              Identify phishing, decode ciphers, and use OSINT to win!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/NskPo4aaFMMP4pge7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Register Now
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Individual: ₹25 | Team of 2: ₹50</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Timer className="w-5 h-5" />
                <span>Duration: 3 Hours | Complete all rounds to win</span>
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

export default CyberShield;
