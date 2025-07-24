import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/about";
import Project from "./components/project";
import WorkWithMe from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";
import WorkExperience from "./components/experience";

// Modern Loading Component
const ModernLoader = () => (
  <motion.div
    className="loading-screen-modern"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="loader-container">
      <motion.div
        className="modern-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="loading-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Crafting Experience...
      </motion.p>
    </div>
  </motion.div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Enable dark mode by default
    document.documentElement.classList.add("dark");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="dark">
      <AnimatePresence>
        {isLoading ? (
          <ModernLoader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative"
          >
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-50" />
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/95 to-gray-800/90 z-10" />

            {/* Content */}
            <div className="relative z-20">
              <Navbar />

              <motion.section
                id="home"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Hero />
              </motion.section>

              <motion.section
                id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <AboutMe />
              </motion.section>

              <motion.section
                id="techstacks"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Project />
                <WorkExperience />
              </motion.section>

              <motion.section
                id="portfolio"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <WorkWithMe />
              </motion.section>

              <motion.section
                id="services"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Contact />
              </motion.section>

              <motion.section
                id="contacts"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Footer />
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
