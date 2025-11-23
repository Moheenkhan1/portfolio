// import React from 'react'
// import { FiLink } from "react-icons/fi";

// const Projects = () => {
//   return (
//     <div id='projects' className=' w-full max-sm:mt-4 min-h-[80vh] text-center text-white ' >
//         <h1 className=" text-[3rem] md:text-[3.5rem] font-[Anton SC] font-extrabold " >Projects</h1>
//         <p className="text-lg max-sm:px-4 text-[#A2A3B1] font-semibold mt-2">I have Worked on a wide Range of projects . Here are some of them</p>

//         <div className=' w-[100%] min-h-[80%] flex flex-wrap mt-10 max-sm:mt-10 max-xl:mt-10 items-center justify-center gap-8 ' >
//             <div className=' h-[84%] w-[25%] max-sm:w-[70%] max-xl:w-[40%] bg-[#161621] rounded-3xl p-5 shadow-[0px_1px_15px_rgba(125,100,212,0.5)] ' >
//                 <div className=' h-[45%] w-[100%] bg-[#090A17] rounded-3xl ' >
//                     <video src="/p1.mp4"  autoPlay muted loop controls className=' h-[100%] w-[100%] rounded-3xl object-cover ' ></video>
//                 </div>
//                 <div className=' h-[10%]   w-[100%] mt-3 max-sm:mt-2 ml-2 flex flex-wrap gap-x-3 gap-y-2 max-sm:gap-x-4  ' >
//                     <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  > React JS
//                     </div>
//                     <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  >Socket.io
//                     </div>
//                     <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  >Express
//                     </div>
//                     <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  >MongoDB
//                     </div>
//                     <div className=' flex justify-center items-center w-[5rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  >JWT
//                     </div>
//                     <div className=' flex justify-center items-center w-[6rem] max-sm:w-[4rem] max-sm:text-sm
//                     bg-[#101325] h-[1.3rem] rounded-lg shadow-[0_0px_6px_rgba(90,69,145,0.7)]  
//                     text-[#A2A3B1] font-semibold  '  >Cloudinary
//                     </div>
//                 </div>
//                 <div className=' h-[35%] p-3 max-sm:p-0 w-[100%] flex flex-col justify-start items-start mt-2 ' >
//                     <h2 className="flex items-center text-[1rem] md:text-[1.2rem] font-[Anton SC] font-bold " > Realtime Chat Website 
//                         <a 
//                         className='flex items-center border border-transparent rounded p-1 text-md ml-3 font-semibold text-blue-500 hover:underline' 
//                         href="https://sparkly-fox-8bf700.netlify.app"
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         >Link <FiLink className=' text-sm font-semibold' size={20} color="blue" /></a> 
//                     </h2>
//                     <p className=' text-sm text-[#A2A3B1] ' >Jan 2025-Feb 2025</p>
//                     <p className=' text-sm text-start mt-3 max-sm:mt-1 ' > A real-time chat application with user authentication, messaging, file sharing, online status and advanced message features like edit delete and copy. 
//                         It ensures secure and instant communication. 
//                         Connect seamlessly with contacts while maintaining privacy and efficiency. 🚀 </p>
//                 </div>
//             </div>
            
//         </div>

//     </div>
//   )
// }

// export default Projects


// src/components/Projects.jsx
// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { FiLink, FiGithub, FiX } from "react-icons/fi";

// /**
//  * Animated Projects component
//  * - Replace the `projects` array with your actual projects (images/videos/links)
//  * - Keeps consistent color scheme with the rest of your site (#12172a, purples)
//  */

// const projects = [
//   {
//     id: "p1",
//     title: "Realtime Chat Website",
//     date: "Jan 2025 - Feb 2025",
//     short:
//       "A real-time chat app with auth, messaging, attachments, edit/delete, and online presence.",
//     long:
//       "Realtime Chat Website — full-featured chat system using React, Socket.io, Node/Express, MongoDB. Supports file uploads, message editing/deleting/forwarding, and secure JWT authentication. Focus on UX and realtime reliability.",
//     tech: ["React", "Socket.io", "Express", "MongoDB", "JWT", "Cloudinary"],
//     // if you have a video, keep a /p1.mp4, otherwise use an image path: "/p1.png"
//     media: "/p1.mp4",
//     live: "https://sparkly-fox-8bf700.netlify.app",
//     repo: "https://github.com/Moheenkhan1/chatapp",
//     isVideo: true,
//   },

