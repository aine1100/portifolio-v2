import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const tabs = useMemo(() => [
    { name: "About", path: "about" },
    { name: "Work", path: "work" },
    { name: "Contact", path: "contact" },
  ], []);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections including home
    const homeSection = document.getElementById("home");
    if (homeSection) observer.observe(homeSection);
    
    tabs.forEach((tab) => {
      const element = document.getElementById(tab.path);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tabs]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => handleScrollToSection("home")}
            whileHover={{ scale: 1.02 }}
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Dushimire Aine
          </motion.button>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {tabs.map((tab, index) => {
              const isActive = activeSection === tab.path;
              return (
                <motion.button
                  key={index}
                  onClick={() => handleScrollToSection(tab.path)}
                  whileHover={{ y: -1 }}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="h-0.5 bg-gray-900 mt-1"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
