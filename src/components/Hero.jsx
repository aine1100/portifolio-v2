export default function Hero(){
    const content=[
        {
            title:"1.5 Years",
            desc:"Experience"
        },
        {
            title:"20+",
            desc:"Project Completed"
        },
        {
            title:"20+",
            desc:"Happy Client"
        },
    ]
    return(
        <div className="pb-28  px-20 md:px-0 container mx-auto flex flex-col lg:flex-row justify-center items-center gap-10  md:justify-between">
           <div className="flex pt-20 flex-col items-center md:items-start px-20 gap-10">
           <h1 className="text-gray-900 text-[40px] font-bold">Hello,I'm<br/>Dushimire Aine </h1>
            <p className="text-gray-600 md:w-[503px] w-[300px] p-1 md:p-0">I'm a Freelance UI/UX Designer and Developer based in Kigali, Rwanda. I  strives to build immersive and beautiful web applications through<br/> carefully crafted code and user-centric design.</p>
            <button className="w-40 h-14 text-white font-semibold rounded-md bg-[#A53DFF] transition-all duration-300">Say Hello ! </button>
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    content.map((item,index)=>(
                        <div key={index} className="bg-red-200 w-cover px-5 py-4 rounded-md text-center justify-center">
                            <span className="text-gray-600 text-[18px] font-semibold">{item.title}</span>
                            <p className="text-gray-700 text-[16px]">{item.desc}</p>
                        </div>
                    ))

   
                }

            </div>


           </div>
           <img src="/aine.jpeg" alt="" className="w-28 md:w-[350px] rounded-full md:pr-10" />


        </div>
    )
}
