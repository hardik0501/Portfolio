import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50"
      style={{ width: `${scrollProgress}%` }}
      initial={{ width: 0 }}
      animate={{ width: `${scrollProgress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgress;