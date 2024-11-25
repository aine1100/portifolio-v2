import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Navbar() {
    const tabs = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Techstacks", path: "#techstacks" },
        { name: "Portifolio", path: "#portifolio" },
        { name: "Services", path: "#services" },
        { name: "Contacts", path: "#contacts" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
        className={`w-screen px-4 py-4  h-[4rem] shadow-sm sticky top-0 transition-all duration-300 z-50 ${
            isScrolled
              ? "bg-white bg-opacity-50 backdrop-blur-md backdrop-filter"
              : "bg-transparent"
          }`}
          
        >
            <div className="container mx-auto flex items-center justify-between bg-white text-gray-600 px-20">
                <div className="flex items-center justify-center gap-5">
                    <div className="bg-[#A53DFF] w-10 h-10 rounded-full items-center flex justify-center text-center">
                        <h1 className="text-white text-2xl font-semibold">D</h1>
                    </div>
                    <h2>Dushimire</h2>
                </div>

                <div className="hidden md:flex gap-5 items-center">
                    {tabs.slice(0, 5).map((tab, index) => (
                        <a
                            href={tab.path}
                            key={index}
                            className={`text-sm font-medium hover:text-gray-900 transition-all duration-300 ${
                                isScrolled ? "text-gray-900" : "text-gray-600"
                            }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                    {tabs.slice(5).map((tab, index) => (
                        <a
                            href={tab.path}
                            key={index}
                            className={`text-sm font-medium flex justify-center items-center hover:text-white-900 w-24 h-9 rounded-md bg-[#A53DFF] transition-all duration-300 ${
                                isScrolled ? "text-white" : "text-white"
                            }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#A53DFF] hover:text-gray-900 focus:outline-none"
                    >
                        {
                            isOpen?  <FaX/>:<FaBars/>
                        }
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden ${isOpen ? "block" : "hidden"} bg-white absolute top-16 left-0 w-full shadow-md`}
            >
                <div className="flex flex-col items-center py-4">
                    {tabs.slice(0,5).map((tab, index) => (
                        <a
                            href={tab.path}
                            key={index}
                            className={`text-md font-medium py-2 px-4 hover:text-gray-900 transition-all duration-300`}
                        >
                            {tab.name}
                        </a>
                    ))}
                    {tabs.slice(5).map((tab, index) => (
                        <a
                            href={tab.path}
                            key={index}
                            className={`text-md font-medium flex justify-center items-center hover:text-white-900 w-24 h-9 rounded-md bg-[#A53DFF] transition-all duration-300 ${
                                isScrolled ? "text-white" : "text-white"
                            }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
