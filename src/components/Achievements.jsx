import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { 
  FaTrophy, FaMedal, FaAward, FaCode, FaHackerrank, 
  FaGithub, FaLinkedin, FaCertificate, FaStar, FaCalendarAlt, 
  FaMapMarkerAlt, FaGraduationCap, FaUsers
} from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiHackerearth } from 'react-icons/si';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

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

  const achievements = [
    {
      title: "HackMIT 2024",
      organization: "MIT",
      description: "Developed a real-time collaborative coding platform with WebSocket integration",
      date: "March 2024",
      location: "Boston, MA",
      type: "hackathon",
      achievement: "Top 10 Finalist",
      icon: FaTrophy,
      color: "from-primary-neon to-primary-electric"
    },
    {
      title: "Smart India Hackathon",
      organization: "Government of India",
      description: "Built an AI-powered agricultural solution for farmers",
      date: "February 2024",
      location: "Virtual",
      type: "hackathon",
      achievement: "Regional Winner",
      icon: FaMedal,
      color: "from-primary-electric to-primary-highlight"
    },
    {
      title: "CodeFest 2024",
      organization: "Coding Ninjas",
      description: "Created an educational platform for underprivileged students",
      date: "January 2024",
      location: "New Delhi, India",
      type: "hackathon",
      achievement: "Best Social Impact",
      icon: FaAward,
      color: "from-primary-highlight to-primary-neon"
    }
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "panchalraj",
      stats: { problems: "350+", ranking: "Top 15%", contests: "25+" },
      icon: SiLeetcode,
      color: "text-primary-neon",
      bgColor: "from-primary-neon/20 to-primary-electric/20",
      link: "https://leetcode.com"
    },
    {
      platform: "Codeforces",
      username: "panchalraj",
      stats: { rating: "1650", problems: "500+", contests: "30+" },
      icon: SiCodeforces,
      color: "text-primary-electric",
      bgColor: "from-primary-electric/20 to-primary-highlight/20",
      link: "https://codeforces.com"
    },
    {
      platform: "GitHub",
      username: "panchalraj",
      stats: { repos: "50+", contributions: "1000+", stars: "200+" },
      icon: FaGithub,
      color: "text-primary-highlight",
      bgColor: "from-primary-highlight/20 to-primary-neon/20",
      link: "https://github.com/RAJ5872"
    }
  ];

  const education = {
    college: "Vishwakarma Government Engineering College",
    degree: "Bachelor of Engineering - ICT",
    period: "2020 - 2024",
    description: "Final year student with strong academic foundation in Information and Communication Technology"
  };

  const certifications = [
    {
      name: "Java Programming Certificate",
      issuer: "Oracle",
      date: "2023",
      credential: "Verified",
      icon: FaCertificate,
      color: "from-primary-electric to-primary-highlight"
    },
    {
      name: "Web Development Fundamentals",
      issuer: "Meta",
      date: "2024",
      credential: "Verified",
      icon: FaCertificate,
      color: "from-primary-highlight to-primary-neon"
    }
  ];

  const skills = [
    {
      title: "Java Programming",
      description: "Strong foundation in core Java concepts and advanced data structures",
      icon: FaCode,
      color: "text-primary-neon"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Expertise in problem-solving with efficient algorithmic approaches",
      icon: FaCode,
      color: "text-primary-electric"
    },
    {
      title: "Team Collaboration",
      description: "Experience working in cross-functional teams and agile methodologies",
      icon: FaUsers,
      color: "text-primary-highlight"
    }
  ];

  return (
    <section id="achievements" className="py-12 md:py-20 bg-gradient-to-b from-dark-50 to-slate-900" ref={ref}>
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
              Achievements & Experience
            </span>
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 h-full bg-gradient-to-b from-primary-neon/20 via-transparent to-primary-electric/20"></div>
            
            <motion.div
              className="relative space-y-8 pl-8"
              variants={itemVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-6"
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-6 h-6 bg-gradient-to-r ${achievement.color} rounded-full neon-glow`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 w-6 h-6 bg-dark-50 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Timeline Content */}
                  <div className="flex-grow">
                    <motion.div
                      className="glass-card p-6 hover-glass"
                      whileHover={{ scale: 1.02, x: 10 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center text-white neon-glow`}>
                          <achievement.icon className="text-xl" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                          <p className="text-sm text-primary-electric mb-1">{achievement.organization}</p>
                          <p className="text-sm text-gray-300 mb-3">{achievement.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1">
                              <FaCalendarAlt className="text-primary-highlight" />
                              <span className="text-gray-400">{achievement.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <FaMapMarkerAlt className="text-primary-highlight" />
                              <span className="text-gray-400">{achievement.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <FaStar className="text-primary-highlight" />
                              <span className="text-primary-electric font-bold">{achievement.achievement}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 hover-glass"
                  style={{ transitionDelay: `${(3 + index) * 0.1}s` }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.8)"
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-r from-primary-neon/20 to-primary-electric/20 rounded-xl flex items-center justify-center text-white neon-glow`}>
                      <skill.icon className="text-3xl" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-2">{skill.title}</h4>
                      <p className="text-sm text-gray-300">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 hover-glass"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-electric to-primary-highlight rounded-xl flex items-center justify-center text-white neon-glow">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{education.college}</h3>
                  <p className="text-sm text-primary-electric mb-1">{education.degree}</p>
                  <p className="text-sm text-gray-300 mb-2">{education.period}</p>
                  <p className="text-sm text-gray-300">{education.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 hover-glass"
            >
              <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 bg-dark-100/10 rounded-xl border border-primary-neon/30 hover:border-primary-electric/50 transition-all duration-300"
                    style={{ transitionDelay: `${(4 + index) * 0.1}s` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white neon-glow`}>
                      <cert.icon className="text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-sm text-primary-electric mb-1">{cert.issuer}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-300">{cert.date}</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                          {cert.credential}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            className="mt-16"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Coding Profiles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {codingProfiles.map((profile, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 hover-glass"
                  style={{ transitionDelay: `${(5 + index) * 0.1}s` }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.8)"
                  }}
                >
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className={`bg-gradient-to-br ${profile.bgColor} backdrop-blur-lg rounded-2xl p-6 border border-primary-neon/30 hover:border-primary-electric/50 transition-all duration-300 h-full`}>
                      <div className={`text-3xl ${profile.color} mb-4 group-hover:scale-110 transition-transform`}>
                        <profile.icon className="text-4xl" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{profile.platform}</h4>
                      <p className="text-sm text-gray-400 mb-3">@{profile.username}</p>
                      <div className="space-y-2">
                        {Object.entries(profile.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-sm">
                            <span className="text-gray-400 capitalize">{key}:</span>
                            <span className="text-white font-semibold">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            className="mt-16 grid md:grid-cols-2 gap-8"
            variants={itemVariants}
          >
            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 hover-glass"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-electric to-primary-highlight rounded-xl flex items-center justify-center text-white neon-glow">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{education.college}</h3>
                  <p className="text-sm text-primary-electric mb-1">{education.degree}</p>
                  <p className="text-sm text-gray-300 mb-2">{education.period}</p>
                  <p className="text-sm text-gray-300">{education.description}</p>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-6 hover-glass"
            >
              <h3 className="text-xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 bg-dark-100/10 rounded-xl border border-primary-neon/30 hover:border-primary-electric/50 transition-all duration-300"
                    style={{ transitionDelay: `${(4 + index) * 0.1}s` }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-xl flex items-center justify-center text-white neon-glow`}>
                      <cert.icon className="text-xl" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-sm text-primary-electric mb-1">{cert.issuer}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-300">{cert.date}</span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs border border-green-500/30">
                          {cert.credential}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Achievements);
