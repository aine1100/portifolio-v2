import { FaAddressBook, FaDribbble, FaFacebook, FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    const [isActive, setActive] = useState(0);
    function HandleActive() {
        setActive(isActive === 0 ? 1 : 0);
    }
    const contact = [
        {
            icon: <FaLocationDot />,
            title: "Address",
            name: "Kigali Rwanda",
        },
        {
            icon: <FaMailBulk />,
            title: "My email address",
            name: "ainedushimire@gmail.com",
        },
        {
            icon: <FaPhone />,
            title: "Phone number",
            name: "+250 798 380 290",
        },
    ];
    const icons = [
        {
            icon: <FaFacebook />,
            url: "https://www.facebook.com/AineDushimire",
        },
        {
            icon: <FaInstagram />,
            url: "https://www.instagram.com/aine_250/",
        },
        {
            icon: <FaLinkedin />,
            url: "https://www.linkedin.com/in/aine-dushiimire-700a372a6/",
        },
        {
            icon: <FaGithub />,
            url: "https://github.com/aine1100",
        },
    
        {
            icon: <FaDribbble />,
            url: "https://www.dribbble.com/aine_dushimire",
        },
    ];
    const inputData = [
        {
            name: "Email Address",
            className: "h-10",
            type: "email",
        },
        {
            name: "Password",
            className: "h-10",
            type: "password",
        },
        {
            name: "Message",
            className: "h-[100px] text-start items-start",
            type: "textarea",
        },
    ];

    return (
        <div className="flex flex-col mx-auto container justify-center items-center bg-white h-full p-10">
            <div className="flex flex-col  gap-8 justify-center items-center rounded-md p-5 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-semibold text-black">Let's Talk</h2>
                    <p className="text-md font-medium text-gray-600">Ready to talk to me and we dive into your different project</p>
                    {contact.map((item, index) => (
                        <div key={index} className="flex gap-5 bg-white w-[270px] p-2 items-center rounded-md shadow-sm">
                            <div className="bg-[#A53DFF] h-10 w-10 rounded-md text-white flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-md font-semibold text-gray-700">{item.title}</h3>
                                <p className="text-sm font-medium text-gray-600">{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center gap-5 w-full md:w-auto">
                    {inputData.map((field, index) =>
                        field.type === "textarea" ? (
                            <textarea
                                key={index}
                                placeholder={field.name}
                                className={`w-full md:w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 ${field.className}`}
                            ></textarea>
                        ) : (
                            <input
                                key={index}
                                type={field.type}
                                placeholder={field.name}
                                className={`w-full md:w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-purple-700 hover:bg-gray-50 ${field.className}`}
                            />
                        )
                    )}
                    <button className="w-32 h-10 text-white font-semibold rounded-md bg-[#A53DFF] transition-all duration-300">
                        Submit
                    </button>
                </div>

                </div>
                 {/* Social Media Icons */}
            <div className="flex gap-4 items-center justify-center  flex-wrap">
                {icons.map((item, index) => (
                    <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-700 text-white w-10 h-10 flex items-center justify-center rounded-md shadow-lg hover:bg-purple-800 transition-all"
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
            </div>

           
        </div>
    );
}
