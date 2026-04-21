import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-dark-900 via-[#10182a] to-dark-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-32 h-32 bg-primary-cyan rounded-full blur-3xl opacity-25 animate-float left-10 top-10"></div>
          <div className="absolute w-32 h-32 bg-primary-blue rounded-full blur-3xl opacity-25 animate-float right-10 bottom-10" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-24 h-24 bg-primary-indigo rounded-full blur-3xl opacity-25 animate-float left-1/2 top-1/2" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Loading content */}
        <div className="relative z-10 text-center">
          <motion.div
            className="w-16 h-16 mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border-4 border-primary-blue/30 border-t-primary-cyan rounded-full"></div>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary-blue via-primary-cyan to-primary-indigo bg-clip-text text-transparent animate-gradient">
              Panchal Raj
            </span>
          </motion.h1>

          <motion.div
            className="flex gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 bg-primary-blue rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary-cyan rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="w-2 h-2 bg-primary-indigo rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
            />
          </motion.div>

          <motion.p
            className="text-gray-400 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Building amazing portfolio...
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
