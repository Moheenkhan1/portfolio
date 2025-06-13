import React from "react";
import { Tilt } from "react-tilt";
import { motion, useInView } from "framer-motion";

const StarRating = ({ rating }) => (
  <span className="text-yellow-400 text-xs ml-1 max-sm:ml-0 max-sm:mt-1 max-sm:block">{rating}⭐</span>
);

const SkillBox = ({ name, logo, rating }) => (
  <div className='transition-[0.1sec] flex max-sm:flex-col justify-center items-center 
      w-[31%] max-sm:w-[45%] h-[3.5rem] max-sm:h-[4.2rem]
      bg-[#101325] rounded-xl shadow-[0_0px_6px_rgba(90,69,145,1)] 
      border border-[#4a548a] text-[#A2A3B1] font-bold 
      hover:bg-[#6F5EB2] hover:text-white'>
    <div className="flex items-center justify-center ">
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
