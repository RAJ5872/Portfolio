import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    try {
      const savedTheme = window.localStorage.getItem('theme');
      const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? true;

      if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      } else {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      }
    } catch (error) {
      // Fallback to dark theme if browser storage access is blocked.
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      try {
        window.localStorage.setItem('theme', 'dark');
      } catch (error) {
        // Ignore storage errors and keep UI interactive.
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        window.localStorage.setItem('theme', 'light');
      } catch (error) {
        // Ignore storage errors and keep UI interactive.
      }
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 glass-card group border border-primary-blue/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.div
        className="relative w-6 h-6 flex items-center justify-center"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-400 text-xl" />
        )}
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </motion.button>
  );
};

export default ThemeToggle;
