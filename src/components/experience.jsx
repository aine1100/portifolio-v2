
import Experience from "./experiencetimeline"
export default function WorkExperience(){
    return(
        <div className="flex flex-col items-center justify-center pt-10 pb-20 bg-[#F0F1F3] gap-5">
              <h1 className="text-gray-900 text-[40px] font-bold">My Work Experience</h1>
              <p className="w-full text-center text-gray-600">Get a clinch about different organisations that i have worked with in the development of their projects</p>

              <div className="flex lg:flex-row flex-col items-center justify-center gap-28">
                <Experience/>
        
            
           

              </div>


        </div>
    )
}