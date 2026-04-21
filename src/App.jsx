import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Loading from './components/Loading';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Apply theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'} bg-dark-900 text-white overflow-x-hidden`}>
        <ParticleBackground />
        <CustomCursor />
        <ScrollProgress />
        <BackToTop />
                
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            
            <main>
              <section id="home">
                <Hero />
              </section>
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="py-8 bg-dark-900 border-t border-primary-blue/20">
              <div className="container mx-auto px-6 text-center">
                <p className="text-gray-400 mb-2">
                  Built by Raj Panchal with ❤️
                </p>
                <p className="text-sm text-gray-500">
                  &copy; 2026
                </p>
              </div>
            </footer>
          </motion.div>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  );
}

export default App;
