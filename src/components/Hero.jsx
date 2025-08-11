import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Hero() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/aine1100", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/aine-dushiimire-700a372a6/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/aine_250", label: "Twitter" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <img
            src="/aine.jpeg"
            alt="Dushimire Aine"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-100 shadow-lg"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Name and Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Dushimire Aine
            </h1>
            <p className="text-xl text-gray-600 font-medium">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            I&apos;m a passionate full stack developer based in Kigali, Rwanda. 
            I love creating digital experiences that are both beautiful and functional, 
            with a focus on clean code and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Get In Touch
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}