import { useState, useEffect, useMemo } from "react";

export default function Navbar() {
  const tabs = useMemo(() => [
    { name: "About", path: "about" },
    { name: "Experience", path: "experience" },
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
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 animate-fade-in-down">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleScrollToSection("home")}
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors hover-scale"
          >
            Dushimire Aine
          </button>

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            {tabs.map((tab, index) => {
              const isActive = activeSection === tab.path;
              return (
                <button
                  key={index}
                  onClick={() => handleScrollToSection(tab.path)}
                  className={`relative text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                    isActive 
                      ? "text-gray-900" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 animate-scale-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
