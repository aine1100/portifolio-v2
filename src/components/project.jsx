import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaFigma } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Project() {
  const [activeTab, setActiveTab] = useState("webapps");

  const webApps = [
    {
      title: "Hinga",
      description:
        "An online platform connecting farmers with shops and markets through a marketplace for selling agricultural products.",
      image: "/hinga.png",
      tech: ["React", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/aine1100/hinga_Backend/",
      live: "",
      category: "Full Stack",
    },
    {
      title: "Ivugire",
      description:
        "A dynamic platform connecting community members with leaders to address local problems and concerns.",
      image: "/ivugire.png",
      tech: ["React.js", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/aine1100",
      live: "https://ivugire-v2.vercel.app/",
      category: "Full Stack",
    },
    {
      title: "NeuroLab",
      description:
        "A neuroscience research platform with interactive dashboards and data visualizations for seamless user experience.",
      image: "/neurolab.png",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/aine1100/neurolab",
      live: "https://neurolab.cc/",
      category: "Frontend",
    },
    {
      title: "Job Seeker",
      description:
        "A job search platform with advanced filtering and real-time job listings for an intuitive user journey.",
      image: "/image.png",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/aine1100/job-seeker",
      live: "https://job-bqyyti362-aine.vercel.app/",
      category: "Frontend",
    },
    {
      title: "TravelBag",
      description:
        "A travel planning web app with itinerary creation and destination exploration features.",
      image: "/image copy 2.png",
      tech: ["Vue.js", "Pinia", "Tailwind CSS"],
      github: "https://github.com/aine1100/travelbag",
      live: "https://travel-bag-ox6y.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Expense Tracker",
      description:
        "A minimalist budgeting app for tracking expenses and visualizing financial data with clean interface.",
      image: "/image copy 3.png",
      tech: ["React", "Chakra UI", "Vite"],
      github: "https://github.com/aine1100/expense-tracker",
      live: "https://simple-expense-tracker-dun.vercel.app/",
      category: "Frontend",
    },
  ];

  const designs = [
    {
      title: "Health Track",
      description:
        "A modern gym app design focusing on data collection with vibrant colors and intuitive navigation for easy user experience.",
      image: "/halt.png",
      tech: ["Figma", "Adobe XD"],
      figma:
        "https://www.figma.com/design/hg2hMxL9go0lcXwA2U1l4Q/fitness-app?node-id=43-612&t=JZiGC52rMCKaOnVz-0",
      category: "Mobile App Design",
    },
    {
      title: "E-record",
      description:
        "A modern SaaS product design focusing on enhancing school financial reports with clean typography and vibrant colors.",
      image: "/e-record.png",
      tech: ["Figma", "Adobe XD"],
      figma:
        "https://www.figma.com/design/bkxykvSJK5cju1lEfURypZ/e_record?node-id=1-2&t=zaVmlj45ThjjMBpb-0",
      category: "Web App Design",
    },
    {
      title: "Yitegere",
      description:
        "A modern transport management app and website design helping companies manage their transport operations through easy bus booking.",
      image: "/ivugire.png",
      tech: ["Figma", "Adobe XD"],
      figma: "https://www.figma.com/design/7WnjBwzjVcyCwRxu8cxBCH/Yitegere",
      category: "Web App Design",
    },
    {
      title: "SawaPay",
      description:
        "A fintech website design with focus on clean typography, vibrant colors, and intuitive navigation for seamless payment experiences.",
      image: "/image copy 5.png",
      tech: ["Figma", "Adobe XD"],
      figma:
        "https://www.figma.com/design/ModrnmYkkBs4nmZLakDfX3/SAWA-PAY?node-id=0-1&node-type=canvas&t=7FU33trcvKXesgve-0",
      category: "Web Design",
    },
    {
      title: "Gymn Fitness",
      description:
        "A fitness center landing page design featuring bold visuals, interactive elements, and modern layout to attract gym-goers.",
      image: "/image copy 6.png",
      tech: ["Figma", "Sketch"],
      figma:
        "https://www.figma.com/design/SLYbIC6ECB7zhXKX4g0t6x/Gymn-center-Landing-page?node-id=0-1&node-type=canvas&t=DeytUqsm8VbbhiCT-0",
      category: "Landing Page",
    },
    {
      title: "Ganira",
      description:
        "A chatbot website design for a GBV support platform, emphasizing accessibility, empathy, and a calming color palette.",
      image: "/image copy 7.png",
      tech: ["Figma", "Adobe Illustrator"],
      figma:
        "https://www.figma.com/design/OGww7VII69BFXIMJ5SpKfm/Risa-gbv?m=auto&t=tVTMgjmI6erKrFhn-6",
      category: "Web Design",
    },
    {
      title: "Umurava CareerTicket",
      description:
        "A career platform design with professional and structured layout, optimized for job seekers and recruiters.",
      image: "/umura.png",
      tech: ["Figma", "Adobe Photoshop"],
      figma:
        "https://www.figma.com/design/KbRFMBoYHVS5h42b96NoVF/Umurava-Career-Ticket?node-id=4-222&t=dtLHuh3aoPJ1BmhD-0",
      category: "Web App Design",
    },
  ];

  const currentProjects = activeTab === "webapps" ? webApps : designs;

  const ProjectCard = ({ project, index }) => (
    <motion.div
      key={`${activeTab}-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image */}
      <div className="aspect-video bg-gray-100 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'%3E%3Crect width='400' height='225' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23374151' font-family='Arial, sans-serif' font-size='16'%3E" +
              project.title +
              "%3C/text%3E%3C/svg%3E";
          }}
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-700 text-xs rounded-md font-medium">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {activeTab === "webapps" ? (
            <>
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <FaGithub size={16} />
                  <span className="text-sm font-medium">Code</span>
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <FaExternalLinkAlt size={14} />
                  <span className="text-sm font-medium">Live</span>
                </motion.a>
              )}
            </>
          ) : (
            project.figma && (
              <motion.a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <FaFigma size={16} />
                <span className="text-sm font-medium">View Design</span>
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );

  // PropTypes for ProjectCard component
  ProjectCard.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tech: PropTypes.arrayOf(PropTypes.string).isRequired,
      category: PropTypes.string.isRequired,
      github: PropTypes.string,
      live: PropTypes.string,
      figma: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Here are some of the projects I&apos;ve worked on recently. Each one
            represents a unique challenge and learning experience.
          </p>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab("webapps")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "webapps"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Web Apps ({webApps.length})
              </button>
              <button
                onClick={() => setActiveTab("design")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "design"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Design ({designs.length})
              </button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          {activeTab === "webapps" ? (
            <motion.a
              href="https://github.com/aine1100"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              View More on GitHub
            </motion.a>
          ) : (
            <motion.a
              href="https://www.dribbble.com/aine_dushimire"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-3 border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              View More on Dribbble
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
