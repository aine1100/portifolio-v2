import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Project() {
    const [activeStack, setActiveStack] = useState(0);
    const [viewMore, setViewMore] = useState(false);

    const Techstacks = [
        {
            title: "Web Development",
            stack: {
                icons: ["/hinga.png","/ivugire.png","/neurolab.png", "/image.png", "/image copy.png", "/image copy 2.png", "/image copy 4.png", "/image copy 3.png"],
                stackItems: ["Hinga","Ivugire","NeuroLab", "Job Seeker", "Copic", "TravelBag", "Hello Tractor", "Simple Expense Tracker"],
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
                    ["React", "Tailwind CSS","Spring Boot","Spring Security","Postgres"],
                    ["React.js", "TypeScript", "Tailwind CSS","Node js","Mongo db"],
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
                icons: ["/halt.png","/e-record.png","/ivugire.png","/image copy 5.png", "/image copy 6.png", "/image copy 7.png", "/umura.png"],
                stackItems: ["Health Track","E-record","Yitegere","SawaPay", "Gymn Fitness", "Ganira", "Umurava CareerTicket"],
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
                    ["Figma","Adobe XD"],
                    ["Figma","Adobe XD"],
                    ["Figma","Adobe XD"],
                    ["Figma", "Adobe XD"],
                    ["Figma", "Sketch"],
                    ["Figma", "Adobe Illustrator"],
                    ["Figma", "Adobe Photoshop"],
                ],
                links: [
                    "https://www.figma.com/design/vGOGJ3RXIc0cCTtaMlU9jE/Fitness-Activity-Mobile-App-UI-Design--Community-?node-id=0-1&p=f&t=V9pFSLufHBB2O8vQ-0",
                    "https://www.figma.com/design/bkxykvSJK5cju1lEfURypZ/e_record?node-id=1-2&t=zaVmlj45ThjjMBpb-0",
                    "https://www.figma.com/design/7WnjBwzjVcyCwRxu8cxBCH/Yitegere",
                    "https://www.figma.com/design/ModrnmYkkBs4nmZLakDfX3/SAWA-PAY?node-id=0-1&node-type=canvas&t=7FU33trcvKXesgve-0",
                    "https://www.figma.com/design/SLYbIC6ECB7zhXKX4g0t6x/Gymn-center-Landing-page?node-id=0-1&node-type=canvas&t=DeytUqsm8VbbhiCT-0",
                    "https://www.figma.com/design/OGww7VII69BFXIMJ5SpKfm/Risa-gbv?m=auto&t=tVTMgjmI6erKrFhn-6",
                    "https://www.figma.com/design/KbRFMBoYHVS5h42b96NoVF/Umurava-Career-Ticket?node-id=4-222&t=dtLHuh3aoPJ1BmhD-0",
                ],
                githubLinks: [], // No GitHub for design projects
            },
        },
        {
            title: "Mobile Development",
            stack: {
                icons: [],
                stackItems: ["No project available"],
                description: [],
                techStack: [],
                links: [],
                githubLinks: [],
            },
        },
    ];

    const toggleStack = (index) => {
        setActiveStack(activeStack === index ? null : index);
        setViewMore(false);
    };

    const toggleViewMore = () => {
        setViewMore(!viewMore);
    };

    return (
        <div className="pb-28 px-4 md:px-8 lg:px-20 container mx-auto flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col items-center gap-10 pt-20">
                <h1 className="text-gray-900 text-4xl md:text-5xl font-bold tracking-tight">My Projects</h1>
                <div className="flex gap-2 justify-center px-2 py-1 bg-[#A53DFF] rounded-lg text-white w-full max-w-[600px] overflow-x-auto">
                    {Techstacks.map((stack, index) => (
                        <button
                            key={index}
                            onClick={() => toggleStack(index)}
                            className={`py-2 px-4 text-sm font-semibold rounded-md transition-all duration-300 ${
                                activeStack === index ? "bg-white text-[#A53DFF] shadow-md" : "hover:bg-purple-600"
                            }`}
                        >
                            {stack.title}
                        </button>
                    ))}
                </div>

                <div className="w-full bg-white p-6 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {Techstacks[activeStack].stack.icons
                            .slice(0, viewMore ? Techstacks[activeStack].stack.icons.length : 3)
                            .map((icon, i) => (
                                <div
                                    key={i}
                                    className="relative flex flex-col items-center bg-white shadow-lg rounded-xl p-6 gap-4 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl w-[320px] group"
                                >
                                    <img
                                        className="w-full h-[180px] object-cover rounded-lg"
                                        src={icon}
                                        alt={Techstacks[activeStack].stack.stackItems[i]}
                                    />
                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {Techstacks[activeStack].stack.stackItems[i]}
                                    </h2>
                                    <p className="text-center text-gray-600 text-sm">
                                        {Techstacks[activeStack].stack.description[i]}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {Techstacks[activeStack].stack.techStack[i].map((tech, j) => (
                                            <span
                                                key={j}
                                                className="px-2 py-1 text-xs font-medium text-[#A53DFF] bg-purple-100 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {Techstacks[activeStack].stack.links[i] && (
                                            <a
                                                href={Techstacks[activeStack].stack.links[i]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#A53DFF] transition-colors"
                                            >
                                                <FaExternalLinkAlt size={24} />
                                            </a>
                                        )}
                                        {Techstacks[activeStack].stack.githubLinks[i] && (
                                            <a
                                                href={Techstacks[activeStack].stack.githubLinks[i]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#A53DFF] transition-colors"
                                            >
                                                <FaGithub size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                    </div>

                    {Techstacks[activeStack].stack.icons.length > 3 && (
                        <div className="text-center mt-8">
                            <button
                                onClick={toggleViewMore}
                                className="bg-[#A53DFF] text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 hover:bg-purple-700"
                            >
                                {viewMore ? "View Less" : "View More"}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}