//   // add more project objects here...
//   {
//     id: "p2",
//     title: "AI Portfolio Builder",
//     date: "Mar 2025 - Apr 2025",
//     short:
//       "Generates portfolio & resume automatically from prompts and JDs with LLM-powered matching.",
//     long:
//       "AI Portfolio & Resume Builder — Generates tailored portfolios and resumes from user prompts and job descriptions. Uses LLM-based JD parsing, templating, and one-click deploy to Vercel. Includes resume scoring and ATS-friendly output.",
//     tech: ["React", "Node", "OpenAI", "Tailwind"],
//     media: "/p2.png",
//     live: "#",
//     repo: "https://github.com/Moheenkhan1/ai-portfolio",
//     isVideo: false,
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0, y: 18 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { staggerChildren: 0.12, when: "beforeChildren" },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 18, scale: 0.98 },
//   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
//   hover: { y: -10, scale: 1.02, transition: { duration: 0.2 } },
// };

// const Projects = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 });
//   const [open, setOpen] = useState(null); // project id open in modal
//   const modalRef = useRef(null);

//   return (
//     <section id="projects" className="w-full min-h-[80vh] text-white py-16 bg-[#12172a]">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: -8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto"
//         >
//           <h2 className="text-[2.8rem] md:text-[3.4rem] font-[Anton SC] font-extrabold">Projects</h2>
//           <p className="mt-3 text-lg text-[#A2A3B1]">
//             I’ve shipped real-world apps — realtime systems, AI tools, and full-stack platforms.
//           </p>
//         </motion.div>

//         {/* grid */}
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "show" : "hidden"}
//           className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {projects.map((p, idx) => (
//             <motion.article
//               key={p.id}
//               variants={cardVariants}
//               whileHover="hover"
//               className="relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f1424]/60 shadow-[0_12px_50px_rgba(10,8,30,0.6)]"
//               style={{ backdropFilter: "saturate(120%) blur(6px)" }}
//             >
//               {/* media preview */}
//               <div className="w-full aspect-[16/10] bg-[#090A17] relative">
//                 {p.isVideo ? (
//                   <video
//                     src={p.media}
//                     className="w-full h-full object-cover"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     // controls removed for polished card; modal will show controls
//                   />
//                 ) : (
//                   <img src={p.media} alt={p.title} className="w-full h-full object-cover" />
//                 )}

//                 {/* subtle gradient overlay */}
//                 <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.52) 100%)" }} />

//                 {/* top-right small tags */}
//                 <div className="absolute top-3 right-3 flex items-center gap-2">
//                   <span className="px-3 py-1 rounded-full text-xs bg-[#101325] border border-white/6 text-[#A2A3B1] shadow-[0_6px_18px_rgba(90,69,145,0.08)]">
//                     {idx === 0 ? "Featured" : "Project"}
//                   </span>
//                 </div>
//               </div>

//               {/* content */}
//               <div className="p-5 flex flex-col gap-3">
//                 <div className="flex items-start justify-between">
//                   <div>
//                     <h3 className="text-lg md:text-xl font-semibold">{p.title}</h3>
//                     <p className="text-xs text-[#A2A3B1] mt-1">{p.date}</p>
//                   </div>

//                   {/* action buttons */}
//                   <div className="flex items-center gap-2">
//                     {p.live && p.live !== "#" && (
//                       <a
//                         href={p.live}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 p-2 rounded-full border border-transparent bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5] text-sm shadow-[0_8px_30px_rgba(125,100,212,0.14)] hover:opacity-95 transition"
//                         title="Open Live"
//                       >
//                         <FiLink />
//                         <span className="hidden sm:inline">Live</span>
//                       </a>
//                     )}
//                     {p.repo && (
//                       <a
//                         href={p.repo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 p-2 rounded-full border border-white/8 bg-[#101325] text-sm hover:bg-[#141624] transition"
//                         title="View Repo"
//                       >
//                         <FiGithub />
//                         <span className="hidden sm:inline">Code</span>
//                       </a>
//                     )}
//                     <button
//                       onClick={() => {
//                         setOpen(p.id);
//                         // focus later if needed
//                       }}
//                       className="inline-flex items-center gap-2 p-2 rounded-full border border-white/8 bg-[#0f1424] hover:bg-[#141624] transition"
//                       title="Preview"
//                     >
//                       Preview
//                     </button>
//                   </div>
//                 </div>

