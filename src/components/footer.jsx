import { FaCopyright, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#132238] py-8 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-white text-opacity-85"
        >
          <FaCopyright />
          <p className="text-sm md:text-base">
            Dushimire Aine, All Rights Reserved
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com/aine1100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-opacity-75 hover:text-[#A53DFF] transition-colors duration-300"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/dushimireaine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-opacity-75 hover:text-[#A53DFF] transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/ainedushimire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-opacity-75 hover:text-[#A53DFF] transition-colors duration-300"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={24} />
          </a>
        </motion.div>

        {/* Made By Section */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white text-opacity-75 text-sm md:text-base"
        >
          Made by Dushimire Aine &copy; 2025
        </motion.p>
      </div>
    </footer>
  );
}