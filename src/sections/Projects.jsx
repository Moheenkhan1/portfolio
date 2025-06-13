import React from 'react'
import { FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div id='projects' className=' w-full max-sm:mt-4 min-h-[80vh] text-center text-white ' >
        <h1 className=" text-[3rem] md:text-[3.5rem] font-[Anton SC] font-extrabold " >Projects</h1>
        <p className="text-lg text-[#A2A3B1] font-semibold mt-2">I have Worked on a wide Range of projects . Here are some of them</p>

        <div className=' w-[100%] min-h-[80%] flex flex-wrap mt-10 max-sm:mt-10 max-xl:mt-10 items-center justify-center gap-8 ' >
            <div className=' h-[84%] w-[20%] max-sm:w-[70%] max-xl:w-[40%] bg-[#161621] rounded-3xl p-5 shadow-[0px_1px_15px_rgba(125,100,212,0.5)] ' >
                <div className=' h-[45%] w-[100%] bg-[#090A17] rounded-3xl ' >
                    <video src="/p1.mp4"  autoPlay muted loop controls className=' h-[100%] w-[100%] rounded-3xl object-cover ' ></video>
                </div>
                <div className=' h-[10%]   w-[100%] mt-3 max-sm:mt-2 ml-2 flex flex-wrap gap-x-3 gap-y-2 max-sm:gap-x-4  ' >
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  > React JS
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Socket.io
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Express
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >MongoDB
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >JWT
                    </div>
                    <div className=' flex justify-center items-center w-[6rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Cloudinary
                    </div>
                </div>
                <div className=' h-[35%] p-3 max-sm:p-0 w-[100%] flex flex-col justify-start items-start mt-2 ' >
                    <h2 className="flex items-center text-[1rem] md:text-[1.2rem] font-[Anton SC] font-bold " > Realtime Chat Website 
                        <a 
                        className='flex items-center border border-transparent rounded p-1 text-md ml-3 font-semibold text-blue-500 hover:underline' 
                        href="https://sparkly-fox-8bf700.netlify.app"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >Link <FiLink className=' text-sm font-semibold' size={20} color="blue" /></a> 
                    </h2>
                    <p className=' text-sm text-[#A2A3B1] ' >Jan 2025-Feb 2025</p>
                    <p className=' text-sm text-start mt-3 max-sm:mt-1 ' > A real-time chat application with user authentication, messaging, file sharing, online status and advanced message features like edit delete and copy. 
                        It ensures secure and instant communication. 
                        Connect seamlessly with contacts while maintaining privacy and efficiency. 🚀 </p>
                </div>
            </div>


            <div className=' h-[84%] w-[20%] max-sm:w-[70%] max-xl:w-[40%] bg-[#161621] rounded-3xl p-5 shadow-[0px_1px_15px_rgba(125,100,212,0.5)] ' >
                <div className=' h-[45%] w-[100%] bg-[#090A17] rounded-3xl ' >
                    <video src="/p1.mp4"  autoPlay muted loop controls className=' h-[100%] w-[100%] rounded-3xl object-cover ' ></video>
                </div>
                <div className=' h-[10%]   w-[100%] mt-3 max-sm:mt-2 ml-2 flex flex-wrap gap-x-3 gap-y-2 max-sm:gap-x-4  ' >
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  > React JS
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Socket.io
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Express
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >MongoDB
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >JWT
                    </div>
                    <div className=' flex justify-center items-center w-[6rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Cloudinary
                    </div>
                </div>
                <div className=' h-[35%] p-3 max-sm:p-0 w-[100%] flex flex-col justify-start items-start mt-2 ' >
                    <h2 className="flex items-center text-[1rem] md:text-[1.2rem] font-[Anton SC] font-bold " > Realtime Chat Website 
                        <a 
                        className='flex items-center border border-transparent rounded p-1 text-md ml-3 font-semibold text-blue-500 hover:underline' 
                        href="https://sparkly-fox-8bf700.netlify.app"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >Link <FiLink className=' text-sm font-semibold' size={20} color="blue" /></a> 
                    </h2>
                    <p className=' text-sm text-[#A2A3B1] ' >Jan 2025-Feb 2025</p>
                    <p className=' text-sm text-start mt-3 max-sm:mt-1 ' > A real-time chat application with user authentication, messaging, file sharing, online status and advanced message features like edit delete and copy. 
                        It ensures secure and instant communication. 
                        Connect seamlessly with contacts while maintaining privacy and efficiency. 🚀 </p>
                </div>
            </div>


            <div className=' h-[84%] w-[20%] max-sm:w-[70%] max-xl:w-[40%] bg-[#161621] rounded-3xl p-5 shadow-[0px_1px_15px_rgba(125,100,212,0.5)] ' >
                <div className=' h-[45%] w-[100%] bg-[#090A17] rounded-3xl ' >
                    <video src="/p1.mp4"  autoPlay muted loop controls className=' h-[100%] w-[100%] rounded-3xl object-cover ' ></video>
                </div>
                <div className=' h-[10%]   w-[100%] mt-3 max-sm:mt-2 ml-2 flex flex-wrap gap-x-3 gap-y-2 max-sm:gap-x-4  ' >
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  > React JS
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Socket.io
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Express
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >MongoDB
                    </div>
                    <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >JWT
                    </div>
                    <div className=' flex justify-center items-center w-[6rem] max-sm:w-[4rem] max-sm:text-sm
                    bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
                    text-[#A2A3B1] font-semibold  '  >Cloudinary
                    </div>
                </div>
                <div className=' h-[35%] p-3 max-sm:p-0 w-[100%] flex flex-col justify-start items-start mt-2 ' >
                    <h2 className="flex items-center text-[1rem] md:text-[1.2rem] font-[Anton SC] font-bold " > Realtime Chat Website 
                        <a 
                        className='flex items-center border border-transparent rounded p-1 text-md ml-3 font-semibold text-blue-500 hover:underline' 
                        href="https://sparkly-fox-8bf700.netlify.app"
                        target="_blank" 
                        rel="noopener noreferrer"
                        >Link <FiLink className=' text-sm font-semibold' size={20} color="blue" /></a> 
                    </h2>
                    <p className=' text-sm text-[#A2A3B1] ' >Jan 2025-Feb 2025</p>
                    <p className=' text-sm text-start mt-3 max-sm:mt-1 ' > A real-time chat application with user authentication, messaging, file sharing, online status and advanced message features like edit delete and copy. 
                        It ensures secure and instant communication. 
                        Connect seamlessly with contacts while maintaining privacy and efficiency. 🚀 </p>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects