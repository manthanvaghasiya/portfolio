import React, { useRef } from "react";
import { ArrowUpRight, Layers, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { motion, useMotionValue, useSpring, useMotionTemplate, useTransform } from "framer-motion";

const ROTATION_RANGE = 10;

const ProjectCard = ({ project, onClick, index }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [ROTATION_RANGE, -ROTATION_RANGE]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-ROTATION_RANGE, ROTATION_RANGE]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const clientX = e.clientX - rect.left;
        const clientY = e.clientY - rect.top;

        const xPct = clientX / width - 0.5;
        const yPct = clientY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    // Gloss Effect
    const glossX = useTransform(x, [-0.5, 0.5], ["100%", "0%"]);
    const glossY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
    const glossBackground = useMotionTemplate`radial-gradient(circle at ${glossX} ${glossY}, rgba(255, 255, 255, 0.35) 0%, transparent 60%)`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, delay: (index % 6) * 0.05 }}
            className="h-full perspective-1000"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={onClick}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                className="group relative bg-white rounded-3xl border border-slate-200/90 overflow-hidden hover:border-emerald-300 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-8px_rgba(16,185,129,0.12)] transition-all duration-300 cursor-pointer flex flex-col h-full transform-gpu"
            >
                {/* Top Subtle Gradient Accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none" />

                {/* --- GLOSS OVERLAY --- */}
                <motion.div
                    className="absolute inset-0 z-50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                    style={{ background: glossBackground }}
                />

                {/* IMAGE AREA */}
                <div className="relative h-48 sm:h-52 overflow-hidden shrink-0 bg-slate-100" style={{ transform: "translateZ(20px)" }}>
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10 duration-500" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                    />

                    {/* Top Left Flag & Location Badge */}
                    {project.countryFlag && (
                        <div className="absolute top-3 left-3 z-20">
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold shadow-xs border border-white/80">
                                <span>{project.countryFlag}</span>
                                <span className="truncate max-w-[100px]">{project.location?.split(",")[0]}</span>
                            </span>
                        </div>
                    )}

                    {/* Top Right Live Badge or Arrow */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xs opacity-0 group-hover:opacity-100 transition-all z-20 translate-y-2 group-hover:translate-y-0 duration-200 border border-slate-200/80 text-emerald-600">
                        <ArrowUpRight size={16} />
                    </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-5 flex flex-col flex-grow bg-white relative z-20" style={{ transform: "translateZ(30px)" }}>
                    <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5">
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-50 text-emerald-600">
                                    <Layers size={11} />
                                </span>
                                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                    {project.category}
                                </span>
                            </div>

                            {project.badge && (
                                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 truncate max-w-[130px]">
                                    {project.badge}
                                </span>
                            )}
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-slate-950 group-hover:text-emerald-600 transition-colors line-clamp-1">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {project.shortDescription}
                    </p>

                    {/* TECH STACK CHIPS */}
                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tech.slice(0, 4).map((t, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-semibold uppercase tracking-wider rounded-md border border-slate-200/70 group-hover:border-emerald-100 group-hover:bg-emerald-50/40 transition-colors"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs sm:text-sm font-bold text-emerald-600 flex items-center gap-1.5 group-hover:gap-2 transition-all">
                                Case Study <ArrowRight size={14} />
                            </span>

                            {project.liveLink && project.liveLink !== "#" && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-[11px] font-bold text-slate-600 hover:text-emerald-700 flex items-center gap-1 transition-colors px-2 py-1 rounded bg-slate-100 hover:bg-emerald-50"
                                >
                                    <ExternalLink size={11} /> Live Site
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
