import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Palette, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Movie Site",
      description:
        "A movie streaming platform built with React. Features include dynamic content loading, search functionality, and trailer playback using TMDB API.",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&q=80",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "REST API",
        "Firebase",
      ],
      icon: Code,
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "E-Commerce Store",
      description:
        "A modern e-commerce website with cart functionality, product filtering, and Stripe payment integration. Built using Next.js and Redux.",
      image:
        "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80",
      technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "Stripe"],
      icon: Palette,
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Advanced Todo App",
      description:
        "A feature-rich todo application with drag-and-drop, categories, and local storage. Implements React Context for state management.",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Context API",
        "DND Kit",
      ],
      icon: Zap,
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Tic Tac Toe Game",
      description:
        "An interactive Tic Tac Toe game with multiplayer support, move history, and AI opponent using minimax algorithm.",
      image:
        "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=800&q=80",
      technologies: ["React", "JavaScript", "CSS3", "Socket.io", "AI Logic"],
      icon: Code,
      github: "#",
      demo: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/90">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <div className="relative group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden rounded-xl shadow-lg hover:shadow-cyan-500/10">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700/50 text-cyan-300 text-xs px-3 py-1 rounded-full border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
