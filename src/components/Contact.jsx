import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "your.email@example.com",
      link: "mailto:your.email@example.com",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      detail: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Replace Card with div */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Send Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-lg px-4 py-3 focus:outline-none transition-all duration-300"
                        required
                      />
                    </motion.div>
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-lg px-4 py-3 focus:outline-none transition-all duration-300"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-lg px-4 py-3 focus:outline-none transition-all duration-300"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 min-h-[120px] resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 text-lg rounded-lg font-semibold transition-all duration-300"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Get In Touch
              </h3>
              <p className="text-black mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-slate-900/80 border border-slate-700 rounded-lg hover:border-slate-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.detail}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}