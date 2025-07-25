import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaX } from "react-icons/fa6";

export default function Navbar() {
  const tabs = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Techstacks", path: "techstacks" },
    { name: "Portfolio", path: "portfolio" },
    { name: "Services", path: "services" },
    { name: "Contacts", path: "contacts" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    tabs.forEach((tab) => {
      const element = document.getElementById(tab.path);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      tabs.forEach((tab) => {
        const element = document.getElementById(tab.path);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [tabs]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 w-full md:px-8 lg:px-16">
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <img
              src="/aine.jpeg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 animate-pulse" />
          </div>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Dushimire
          </h2>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {tabs.map((tab, index) => {
            const isActive = activeSection === tab.path;
            return (
              <motion.button
                key={index}
                onClick={() => handleScrollToSection(tab.path)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                  isActive
                    ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {tab.name}
                {!isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-indigo-400 hover:text-indigo-300 focus:outline-none p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass w-full shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center py-6 space-y-3">
              {tabs.map((tab, index) => {
                const isActive = activeSection === tab.path;
                return (
                  <motion.button
                    key={index}
                    onClick={() => handleScrollToSection(tab.path)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-md font-medium w-32 text-center py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/25"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {tab.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
