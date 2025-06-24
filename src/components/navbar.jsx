import { useState, useEffect } from "react";
import { FaBars, FaX } from "react-icons/fa6";

export default function Navbar() {
    const tabs = [
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Techstacks", path: "techstacks" },
        { name: "Portfolio", path: "portfolio" },
        { name: "Services", path: "services" },
        { name: "Contacts", path: "contacts" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setIsOpen(false); // Close mobile menu after clicking
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white bg-opacity-90 shadow-md backdrop-blur-md"
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between px-4 py-4 w-full bg-white text-gray-600 md:px-8 lg:px-16">
                <div className="flex items-center gap-4">
                    <img
                        src="/aine.jpeg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h2 className="text-lg font-semibold text-gray-800">Dushimire</h2>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6 items-center">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => handleScrollToSection(tab.path)}
                            className={`text-sm font-medium transition-all duration-300 hover:text-[#A53DFF] ${
                                index === tabs.length - 1
                                    ? "bg-[#A53DFF] text-white px-4 py-2 rounded-md hover:bg-purple-700"
                                    : isScrolled
                                    ? "text-gray-900"
                                    : "text-gray-600"
                            }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#A53DFF] hover:text-gray-900 focus:outline-none"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <FaX size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white w-full shadow-lg z-40 absolute top-16 left-0">
                    <div className="flex flex-col items-center py-6 space-y-3">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleScrollToSection(tab.path)}
                                className={`text-md font-medium w-32 text-center py-2 rounded-md transition-colors duration-300 ${
                                    index === tabs.length - 1
                                        ? "bg-[#A53DFF] text-white hover:bg-purple-700"
                                        : "text-gray-800 hover:text-[#A53DFF]"
                                }`}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}