//                 <p className="text-sm text-[#A2A3B1] line-clamp-3">{p.short}</p>

//                 {/* tech chips */}
//                 <div className="mt-2 flex flex-wrap gap-2">
//                   {p.tech.map((t) => (
//                     <motion.span
//                       key={t}
//                       initial={{ opacity: 0, y: 6 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.06 }}
//                       className="px-2 py-1 text-xs rounded-full bg-[#101325] border border-white/6 text-[#A2A3B1] shadow-[0_6px_18px_rgba(90,69,145,0.06)]"
//                     >
//                       {t}
//                     </motion.span>
//                   ))}
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>
//       </div>

//       {/* Modal */}
//       {open && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 flex items-center justify-center p-4"
//           aria-modal="true"
//           role="dialog"
//         >
//           <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(null)} />

//           <motion.div
//             initial={{ scale: 0.96, y: 20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             transition={{ duration: 0.28 }}
//             className="relative z-50 max-w-4xl w-full bg-[#0c0f17] rounded-2xl overflow-hidden border border-white/8 shadow-[0_40px_120px_rgba(10,8,30,0.6)]"
//             ref={modalRef}
//           >
//             <div className="flex items-start justify-between p-4 border-b border-white/6">
//               <div>
//                 <h3 className="text-xl font-semibold">
//                   {projects.find((x) => x.id === open)?.title}
//                 </h3>
//                 <p className="text-xs text-[#A2A3B1]">
//                   {projects.find((x) => x.id === open)?.date}
//                 </p>
//               </div>
//               <button
//                 onClick={() => setOpen(null)}
//                 aria-label="Close modal"
//                 className="p-2 rounded-full hover:bg-white/4 transition"
//               >
//                 <FiX size={20} />
//               </button>
//             </div>

//             <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-black/40 rounded-lg overflow-hidden">
//                 {projects.find((x) => x.id === open)?.isVideo ? (
//                   <video
//                     src={projects.find((x) => x.id === open)?.media}
//                     controls
//                     autoPlay
//                     muted={false}
//                     playsInline
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <img
//                     src={projects.find((x) => x.id === open)?.media}
//                     alt={projects.find((x) => x.id === open)?.title}
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//               </div>

//               <div>
//                 <p className="text-sm text-[#A2A3B1]">
//                   {projects.find((x) => x.id === open)?.long}
//                 </p>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {projects.find((x) => x.id === open)?.tech.map((t) => (
//                     <span key={t} className="px-3 py-1 text-xs rounded-full bg-[#101325] border border-white/6 text-[#A2A3B1]">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="mt-6 flex items-center gap-3">
//                   {projects.find((x) => x.id === open)?.live && projects.find((x) => x.id === open)?.live !== "#" && (
//                     <a
//                       href={projects.find((x) => x.id === open)?.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5] text-white font-semibold"
//                     >
//                       View Live <FiLink />
//                     </a>
//                   )}
//                   {projects.find((x) => x.id === open)?.repo && (
//                     <a
//                       href={projects.find((x) => x.id === open)?.repo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-[#0f1424]"
//                     >
//                       View Code <FiGithub />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   );
// };

// export default Projects;


// src/components/Projects.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLink, FiGithub, FiX } from "react-icons/fi";

// import the local video from your assets folder
import p1video from "../assets/p1.mp4";

// preview image you uploaded earlier (local path)
const previewImagePath = "/mnt/data/A_portfolio_showcase_image_on_projects_displays_fo.png";

/**
 * Neon Grid Projects (grid layout, centered grid but left-aligned cards)
 * - Grid displays side-by-side cards on wide screens
 * - Cards align to the start (left) of each column
 * - Hover glow + scale effects applied via .project-card
 * - First project uses local asset p1.mp4 and poster previewImagePath
 */

/* -------------------------
   Data - replace / extend
   ------------------------- */
