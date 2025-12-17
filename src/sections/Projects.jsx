import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLink, FiGithub, FiX } from "react-icons/fi";

// import p1video from "../assets/p1.mp4";
// import p2video from "../assets/p2.mp4";

const previewImagePath = "/mnt/data/A_portfolio_showcase_image_on_projects_displays_fo.png";

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
    media: "https://res.cloudinary.com/diydvemrv/video/upload/v1765982326/p1_vgrqgx.mp4",
    poster: previewImagePath,
    isVideo: true,
    live: "https://sparkly-fox-8bf700.netlify.app",
    repo: "https://github.com/Moheenkhan1/chatapp-project.git",
  },
  {
  id: "p2",
  title: "Personal Portfolio Website",
  date: "Mar 2025",
  short:
    "Personal developer portfolio showcasing projects, skills, and contact information.",
  long:
    "Personal Portfolio Website — responsive and performance-focused portfolio built with React. Showcases projects, technical skills, and experience with a clean UI, smooth navigation, and modern design principles. Designed to present a strong professional identity and improve recruiter engagement.",
  tech: ["React", "JavaScript", "HTML", "CSS", "Responsive Design"],
  media: "https://res.cloudinary.com/diydvemrv/video/upload/v1765982305/p2_vtdzjb.mp4",
  poster: previewImagePath,
  isVideo: true,
  live: "https://moheenkhan-portfolio.vercel.app/",
  repo: "https://github.com/Moheenkhan1/portfolio-website.git"
}
];

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

          <div className="flex items-center justify-center gap-5 ">
            {projects.map((p, i) => (
              <motion.article
                key={p.id}
                custom={i}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={prefersReduced ? { hidden: {}, show: {} } : cardReveal}
                className="relative  "
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
