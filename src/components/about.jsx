import { FaBlender, FaCss3, FaFigma, FaHtml5, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaC, FaDiagramNext } from "react-icons/fa6";
import { useState } from "react";

export default function AboutMe() {
    const [activeStack, setActiveStack] = useState(0); 

    const Techstacks = [
        {
            title: "Frontend",
            stack: {
                icons: ["/react.png", "/htm.jpg", "/next.jpg", "/css.png", "/tailwind.svg"],
                stackItems: ["React", "HTML5", "Next.js", "CSS3", "Tailwind CSS"]
            }
        },
        {
            title: "Backend",
            stack: {
                icons: ["/nodejs.svg", "/php.svg", "/ex.png"],
                stackItems: ["NodeJs", "PHP", "Express"]
            }
        },
        {
            title: "Database",
            stack: {
                icons: ["/mongodb-icon-2.svg", "/postgre.png", "/mysql.svg"],
                stackItems: ["MongoDB", "PostgreSQL", "MySQL"]
            }
        },
        {
            title: "Design",
            stack: {
                icons: ["/figma-logo-512.webp", "/blender.webp"],
                stackItems: ["Figma", "Blender"]
            }
        },
        
        {
            title: "Other",
            stack: {
                icons: ["/java.png", "/python.jpeg", "c.png", "c++.webp"],
                stackItems: ["Java", "Python", "C", "C++",]
            }
        },
    ];

    const toggleStack = (index) => {
        setActiveStack(activeStack === index ? null : index);
    };

    return (
        <div className="container mx-auto p-10 flex flex-col lg:flex-row items-center justify-between md:justify-center shadow-sm md:gap-[300px]">
            <img src="/aine.jpeg" alt="" className="w-28  lg:w-[350px] rounded-md" />
            <div className="flex flex-col text-center md:text-left text-gray-600 gap-4">
                <h2 className="text-xl md:text-left text-center p-2 md:p-0 font-semibold text-black">
                    I am a Professional <br /> Software Developer
                </h2>
                <p className="text-md w-[300px] md:p-0 md:w-[450px]">
                    I design and develop services for customers, specializing in creating stylish, modern websites, web
                    services, and online stores. My passion is to design digital user experiences.
                </p>
                <p className="text-md w-[300px] md:w-[450px]">
                    I design and develop services for customers specializing in creating stylish, modern websites, web
                    services.
                </p>
                <div className="flex py-3 flex-col md:flex-row gap-5 items-center">
                    <button className="w-40 h-14 text-white font-semibold rounded-md bg-[#A53DFF] transition-all duration-300">
                        My Project
                    </button>
                    <button className="w-40 h-14 font-semibold rounded-md bg-white border-[1.5px] border-[#A53DFF] text-[#A53DFF] transition-all duration-300">
                        Download CV
                    </button>
                </div>
                <h2 className="text-gray-700 font-semibold text-2xl">Tech Stacks</h2>
                <div className="flex gap-2 justify-between md:justify-center px-1 md:w-full w-[310px] py-1 bg-[#A53DFF] rounded-md text-white overflow-x-auto">
                {Techstacks.map((stack, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveStack(index)}
                        className={`py-2 px-2 text-sm font-semibold transition-all duration-300 rounded ${
                            activeStack === index ? "bg-white text-[#A53DFF]" : ""
                        }`}
                    >
                        {stack.title}
                    </button>
                ))}
            </div>

            <div className="w-full bg-white  p-6 rounded-md ">
                <div className="flex flex-wrap gap-6 justify-center">
                    {Techstacks[activeStack].stack.icons.map((icon, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <img className="w-10 h-8 text-[#A53DFF] text-opacity-80" src= {icon}/>
                            <p className="text-sm text-gray-700 mt-1">{Techstacks[activeStack].stack.stackItems[i]}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}
