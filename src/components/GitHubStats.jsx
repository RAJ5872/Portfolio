import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState, memo } from 'react';
import { FaGithub, FaCode, FaStar, FaEye, FaUsers } from 'react-icons/fa';

const GitHubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [counters, setCounters] = useState({
    repos: 0,
    stars: 0,
    contributions: 0,
    followers: 0
  });

  const targetCounts = {
    repos: 52,
    stars: 248,
    contributions: 1250,
    followers: 89
  };

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setCounters(targetCounts);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const Counter = ({ target, label, icon: Icon, color, delay }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        const timer = setTimeout(() => {
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            setCount(Math.floor(current));
          }, duration / steps);
          
          return () => clearInterval(interval);
        }, delay);
        
        return () => clearTimeout(timer);
      }
    }, [isInView, target, delay]);

    return (
      <motion.div
        variants={itemVariants}
        className="glass-card p-6 hover-glass text-center group"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px rgba(34, 211, 238, 0.8)"
        }}
      >
        <div className={`text-4xl ${color} mb-4 group-hover:scale-110 transition-transform`}>
          <Icon />
        </div>
        <div className="text-3xl font-bold text-white mb-2">
          {count.toLocaleString()}
        </div>
        <div className="text-sm text-gray-400">
          {label}
        </div>
      </motion.div>
    );
  };

  const contributionData = Array.from({ length: 52 }, (_, weekIndex) => 
    Array.from({ length: 7 }, (_, dayIndex) => {
      const level = Math.random() > 0.7 ? (Math.random() > 0.5 ? 2 : 3) : Math.random() > 0.3 ? 1 : 0;
      return { weekIndex, dayIndex, level };
    })
  ).flat();

  const getContributionColor = (level) => {
    const colors = [
      'bg-dark-100/10',
      'bg-primary-neon/20',
      'bg-primary-electric/40',
      'bg-primary-highlight/60'
    ];
    return colors[level] || colors[0];
  };

  return (
    <section id="github" className="py-12 md:py-20 bg-gradient-to-b from-slate-900 to-dark-50" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16"
            variants={itemVariants}
          >
            <span className="gradient-text">
              GitHub Statistics
            </span>
          </motion.h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-16">
            <Counter 
              target={counters.repos} 
              label="Repositories" 
              icon={FaCode} 
              color="text-primary-neon"
              delay={0}
            />
            <Counter 
              target={counters.stars} 
              label="Stars" 
              icon={FaStar} 
              color="text-primary-highlight"
              delay={200}
            />
            <Counter 
              target={counters.contributions} 
              label="Contributions" 
              icon={FaEye} 
              color="text-primary-electric"
              delay={400}
            />
            <Counter 
              target={counters.followers} 
              label="Followers" 
              icon={FaUsers} 
              color="text-cyan-400"
              delay={600}
            />
          </div>

          {/* Contribution Graph */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Contribution Activity</h3>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-dark-100/10 rounded"></div>
                  <span className="text-gray-400">No activity</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-neon/20 rounded"></div>
                  <span className="text-gray-400">Low</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-electric/40 rounded"></div>
                  <span className="text-gray-400">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-highlight/60 rounded"></div>
                  <span className="text-gray-400">High</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-52 gap-1 mb-4">
              {contributionData.map((day, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} border border-slate-800/50`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0
                  }}
                  transition={{ 
                    delay: index * 0.01,
                    duration: 0.3,
                    ease: [0.6, -0.05, 0.01, 0.99]
                  }}
                  whileHover={{ 
                    scale: 1.5,
                    boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)"
                  }}
                  title={`${day.level} contributions`}
                />
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                {targetCounts.contributions.toLocaleString()} contributions in the last year
              </p>
              <a
                href="https://github.com/RAJ5872"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-neon to-primary-electric text-white rounded-full font-semibold hover:shadow-glow-cyan transition-all duration-300 magnetic-button"
              >
                <FaGithub className="text-lg" />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(GitHubStats);
