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
  Plane,
  Timer,
  Target,
  AlertTriangle,
  Gamepad2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "../components/ParticlesBackground";

const AeroSim = () => {
  const rounds = [
    {
      number: 1,
      title: "Qualifiers",
      description:
        "All participants race to complete as many laps as possible in 3 minutes. Top 15 advance to finals.",
    },
    {
      number: 2,
      title: "Finals",
      description:
        "A single-lap time trial where the fastest lap determines the champion. Only for top 15 qualifiers.",
    },
  ];

  const highlights = [
    {
      icon: Plane,
      title: "Realistic Simulation",
      description: "Experience drone racing without crash risks",
    },
    {
      icon: Timer,
      title: "Time-Based Challenge",
      description: "3 minutes to complete maximum laps",
    },
    {
      icon: Trophy,
      title: "Win ₹2,000",
      description: "Total prize pool for top 3 winners",
    },
    {
      icon: Gamepad2,
      title: "Standard Setup",
      description: "Same drone and controller for all participants",
    },
  ];

  const competitionFormat = [
    {
      icon: Timer,
      title: "Competition Format",
      points: [
        "3 minutes to complete as many laps as possible",
        "Standardized drone and track for all participants",
        "Top 15 participants qualify for Final Round",
        "Final Round: Single-lap time trial",
        "1 minute practice session before official run",
      ],
    },
    {
      icon: Gamepad2,
      title: "Equipment & Controls",
      points: [
        "All drones and controllers provided by organizers",
        "Personal controllers not allowed",
        "No modifications to the setup permitted",
        "Practice session before timed run",
        "Technical faults must be reported immediately",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Flight & Disqualification",
      points: [
        "3 ground touches = Disqualification",
        "No restart/pause without authorization",
        "Report technical issues immediately",
        "Follow all safety instructions",
        "Any fouls affect scoring and standings",
      ],
    },
    {
      icon: Target,
      title: "Scoring System",
      points: [
        "Primary: Number of completed laps",
        "Tiebreaker: Total time taken",
        "Penalties for missed gates/crashes",
        "All fouls deducted from final score",
        "Fastest lap wins in finals",
      ],
    },
  ];

  const rules = [
    "Entry fee: ₹50 per participant",
    "If drone touches ground 3 times, participant is disqualified",
    "Top 15 participants from Round 1 qualify for Finals",
    "Final Stage is a single-lap time trial",
    "Must report 15 minutes before designated time slot",
    "Personal controllers not allowed - standard controllers provided",
    "Respect all organizers, volunteers, and participants",
    "Misbehavior or foul language leads to immediate disqualification",
    "Only registered participants allowed in competition area",
    "Decisions of judging panel are final and binding",
    "Event coordinators may modify rules if necessary",
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
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 group"
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
              <Plane className="w-20 h-20 text-purple-400 animate-bounce" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AeroSim 2025
            </h1>
            <p className="text-2xl text-gray-300 mb-4">
              Time-Based Drone Racing Simulation
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Organized by Team Third Axis (Drone Club)
            </p>

            {/* Event Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5 text-purple-400" />
                <span>14 November 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-pink-400" />
                <span>3 Minutes per Race</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>GCOEJ Campus</span>
              </div>
              <div className="flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-pink-400" />
                <span>Individual Participation</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full">
                <IndianRupee className="w-5 h-5 text-purple-400" />
                <span>₹50 per Participant</span>
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
              >
                <highlight.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About AeroSim
            </h2>
            <div className="text-gray-300 text-lg space-y-4">
              <p>
                AeroSim is a time-based drone racing simulation competition
                where each player races using the same drone setup in a
                simulator environment.
              </p>
              <p>
                Participants aim to complete as many laps as possible in 3
                minutes, with scoring based on laps completed and time taken.
              </p>
              <p className="text-purple-400 font-semibold">
                Experience realistic drone racing without the risk of crashes or
                damage!
              </p>
            </div>
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
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Competition Rounds
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {rounds.map((round, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-400 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
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

      {/* Competition Format & Rules */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Official Rules & Regulations
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {competitionFormat.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-10 h-10 text-purple-400" />
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
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
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/50 rounded-2xl p-12 text-center"
          >
            <Trophy className="w-20 h-20 text-purple-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prize Pool
            </h2>
            <p className="text-6xl font-bold text-white mb-8">₹2,000</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-500/20 to-purple-500/20 border border-yellow-500/30 rounded-xl p-6">
                <div className="text-5xl mb-2">🥇</div>
                <p className="text-2xl font-bold text-yellow-400 mb-2">
                  1st Prize
                </p>
                <p className="text-4xl font-bold text-white">₹1,000</p>
              </div>
              <div className="bg-gradient-to-br from-gray-500/20 to-purple-500/20 border border-gray-500/30 rounded-xl p-6">
                <div className="text-5xl mb-2">🥈</div>
                <p className="text-2xl font-bold text-gray-300 mb-2">
                  2nd Prize
                </p>
                <p className="text-4xl font-bold text-white">₹700</p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 rounded-xl p-6">
                <div className="text-5xl mb-2">🥉</div>
                <p className="text-2xl font-bold text-orange-400 mb-2">
                  3rd Prize
                </p>
                <p className="text-4xl font-bold text-white">₹300</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Rules Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Important Rules
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/20 rounded-xl p-8"
          >
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
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
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready to Fly?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join us for an adrenaline-pumping drone racing experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.a
                href="https://forms.gle/Dw1PvVpnZgBhE6eq9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Register Now
              </motion.a>
            </div>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <Timer className="w-5 h-5" />
                <span>Report 15 minutes before your time slot</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                <span>
                  Standard controllers provided - Personal controllers not
                  allowed
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

export default AeroSim;
