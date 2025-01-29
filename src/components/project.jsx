import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Project() {
    const [activeStack, setActiveStack] = useState(0);
    const [viewMore, setViewMore] = useState(false);

    const Techstacks = [
        {
            title: "Web Development",
            stack: {
                icons: ["/neurolab.png", "/image.png", "/image copy.png", "/image copy 2.png", "/image copy 4.png", "/image copy 3.png"],
                stackItems: ["NeuroLab", "Job Seeker", "Copic", "TravelBag", "Hello Tractor", "Simple Expense Tracker"],
                description: [
                    "This is a frontend project of neurolab project",
                    "This is a frontend project of Job Seeker",
                    "This is a frontend project of Copic project",
                    "This is a frontend project of TravelBag",
                    "This is a frontend project of Hello Tractor",
                    "This is a frontend project of Simple Expense Tracker",
                ],
                links: [
                    "https://neuro-lab-web.vercel.app/",
                    "https://job-bqyyti362-aine.vercel.app/",
                    "https://colic.vercel.app",
                    "https://travel-bag-ox6y.vercel.app/",
                    "",
                    "https://simple-expense-tracker-dun.vercel.app/",
                ],
            },
        },
        {
            title: "Design",
            stack: {
                icons: ["/image copy 5.png", "/image copy 6.png", "/image copy 7.png", "/umura.png",],
                stackItems: ["Sawapay", "Gymn Fitness", "Ganira","Umurava CareerTicket",],
                description: [
                    "This is a design project of SawaPay website ",
                    "This is a design project of Gymn Fitness website",
                    "This is a design project of Ganira chatbot website",
                    "This is the design of Umurava Career Ticket website",
                 
                    
                  
                ],
                links: [
                    "https://www.figma.com/design/ModrnmYkkBs4nmZLakDfX3/SAWA-PAY?node-id=0-1&node-type=canvas&t=7FU33trcvKXesgve-0",
                    "https://www.figma.com/design/SLYbIC6ECB7zhXKX4g0t6x/Gymn-center-Landing-page?node-id=0-1&node-type=canvas&t=DeytUqsm8VbbhiCT-0",
                    "https://www.figma.com/design/OGww7VII69BFXIMJ5SpKfm/Risa-gbv?m=auto&t=tVTMgjmI6erKrFhn-6",
                    "https://www.figma.com/design/KbRFMBoYHVS5h42b96NoVF/Umurava-Career-Ticket?node-id=4-222&t=dtLHuh3aoPJ1BmhD-0",
                 
                   
                ],
            },
        },
        {
            title: "Mobile Development",
            stack: {
                icons: [],
                stackItems: [],
                description: [
                    
                ],
                links: [
                    
                ],
            },
        },
        
    ];

    const toggleStack = (index) => {
        setActiveStack(activeStack === index ? null : index);
        setViewMore(false); // Reset viewMore when switching stacks
    };

    const toggleViewMore = () => {
        setViewMore(!viewMore);
    };

    return (
        <div className="pb-28 px-20 md:px-0 container mx-auto flex flex-col justify-center items-center gap-10 md:justify-between">
            <div className="flex pt-20 flex-col items-center px-20 gap-10">
                <h1 className="text-gray-900 text-[40px] font-bold">My Projects</h1>
                <div className="flex gap-2 justify-between md:justify-center px-1 md:p-2 md:w-[400px] w-[310px] py-1 bg-[#A53DFF] rounded-md text-white overflow-x-auto">
                    {Techstacks.map((stack, index) => (
                        <button
                            key={index}
                            onClick={() => toggleStack(index)}
                            className={`py-2 px-2 text-sm font-semibold transition-all duration-300 rounded ${
                                activeStack === index ? "bg-white text-[#A53DFF]" : ""
                            }`}
                        >
                            {stack.title}
                        </button>
                    ))}
                </div>

                <div className="w-full bg-white p-6 rounded-md">
                    <div className="md:grid-cols-2 grid lg:grid-cols-3 grid-cols-1 place-items-center items-center   gap-6 justify-center">
                        {Techstacks[activeStack].stack.icons
                            .slice(0, viewMore ? Techstacks[activeStack].stack.icons.length : 3)
                            .map((icon, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center bg-white shadow-md hover:rotate-3 rounded-md p-5 gap-2 transition-transform duration-300 w-[300px]" // Set a fixed width for the cards
                                >
                                    <img className="w-[100%] h-[150px] text-[#A53DFF] text-opacity-80 rounded-md" src={icon} />
                                    <h2 className="text-xl font-semibold text-gray-700">{Techstacks[activeStack].stack.stackItems[i]}</h2>
                                    <p className="text-center text-gray-600">{Techstacks[activeStack].stack.description[i]}</p>
                                    <a href={Techstacks[activeStack].stack.links[i]} className="text-left text-[#A53DFF]">
                                        View live preview
                                    </a>
                                </div>
                            ))}
                    </div>

                    {Techstacks[activeStack].stack.icons.length > 3 && (
                        <div className="text-center mt-6">
                            <button
                                onClick={toggleViewMore}
                                className="bg-[#A53DFF] text-white py-2 px-4 rounded-md font-semibold transition-all duration-300 hover:bg-purple-700"
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
