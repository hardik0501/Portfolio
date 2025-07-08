import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Prompt_ai',
      description: 'AI-powered prompt generation tool for enhanced creativity and productivity.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'React', 'Python', 'OpenAI'],
      category: 'AI',
      github: 'https://github.com/hardik0501/prompt_ai',
      demo: 'https://prompt-ai-demo.vercel.app'
    },
    {
      title: 'AIFF',
      description: 'Advanced Image Format Framework for optimized image processing.',
      image: 'https://images.pexels.com/photos/7715995/pexels-photo-7715995.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'OpenCV', 'AI', 'Image Processing'],
      category: 'AI',
      github: 'https://github.com/hardik0501/aiff',
      demo: 'https://aiff-demo.vercel.app'
    },
    {
      title: 'Student Management',
      description: 'Comprehensive student management system with grade tracking and analytics.',
      image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Full Stack',
      github: 'https://github.com/hardik0501/student_management',
      demo: 'https://student-mgmt-demo.vercel.app'
    },
    {
      title: 'Medimate',
      description: 'Healthcare application for medical appointment scheduling and management.',
      image: 'https://images.pexels.com/photos/5999936/pexels-photo-5999936.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Flutter', 'Health'],
      category: 'Health',
      github: 'https://github.com/hardik0501/medimate',
      demo: 'https://medimate-demo.vercel.app'
    },
    {
      title: 'Gemstack',
      description: 'Modern web development stack with integrated AI capabilities.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'TypeScript', 'AI', 'Full Stack'],
      category: 'Web',
      github: 'https://github.com/hardik0501/gemstack',
      demo: 'https://gemstack-demo.vercel.app'
    },
    {
      title: 'IP Location Tracker',
      description: 'Real-time IP geolocation tracking with interactive maps.',
      image: 'https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'Maps API', 'Geolocation'],
      category: 'Web',
      github: 'https://github.com/hardik0501/ip_location_tracker',
      demo: 'https://ip-tracker-demo.vercel.app'
    },
    {
      title: 'Path2College',
      description: 'Educational platform for college admission guidance and career counseling.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'Education', 'MongoDB'],
      category: 'Web',
      github: 'https://github.com/hardik0501/path2college',
      demo: 'https://path2college-demo.vercel.app'
    },
    {
      title: 'House Price Predictor',
      description: 'Machine learning model for accurate house price predictions.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'ML', 'Scikit-learn', 'Data Science'],
      category: 'ML',
      github: 'https://github.com/hardik0501/house_predict',
      demo: 'https://house-predict-demo.vercel.app'
    },
    {
      title: 'Stock Market Analysis',
      description: 'Advanced stock market analysis tool with predictive algorithms.',
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Data Analysis', 'Finance', 'ML'],
      category: 'ML',
      github: 'https://github.com/hardik0501/stock_market_analysis',
      demo: 'https://stock-analysis-demo.vercel.app'
    },
    {
      title: 'Vocal Vibe',
      description: 'Voice-based social platform with speech recognition and synthesis.',
      image: 'https://images.pexels.com/photos/3945662/pexels-photo-3945662.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Web Speech API', 'Audio Processing'],
      category: 'AI',
      github: 'https://github.com/hardik0501/vocal_vibe',
      demo: 'https://vocal-vibe-demo.vercel.app'
    },
    {
      title: 'Linux AI',
      description: 'AI-powered Linux system management and automation tools.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Python', 'Linux', 'AI', 'DevOps'],
      category: 'DevOps',
      github: 'https://github.com/hardik0501/linux_ai',
      demo: 'https://linux-ai-demo.vercel.app'
    },
    {
      title: 'Health Tracker',
      description: 'Comprehensive health tracking application with data visualization.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Health', 'Charts'],
      category: 'Health',
      github: 'https://github.com/hardik0501/tracking_health',
      demo: 'https://health-tracker-demo.vercel.app'
    }
  ];

  const filters = ['All', 'AI', 'Web', 'Full Stack', 'ML', 'Health', 'DevOps'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work spanning AI, web development, and innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span className="font-medium">{filter}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              layout
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;