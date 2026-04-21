import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-dark-100/20 z-50 origin-left"
      style={{ scaleX }}
    >
      <div className="h-full bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-indigo"></div>
    </motion.div>
  );
};

export default ScrollProgress;
