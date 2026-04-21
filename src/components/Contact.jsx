import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, 
  FaPaperPlane, FaClock, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const form = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errors, setErrors] = useState({});

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.current.name.value.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.current.email.value.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.current.email.value)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!form.current.message.value.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setHasError(false);
    
    console.log('Attempting to send email...');
    console.log('Form data:', {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value
    });
    
    // Try to send email with simplified approach
    try {
      console.log('=== EMAILJS DEBUG INFO ===');
      console.log('Service ID:', 'service_7quages');
      console.log('Template ID:', 'template_5p94jl9');
      console.log('Public Key:', 'tijTJb_7pVIs6YGif');
      console.log('Form element:', form.current);
      console.log('Form data:', {
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value
      });
      
      const result = await emailjs.sendForm(
        'service_7quages',
        'template_5p94jl9',
        form.current,
        'tijTJb_7pVIs6YGif'
      );
      
      console.log('=== EMAILJS RESPONSE ===');
      console.log('Success:', result);
      console.log('Status:', result.status);
      console.log('Text:', result.text);
      
      // Check if it's actually a success
      if (result.text && result.text.includes('OK')) {
        alert("Message sent successfully!");
        form.current.reset();
        setErrors({});
        setIsSubmitted(true);
        setLoading(false);
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setHasError(false);
        }, 5000);
      } else {
        throw new Error(`EmailJS error: ${result.text}`);
      }
      
    } catch (error) {
      console.error('=== EMAILJS ERROR ===');
      console.error('Error:', error);
      console.error('Type:', typeof error);
      console.error('Message:', error.message);
      console.error('Text:', error.text);
      
      // Show specific error message
      if (error.message && error.message.includes('YOUR_PUBLIC_KEY')) {
        alert("Please replace YOUR_PUBLIC_KEY with your actual EmailJS public key");
      } else if (error.text) {
        alert(`EmailJS Error: ${error.text}`);
      } else {
        alert(`Failed to send: ${error.message || 'Unknown error'}`);
      }
      
      setHasError(true);
      setLoading(false);
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setHasError(false);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'panchalraj1902@gmail.com',
      href: 'mailto:panchalraj1902@gmail.com',
      color: 'text-primary-cyan'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 70433 53822',
      href: 'tel:+917043353822',
      color: 'text-primary-blue'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Ahmedabad, India',
      href: '#',
      color: 'text-primary-indigo'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/RAJ5872',
      label: 'GitHub',
      color: 'hover:text-primary-cyan'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/rajpanchalgecvgecictdte?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      label: 'LinkedIn',
      color: 'hover:text-primary-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900" ref={ref}>
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
              Get In Touch
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology. Feel free to reach out!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 glass-card hover-glass group bg-white/5 backdrop-blur-sm hover:bg-white/10"
                    whileHover={{ x: 10, scale: 1.02 }}
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r from-primary-cyan/20 to-primary-blue/20 rounded-xl flex items-center justify-center ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="text-xl" />
                    </div>
                    <div className="flex-grow">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-primary-cyan transition-colors">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-dark-800/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 border border-primary-cyan/20 ${social.color} transition-all duration-300`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)"
                      }}
                      variants={itemVariants}
                      style={{ transitionDelay: `${(3 + index) * 0.1}s` }}
                      title={social.label}
                    >
                      <social.icon className="text-xl" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="glass-card p-6 hover-glass bg-white/5 backdrop-blur-sm"
                variants={itemVariants}
                style={{ transitionDelay: '0.7s' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Work</span>
                </div>
                <p className="text-sm text-gray-300">
                  <FaClock className="inline mr-2 text-primary-indigo" />
                  Usually responds within 24 hours
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
            >
              <div className="glass-card p-8 hover-glass bg-dark-800/35 backdrop-blur-xl border border-primary-blue/25 shadow-[0_14px_42px_rgba(11,15,25,0.4)]">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheckCircle className="text-3xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : hasError ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaExclamationCircle className="text-3xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Failed to Send</h4>
                    <p className="text-gray-300">Please try again or contact me directly.</p>
                  </motion.div>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <motion.div
                      variants={itemVariants}
                      style={{ transitionDelay: '0.1s' }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border ${errors.name ? 'border-red-400/50' : 'border-primary-cyan/20'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:bg-white/10`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      style={{ transitionDelay: '0.2s' }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border ${errors.email ? 'border-red-400/50' : 'border-primary-blue/20'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:bg-white/10`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      style={{ transitionDelay: '0.3s' }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className={`w-full px-4 py-3 bg-white/5 backdrop-blur-md border ${errors.message ? 'border-red-400/50' : 'border-primary-cyan/20'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-cyan focus:ring-2 focus:ring-primary-cyan/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:bg-white/10 resize-none`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={itemVariants}
                      style={{ transitionDelay: '0.4s' }}
                    >
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-4 bg-gradient-to-r from-primary-blue to-primary-cyan text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-cyan/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed magnetic-button flex items-center justify-center gap-3"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-lg" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  </form>
                )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);
};

export default Contact;
