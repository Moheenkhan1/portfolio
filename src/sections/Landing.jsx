import React, { useState, useRef, useEffect } from "react";
// import portfolioimage1 from "../assets/portfolioimage.jpg";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import resume from "../assets/resume_moheenkhan_inamdar.pdf";
import { FaReact, FaNodeJs, FaJava, FaDatabase } from "react-icons/fa";

const TechBadge = ({ children, className }) => (
  <div
    className={
      "flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold bg-[#0f1424]/80 border border-white/8 shadow-[0_8px_30px_rgba(10,8,30,0.45)] " +
      (className || "")
    }
  >
    {children}
  </div>
);

function AdvancedProfile() {
  const containerRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useTransform(mx, (v) => `${v / 10}px`);
  const ty = useTransform(my, (v) => `${v / 10}px`);
  
  const portfolioimage ="https://res.cloudinary.com/diydvemrv/image/upload/v1765982042/portfolioimage_pdsunp.jpg";

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const handle = (e) => {
      const rect = node.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mx.set(x);
      my.set(y);
    };
    const clear = () => {
      mx.set(0);
      my.set(0);
    };
    node.addEventListener("mousemove", handle);
    node.addEventListener("mouseleave", clear);
    return () => {
      node.removeEventListener("mousemove", handle);
      node.removeEventListener("mouseleave", clear);
    };
  }, [mx, my]);

  const orbitDur = [14, 18, 20, 16];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[560px] max-h-[560px] max-sm:max-h-[360px] flex items-center justify-center"
      aria-hidden
    >
      {/* large organic gradient still-shadow (behind the image) */}
      <motion.div
        style={{ translateX: tx, translateY: ty }}
        initial={{ scale: 0.995 }}
        animate={{ scale: [0.995, 1.01, 0.995], rotate: [-3, 2, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-8 -z-30 rounded-full"
      >
        <div
          style={{
            filter: "blur(48px)",
            opacity: 0.9,
            background:
              "radial-gradient(circle at 30% 25%, rgba(190,30,236,0.18), transparent 12%), radial-gradient(circle at 75% 70%, rgba(125,100,212,0.12), transparent 18%), linear-gradient(135deg, rgba(63,81,181,0.04), rgba(14,165,233,0.02))",
          }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      {/* outer gradient ring - behind */}
      <motion.div
        style={{ translateX: tx, translateY: ty }}
        whileHover={{ scale: 1.03 }}
        className="absolute -inset-2 -z-20 rounded-full pointer-events-none"
      >
        <div
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(125,100,212,0.18), rgba(190,30,236,0.10), rgba(127,23,213,0.06))",
            filter: "blur(12px)",
            opacity: 0.96,
          }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      {/* enlarged portrait circle */}
      <motion.div
        style={{ translateX: tx, translateY: ty }}
        initial={{ scale: 1 }}
        animate={{ y: [0, -8, 0], rotate: [0, 0.6, -0.6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative rounded-full w-[420px] h-[420px] md:w-[520px] md:h-[520px] flex items-center justify-center"
      >
        {/* Still shadow layer behind image */}
        <div
          className="absolute -inset-4 rounded-full -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(125,100,212,0.16), rgba(190,30,236,0.10))",
            filter: "blur(20px)",
            opacity: 0.92,
          }}
        />

        {/* main image outer ring (thicker) */}
        <div
          className="relative rounded-full overflow-hidden w-full h-full max-sm:h-[80%] border-[6px] shadow-[0_40px_140px_rgba(125,100,212,0.26)]"
          style={{ borderColor: "rgba(125,100,212,0.20)" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#171725] to-[#0c0f1a]" />
          <img
            src={portfolioimage}
            alt="profile"
            className="w-full h-[100%] object-cover relative z-10"
          />
          <div
            className="absolute inset-0 rounded-full mix-blend-overlay"
            style={{
              opacity: 0.18,
              background:
                "conic-gradient(at_top_left, rgba(125,100,212,0.06), transparent)",
              zIndex: 0,
            }}
          />
        </div>
      </motion.div>

      {/* Orbiting badges (in front of image) */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-30 pointer-events-none"
        style={{ transformOrigin: "50% 50%" }}
      >
        {/* top badge */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: orbitDur[0], repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-2 transform -translate-x-1/2 -translate-y-3"
          style={{ translateX: tx, translateY: ty, zIndex: 40 }}
        >
          <TechBadge className="text-sm md:text-base">
            <FaReact className="text-cyan-300 text-xl md:text-2xl" />
            <span className="hidden md:inline">React</span>
          </TechBadge>
        </motion.div>

        {/* right badge */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: orbitDur[1], repeat: Infinity, ease: "linear" }}
          className="absolute right-6 top-1/3 transform translate-x-1/2 -translate-y-1/2"
          style={{ translateX: tx, translateY: ty, zIndex: 40 }}
        >
          <TechBadge className="text-sm md:text-base">
            <FaNodeJs className="text-green-400 text-xl md:text-2xl" />
            <span className="hidden md:inline">Node</span>
          </TechBadge>
        </motion.div>

        {/* left badge */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: orbitDur[2], repeat: Infinity, ease: "linear" }}
          className="absolute left-6 bottom-1/3 transform -translate-x-1/2 translate-y-1/2"
          style={{ translateX: tx, translateY: ty, zIndex: 40 }}
        >
          <TechBadge className="text-sm md:text-base">
            <FaJava className="text-orange-300 text-xl md:text-2xl" />
            <span className="hidden md:inline">Java</span>
          </TechBadge>
        </motion.div>

        {/* bottom badge */}
        <motion.div
          animate={{ rotate: [0, -360] }}
          transition={{ duration: orbitDur[3], repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 bottom-6 transform -translate-x-1/2 translate-y-3"
          style={{ translateX: tx, translateY: ty, zIndex: 40 }}
        >
          <TechBadge className="text-sm md:text-base">
            <FaDatabase className="text-sky-300 text-xl md:text-2xl" />
            <span className="hidden md:inline">DB / SQL</span>
          </TechBadge>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ================
   Landing component
   ================ */
const fade = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Landing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.16 });

  return (
    <section
      id="About"
      ref={ref}
      className="relative bg-[#12172a] text-white pt-20 pb-20 overflow-hidden"
    >
      {/* styles for moving text gradient + hover glow */}
      <style>{`
        /* moving gradient applied to text color */
        .moving-gradient-text {
          background: linear-gradient(90deg, #BE1ECC 0%, #7F17D5 30%, #7D64D4 60%, #BE1ECC 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          animation: slideTextGradient 3.2s linear infinite;
        }

        @keyframes slideTextGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hover-gradient-glow {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .hover-gradient-glow:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow:
            0 22px 60px rgba(17,12,36,0.55),
            0 0 50px rgba(125,100,212,0.20),
            0 0 30px rgba(190,30,236,0.08);
        }
        .btn-glow:hover {
          box-shadow:
            0 24px 70px rgba(125,100,212,0.24),
            0 0 36px rgba(190,30,236,0.10);
        }
      `}</style>

      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b10]/60 via-transparent to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-700/20 to-indigo-500/8 blur-3xl" />
        <div className="absolute -bottom-28 -right-12 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500/12 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto mt-[7%] px-6 flex flex-col-reverse xl:flex-row items-center justify-between gap-12">
        {/* Left - Text / CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fade}
          className="w-full xl:w-1/2 text-left"
        >
          <motion.h1 className="text-[2.6rem] md:text-[3.6rem] font-[Anton SC] font-extrabold leading-tight">
            Hi, I am <br />
            <span className="moving-gradient-text">Moheenkhan</span>
          </motion.h1>

          <motion.h2 variants={fade} className="mt-4 text-xl md:text-2xl font-semibold text-[#D3CFF0]">
            FullStack Web Developer — React • Node • Spring Boot
          </motion.h2>

          {/* Small skill chips */}
          <motion.div variants={fade} className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-2 rounded-lg bg-[#0f1424]/60 border border-white/6 shadow-[0_8px_22px_rgba(10,8,30,0.6)] text-sm">
              React • Next
            </span>
            <span className="px-3 py-2 rounded-lg bg-[#0f1424]/60 border border-white/6 shadow-[0_8px_22px_rgba(10,8,30,0.6)] text-sm">
              Node • Express
            </span>
            <span className="px-3 py-2 rounded-lg bg-[#0f1424]/60 border border-white/6 shadow-[0_8px_22px_rgba(10,8,30,0.6)] text-sm">
              Spring • SQL
            </span>
          </motion.div>

          <motion.p variants={fade} className="mt-6 text-gray-300 max-w-2xl leading-relaxed">
            I build scalable, user-friendly applications and services — from polished frontends to reliable backends. I focus on performance, clear architecture, and shipping products users enjoy.
          </motion.p>

          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-4 items-center">
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-block"
            >
              <button className="px-6 py-3 rounded-full bg-gradient-to-tr from-[#BE1ECC] to-[#7F17D5] text-white font-bold shadow-[0_18px_50px_rgba(125,100,212,0.18)] transition-transform btn-glow">
                Download Resume
              </button>
            </motion.a>

            <motion.div whileHover={{ scale: 1.03 }} className="inline-block">
              <Link to="projects" smooth={true} duration={500} offset={-70} className="inline-block">
                <button className="px-6 py-3 rounded-full border border-white/10 bg-white/3 backdrop-blur-md text-sm font-medium transition-colors btn-glow">
                  View Projects
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Small Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm md:text-base"
          >
            {/* Experience */}
            <motion.div
              whileHover={{ scale: 1.035 }}
              className="rounded-xl border border-white/10 bg-[#0f1424]/70 px-4 py-3 backdrop-blur-md shadow-[0_8px_20px_rgba(10,8,30,0.4)] hover-gradient-glow card-hover"
            >
              <p className="text-xs text-gray-400">Experience</p>
              <p className="text-lg font-semibold text-purple-300">Fresher</p>
              <p className="text-xs text-gray-400">Focused on real projects & hackathons</p>
            </motion.div>

            {/* Hackathons */}
            <motion.div
              whileHover={{ scale: 1.035 }}
              className="rounded-xl border border-white/10 bg-[#0f1424]/70 px-4 py-3 backdrop-blur-md shadow-[0_8px_20px_rgba(10,8,30,0.4)] hover-gradient-glow card-hover"
            >
              <p className="text-xs text-gray-400">Hackathons</p>
              <p className="text-lg font-semibold text-purple-300">2+</p>
              <p className="text-xs text-gray-400">National-level MERN projects</p>
            </motion.div>

            {/* Tech Focus */}
            <motion.div
              whileHover={{ scale: 1.035 }}
              className="rounded-xl border border-white/10 bg-[#0f1424]/70 px-4 py-3 backdrop-blur-md shadow-[0_8px_20px_rgba(10,8,30,0.4)] col-span-2 sm:col-span-1 hover-gradient-glow card-hover"
            >
              <p className="text-xs text-gray-400">Tech Focus</p>
              <p className="text-lg font-semibold text-purple-300">MERN & Java</p>
              <p className="text-xs text-gray-400">Full-stack web development</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right - Advanced Visual / Profile */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.98 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="w-full xl:w-1/2 flex items-center justify-center"
        >
          <AdvancedProfile />
        </motion.div>
      </div>

      {/* Bottom metrics / quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-12 w-full flex justify-center"
      >
        <div className="max-w-2xl text-center text-sm text-gray-400 italic">“Build for users, measure with data, and iterate quickly.”</div>
      </motion.div>
    </section>
  );
};

export default Landing;
