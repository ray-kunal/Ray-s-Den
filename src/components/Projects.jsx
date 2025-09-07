import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Palette, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      icon: Code,
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Design System",
      description:
        "A comprehensive design system with reusable components, built with React and Storybook. Includes documentation and accessibility guidelines.",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=800&q=80",
      technologies: ["React", "Storybook", "TypeScript", "Sass", "Figma"],
      icon: Palette,
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Real-time Chat App",
      description:
        "A modern chat application with real-time messaging, file sharing, and group conversations. Built with React and Socket.io.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Redis"],
      icon: Zap,
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
    <section id="projects" className="py-20 px-6 bg-slate-800/50">
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
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            creativity
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <div className="bg-slate-900/80 border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden group h-full rounded-xl shadow">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-slate-900/80 rounded-full flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
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
