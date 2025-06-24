import { motion } from "framer-motion";

const Experience = () => {
  const timelineData = [
    {
      date: "August 2024 - Present",
      title: "Frontend Developer & Designer - Insta Health",
      description:
        "Collaborated with a cross-functional team to develop responsive web and mobile applications for a healthcare platform. Designed intuitive user interfaces and implemented performant frontend solutions to enhance patient engagement and streamline health service delivery.",
      techStack: ["React", "Tailwind CSS", "Figma", "TypeScript", "Vite"],
    },
    {
      date: "January 2025 - Present",
      title: "Product Designer - StoryLoom AI",
      description:
        "Led UI/UX design initiatives for an AI-driven storytelling platform, creating modern and user-centric interfaces. Conducted user research, prototyped designs, and collaborated with developers to ensure pixel-perfect implementation of visually appealing layouts.",
      techStack: ["Figma", "Adobe XD", "Sketch", "Miro"],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 w-full">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-10 md:mb-16 tracking-tight">
        Work Experience
      </h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
              {item.title}
            </h3>
            <span className="text-sm font-semibold text-gray-500 block mb-4">
              {item.date}
            </span>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-medium text-[#A53DFF] bg-purple-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;