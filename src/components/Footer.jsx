import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Tech Fest 2025
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Organized by GCOEJ's Technical Council. A platform for innovation,
              creativity, and technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Event Details
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📅 14th November 2025</li>
              <li>🕓 9:00 AM onwards</li>
              <li>📍 GCOEJ, Jalgaon</li>
              <li>🎓 Institute Level Event</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} GCOEJ Technical Council. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by
            Technical Council
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 z-50 group"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
