import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/about";
import Project from "./components/project";
import ExperienceTimeline from "./components/experiencetimeline";
import Contact from "./components/contact";

// Initialize scroll animations
const initScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  // Observe all elements with fade-in-on-scroll class
  document.querySelectorAll('.fade-in-on-scroll').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Modern Loading Component
const ModernLoader = () => (
  <div className="loading-screen-modern animate-fade-in">
    <div className="loader-container">
      <div className="modern-spinner" />
      <p className="loading-text animate-fade-in-up animate-stagger-3">
        Crafting Experience...
      </p>
    </div>
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Initialize scroll animations after loading
      const observer = initScrollAnimations();
      return () => observer.disconnect();
    }
  }, [isLoading]);

  if (isLoading) {
    return <ModernLoader />;
  }

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        <section id="home" className="fade-in-on-scroll visible">
          <Hero />
        </section>

        <section id="about" className="fade-in-on-scroll">
          <AboutMe />
        </section>

        <section id="experience" className="fade-in-on-scroll">
          <ExperienceTimeline />
        </section>

        <section id="work" className="fade-in-on-scroll">
          <Project />
        </section>

        <section id="contact" className="fade-in-on-scroll">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
