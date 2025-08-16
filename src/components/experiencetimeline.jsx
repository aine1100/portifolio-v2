import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ExperienceTimeline = () => {
  const sectionRef = useScrollAnimation();

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
      case "Full-time": return "bg-green-100 text-green-800 border-green-200";
      case "Part-time": return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contract": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Freelance": return "bg-purple-100 text-purple-800 border-purple-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className="fade-in-on-scroll text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development and design, working with amazing teams 
            and building impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-gray-300 to-gray-400"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`fade-in-on-scroll relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-gray-400 rounded-full z-10 shadow-lg"></div>
                
                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg hover-lift transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col gap-3 mb-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaCalendarAlt size={12} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-gray-600">
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
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-gray-900 font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:bg-gray-200 transition-colors duration-200 hover-scale"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="fade-in-on-scroll text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 hover-scale"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;