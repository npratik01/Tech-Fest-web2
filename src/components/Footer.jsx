import { motion } from "framer-motion";
import { Heart, ArrowUp, Linkedin, Instagram, Mail, Phone } from "lucide-react";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Tech Fest 2025 & Tagline */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Tech Fest 2025
            </h3>
            <p className="text-gray-300 text-base font-semibold italic leading-relaxed">
              Scale. Speed. Spectacle. <br />The New Pulse of GCOEJ.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-neon-blue flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">
                    Saksham Meshram
                  </span>
                  <span className="text-gray-500"> (Convenor)</span>
                  <br />
                  <a
                    href="tel:+919011437886"
                    className="hover:text-neon-blue transition-colors"
                  >
                    +91 9011437886
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-neon-blue flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">
                    Pratik Nikam
                  </span>
                  <span className="text-gray-500"> (Co-Convenor)</span>
                  <br />
                  <a
                    href="tel:+917499441450"
                    className="hover:text-neon-blue transition-colors"
                  >
                    +91 7499441450
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-neon-blue flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">
                    Kunal Ghorpade
                  </span>
                  <span className="text-gray-500"> (Co-Convenor)</span>
                  <br />
                  <a
                    href="tel:+918788066583"
                    className="hover:text-neon-blue transition-colors"
                  >
                    +91 8788066583
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-neon-blue flex-shrink-0" />
                <div>
                  <span className="text-gray-300 font-medium">
                    Vedant Meshram
                  </span>
                  <span className="text-gray-500"> (Co-Convenor)</span>
                  <br />
                  <a
                    href="tel:+919766285034"
                    className="hover:text-neon-blue transition-colors"
                  >
                    +91 9766285034
                  </a>
                </div>
              </li>
            </ul>
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

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/company/technical-council-gcoej/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-blue transition-colors text-sm flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/technical.council_gcoej?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-neon-pink transition-colors text-sm flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="mailto:technicalcouncil@gcoej.ac.in"
                  className="text-gray-400 hover:text-neon-purple transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col items-center gap-3">
          <p className="text-gray-400 text-sm text-center">
            All rights are reserved by @Technical Council
          </p>
          <p className="text-gray-400 text-sm text-center">
            Developed by{" "}
            <span className="text-neon-blue font-semibold">Techncial Council</span>
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
