import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { 
  SiReact, SiJavascript, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiGit, SiGithub,
  SiPython, SiBootstrap, SiRedux,
  SiTypescript, SiVite, SiDocker, SiPostman, SiFigma
} from 'react-icons/si';
import { FaCss3, FaJava } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08
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

  // All skills flattened for marquee display
  const allSkills = [
    { name: "React.js", icon: SiReact, color: "text-primary-cyan" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "TypeScript", icon: SiTypescript, color: "text-primary-blue" },
    { name: "Python", icon: SiPython, color: "text-primary-blue" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-primary-cyan" },
    { name: "REST APIs", icon: SiPostman, color: "text-orange-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-primary-cyan" },
    { name: "Docker", icon: SiDocker, color: "text-primary-blue" },
    { name: "Redux", icon: SiRedux, color: "text-primary-indigo" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-400" },
    { name: "CSS3", icon: FaCss3, color: "text-primary-blue" },
    { name: "Vite", icon: SiVite, color: "text-primary-indigo" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-primary-indigo" },
    { name: "Figma", icon: SiFigma, color: "text-pink-400" },
    { name: "Data Structures", icon: SiJavascript, color: "text-primary-indigo" },
    { name: "Algorithms", icon: SiTypescript, color: "text-primary-cyan" }
  ];

  // Create duplicate arrays for infinite scroll effect
  const skillsRow1 = [...allSkills, ...allSkills];
  const skillsRow2 = [...allSkills.slice(5), ...allSkills.slice(5)];
  const skillsRow3 = [...allSkills.slice(10), ...allSkills.slice(10)];

  return (
    <section id="skills" className="py-12 md:py-20 bg-gradient-to-b from-dark-900 to-dark-800 overflow-hidden" ref={ref}>
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
              SKILLS & TECH
            </span>
          </motion.h2>

          {/* Row 1 - Moving Left */}
          <div className="relative mb-4 md:mb-8">
            <div className="flex gap-2 md:gap-4 overflow-hidden">
              <motion.div
                className="flex gap-2 md:gap-4"
                style={{ willChange: 'transform' }}
                animate={{
                  x: [0, -40 * allSkills.length]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {skillsRow1.map((skill, index) => (
                  <motion.div
                    key={`row1-${index}`}
                    className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-primary-cyan/20 rounded-full hover:bg-white/10 hover:border-primary-cyan/40 transition-all duration-300 group"
                    style={{ willChange: 'transform' }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(34, 211, 238, 0.2)"
                    }}
                  >
                    <skill.icon className={`text-sm md:text-lg ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Row 2 - Moving Right */}
          <div className="relative mb-4 md:mb-8">
            <div className="flex gap-2 md:gap-4 overflow-hidden">
              <motion.div
                className="flex gap-2 md:gap-4"
                style={{ willChange: 'transform' }}
                animate={{
                  x: [-40 * skillsRow2.length / 2, 0]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {skillsRow2.map((skill, index) => (
                  <motion.div
                    key={`row2-${index}`}
                    className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-primary-blue/20 rounded-full hover:bg-white/10 hover:border-primary-blue/40 transition-all duration-300 group"
                    style={{ willChange: 'transform' }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)"
                    }}
                  >
                    <skill.icon className={`text-sm md:text-lg ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Row 3 - Moving Left */}
          <div className="relative mb-6 md:mb-12">
            <div className="flex gap-2 md:gap-4 overflow-hidden">
              <motion.div
                className="flex gap-2 md:gap-4"
                style={{ willChange: 'transform' }}
                animate={{
                  x: [0, -40 * skillsRow3.length]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                whileHover={{ animationPlayState: "paused" }}
              >
                {skillsRow3.map((skill, index) => (
                  <motion.div
                    key={`row3-${index}`}
                    className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 bg-white/5 backdrop-blur-sm border border-primary-indigo/20 rounded-full hover:bg-white/10 hover:border-primary-indigo/40 transition-all duration-300 group"
                    style={{ willChange: 'transform' }}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 0 15px rgba(99, 102, 241, 0.2)"
                    }}
                  >
                    <skill.icon className={`text-sm md:text-lg ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            className="mt-8 md:mt-12 text-center"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 rounded-full border border-primary-blue/30 backdrop-blur-sm">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm text-gray-300">Always Learning</span>
              </div>
              <div className="w-px h-3 md:h-4 bg-primary-blue/30"></div>
              <span className="text-xs md:text-sm text-primary-cyan">Modern Full-Stack Toolkit</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Skills);
