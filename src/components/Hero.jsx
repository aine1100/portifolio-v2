import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaVuejs,
  FaAngular,
  FaAws,
} from "react-icons/fa";

export default function Hero() {
  const content = [
    { title: "2 Years", desc: "Experience" },
    { title: "50+", desc: "Projects Completed" },
    { title: "100+", desc: "Happy Clients" },
  ];

  const techIcons = [
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { icon: FaFigma, color: "#F24E1E", name: "Figma" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaCss3Alt, color: "#1572B6", name: "CSS3" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaPython, color: "#3776AB", name: "Python" },
    { icon: FaGitAlt, color: "#F05032", name: "Git" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-20 md:py-28 overflow-hidden">
      
      {/* Floating Tech Icons - 2D with CSS 3D transforms */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${15 + (index % 4) * 20}%`,
                top: `${25 + Math.floor(index / 4) * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                rotateY: [0, 180, 360],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.2,
                rotateZ: 360,
                transition: { duration: 0.5 }
              }}
            >
              <div className="relative transform-gpu">
                <div 
                  className="absolute inset-0 rounded-lg blur-sm opacity-50"
                  style={{ backgroundColor: tech.color }}
                />
                <IconComponent 
                  size={28} 
                  className="relative opacity-40 hover:opacity-80 transition-all duration-300 drop-shadow-lg"
                  style={{ color: tech.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start gap-8 text-center md:text-left z-10 max-w-lg"
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, I'm <br />
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Dushimire Aine</span>
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-base md:text-lg max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm a FullStack Developer based in Kigali, Rwanda. I craft immersive and
          beautiful web applications with carefully coded, user-centric designs to
          deliver exceptional user experiences.
        </motion.p>
        
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-indigo-500/25"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Say Hello!
        </motion.button>
        
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 w-32 px-4 py-4 rounded-xl text-center hover:bg-gray-700/50 transition-all duration-300"
              whileHover={{ 
                y: -5,
                rotateY: 5,
                scale: 1.02
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="text-white text-lg font-semibold">
                {item.title}
              </span>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image with CSS 3D Effect */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 lg:mt-0 z-10 relative"
      >
        <motion.div
          className="relative"
          whileHover={{ 
            rotateY: 15,
            rotateX: 5,
            scale: 1.05
          }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: [0, 5, -5, 0],
          }}
          // @ts-ignore
          transition={{
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse delay-1000" />
          <img
            src="/aine.jpeg"
            alt="Dushimire Aine"
            className="relative w-40 md:w-64 lg:w-80 rounded-full shadow-2xl border-4 border-indigo-500 object-cover animate-pulse"
            style={{
              filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}