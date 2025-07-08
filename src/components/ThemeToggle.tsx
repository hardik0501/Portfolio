import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const themes = [
    { name: 'Dark', value: 'dark', colors: ['#8B5CF6', '#06B6D4'] },
    { name: 'Cyberpunk', value: 'cyberpunk', colors: ['#FF00FF', '#00FFFF'] },
    { name: 'Dusk', value: 'dusk', colors: ['#FF6B6B', '#4ECDC4'] },
    { name: 'Matrix', value: 'matrix', colors: ['#00FF00', '#008000'] }
  ];

  return (
    <motion.div
      className="fixed top-20 right-6 z-40"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gray-900/80 backdrop-blur-md rounded-xl p-4 border border-gray-700">
        <div className="flex items-center space-x-2 mb-3">
          <Palette className="w-5 h-5 text-purple-400" />
          <span className="text-white font-medium">Theme</span>
        </div>
        
        <div className="space-y-2">
          {themes.map((themeOption) => (
            <motion.button
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                theme === themeOption.value
                  ? 'bg-purple-500/20 border border-purple-500/50'
                  : 'hover:bg-gray-800/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex space-x-1">
                {themeOption.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="text-gray-300 text-sm">{themeOption.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ThemeToggle;