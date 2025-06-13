// import React from "react";
// import portfolioimage from "../assets/portfolioimage.jpg";
// import { Tilt } from "react-tilt";
// import {motion, useInView} from 'framer-motion'

// const Skills = () => {
//     const {ref, inView}=useInView({
//         triggerOnce: true,
//         threshold:0.2
//     })
//   return (
//     <div id="Skills" className="skills bg-[#12172a] w-full min-h-[120vh] max-sm:min-h-[220vh] text-white text-center mt-10  ">
//         <motion.h1
//         ref={ref} 
//         initial={{opacity:0, y:-100}}
//         animate={inView? {opacity:1, y:0} : {opacity:1, y:0}}
//         transition={{delay:0.3, duration:0.5}}
//         className=" text-[3rem] md:text-[3.5rem] font-[Anton SC] font-extrabold " >SKILLS</motion.h1>
//         <motion.p 
//         initial={{opacity:0, y:-100}}
//         animate={{opacity:1, y:0}}
//         transition={{delay:0.8, duration:1}}
        
//         className="text-lg text-[#A2A3B1] font-semibold mt-2">Here are some of the Skills I have been working on for the past years</motion.p>
//         <div className=" h-[70vh] w-full flex flex-wrap items-center justify-center gap-20 mt-10 " >
//             <Tilt className=" h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] " >
//                 <h2 className=" text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold " >Frontend</h2>
//                 <div className=" flex flex-wrap gap-5 items-center justify-center mt-10 " >
//                 <div className='transition-[0.1sec] flex justify-center gap-1 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" />
//                     <h2 className="text-xl" > React JS </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl gap-2 shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=" alt="" />
//                     <h2 className="text-xl" > Next JS </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] gap-1 rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[60%] w-[20%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
//                     <h2 className="text-xl" >JavaScript </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[12rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[50%] w-[30%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="" />
//                     <h2 className="text-md" > TailWind CSS </h2>
//                 </div>
//                 <div className='transition-[0.1sec] gap-1 flex justify-center items-center w-[12rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[65%] w-[20%] "
//                         src="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" alt="" />
//                     <h2 className="text-lg" > Framer Motion </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8.4rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="" />
//                     <h2 className="text-xl" > BootStrap </h2>
//                 </div>
//                 <div className='transition-[0.1sec] gap-3 flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[80%] w-[25%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt="" />
//                     <h2 className="text-xl" > CSS </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="" />
//                     <h2 className="text-xl" > HTML </h2>
//                 </div>
//                 </div>
//             </Tilt>
//             <Tilt className=" h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] " >
//             <h2 className=" text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold " >Backend</h2>
//             <div className=" flex flex-wrap gap-5 items-center justify-center mt-10 " >
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="" />
//                     <h2 className="text-xl" > Express JS </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://nodejs.org/static/images/logo.svg" alt="" />
//                     <h2 className="text-xl" > NODE Js </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="" />
//                     <h2 className="text-xl" > MongoDB </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="/RESTfulAPI.png" alt="" />
//                     <h2 className="text-xl" > RESTFul API </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" alt="" />
//                     <h2 className="text-xl" > Socket.io </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://jwt.io/img/pic_logo.svg" alt="" />
//                     <h2 className="text-xl" > JWT </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://jwt.io/img/pic_logo.svg" alt="" />
//                     <h2 className="text-xl" > Bcrypt </h2>
//                 </div>
//                 </div>
//             </Tilt>
//             <Tilt className=" h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] " >
//             <h2 className=" text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold " >DevOps</h2>
//             <div className=" flex flex-wrap gap-5 items-center justify-center mt-10 " >
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                 </div>
//                 </div>
//             </Tilt>
//             <Tilt className=" h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] " >
//             <h2 className=" text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold " >Others</h2>
//             <div className=" flex flex-wrap gap-5 items-center justify-center mt-10 " >
//                 <div className='transition-[0.1sec] flex justify-center items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="" />
//                     <h2 className="text-xl" > JAVA </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="" />
//                     <h2 className="text-xl" > C </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" alt="" />
//                     <h2 className="text-xl" > Git </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
//                     <h2 className="text-xl" > GitHub </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://vercel.com/favicon.ico" alt="" />
//                     <h2 className="text-xl" > Vercel </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" alt="" />
//                     <h2 className="text-xl" > Netlify </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" alt="" />
//                     <h2 className="text-xl" > Postman </h2>
//                 </div>
//                 <div className='transition-[0.1sec] flex justify-center gap-2 items-center w-[10rem] max-sm:w-[8rem]
//                     bg-[#101325] h-[3rem] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] border-1 border-[#4a548a] 
//                     text-[#A2A3B1] font-bold hover:bg-[#6F5EB2] hover:text-white '  >
//                         <img className=" h-[70%] w-[30%] "
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" alt="" />
//                     <h2 className="text-xl" > VS Code </h2>
//                 </div>
//                 </div>
//             </Tilt>
//         </div>
//     </div>
//   )
// }