const projects = [
  {
    id: "p1",
    title: "Realtime Chat Website",
    date: "Jan 2025 - Feb 2025",
    short:
      "Realtime chat with auth, messaging, attachments, edit/delete, and online presence.",
    long:
      "Realtime Chat Website — full-featured chat system using React, Socket.io, Node/Express, MongoDB. Supports file uploads, message editing/deleting/forwarding, and secure JWT authentication. Focus on UX and real-time reliability.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "JWT", "Cloudinary"],
    media: p1video, // local import
    poster: previewImagePath,
    isVideo: true,
    live: "https://sparkly-fox-8bf700.netlify.app",
    repo: "https://github.com/Moheenkhan1/chatapp",
  },
//   {
//     id: "p2",
//     title: "AI Portfolio Builder",
//     date: "Mar 2025 - Apr 2025",
//     short:
//       "Generates portfolio & resume automatically from prompts and JDs with LLM-powered matching.",
//     long:
//       "AI Portfolio & Resume Builder — Generates tailored portfolios and resumes from user prompts and job descriptions. Uses LLM-based JD parsing, templating, and one-click deploy to Vercel. Includes resume scoring and ATS-friendly output.",
//     tech: ["React", "Node", "OpenAI", "Tailwind"],
//     media: "/p2.png",
//     isVideo: false,
//     live: "#",
//     repo: "https://github.com/Moheenkhan1/ai-portfolio",
//   },
  // add more projects here
];

/* -------------------------
   Motion variants & helpers
   ------------------------- */
const cardReveal = {
  hidden: (i) => ({ opacity: 0, y: 18 + (i % 3) * 6, scale: 0.995 }),
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.56, ease: "easeOut" } },
};

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    setPrefersReduced(mq.matches);
    const handler = () => setPrefersReduced(mq.matches);
    mq.addEventListener ? mq.addEventListener("change", handler) : mq.addListener(handler);
    return () => (mq.removeEventListener ? mq.removeEventListener("change", handler) : mq.removeListener(handler));
  }, []);
  return prefersReduced;
}

/* -------------------------
   Component
   ------------------------- */
