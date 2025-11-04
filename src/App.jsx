import { useState, useEffect } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
// import AnimeBackground from "./components/AnimeBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import ScienceExhibition from "./components/ScienceExhibition";
import AboutUs from "./components/AboutUs";
import Patrons from "./components/Patrons";
import Footer from "./components/Footer";

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

export default App;
