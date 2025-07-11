import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
            <Briefcase className="w-16 h-16 text-white" />
          </div>
          <motion.div
            className="absolute -top-4 -right-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Hardik Gothwal - Full Stack Developer
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          {[Code, Briefcase, Sparkles].map((Icon, index) => (
            <motion.div
              key={index}
              className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{
                delay: 2.5 + index * 0.2,
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Icon className="w-4 h-4 text-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
