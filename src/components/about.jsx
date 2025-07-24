import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutMe() {
  const [activeStack, setActiveStack] = useState(0);

  const Techstacks = [
    {
      title: "Frontend",
      color: "#61DAFB",
      stack: {
        icons: [
          "/react.png",
          "/htm.jpg",
          "/next.jpg",
          "/css.png",
          "/tailwind.svg",
        ],
        stackItems: ["React", "HTML5", "Next.js", "CSS3", "Tailwind CSS"],
      },
    },
    {
      title: "Backend",
      color: "#339933",
      stack: {
        icons: ["/nodejs.svg", "/php.svg", "/ex.png"],
        stackItems: ["NodeJs", "PHP", "Express"],
      },
    },
    {
      title: "Database",
      color: "#47A248",
      stack: {
        icons: ["/mongodb-icon-2.svg", "/postgre.png", "/mysql.svg"],
        stackItems: ["MongoDB", "PostgreSQL", "MySQL"],
      },
    },
    {
      title: "Design",
      color: "#F24E1E",
      stack: {
        icons: ["/figma-logo-512.webp", "/blender.webp"],
        stackItems: ["Figma", "Blender"],
      },
    },
    {
      title: "Other",
      color: "#3776AB",
      stack: {
        icons: ["/java.png", "/python.jpeg", "c.png", "c++.webp"],
        stackItems: ["Java", "Python", "C", "C++"],
      },
    },
  ];

  function handleDownload() {
    const url =
      "https://drive.google.com/drive/folders/1K_01CNapPNNnbEGBgJ_D_nlnlrLbR1aE?usp=sharing";
    window.open(url);
  }

  return (
    <div className="container mx-auto p-10 flex flex-col lg:flex-row items-center justify-between md:justify-center md:gap-[200px] relative">
      {/* CSS 3D Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Techstacks.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute w-16 h-16 rounded-lg"
            style={{
              backgroundColor: tech.color,
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              scale: activeStack === index ? [1, 1.2, 1] : [1, 0.8, 1],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <motion.div
          whileHover={{
            rotateY: 10,
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse delay-1000" />
          <img
            src="/aine.jpeg"
            alt="Dushimire Aine"
            className="relative w-28 lg:w-[350px] rounded-2xl border-2 border-indigo-500 shadow-2xl object-cover"
            style={{
              filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col text-center md:text-left gap-6 z-10"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I am a Professional Software Developer
        </motion.h2>

        <motion.p
          className="text-dark-muted text-md w-[300px] md:w-[450px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I design and develop services for customers, specializing in creating
          stylish, modern websites, web services, and online stores. My passion
          is to design digital user experiences.
        </motion.p>

        <motion.p
          className="text-dark-muted text-md w-[300px] md:w-[450px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          I design and develop services for customers specializing in creating
          stylish, modern websites, web services with cutting-edge technologies
          and modern design principles.
        </motion.p>

        <motion.div
          className="flex py-3 flex-col md:flex-row gap-5 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-white font-semibold rounded-xl bg-gradient-to-r from-dark-accent to-purple-600 hover:from-dark-accent-hover hover:to-purple-700 transition-all duration-300 glow-accent"
            style={{ transformStyle: "preserve-3d" }}
          >
            My Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-8 py-4 font-semibold rounded-xl glass border-2 border-dark-accent text-dark-accent hover:bg-dark-accent hover:text-white transition-all duration-300"
            style={{ transformStyle: "preserve-3d" }}
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.h2
          className="text-dark-text font-semibold text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Tech Stacks
        </motion.h2>

        <motion.div
          className="flex gap-2 justify-between md:justify-center px-2 md:w-full w-[310px] py-2 glass rounded-xl overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          {Techstacks.map((stack, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveStack(index)}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-4 text-sm font-semibold transition-all duration-300 rounded-lg ${
                activeStack === index
                  ? "bg-gradient-to-r from-dark-accent to-purple-600 text-white glow-accent"
                  : "text-dark-muted hover:text-dark-text hover:bg-dark-surface"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {stack.title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="glass p-6 rounded-xl card-hover"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          key={activeStack}
          whileHover={{ rotateY: 2, scale: 1.02 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex flex-wrap gap-6 justify-center">
            {Techstacks[activeStack].stack.icons.map((icon, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -10,
                  rotateY: 15,
                  rotateX: 10,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative">
                  <img
                    className="w-12 h-12 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                    src={icon}
                    alt={Techstacks[activeStack].stack.stackItems[i]}
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-300 blur-sm"
                    style={{ backgroundColor: Techstacks[activeStack].color }}
                  />
                </div>
                <p className="text-sm text-dark-muted group-hover:text-dark-text mt-2 transition-colors duration-300">
                  {Techstacks[activeStack].stack.stackItems[i]}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
