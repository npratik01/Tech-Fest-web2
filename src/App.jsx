import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import ScrollToTop from "./components/ScrollToTop";
// import AnimeBackground from "./components/AnimeBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import ScienceExhibition from "./components/ScienceExhibition";
import AboutUs from "./components/AboutUs";
import Patrons from "./components/Patrons";
import Footer from "./components/Footer";
import HackNex from "./pages/HackNex";
import BlackBoxControl from "./pages/BlackBoxControl";
import MechMindQuest from "./pages/MechMindQuest";
import RCCarRacing from "./pages/RCCarRacing";
import Evolve from "./pages/Evolve";
import CyberShield from "./pages/CyberShield";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      <ParticlesBackground />
      {/* <AnimeBackground /> */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Events />
        {/* <ScienceExhibition /> */}
        <AboutUs />
        <Patrons />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events/hacknex" element={<HackNex />} />
        <Route path="/events/blackbox-control" element={<BlackBoxControl />} />
        <Route path="/events/mech-mind-quest" element={<MechMindQuest />} />
        <Route path="/events/rc-car-racing" element={<RCCarRacing />} />
        <Route path="/events/evolve" element={<Evolve />} />
        <Route path="/events/cyber-shield" element={<CyberShield />} />
      </Routes>
    </>
  );
}

export default App;
