import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ray
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Developer & UI/UX Enthusiast
            <br />
            Crafting beautiful and responsive web experiences
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 rounded-lg font-semibold shadow-lg hover:shadow-cyan-500/25"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-blue-500/30 text-gray-300 hover:bg-blue-500/10 px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 rounded-lg font-semibold bg-transparent backdrop-blur-sm"
            >
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Social Links */}
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection("projects")}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
}
