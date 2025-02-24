import React from "react";
import portfolioimage from "../assets/portfolioimage.jpg";
import { Tilt } from "react-tilt";

const Landing = () => {
  return (
<div className="bg-[#080914] w-full min-h-[70vh] mt-[10vh] max-sm:z-10 flex flex-col-reverse xl:flex-row items-center justify-center gap-10 px-4">
      
      {/* Left Section - Text */}
      <div className="bg-transparent w-full max-xl:w-[80%] xl:w-[42%] text-white p-6 xl:p-12">
        <h2 className="text-[3rem] md:text-[4rem] font-[Anton SC] font-extrabold">
          Hi, I am <br /> Moheenkhan
        </h2>
        <h3 className="text-[1.5rem] max-sm:flex max-sm:flex-col max-sm:w-[100%]  md:text-[2rem] font-[Anton SC] font-bold mt-5 flex">
          <p> I am a</p>
          <span className=" max-sm:hidden text-[#7D64D4] ml-3 max-sm:ml-0  animate-typing max-sm:animate-typing-sm ">
            FullStack Web Developer.!
          </span>
          <span className="sm:hidden text-[#7D64D4] ml-3 max-sm:ml-0  animate-typing max-sm:animate-typing-sm ">
            FullStack Developer!
          </span>
        </h3>
        <p className="text-lg font-semibold mt-6">
          I am a versatile full-stack developer passionate about building
          scalable and user-friendly applications. With a strong foundation in
          both frontend and backend technologies, I thrive on solving complex
          challenges. Always eager to learn and adapt, I stay updated with the
          latest trends in web development. Let's create innovative solutions
          together!
        </p>
        <a className="flex items-center justify-center mt-6 w-48 md:w-60 h-14 
        md:h-16 text-white text-lg md:text-xl font-bold rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5]
         shadow-[3px_3px_30px_rgba(125,100,212,1)] transition-transform hover:scale-[1.1]"
         href="/resume_moheenkhan_inamdar.pdf" // ✅ Points to the PDF in the `public/` folder
         target="_blank" // ✅ Opens in a new tab
         rel="noopener noreferrer"
         >
          Check Resume
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="w-full max-sm:mt-10 xl:w-[30%] flex justify-center">
        <Tilt className="h-60 w-60 max-xl:h-[50%] max-xl:w-[50%] xl:h-[80%] xl:w-[100%] rounded-full border-4 border-[#7D64D4] shadow-[3px_3px_45px_rgba(125,100,212,1)]">
          <img
            src={portfolioimage}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </Tilt>
      </div>
      
    </div>
  )
}

export default Landing