import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/about";
import Project from "./components/project";
import WorkWithMe from "./components/work";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
      <div className="bg-bgImage bg-cover bg-center h-screen overflow-x-hidden">
          <Navbar />
          <section id="home" className="">
              <Hero />
          </section>
          <section id="about" className="">
              <AboutMe />
          </section>
          <section id="techstacks" className="">
              <Project />
          </section>
          <section id="portfolio" className="">
              <WorkWithMe />
          </section>
          <section id="services" className="">
              <Contact />
          </section>
          <section id="contacts" className="">
              <Footer />
          </section>
      </div>
  );
}

export default App;