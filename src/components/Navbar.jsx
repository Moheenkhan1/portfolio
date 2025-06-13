import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiMenuFill } from "react-icons/ri";

const Navbar = () => {
    const [ isOpen , setIsOpen ] = useState(false)


  return (
    <div className='bg-[#090A17] h-[10vh] w-screen z-55  fixed top-0 left-0 text-white flex items-center justify-evenly max-sm:justify-between ' >
        <div className=' text-2xl font-extrabold max-sm:ml-[2rem] ' > Portfolio </div>
        <div className=' flex max-sm:hidden justify-evenly gap-15 max-md:gap-3  text-lg font-semibold ' >
            <a href="#About" className=' hover:text-[#6F5EB2] ' >About</a>
            <a href="#Skills" className=' hover:text-[#6F5EB2] ' >Skills</a>
            <a href="#projects" className=' hover:text-[#6F5EB2] ' >Projects</a>
            <a href="#Education" className=' hover:text-[#6F5EB2] ' >Education</a>
        </div>
        <div className='flex items-center justify-center gap-4  max-sm:mr-[2rem] ' >
        <a 
        className='transition-[0.1sec] flex justify-center items-center w-[10rem] 
        bg-[#090B1C] h-[3rem] rounded-full shadow-[0_0px_8px_rgba(90,69,145)] border-2 border-[#6F5EB2] 
        text-[#6F5EB2] font-bold hover:bg-[#6F5EB2] hover:text-white '
        href='https://github.com/Moheenkhan1'
        target="_blank" 
        rel="noopener noreferrer"
        >Github Profile </a>
        <RiMenuFill className="text-3xl cursor-pointer hover:text-[#6F5EB2] sm:hidden"
                onClick={()=>{
                    if(isOpen){
                        setIsOpen(false)
                    }
                    else{
                        setIsOpen(true)
                    }
                }}
        />
        </div>
        { isOpen && (
            <div className='sm:hidden absolute top-[10vh] left-0 w-full bg-[#090A17] z-40 p-6 flex flex-col items-center space-y-4 shadow-md transition-all ' >
            <Link className=' hover:text-[#6F5EB2] ' >About</Link>
            <Link className=' hover:text-[#6F5EB2] ' >Skills</Link>
            <Link className=' hover:text-[#6F5EB2] ' >Projects</Link>
            <Link className=' hover:text-[#6F5EB2] ' >Education</Link>
            </div>
          ) 
        }
        
    </div>
  )
}

export default Navbar