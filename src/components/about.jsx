export default function AboutMe(){
    return(
        <div className=" container mx-auto p-10 flex flex-col md:flex-row items-center justify-between md:justify-center shadow-md md:gap-[300px]">
                       <img src="/aine.jpeg" alt="" className="w-28 md:w-[350px] rounded-md" />
                       <div className="flex flex-col text-center md:text-left text-gray-600 gap-4">
                        <h2 className="text-xl md:text-left text-center p-2 md:p-0 font-semibold text-black">I am Professional  <br/> Software developer</h2>
                        <p className="text-md w-[300px]  md:p-0 md:w-[450px]">I design and develop services for customers specializing creating stylish, modern websites, web services and online<br/> stores. My passion is to design digital user experiences.</p>
                        <p className="text-md w-[300px]  md:w-[450px]">I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                        <div className="flex justify-between py-3 flex-col md:flex-row gap-5 items-center ">
                        <button className="w-40 h-14 text-white font-semibold rounded-md bg-[#A53DFF] transition-all duration-300">My Project </button>
                        <button className="w-40 h-14  font-semibold rounded-md bg-white border-[1.5px] border-[#A53DFF] text-[#A53DFF] transition-all duration-300">Download cv </button>



                        </div>

                       </div>

        </div>
    )
}
