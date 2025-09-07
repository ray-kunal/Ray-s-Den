import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Educations from "../components/Educations";
import Contact from "../components/Contact";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div id="hero">
          <Hero scrollToSection={scrollToSection} />
        </div>

        <Projects />
        <Educations />
        <Contact />
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-sm font-bold"
          >
            ↑
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
