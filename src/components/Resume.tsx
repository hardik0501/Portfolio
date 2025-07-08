import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Star } from 'lucide-react';

const Resume: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // Create a mock download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // In a real app, this would be the actual resume URL
    link.download = 'Hardik_Gothwal_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Download my resume or view it online to learn more about my experience and qualifications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Preview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">My Resume</h3>
                  <p className="text-gray-400">Updated January 2025</p>
                </div>
              </div>

              {/* Resume mockup */}
              <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
                <div className="text-gray-800 space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="text-2xl font-bold text-gray-900">Hardik Gothwal</h4>
                    <p className="text-gray-600">Full Stack Developer | B.Tech CS Student</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-semibold text-gray-900">Experience</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>• MERN Stack Developer - Regex Software</p>
                        <p>• Frontend Developer - Learn & Build</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900">Skills</h5>
                      <div className="text-sm text-gray-600">
                        <p>Python, JavaScript, React, Node.js, AI/ML, DevOps</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900">Education</h5>
                      <div className="text-sm text-gray-600">
                        <p>B.Tech Computer Science - Poornima College</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye className="w-5 h-5" />
                  <span>Preview</span>
                </motion.button>
                
                <motion.button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Resume Highlights</h3>
              <div className="space-y-4">
                {[
                  { label: 'Years of Experience', value: '2+', icon: '💼' },
                  { label: 'Projects Completed', value: '12+', icon: '🚀' },
                  { label: 'Technologies Mastered', value: '20+', icon: '⚡' },
                  { label: 'Certifications', value: '6+', icon: '🏆' }
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-gray-300">{item.label}</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths</h3>
              <div className="space-y-3">
                {[
                  'Full-stack development expertise',
                  'AI/ML and GenAI experience',
                  'DevOps and cloud technologies',
                  'Strong problem-solving skills',
                  'Continuous learning mindset'
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 border border-purple-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Quick Note</h4>
              </div>
              <p className="text-gray-300 text-sm">
                My resume is regularly updated to reflect my latest projects, skills, and achievements. 
                The PDF version includes detailed project descriptions and technical accomplishments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;