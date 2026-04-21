import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, memo } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaCode, FaTrophy,
  FaReact, FaNodeJs, FaDatabase, FaJava
} from 'react-icons/fa';
import fleetFlowImage from '../assets/projects/fleet-flow.png';
import ecommerceImage from '../assets/projects/ecommerce.png';
import eduSafeImage from '../assets/projects/edu-safe.png';
import careNavigatorImage from '../assets/projects/care-navigator.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState(null);

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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard",
      problem: "Small businesses needed an affordable online presence with inventory management",
      solution: "Developed a comprehensive solution with real-time updates and secure transactions",
      image: ecommerceImage,
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      github: "https://github.com/RAJ5872/E-commerce",
      live: "https://e-commercefrontend-woad.vercel.app/",
      isHackathon: false,
      featured: false,
      color: "from-primary-blue to-primary-cyan"
    },
    {
      title: "Fleet-Flow",
      description: "Real-time fleet management system for logistics companies with route optimization, vehicle tracking, and driver management dashboard",
      problem: "Logistics companies struggled with inefficient fleet management and route planning",
      solution: "Built an intelligent system with real-time tracking and AI-powered route optimization",
      image: fleetFlowImage,
      tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/RAJ5872/Fleet-Flow-",
      live: "https://fleet-flow-prr4.vercel.app/",
      isHackathon: false,
      featured: false,
      color: "from-primary-indigo to-primary-blue"
    },
    {
      title: "Edu-Safe",
      description: "Educational platform for students with interactive learning modules, progress tracking, and virtual classroom features",
      problem: "Students needed engaging online learning tools during remote education",
      solution: "Created an interactive platform with gamification and real-time collaboration",
      image: eduSafeImage,
      tech: ["React", "Node.js", "MongoDB", "WebRTC", "Socket.io"],
      github: "https://github.com/RAJ5872/Edu-Safe/tree/main/EduSafe",
      live: "https://sih-frontend-one-mu.vercel.app/",
      isHackathon: false,
      featured: false,
      color: "from-primary-cyan to-primary-blue"
    },
    {
      title: "Care Navigator",
      description: "Healthcare platform connecting patients with doctors, featuring appointment booking, telemedicine, and medical records management",
      problem: "Patients faced difficulty finding and booking appointments with healthcare providers",
      solution: "Developed a user-friendly platform with comprehensive healthcare services",
      image: careNavigatorImage,
      tech: ["React", "Node.js", "MongoDB", "Express", "Video API"],
      github: "https://github.com/RAJ5872/Care-Navigator",
      live: "https://care-navigator-client.vercel.app/",
      isHackathon: false,
      featured: false,
      color: "from-primary-blue to-primary-indigo"
    }
  ];

  const getTechIcon = (tech) => {
    const icons = {
      "React": FaReact,
      "Node.js": FaNodeJs,
      "MongoDB": FaDatabase,
      "Express": FaNodeJs,
      "JavaScript": FaCode,
      "HTML5": FaCode,
      "CSS3": FaCode,
      "Tailwind CSS": FaCode,
      "Socket.io": FaNodeJs,
      "WebRTC": FaCode,
      "Video API": FaCode,
      "Stripe API": FaCode,
      "Java": FaJava,
      "Python": FaCode,
      "Bootstrap": FaCode,
      "Redux": FaCode,
      "TypeScript": FaCode,
      "Vite": FaCode,
      "Docker": FaCode,
      "Postman": FaCode
    };
    return icons[tech] || FaCode;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            <span className="gradient-text">
              Featured Projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -6 }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary-indigo to-primary-blue rounded-full border border-primary-cyan/50 backdrop-blur-sm shadow-glow-cyan">
                      <FaTrophy className="text-xs text-primary-cyan" />
                      <span className="text-xs font-bold text-white">Featured • {project.hackathonName}</span>
                    </div>
                  </div>
                )}

                <div className="glass-card p-4 md:p-6 hover-glass h-full flex flex-col cursor-pointer rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-primary-cyan/45 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1">
                  <div className="flex flex-col gap-4 md:gap-6">
                    {/* Project Image */}
                    <div className="relative w-full h-[220px] overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Premium overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 flex items-end justify-end p-4">
                        <span className="text-xs md:text-sm font-semibold text-white/0 group-hover:text-white transition-colors duration-500">
                          View Project
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary-cyan transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 mb-3 md:mb-4">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => {
                          const Icon = getTechIcon(tech);
                          return (
                            <span
                              key={techIndex}
                              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-dark-800/45 backdrop-blur-sm rounded-lg border border-primary-blue/20 hover:border-primary-cyan/50 transition-all duration-300 group/item hover:bg-primary-blue/10"
                            >
                              <Icon className="text-xs md:text-sm text-primary-cyan group-hover/item:text-white" />
                              <span className="text-xs text-gray-300 group-hover/item:text-white">{tech}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Problem & Solution */}
                    <div className="space-y-2 text-xs md:text-sm border-t border-primary-blue/15 pt-3 md:pt-4">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-indigo rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <span className="text-primary-indigo font-semibold">Problem:</span>
                          <p className="text-gray-300">{project.problem}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-cyan rounded-full flex-shrink-0 mt-1"></div>
                        <div>
                          <span className="text-primary-cyan font-semibold">Solution:</span>
                          <p className="text-gray-300">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 md:gap-3 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-dark-800/30 backdrop-blur-sm text-primary-cyan rounded-lg border border-primary-blue/20 hover:bg-primary-cyan hover:text-white transition-all duration-300 group/item"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-xs md:text-sm" />
                        <span className="text-xs md:text-sm group-hover/item:text-white">Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 md:gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-lg border border-primary-blue/50 hover:from-primary-cyan hover:to-primary-indigo transition-all duration-300 group/item hover:shadow-lg hover:shadow-primary-blue/25"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-xs md:text-sm" />
                        <span className="text-xs md:text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="mt-12 text-center"
            variants={itemVariants}
          >
            <a
              href="https://github.com/RAJ5872"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-full font-semibold hover:shadow-glow-cyan transition-all duration-300 magnetic-button border border-primary-cyan/35"
            >
              <FaGithub className="text-base md:text-lg" />
              <span className="text-sm md:text-base">View More on GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="glass-card p-8 max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-800/90 backdrop-blur-xl border border-primary-blue/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary-cyan mb-2">Description</h4>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary-indigo mb-2">Problem</h4>
                <p className="text-gray-300">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary-blue mb-2">Solution</h4>
                <p className="text-gray-300">{selectedProject.solution}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary-cyan mb-2">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, techIndex) => {
                    const Icon = getTechIcon(tech);
                    return (
                      <span
                        key={techIndex}
                        className="flex items-center gap-2 px-3 py-1 bg-dark-800/30 backdrop-blur-sm rounded-lg border border-primary-blue/20"
                      >
                        <Icon className="text-sm text-primary-cyan" />
                        <span className="text-sm text-gray-300">{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark-800/30 backdrop-blur-sm text-primary-cyan rounded-lg border border-primary-blue/20 hover:bg-primary-cyan hover:text-white transition-all duration-300"
                >
                  <FaGithub className="text-sm" />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-lg border border-primary-blue/50 hover:from-primary-cyan hover:to-primary-indigo transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/25"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default memo(Projects);
