import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaDribbble, FaMailBulk, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(firestore, 'messages'), {
        ...formData,
        timestamp: new Date(),
      });
      toast.success('Message sent successfully! I will get back to you soon.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
      setFormData({ Name: '', Email: '', Message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      toast.error('Failed to send message. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    {
      icon: <FaLocationDot />,
      title: 'Address',
      info: 'Kigali, Rwanda',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <FaMailBulk />,
      title: 'Email',
      info: 'ainedushimire@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      info: '+250 798 380 290',
      color: 'from-green-500 to-emerald-500'
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/AineDushimire',
      color: 'hover:bg-blue-600',
      name: 'Facebook'
    },
    {
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/aine_250/',
      color: 'hover:bg-pink-600',
      name: 'Instagram'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/aine-dushiimire-700a372a6/',
      color: 'hover:bg-blue-700',
      name: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/aine1100',
      color: 'hover:bg-gray-700',
      name: 'GitHub'
    },
    {
      icon: <FaDribbble />,
      url: 'https://www.dribbble.com/aine_dushimire',
      color: 'hover:bg-pink-500',
      name: 'Dribbble'
    },
  ];

  return (
    <div className="flex flex-col mx-auto container justify-center items-center min-h-screen p-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div 
        className="flex flex-col gap-12 justify-center items-center bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 max-w-6xl w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can work together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 w-full">
          {/* Contact Info */}
          <motion.div 
            className="flex flex-col gap-6 lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 items-center rounded-xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer"
                >
                  <div className={`bg-gradient-to-r ${item.color} h-12 w-12 rounded-xl text-white flex items-center justify-center shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 font-medium">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Icons */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`bg-gray-700 ${item.color} text-white w-12 h-12 flex items-center justify-center rounded-xl shadow-lg transition-all duration-300 group`}
                    title={item.name}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-6 py-4 text-white placeholder:text-gray-400 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-6 py-4 text-white placeholder:text-gray-400 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <textarea
                  name="Message"
                  value={formData.Message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 text-white placeholder:text-gray-400 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="w-full py-4 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
      
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
