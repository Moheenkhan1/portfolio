import React from "react";
import portfolioimage from "../assets/portfolioimage.jpg";
import { Tilt } from "react-tilt";
import {delay, motion} from 'framer-motion'

const Landing = () => {
  return (
<div id="About" className="bg-[#12172a] w-full min-h-[90vh] mt-[10vh] max-sm:z-10 flex flex-col-reverse xl:flex-row items-center justify-center gap-10">
      
      {/* Left Section - Text */}
      <div className="bg-transparent w-full max-xl:w-[80%] xl:w-[42%] text-white  ">
        <motion.h2 
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.5, duration:1}}
        className="text-[3rem] md:text-[4rem] font-[Anton SC] font-extrabold">
          Hi, I am <br /> Moheenkhan
        </motion.h2>
        <motion.h3
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.5, duration:1}}
         className="text-[1.5rem] max-sm:flex max-sm:flex-col max-sm:w-[100%]  md:text-[2rem] font-[Anton SC] font-bold mt-5 flex">
          <p> I am a</p>
          <span className=" max-sm:hidden text-[#7D64D4] ml-3 max-sm:ml-0  animate-typing max-sm:animate-typing-sm ">
            FullStack Web Developer.!
          </span>
          <span className="sm:hidden text-[#7D64D4] ml-3 max-sm:ml-0 animate-typing-sm ">
            FullStack Developer!
          </span>
        </motion.h3>
        <motion.p
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.5, duration:1}}
         className="text-lg font-semibold mt-6">
          I am a versatile full-stack developer passionate about building
          scalable and user-friendly applications. With a strong foundation in
          both frontend and backend technologies, I thrive on solving complex
          challenges. Always eager to learn and adapt, I stay updated with the
          latest trends in web development. Let's create innovative solutions
          together!
        </motion.p>
        <motion.a
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{delay:0.5, duration:0.5}}
         className="flex items-center justify-center mt-6 w-48 md:w-60 h-14 
        md:h-16 text-white text-lg md:text-xl font-bold rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5]
         shadow-[3px_3px_30px_rgba(125,100,212,1)] transition-transform hover:scale-[1.1]"
         href="/resume_moheenkhan_inamdar.pdf" // ✅ Points to the PDF in the `public/` folder
         target="_blank" // ✅ Opens in a new tab
         rel="noopener noreferrer"
         >
          Check Resume
        </motion.a>
      </div>

      {/* Right Section - Image */}
      <motion.div 
  initial={{opacity:0, x:100}}
  animate={{opacity:1, x:0}}
  transition={{delay:0.5, duration:1}}
  className="w-full max-sm:mt-10 max-w-[300px] sm:max-w-[550px] flex justify-center"
>
  <Tilt className="w-full aspect-square rounded-full border-4 border-[#7D64D4] shadow-[3px_3px_45px_rgba(125,100,212,1)]">
    <img
      src={portfolioimage}
      alt="Profile"
      className="w-full h-full rounded-full object-cover"
    />
  </Tilt>
</motion.div>

      
    </div>
  )
}

export default Landing