// export default Skills

import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";

const StarRating = ({ rating }) => (
  <span className="text-yellow-400 text-xs ml-1 max-sm:ml-0 max-sm:mt-1 max-sm:block">{rating}⭐</span>
);

const SkillBox = ({ name, logo, rating }) => (
  <div className='transition-[0.1sec] flex max-sm:flex-col justify-center items-center 
      w-[10rem] max-sm:w-[7rem] h-[3.5rem] max-sm:h-[4.2rem]
      bg-[#101325] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] 
      border border-[#4a548a] text-[#A2A3B1] font-bold 
      hover:bg-[#6F5EB2] hover:text-white'>
    <div className="flex items-center justify-center gap-2">
      <img className="h-[70%] w-[25%] object-contain" src={logo} alt={name} />
      <h2 className="text-sm max-sm:text-xs text-center">{name}</h2>
    </div>
    <StarRating rating={rating} />
  </div>
);

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="Skills" className="bg-[#12172a] w-full min-h-[120vh] max-sm:min-h-[250vh] text-white text-center mt-10">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: -100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-[3rem] md:text-[3.5rem] font-[Anton SC] font-extrabold"
      >
        SKILLS
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg text-[#A2A3B1] font-semibold mt-2"
      >
        Here are some of the Skills I have been working on for the past years
      </motion.p>

      <div className="w-full flex flex-wrap items-center justify-center gap-20 mt-10">
        {/* === FRONTEND === */}
        <Tilt className="h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] p-5">
          <h2 className="text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold">Frontend</h2>
          <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
            <SkillBox name="React JS" logo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" rating={4.5} />
            <SkillBox name="Next JS" logo="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" rating={4.2} />
            <SkillBox name="JavaScript" logo="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" rating={4.4} />
            <SkillBox name="TailWind CSS" logo="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" rating={4.3} />
            <SkillBox name="Framer Motion" logo="https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" rating={4.1} />
            <SkillBox name="Bootstrap" logo="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" rating={4.2} />
            <SkillBox name="CSS" logo="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" rating={4.0} />
            <SkillBox name="HTML" logo="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" rating={4.5} />
          </div>
        </Tilt>

        {/* === BACKEND === */}
        <Tilt className="h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] p-5">
          <h2 className="text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold">Backend</h2>
          <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
            <SkillBox name="Express JS" logo="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" rating={4.3} />
            <SkillBox name="NODE Js" logo="https://nodejs.org/static/images/logo.svg" rating={4.2} />
            <SkillBox name="MongoDB" logo="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" rating={4.2} />
            <SkillBox name="RESTFul API" logo="/RESTfulAPI.png" rating={4.0} />
            <SkillBox name="Socket.io" logo="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg" rating={4.1} />
            <SkillBox name="JWT" logo="https://jwt.io/img/pic_logo.svg" rating={4.1} />
            <SkillBox name="Bcrypt" logo="https://jwt.io/img/pic_logo.svg" rating={4.0} />
          </div>
        </Tilt>

        {/* === DEVOPS === */}
        <Tilt className="h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] p-5">
          <h2 className="text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold">DevOps</h2>
          <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
            <SkillBox name="Docker" logo="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" rating={3.8} />
            <SkillBox name="GitHub Actions" logo="https://avatars.githubusercontent.com/u/44036562?s=280&v=4" rating={3.7} />
            <SkillBox name="CI/CD" logo="https://upload.wikimedia.org/wikipedia/commons/3/3c/Jenkins_logo.svg" rating={3.9} />
            <SkillBox name="Linux" logo="https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png" rating={3.6} />
            <SkillBox name="Nginx" logo="https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg" rating={3.5} />
            <SkillBox name="PM2" logo="https://pm2.keymetrics.io/images/pm2-logo-300.png" rating={3.7} />
            <SkillBox name="Netlify CLI" logo="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" rating={3.6} />
            <SkillBox name="Vercel CLI" logo="https://vercel.com/favicon.ico" rating={3.8} />
          </div>
        </Tilt>

        {/* === OTHERS === */}
        <Tilt className="h-[60%] w-[35%] max-sm:w-[70%] bg-[#111627] rounded-4xl border-4 border-[#4a548a] p-5">
          <h2 className="text-[2rem] text-[#A2A3B1] md:text-[2.5rem] font-[Anton SC] font-extrabold">Others</h2>
          <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
            <SkillBox name="JAVA" logo="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" rating={3.5} />
            <SkillBox name="C" logo="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" rating={3.2} />
            <SkillBox name="Git" logo="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" rating={3.4} />
            <SkillBox name="GitHub" logo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rating={3.3} />
            <SkillBox name="Vercel" logo="https://vercel.com/favicon.ico" rating={3.5} />
            <SkillBox name="Netlify" logo="https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" rating={3.2} />
            <SkillBox name="Postman" logo="https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png" rating={3.4} />
            <SkillBox name="VS Code" logo="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" rating={3.5} />
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default Skills;
