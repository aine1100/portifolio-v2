import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const timelineData = [
    {
      date: "August 2024 - January 2025",
      title: "Frontend Developer & Designer",
      company: "Insta Health",
      location: "Remote",
      type: "Part-time",
      description:
        "Collaborated with a cross-functional team to develop responsive web and mobile applications for a healthcare platform. Designed intuitive user interfaces and implemented performant frontend solutions to enhance patient engagement and streamline health service delivery.",
      techStack: ["React", "Tailwind CSS", "Figma", "TypeScript", "Vite"],
      achievements: [
        "Improved user engagement by 40% through intuitive UI/UX design",
        "Reduced page load times by 35% with optimized React components",
        "Led design system implementation across 5+ product features"
      ]
    },
    {
      date: "January 2025 - April 2025",
      title: "Product Designer",
      company: "StoryLoom AI",
      location: "Remote",
      type: "Freelance",
      description:
        "Led UI/UX design initiatives for an AI-driven storytelling platform, creating modern and user-centric interfaces. Conducted user research, prototyped designs, and collaborated with developers to ensure pixel-perfect implementation of visually appealing layouts.",
      techStack: ["Figma", "Adobe XD", "Sketch", "Miro"],
      achievements: [
        "Designed user flows for 10+ AI-powered features",
        "Conducted user research with 50+ participants",
        "Created comprehensive design system with 100+ components"
      ]
    },
    {
      date: "January 2025 - April 2025",
      title: "Software Developer",
      company: "FinitePay",
      location: "Kigali, Rwanda",
      type: "Part-time",
      description:
        "Led UI/UX design initiatives for fintech platform, creating modern and user-centric interfaces. Conducted user research, prototyped designs, and collaborated with developers to ensure pixel-perfect implementation. Helped in the development of a secure and scalable payment processing system, enhancing transaction efficiency and user experience.",
      techStack: ["Figma", "Adobe XD", "Next.js", "TypeScript", "Firebase"],
      achievements: [
        "Developed secure payment processing features",
        "Improved transaction success rate by 25%",
        "Implemented real-time payment tracking system"
      ]
    },
    {
      date: "April 2025 - Present",
      title: "UI/UX Designer",
      company: "Loxotech Ltd Rwanda",
      location: "Kigali, Rwanda",
      type: "Full-time",
      description:
        "Led UI/UX design initiatives for different company projects, creating modern and user-centric interfaces. Conducted user research, prototyped designs, and collaborated with developers to ensure pixel-perfect implementation of visually appealing layouts.",
      techStack: ["Figma", "Adobe XD", "Miro", "Principle"],
      achievements: [
        "Leading design for 3+ major client projects",
        "Mentoring junior designers on best practices",
        "Established design workflow processes"
      ]
    },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case "Full-time": return "from-green-500 to-emerald-500";
      case "Part-time": return "from-blue-500 to-cyan-500";
      case "Contract": return "from-orange-500 to-yellow-500";
      case "Freelance": return "from-purple-500 to-pink-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="container mx-auto px-4 w-full">
      <div className="max-w-4xl mx-auto relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600"></div>
        
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-gray-900 z-10 shadow-lg"></div>
              
              {/* Content Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: index % 2 === 0 ? 2 : -2
                }}
                className={`w-full md:w-5/12 ml-16 md:ml-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Header */}
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${getTypeColor(item.type)} text-white rounded-full`}>
                      {item.type}
                    </span>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <FaCalendarAlt size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="flex items-center gap-2">
                      <FaBriefcase size={14} />
                      <span className="font-semibold">{item.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm hover:bg-indigo-500/30 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-xl"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
       
      </div>
    </div>
  );
};

export default Experience;