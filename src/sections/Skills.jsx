
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// icons
import { FaReact, FaNodeJs, FaJava, FaTools, FaLock } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiMysql,
  SiSpring,
  SiHibernate,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const skillChipClass =
  "inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-full border border-white/8 bg-[#0f1424]/70 text-[#E6E7F2] shadow-[0_8px_22px_rgba(10,8,30,0.6)]";

const ServiceCard = ({ icon, title, subtitle, skills, colorClass }) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.995 }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className={`relative rounded-3xl p-6 md:p-8 border border-white/8 backdrop-blur-sm bg-[#080915]/70 shadow-[0_12px_40px_rgba(8,6,20,0.6)] ${colorClass}`}
      aria-label={`${title} card`}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/6 border border-white/8 text-3xl shadow-[0_8px_30px_rgba(125,100,212,0.06)]">
          {icon}
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
        </div>
      </div>

      <p className="text-sm text-gray-200 mb-4">{skills.intro}</p>

      <div className="flex flex-wrap gap-3">
        {skills.items.map((s, idx) => (
          <motion.div
            key={s.label}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={skillChipClass}
            style={{ minWidth: 120 }}
            title={s.label}
          >
            <span className="text-lg">{s.icon}</span>
            <span className="truncate">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* decorative soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 w-28 h-28 rounded-full opacity-10 blur-2xl"
        style={{ background: "radial-gradient(circle at 20% 20%, rgba(125,100,212,0.16), transparent 30%)" }}
      />
    </motion.article>
  );
};

const Services = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.18 });

  const frontend = {
    intro: "Modern UIs, component-first approach, accessible design, and delightful interactions.",
    items: [
      { label: "React", icon: <FaReact className="text-cyan-300" /> },
      { label: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { label: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { label: "Framer Motion", icon: <SiFramer className="text-violet-300" /> },
      { label: "Bootstrap", icon: <SiBootstrap className="text-indigo-300" /> },
      { label: "HTML5", icon: <SiHtml5 className="text-orange-300" /> },
      { label: "CSS3", icon: <SiCss3 className="text-blue-400" /> },
    ],
  };

  const mern = {
    intro: "API-driven apps with realtime features, secure auth, and scalable data models.",
    items: [
      { label: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
      { label: "Express", icon: <SiExpress className="text-white" /> },
      { label: "MongoDB", icon: <SiMongodb className="text-emerald-400" /> },
      { label: "Socket.io", icon: <SiSocketdotio className="text-orange-300" /> },
      { label: "JWT / Auth", icon: <FaLock className="text-yellow-300" /> },
      { label: "Bcrypt / Hashing", icon: <FaLock className="text-yellow-300" /> },
      { label: "Cloudinary", icon: <SiVercel className="text-white" /> }, // swap if you have Cloudinary icon
      { label: "RESTful APIs", icon: <FaTools className="text-sky-200" /> },
    ],
  };

  const java = {
    intro: "Enterprise-style backends using Spring Boot, JPA/Hibernate, and relational databases.",
    items: [
      { label: "Java", icon: <FaJava className="text-orange-300" /> },
      { label: "Spring Boot", icon: <SiSpring className="text-green-300" /> },
      { label: "Hibernate / JPA", icon: <SiHibernate className="text-amber-300" /> },
      { label: "MySQL / SQL", icon: <SiMysql className="text-sky-300" /> },
      { label: "REST (Spring MVC)", icon: <FaTools className="text-sky-200" /> },
      { label: "Spring Security", icon: <FaLock className="text-yellow-300" /> },
    ],
  };

  const others = {
    intro: "Developer tooling and best practices: CI/CD, containers, versioning, and hosting.",
    items: [
      { label: "Git", icon: <SiGit className="text-orange-400" /> },
      { label: "GitHub", icon: <SiGithub className="text-white" /> },
      { label: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { label: "Vercel", icon: <SiVercel className="text-white" /> },
      { label: "Netlify", icon: <SiNetlify className="text-cyan-300" /> },
      { label: "Testing", icon: <FaTools className="text-sky-300" /> },
    ],
  };

  return (
    <section ref={ref} className="relative text-white mt-10 py-20 overflow-hidden bg-[#12172a]">
      {/* subtle background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full bg-gradient-to-br from-purple-700/18 to-indigo-500/8 blur-3xl" />
        <div className="absolute -bottom-28 -right-12 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/12 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center rounded-full border border-purple-500/25 bg-purple-500/6 px-4 py-1 text-sm uppercase tracking-wide text-purple-200">
            Capabilities
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">What I Build</h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-300">
            Four focused areas: polished frontends, reliable MERN backends, robust Java systems, and developer tooling to run production confidently.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.08, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <ServiceCard icon={<FaReact />} title="Frontend" subtitle="Polished & performant UIs" skills={frontend} />
          <ServiceCard icon={<FaNodeJs />} title="MERN Backend" subtitle="APIs, realtime & authentication" skills={mern} />
          <ServiceCard icon={<FaJava />} title="Java Backend" subtitle="Enterprise backends & services" skills={java} />
          <ServiceCard icon={<FaTools />} title="Others" subtitle="Tooling, deployment & DX" skills={others} />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

