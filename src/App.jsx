import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/about";
import Project from "./components/project";
import WorkWithMe from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="bg-bgImage bg-cover bg-center h-screen overflow-x-hidden">
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="techstacks">
            <Project />
          </section>
          <section id="portfolio">
            <WorkWithMe />
          </section>
          <section id="services">
            <Contact />
          </section>
          <section id="contacts">
            <Footer />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