export default function Projects() {
  const [openId, setOpenId] = useState(null); // modal open
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const prefersReduced = usePrefersReducedMotion();

  return (
    <section id="projects" className="bg-[#12172a] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-[2.8rem] md:text-[3.4rem] font-[Anton SC] font-extrabold">Projects</h2>
          <p className="mt-3 text-lg text-[#A2A3B1]">A curated showcase of the most meaningful projects I’ve built, highlighting strong engineering and design execution.</p>
        </div>

        {/* grid container */}
        <div ref={ref} className="mt-10  ">
          <style>{`
            /* REPLACE the previous project-grid / project-card styles with this block */

/* grid container: centered block; single-column items are centered */
.project-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  /* center the whole grid block in the page */
  margin: 0 auto;
  max-width: 1280px;

  /* important: center the item inside the single column */
  justify-content: center;
  justify-items: center;
}

/* 2 columns on small+ screens; items align to start inside columns */
@media (min-width: 640px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0,1fr));
    justify-items: start; /* left-align items in each column */
  }
}

/* 3 columns on large screens; items align to start inside columns */
@media (min-width: 1024px) {
  .project-grid {
    grid-template-columns: repeat(3, minmax(0,1fr));
    justify-items: start; /* left-align items in each column */
  }
}

/* card sizing and hover */
.project-card {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.28s cubic-bezier(.2,.9,.2,1), box-shadow 0.28s ease;
  will-change: transform;
}

/* when cards are inside a column, limit their maximum width so columns don't stretch oddly */
.project-card-inner { max-width: 420px; width: 100%; }

/* hover glow */
.project-card:hover, .project-card:focus-within {
  transform: translateY(-12px) scale(1.035);
  box-shadow:
    0 25px 55px rgba(125,100,212,0.35),
    0 0 60px rgba(190,30,236,0.18),
    0 0 30px rgba(127,23,213,0.22),
    inset 0 0 25px rgba(125,100,212,0.06);
}

/* media sizing */
.project-card-media { width: 100%; height: auto; display:block; object-fit: cover; max-height: 320px; }

/* helpful text truncation */
.line-clamp-4 { overflow: hidden; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; }

          `}</style>

          <div className="flex items-center justify-center">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={prefersReduced ? { hidden: {}, show: {} } : cardReveal}
                className="relative w-full ml-[35%] "
              >
                <div
                  className="project-card relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f1424]/60 shadow-[0_12px_40px_rgba(0,0,0,0.6)] project-card-inner"
                  style={{ backdropFilter: "saturate(120%) blur(6px)" }}
                >
                  {/* decorative neon rim */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      boxShadow: "inset 0 0 40px rgba(125,100,212,0.06), 0 8px 40px rgba(125,100,212,0.06)",
                      borderRadius: 12,
                    }}
                  />

                  {/* media */}
                  <div className="w-full bg-[#090A17]">
                    {p.isVideo ? (
                      <video
                        src={p.media}
                        poster={p.poster || undefined}
                        className="project-card-media"
                        muted
                        playsInline
                        autoPlay={!prefersReduced}
                        loop={!prefersReduced}
                      />
                    ) : (
                      <img src={p.media} alt={p.title} className="project-card-media" loading="lazy" />
                    )}
                  </div>

                  {/* content */}
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold">{p.title}</h3>
                        <p className="text-xs text-[#A2A3B1]">{p.date}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        {p.live && p.live !== "#" && (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5] text-xs font-semibold shadow-[0_8px_30px_rgba(125,100,212,0.12)] hover:opacity-95 transition"
                            title="Open Live"
                          >
                            <FiLink />
                            <span className="hidden sm:inline">Live</span>
                          </a>
                        )}
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101325] text-xs font-medium border border-white/8 hover:bg-[#141624] transition"
                            title="View Code"
                          >
                            <FiGithub />
                            <span className="hidden sm:inline">Code</span>
                          </a>
                        )}

                        <button
                          onClick={() => setOpenId(p.id)}
                          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/8 bg-[#0f1424] hover:bg-[#141624] text-xs transition"
                        >
                          Preview
                        </button>
                      </div>
                    </div>

                    <p className="text-sm text-[#A2A3B1] line-clamp-4">{p.short}</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tech.map((t, idx) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.04 * idx }}
                          className="px-2 py-1 text-xs rounded-full bg-[#101325] border border-white/6 text-[#A2A3B1]"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* neon accent bar */}
                    <div className="mt-3 h-[6px] rounded-full w-full" style={{ background: "linear-gradient(90deg, rgba(190,30,236,0.18), rgba(127,23,213,0.12), rgba(63,81,181,0.06))" }} />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal preview */}
      <AnimatePresence>
        {openId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpenId(null)} />

            <motion.div
              initial={{ scale: 0.96, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.98, y: 20, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative z-50 max-w-5xl w-full bg-[#0c0f17] rounded-2xl overflow-hidden border border-white/8 shadow-[0_40px_120px_rgba(10,8,30,0.6)]"
            >
              <div className="flex items-start justify-between p-4 border-b border-white/6">
                <div>
                  <h3 className="text-xl font-semibold">{projects.find((x) => x.id === openId)?.title}</h3>
                  <p className="text-xs text-[#A2A3B1]">{projects.find((x) => x.id === openId)?.date}</p>
                </div>

                <button onClick={() => setOpenId(null)} aria-label="Close preview" className="p-2 rounded-full hover:bg-white/4 transition">
                  <FiX size={18} />
                </button>
              </div>

              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/40 rounded-lg overflow-hidden">
                  {projects.find((x) => x.id === openId)?.isVideo ? (
                    <video
                      src={projects.find((x) => x.id === openId)?.media}
                      poster={projects.find((x) => x.id === openId)?.poster || ""}
                      controls
                      autoPlay={!prefersReduced}
                      muted={false}
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={projects.find((x) => x.id === openId)?.media}
                      alt={projects.find((x) => x.id === openId)?.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div>
                  <p className="text-sm text-[#A2A3B1]">{projects.find((x) => x.id === openId)?.long}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {projects.find((x) => x.id === openId)?.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-[#101325] border border-white/6 text-[#A2A3B1]">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    {projects.find((x) => x.id === openId)?.live && projects.find((x) => x.id === openId)?.live !== "#" && (
                      <a href={projects.find((x) => x.id === openId)?.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5] text-white font-semibold">
                        View Live <FiLink />
                      </a>
                    )}
                    {projects.find((x) => x.id === openId)?.repo && (
                      <a href={projects.find((x) => x.id === openId)?.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-[#0f1424]">
                        View Code <FiGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
