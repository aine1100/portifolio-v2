import { FaCopyright } from "react-icons/fa";

export default function Footer() {
   
    return (
        <div className="flex items-center flex-col  justify-center container mx-auto w-screen bg-[#132238] p-3 h-cover">
            <div className="items-center flex gap-2 text-white text-opacity-85">
                <FaCopyright/> 
                <p>Dushimire Aine all rights reserved</p>

            </div>
            <p className="text-white text-opacity-75">Made by Dushimire Aine 2025</p>
            

        </div>
    )
}