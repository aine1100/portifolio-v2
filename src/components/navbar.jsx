import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function Navbar() {
    const tabs = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Techstacks", path: "#techstacks" },
        { name: "Portfolio", path: "#portfolio" },
        { name: "Services", path: "#services" },
        { name: "Contacts", path: "#contacts" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Trigger effect after scrolling 50px
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`w-full px-4 pb-4  h-[4rem] sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white bg-opacity-70 shadow-md backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between bg-white text-gray-600 p-4">
                <div className="flex items-center justify-center gap-5 ">
                <img src="/aine.jpeg" alt="" className="w-10 h-10 rounded-full" />

                    <h2>Dushimire</h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-5 items-center">
                    {tabs.map((tab, index) => (
                        <a
                            href={tab.path}
                            key={index}
                            className={`text-sm font-medium hover:text-gray-900 transition-all duration-300 ${
                                index === tabs.length - 1
                                    ? "bg-[#A53DFF] text-white px-4 py-2 rounded-md"
                                    : isScrolled
                                    ? "text-gray-900"
                                    : "text-gray-600"
                            }`}
                        >
                            {tab.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#A53DFF] hover:text-gray-900 focus:outline-none"
                    >
                        {isOpen ? <FaX size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-16 left-0 w-full shadow-lg z-40">
                    <div className="flex flex-col items-center py-4 space-y-2">
                        {tabs.map((tab, index) => (
                            <a
                                href={tab.path}
                                key={index}
                                onClick={() => setIsOpen(false)}
                                className={`text-md font-medium ${
                                    index === tabs.length - 1
                                        ? "bg-[#A53DFF] text-white px-4 py-2 rounded-md w-32 text-center"
                                        : "text-gray-800 hover:text-gray-900 transition"
                                }`}
                            >
                                {tab.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
