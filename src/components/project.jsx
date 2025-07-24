import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";

export default function Project() {
  const [activeStack, setActiveStack] = useState(0);
  const [viewMore, setViewMore] = useState(false);

  const Techstacks = [
    {
      title: "Web Development",
      stack: {
        icons: [
          "/hinga.png",
          "/ivugire.png",
          "/neurolab.png",
          "/image.png",
          "/image copy.png",
          "/image copy 2.png",
          "/image copy 4.png",
          "/image copy 3.png",
        ],
        stackItems: [
          "Hinga",
          "Ivugire",
          "NeuroLab",
          "Job Seeker",
          "Copic",
          "TravelBag",
          "Hello Tractor",
          "Simple Expense Tracker",
        ],
        description: [
          "Hinga is an online platform which connects different farmers with different shops and markets through offering a market place for them to enable their products selling",
          "Ivugire is a dynamic frontend and backend project which connects different community people and leaders through addressing their problems to leaders using it",
          "NeuroLab is a dynamic frontend project showcasing a neuroscience research platform with interactive dashboards and data visualizations, built for seamless user experience.",
          "Job Seeker is a job search platform with a responsive frontend, featuring advanced filtering and real-time job listings for an intuitive user journey.",
          "Copic is a creative portfolio website with a sleek, modern design, emphasizing visual storytelling and smooth animations for artists and designers.",
          "TravelBag is a travel planning web app with a vibrant UI, offering itinerary creation and destination exploration with a focus on user engagement.",
          "Hello Tractor is an agricultural tech platform connecting farmers with equipment rentals, featuring a clean and accessible frontend interface.",
          "Simple Expense Tracker is a minimalist budgeting app with a user-friendly interface for tracking expenses and visualizing financial data.",
        ],
        techStack: [
          [
            "React",
            "Tailwind CSS",
            "Spring Boot",
            "Spring Security",
            "Postgres",
          ],
          ["React.js", "TypeScript", "Tailwind CSS", "Node js", "Mongo db"],
          ["React", "Tailwind CSS", "Vite"],
          ["Next.js", "TypeScript", "Tailwind CSS"],
          ["React", "CSS Modules", "Webpack"],
          ["Vue.js", "Pinia", "Tailwind CSS"],
          ["React", "Redux", "Sass"],
          ["React", "Chakra UI", "Vite"],
        ],
        links: [
          "",
          "https://ivugire-v2.vercel.app/",
          "https://neurolab.cc/",
          "https://job-bqyyti362-aine.vercel.app/",
          "https://colic.vercel.app",
          "https://travel-bag-ox6y.vercel.app/",
          "",
          "https://simple-expense-tracker-dun.vercel.app/",
        ],
        githubLinks: [
          "https://github.com/aine1100/hinga_Backend/",
          "https://github.com/aine1100",
          "https://github.com/aine1100/neurolab",
          "https://github.com/aine1100/job-seeker",
          "https://github.com/aine1100/copic",
          "https://github.com/aine1100/travelbag",
          "https://github.com/aine1100/hello-tractor",
          "https://github.com/aine1100/expense-tracker",
        ],
      },
    },
    {
      title: "Design",
      stack: {
        icons: [
          "/halt.png",
          "/e-record.png",
          "/ivugire.png",
          "/image copy 5.png",
          "/image copy 6.png",
          "/image copy 7.png",
          "/umura.png",
        ],
        stackItems: [
          "Health Track",
          "E-record",
          "Yitegere",
          "SawaPay",
          "Gymn Fitness",
          "Ganira",
          "Umurava CareerTicket",
        ],
        description: [
          "Health Track is a modern gymn app which helps in gymn data collection with vibrant colors and intuitive navigation with easy use to any user",
          "E-record is a modern saas product which focus on enhancing school financial reports in one in app its clean typography,vibrant colors,and intuitive navigation",
          "Yitegere is a modern app and website which helps many companies to manage their transport things through easy booking of buses and more things",
          "SawaPay is a fintech website design with a focus on clean typography, vibrant colors, and intuitive navigation for seamless payment experiences.",
          "Gymn Fitness is a fitness center landing page design featuring bold visuals, interactive elements, and a modern layout to attract gym-goers.",
          "Ganira is a chatbot website design for a GBV support platform, emphasizing accessibility, empathy, and a calming color palette.",
          "Umurava CareerTicket is a career platform design with a professional and structured layout, optimized for job seekers and recruiters.",
        ],
        techStack: [
          ["Figma", "Adobe XD"],
          ["Figma", "Adobe XD"],
          ["Figma", "Adobe XD"],
          ["Figma", "Adobe XD"],
          ["Figma", "Sketch"],
          ["Figma", "Adobe Illustrator"],
          ["Figma", "Adobe Photoshop"],
        ],
        links: [
          "https://www.figma.com/design/hg2hMxL9go0lcXwA2U1l4Q/fitness-app?node-id=43-612&t=JZiGC52rMCKaOnVz-0",
          "https://www.figma.com/design/bkxykvSJK5cju1lEfURypZ/e_record?node-id=1-2&t=zaVmlj45ThjjMBpb-0",
          "https://www.figma.com/design/7WnjBwzjVcyCwRxu8cxBCH/Yitegere",
          "https://www.figma.com/design/ModrnmYkkBs4nmZLakDfX3/SAWA-PAY?node-id=0-1&node-type=canvas&t=7FU33trcvKXesgve-0",
          "https://www.figma.com/design/SLYbIC6ECB7zhXKX4g0t6x/Gymn-center-Landing-page?node-id=0-1&node-type=canvas&t=DeytUqsm8VbbhiCT-0",
          "https://www.figma.com/design/OGww7VII69BFXIMJ5SpKfm/Risa-gbv?m=auto&t=tVTMgjmI6erKrFhn-6",
          "https://www.figma.com/design/KbRFMBoYHVS5h42b96NoVF/Umurava-Career-Ticket?node-id=4-222&t=dtLHuh3aoPJ1BmhD-0",
        ],
        githubLinks: [],
      },
    },
    {
      title: "Mobile Development",
      stack: {
        icons: ["/mobile-placeholder.png"],
        stackItems: ["Coming Soon"],
        description: [
          "Mobile development projects are currently in progress. Stay tuned for exciting mobile applications!",
        ],
        techStack: [["React Native", "Flutter"]],
        links: [""],
        githubLinks: [""],
      },
    },
  ];

  const toggleStack = (index) => {
    setActiveStack(index);
    setViewMore(false);
  };

  const toggleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="pb-28 px-4 md:px-8 lg:px-20 container mx-auto flex flex-col justify-center items-center gap-12">
      <motion.div
        className="flex flex-col items-center gap-10 pt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>

        <motion.div
          className="flex gap-2 justify-center px-2 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white w-full max-w-[600px] overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {Techstacks.map((stack, index) => (
            <motion.button
              key={index}
              onClick={() => toggleStack(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-6 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeStack === index
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "hover:bg-gray-700/50 text-gray-300"
              }`}
            >
              {stack.title}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="w-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStack}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            >
              {Techstacks[activeStack].stack.icons
                .slice(
                  0,
                  viewMore ? Techstacks[activeStack].stack.icons.length : 6
                )
                .map((icon, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{
                      y: -10,
                      rotateY: 5,
                      scale: 1.02,
                    }}
                    className="relative flex flex-col items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 gap-4 transition-all duration-300 w-[320px] group overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                    <div className="relative w-full h-[180px] rounded-xl overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        src={icon}
                        alt={Techstacks[activeStack].stack.stackItems[i]}
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='180' viewBox='0 0 320 180'%3E%3Crect width='320' height='180' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='Arial, sans-serif' font-size='16'%3EProject Image%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                    </div>

                    <h2 className="text-xl font-semibold text-white relative z-10">
                      {Techstacks[activeStack].stack.stackItems[i]}
                    </h2>

                    <p className="text-center text-gray-300 text-sm relative z-10 line-clamp-3">
                      {Techstacks[activeStack].stack.description[i]}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center relative z-10">
                      {Techstacks[activeStack].stack.techStack[i]?.map(
                        (tech, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-4 mt-4 relative z-10">
                      {Techstacks[activeStack].stack.links[i] && (
                        <motion.a
                          href={Techstacks[activeStack].stack.links[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                        >
                          <FaEye size={14} />
                          View
                        </motion.a>
                      )}
                      {Techstacks[activeStack].stack.githubLinks[i] && (
                        <motion.a
                          href={Techstacks[activeStack].stack.githubLinks[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                        >
                          <FaGithub size={14} />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>

          {Techstacks[activeStack].stack.icons.length > 6 && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={toggleViewMore}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-8 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-500/25"
              >
                {viewMore ? "View Less" : "View More"}
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
