import React, { useState, useEffect } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "projects", "Education", "Contact"];

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
