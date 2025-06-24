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

  // Tech icons for static centered grid
  const techIcons = [
    { icon: <FaReact size={32} className="text-cyan-400" /> },
    { icon: <FaNodeJs size={32} className="text-green-500" /> },
    { icon: <FaFigma size={32} className="text-pink-500" /> },
    { icon: <FaJs size={32} className="text-yellow-400" /> },
    { icon: <FaCss3Alt size={32} className="text-blue-500" /> },
    { icon: <FaHtml5 size={32} className="text-orange-500" /> },
    { icon: <FaPython size={32} className="text-blue-600" /> },
    { icon: <FaGitAlt size={32} className="text-red-500" /> },
    { icon: <FaDocker size={32} className="text-blue-400" /> },
    { icon: <FaVuejs size={32} className="text-green-400" /> },
    { icon: <FaAngular size={32} className="text-red-600" /> },
    { icon: <FaAws size={32} className="text-orange-600" /> },
  ];

  // Grid positions for centered icons (tight 3x4 grid)
  const gridPositions = [
    { left: "45%", top: "40%" },
    { left: "50%", top: "40%" },
    { left: "55%", top: "40%" },
    { left: "45%", top: "45%" },
    { left: "50%", top: "45%" },
    { left: "55%", top: "45%" },
    { left: "45%", top: "50%" },
    { left: "50%", top: "50%" },
    { left: "55%", top: "50%" },
    { left: "45%", top: "55%" },
    { left: "50%", top: "55%" },
    { left: "55%", top: "55%" },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-20 md:py-28 bg-gradient-to-b from-white to-purple-50 overflow-hidden">
      {/* Centered Tech Icons */}
      <div className="absolute inset-0 z-5 opacity-50 pointer-events-none">
        {techIcons.map((item, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: gridPositions[index].left,
              top: gridPositions[index].top,
              transform: "translate(-50%, -50%)",
            }}
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center md:items-start gap-8 text-center md:text-left z-10 max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Hello, I'm <br />
          <span className="text-[#A53DFF]">Dushimire Aine</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-md">
          I'm a FullStack Developer based in Kigali, Rwanda. I craft immersive and
          beautiful web applications with carefully coded, user-centric designs to
          deliver exceptional user experiences.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-40 h-12 text-white font-semibold rounded-lg bg-[#A53DFF] hover:bg-purple-700 transition-all duration-300 shadow-md"
        >
          Say Hello!
        </motion.button>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white w-32 px-4 py-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-gray-800 text-lg font-semibold">
                {item.title}
              </span>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 lg:mt-0 z-10"
      >
        <img
          src="/aine.jpeg"
          alt="Dushimire Aine"
          className="w-40 md:w-64 lg:w-80 rounded-full shadow-xl border-4 border-white object-cover"
        />
      </motion.div>
    </div>
  );
}