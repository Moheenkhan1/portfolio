// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import { RiMenuFill } from "react-icons/ri";

// const Navbar = () => {
//     const [ isOpen , setIsOpen ] = useState(false)


//   return (
//     <div className='bg-[#090A17] h-[10vh] w-full z-50  fixed top-0 left-0 text-white flex items-center justify-evenly max-sm:justify-between ' >
//         <div className=' text-2xl font-extrabold max-sm:ml-[2rem] ' > Portfolio </div>
//         <div className=' flex max-sm:hidden justify-evenly gap-16 max-md:gap-3  text-lg font-semibold ' >
//             <a href="#About" className=' hover:text-[#6F5EB2] ' >About</a>
//             <a href="#Skills" className=' hover:text-[#6F5EB2] ' >Skills</a>
//             <a href="#projects" className=' hover:text-[#6F5EB2] ' >Projects</a>
//             <a href="#Education" className=' hover:text-[#6F5EB2] ' >Education</a>
//             <a href="#contact" className=' hover:text-[#6F5EB2] ' >Contact</a>
//         </div>
//         <div className='flex items-center justify-center gap-4  max-sm:mr-[2rem] ' >
//         <a 
//         className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[7rem] 
//         bg-[#090B1C] h-[3rem] max-sm:h-[2.5rem] rounded-full shadow-[0_0px_8px_rgba(90,69,145)] border-2 border-[#6F5EB2] 
//         text-[#6F5EB2] font-bold hover:bg-[#6F5EB2] hover:text-white '
//         href='https://github.com/Moheenkhan1'
//         target="_blank" 
//         rel="noopener noreferrer"
//         >Github Profile </a>
//         <RiMenuFill className="text-3xl cursor-pointer hover:text-[#6F5EB2] sm:hidden"
//                 onClick={()=>{
//                     if(isOpen){
//                         setIsOpen(false)
//                     }
//                     else{
//                         setIsOpen(true)
//                     }
//                 }}
//         />
//         </div>
//         { isOpen && (
//             <div className='sm:hidden absolute top-[10vh] left-0 w-full bg-[#090A17] z-40 p-6 flex flex-col items-center space-y-4 shadow-md transition-all ' >
//             <a href="#About" className=' hover:text-[#6F5EB2] ' >About</a>
//             <a href="#Skills" className=' hover:text-[#6F5EB2] ' >Skills</a>
//             <a href="#projects" className=' hover:text-[#6F5EB2] ' >Projects</a>
//             <a href="#Education" className=' hover:text-[#6F5EB2] ' >Education</a>
//             <a href="#contact" className=' hover:text-[#6F5EB2] ' >Contact</a>
//             </div>
//           ) 
//         }
        
//     </div>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

const NavLink = ({ to, children, onClick }) => (
  <a
    href={`#${to}`}
    onClick={onClick}
    className="px-3 py-2 rounded-md hover:text-[#6F5EB2] transition-colors text-lg font-semibold"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-sm  transition-shadow duration-300
         ${
        scrolled ? "shadow-[0_10px_30px_rgba(8,7,20,0.6)] bg-[#12172a]/60 border-b border-white/6" : "bg-[#12172a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[10vh] items-center justify-between">
          {/* Logo / Brand */}
          <motion.a
            href="#About"
            className="text-2xl font-extrabold tracking-tight"
            whileHover={{ scale: 1.03 }}
            aria-label="Home"
          >
            <span className="text-white">Portfolio</span>
            <span className="ml-2 inline-block w-2 h-2 rounded-full bg-purple-500 shadow-[0_6px_18px_rgba(125,100,212,0.25)]" />
          </motion.a>

          {/* Desktop links */}
          <nav className="hidden sm:flex text-white items-center gap-8">
            {links.map((l) => (
              <NavLink key={l} to={l}>
                {l}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Moheenkhan1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#0f1424] border-2 border-[#6F5EB2] text-[#6F5EB2] font-bold shadow-[0_6px_20px_rgba(90,69,145,0.12)] hover:bg-[#6F5EB2] hover:text-white transition-colors"
            >
              Github Profile
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#6F5EB2]"
            >
              {isOpen ? <RiCloseFill className="text-3xl" /> : <RiMenuFill className="text-3xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="sm:hidden overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4 bg-[#12172a] border-t border-white/6 shadow-[0_12px_30px_rgba(8,7,20,0.6)]">
              <div className="flex flex-col items-center gap-4">
                {links.map((l) => (
                  <button
                    key={l}
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left px-4 py-3 rounded-md hover:bg-white/3 transition-colors"
                  >
                    <a href={`#${l}`} className="w-full block text-lg font-semibold">
                      {l}
                    </a>
                  </button>
                ))}

                <a
                  href="https://github.com/Moheenkhan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#0f1424] border-2 border-[#6F5EB2] text-[#6F5EB2] font-bold shadow-[0_10px_30px_rgba(90,69,145,0.14)] hover:bg-[#6F5EB2] hover:text-white transition-colors"
                >
                  Github Profile
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
