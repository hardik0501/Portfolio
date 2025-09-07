import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Python & Flask Expert',
    'AI/GenAI Explorer',
    'Flutter Developer',
    'DevOps Practitioner',
    'Open Source Contributor',
    'Backend API Builder'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-gray-900/20" />
      
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
         <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center shadow-2xl">
            <img 
  src="https://drive.google.com/file/d/1zEOhoyX3AtJvkUtDngfM1vQQy1e9VY-1/view?usp=sharing" 
  alt="HG Profile" 
  className="h-28 w-22 rounded-full object-cover border-2 border-white"
/>
 </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Hi, I'm Hardik Gothwal
        </motion.h1>

        <motion.div
          className="h-16 flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.h2
            key={currentTitle}
            className="text-xl sm:text-3xl font-semibold text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTitle]}
          </motion.h2>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Final-year B.Tech CS student passionate about building innovative solutions
          with modern technologies and AI-powered applications.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Projects</span>
            <ChevronDown className="w-4 h-4" />
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/hardik0501"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-500 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/hardikgothwal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
