import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCodeBranch, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const highlights = [
    {
      title: 'Production Mindset',
      description: 'Builds maintainable features with clean architecture and reusable UI.',
      icon: FaCodeBranch
    },
    {
      title: 'Fast Execution',
      description: 'Ships end-to-end features quickly, from APIs to polished frontend.',
      icon: FaRocket
    },
    {
      title: 'Problem Solving',
      description: 'Strong DSA and debugging approach for complex technical challenges.',
      icon: FaBrain
    },
    {
      title: 'Collaboration',
      description: 'Works effectively in hackathon and team environments.',
      icon: FaUsers
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800" ref={ref}>
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
              About Me
            </span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <motion.div variants={itemVariants}>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-primary-cyan/20 rounded-2xl blur-2xl opacity-60"></div>
                <div className="relative glass-card p-8 h-full border border-primary-blue/20">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Final Year ICT Student
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    <span className="text-primary-cyan font-semibold">Vishwakarma Government Engineering College</span> | 
                    Information and Communication Technology
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Passionate full stack developer focused on building modern, high-performance web products.
                    I enjoy designing clean user experiences, building scalable backend systems, and delivering practical solutions in fast-paced environments.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-primary-blue/15 text-primary-blue rounded-full text-sm border border-primary-blue/30">
                      Quick Learner
                    </span>
                    <span className="px-4 py-2 bg-primary-cyan/15 text-primary-cyan rounded-full text-sm border border-primary-cyan/30">
                      Problem Solver
                    </span>
                    <span className="px-4 py-2 bg-primary-indigo/15 text-primary-indigo rounded-full text-sm border border-primary-indigo/30">
                      Team Player
                    </span>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                      Continuous Learning
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 h-full border border-primary-cyan/20">
                <h3 className="text-2xl font-bold text-white mb-6">What I Bring</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="rounded-xl border border-primary-blue/20 bg-dark-800/35 p-4 hover:border-primary-cyan/50 transition-all duration-300"
                      whileHover={{ y: -4, boxShadow: '0 0 24px rgba(34, 211, 238, 0.15)' }}
                      transition={{ duration: 0.25 }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      style={{ transitionDelay: `${index * 0.08}s` }}
                    >
                      <item.icon className="text-primary-cyan text-xl mb-3" />
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
