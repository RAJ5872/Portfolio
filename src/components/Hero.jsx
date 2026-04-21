import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState, memo } from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import resume from '../assets/projects/Rajresumeupdatfinal.pdf';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Java + DSA Problem Solver',
    'Full Stack Engineer'
  ];
  const currentRole = roles[loopNum % roles.length];

  useEffect(() => {
    const handleTyping = () => {
      const isFullText = text === currentRole;
      const isDeleted = text === '';

      if (!isDeleting && !isFullText) {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      } else if (isDeleting && !isDeleted) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else if (!isDeleting && isFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && isDeleted) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const glowCards = [
    { icon: FaReact, delay: 0, color: 'text-primary-cyan', glowColor: 'shadow-cyan-500/50', rotation: 6 },
    { icon: FaNodeJs, delay: 0.3, color: 'text-primary-blue', glowColor: 'shadow-blue-500/50', rotation: -6 },
    { icon: SiMongodb, delay: 0.6, color: 'text-green-500', glowColor: 'shadow-green-500/50', rotation: 8 },
    { icon: FaCode, delay: 0.9, color: 'text-primary-indigo', glowColor: 'shadow-indigo-500/50', rotation: -4 }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-900 parallax-bg" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary-cyan rounded-full blur-3xl opacity-10 animate-float left-10 top-20"></div>
        <div className="absolute w-64 h-64 bg-primary-blue rounded-full blur-3xl opacity-10 animate-float right-20 bottom-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-48 h-48 bg-primary-indigo rounded-full blur-3xl opacity-10 animate-float left-1/2 top-1/3" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        className="container mx-auto z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6"
              variants={itemVariants}
            >
              <span className="text-white">
                Raj{" "}
                <span className="gradient-text animate-gradient">
                  Panchal
                </span>
              </span>
            </motion.h1>

            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-4 md:mb-6 h-6 md:h-8">
              <span className="text-primary-cyan">{text}</span>
              <span className="animate-pulse">|</span>
            </div>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Building scalable products with thoughtful UX, modern frontend architecture, and reliable backend systems.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 justify-center md:justify-start"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-cyan/30 transition-all duration-300 group magnetic-button border border-primary-cyan/35 text-sm md:text-base"
              >
                View Projects
                <FaArrowDown className="group-hover:animate-bounce" />
              </a>
              <a
                href={resume}
                download="Raj_Panchal_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-dark-800/40 backdrop-blur-sm text-primary-cyan rounded-xl border border-primary-blue/30 hover:bg-primary-blue/20 hover:text-white transition-all duration-300 group text-sm md:text-base"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 md:gap-6 justify-center md:justify-start"
              variants={itemVariants}
            >
              <a
                href="https://github.com/RAJ5872"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-400 hover:text-primary-cyan transition-colors duration-300 hover:scale-110 transform"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rajpanchalgecvgecictdte?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl text-gray-400 hover:text-primary-blue transition-colors duration-300 hover:scale-110 transform"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Premium Glow Card Stack */}
          <motion.div
            className="relative hidden md:block"
            variants={itemVariants}
          >
            {/* Radial glow background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative w-full h-72 md:h-96 flex items-center justify-center">
              {glowCards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-28 h-28 md:w-32 md:h-36 bg-white/5 backdrop-blur-sm rounded-2xl border border-cyan-400/20 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)]`}
                  style={{ 
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    left: `${80 + index * 50}px`, 
                    top: `${-30 + index * 30}px`,
                    zIndex: glowCards.length - index
                  }}
                  initial={{ 
                    y: 20, 
                    opacity: 0,
                    rotate: card.rotation || 0,
                    scale: 0.9
                  }}
                  animate={{ 
                    y: [0, -8, 0],
                    opacity: 1,
                    rotate: card.rotation || 0,
                    scale: 1
                  }}
                  transition={{ 
                    delay: card.delay + 0.5,
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                    y: {
                      repeat: Infinity,
                      duration: 5 + index * 0.5,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 0 40px ${card.color.includes('cyan') ? 'rgba(34, 211, 238, 0.5)' : card.color.includes('blue') ? 'rgba(59, 130, 246, 0.5)' : card.color.includes('green') ? 'rgba(34, 197, 94, 0.5)' : 'rgba(99, 102, 241, 0.5)'}`,
                    transition: { duration: 0.2 }
                  }}
                >
                  <card.icon className={`text-3xl md:text-4xl ${card.color}`} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary-cyan/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-cyan rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
