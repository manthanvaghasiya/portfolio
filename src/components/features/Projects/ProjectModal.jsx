import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code2, Layers, CheckCircle2, MapPin, Sparkles } from "lucide-react";

// --- ANIMATION VARIANTS ---
const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2, delay: 0.1 }
    }
};

const modalVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 26,
            stiffness: 320
        }
    },
    exit: {
        opacity: 0,
        y: 40,
        scale: 0.96,
        transition: { duration: 0.2 }
    }
};

const ProjectModal = ({ project, onClose }) => {
    // Lock Scroll & Handle Escape
    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            const handleKeyDown = (e) => {
                if (e.key === "Escape") onClose();
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = "unset";
            };
        }
    }, [project, onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">

            {/* --- BACKDROP --- */}
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={onClose}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
            />

            {/* --- MODAL CONTENT --- */}
            <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10"
                onClick={(e) => e.stopPropagation()}
            >

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={onClose}
                        aria-label="Close modal"
                        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/90 text-slate-700 hover:bg-white hover:text-slate-950 transition-all backdrop-blur-md border border-slate-200/80 shadow-md cursor-pointer active:scale-95"
                    >
                        <X size={18} />
                    </button>

                    {/* --- SCROLLABLE AREA --- */}
                    <div className="overflow-y-auto custom-scrollbar flex-1">

                        {/* 1. HERO BANNER */}
                        <div className="relative w-full aspect-[21/9] sm:aspect-[16/7] bg-slate-900 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent z-10" />
                            <img
                                src={project.modalImage || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-center"
                            />

                            {/* Floating Metadata on Banner */}
                            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-7 z-20">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    {project.countryFlag && (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-xs">
                                            <span>{project.countryFlag}</span>
                                            <span>{project.location}</span>
                                        </span>
                                    )}

                                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-xs">
                                        {project.category}
                                    </span>

                                    {project.badge && (
                                        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-slate-200 text-xs font-bold shadow-xs">
                                            {project.badge}
                                        </span>
                                    )}
                                </div>

                                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
                                    {project.title}
                                </h2>
                            </div>
                        </div>

                        {/* 2. BODY CONTENT */}
                        <div className="p-6 sm:p-8 md:p-10 space-y-8 bg-white">

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* Left Narrative (Col Span 8) */}
                                <div className="lg:col-span-8 space-y-6">
                                    <div>
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                                            Executive Overview
                                        </h3>
                                        <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    {/* Key Features List */}
                                    {project.features && project.features.length > 0 && (
                                        <div className="pt-2">
                                            <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                                <Sparkles size={14} className="text-emerald-500" />
                                                Key Engineering Highlights
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                                {project.features.map((feat, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-800"
                                                    >
                                                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Detailed Narrative */}
                                    <div className="pt-2">
                                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
                                            Production Architecture &amp; Delivery
                                        </h4>
                                        <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                                            {project.fullDescription}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Actions & Tech Stack (Col Span 4) */}
                                <div className="lg:col-span-4 space-y-6 lg:pl-4 lg:border-l lg:border-slate-100">
                                    {/* Launch Actions */}
                                    <div className="space-y-3">
                                        {project.liveLink && project.liveLink !== "#" && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 transition-all active:scale-98"
                                            >
                                                <ExternalLink size={16} />
                                                <span>Visit Live Website</span>
                                            </a>
                                        )}

                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 px-5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-950 text-xs font-bold rounded-2xl transition-all hover:bg-slate-50 active:scale-98 shadow-2xs"
                                            >
                                                <Github size={15} />
                                                <span>Source Code Repository</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                            <Code2 size={14} className="text-blue-500" /> Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg hover:border-blue-200 hover:bg-blue-50/40 transition-colors"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Location Info */}
                                    {project.location && (
                                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                                            <div className="flex items-center gap-1.5 font-bold text-slate-800">
                                                <MapPin size={13} className="text-emerald-600" />
                                                <span>Client Geography:</span>
                                            </div>
                                            <p className="text-slate-600 pl-5">
                                                {project.location} {project.countryFlag}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
    );
};

export default ProjectModal;
