import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a curiosity for innovation and a drive to create meaningful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg text-gray-300">
              <p>
                I'm a final-year B.Tech Computer Science student at Poornima College of Engineering
                with a passion for building innovative solutions that make a real impact. My journey
                in tech has been driven by curiosity and a constant desire to learn and grow.
              </p>
              <p>
                From developing AI-powered applications to creating full-stack web solutions,
                I love turning complex problems into elegant, user-friendly experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.span
                className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Curious
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Creative
              </motion.span>
              <motion.span
                className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Consistent
              </motion.span>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6">
              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                whileHover={{ scale: 1.02, borderColor: '#8B5CF6' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                    <p className="text-gray-400">Academic Background</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">B.Tech Computer Science</span>
                    <span className="text-purple-400">2022-2026</span>
                  </div>
                  <p className="text-sm text-gray-400">Poornima College of Engineering</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                whileHover={{ scale: 1.02, borderColor: '#06B6D4' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Experience</h3>
                    <p className="text-gray-400">Professional Journey</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">Learn & Build</span>
                      <span className="text-cyan-400 text-sm">Frontend Developer</span>
                    </div>
                    <p className="text-sm text-gray-400">Frontend development internship</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">Regex Software</span>
                      <span className="text-cyan-400 text-sm">MERN Stack Developer</span>
                    </div>
                    <p className="text-sm text-gray-400">Full-stack development internship</p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 font-medium">Linux World</span>
                      <span className="text-cyan-400 text-sm">Agentic Ai and Multiple Developer</span>
                    </div>
                    <p className="text-sm text-gray-400">The Creator internship</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                whileHover={{ scale: 1.02, borderColor: '#EC4899' }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Interests</h3>
                    <p className="text-gray-400">What I Love</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['AI/ML', 'Web Dev', 'DevOps', 'Open Source'].map((interest) => (
                    <span key={interest} className="text-sm text-gray-300 bg-gray-700/50 rounded-lg px-3 py-1 text-center">
                      {interest}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
