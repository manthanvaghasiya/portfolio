import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code2, Layers } from "lucide-react";

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
        y: 100,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300
        }
    },
    exit: {
        opacity: 0,
        y: 50,
        scale: 0.95,
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
        <AnimatePresence>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">

                {/* --- BACKDROP --- */}
                <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onClose}
                    className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" // Lighter backdrop for light mode
                />

                {/* --- MODAL CONTENT --- */}
                <motion.div
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* CLOSE BUTTON (Sticky Top Right) */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/80 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all backdrop-blur-md border border-slate-200 shadow-sm"
                    >
                        <X size={20} />
                    </button>

                    {/* --- SCROLLABLE AREA --- */}
                    <div className="overflow-y-auto custom-scrollbar flex-1">

                        {/* 1. HERO IMAGE (Wide Rectangle Preserved) */}
                        <div className="relative w-full h-auto aspect-video group">
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-90" />
                            <img
                                src={project.modalImage || project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                            />

                            {/* Floating Title on Image */}
                            <div className="absolute bottom-6 left-6 z-20 md:bottom-8 md:left-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex items-center gap-3 mb-2"
                                >
                                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-white/90 backdrop-blur-md rounded-full border border-blue-100 shadow-sm">
                                        {project.category}
                                    </span>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-5xl font-black text-slate-900 drop-shadow-sm"
                                >
                                    {project.title}
                                </motion.h2>
                            </div>
                        </div>

                        {/* 2. CONTENT CONTAINER */}
                        <div className="p-6 md:p-10 space-y-8 bg-white">

                            {/* Description & Date */}
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex-1">
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-6"
                                    >
                                        {project.shortDescription}
                                    </motion.p>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.5, duration: 0.6 }}
                                        className="h-px w-full bg-slate-100 mb-6 origin-left"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                        className="text-slate-500 text-sm md:text-base leading-loose whitespace-pre-line"
                                    >
                                        {project.fullDescription}
                                    </motion.div>
                                </div>

                                {/* Sidebar / Metadata (Right side on Desktop) */}
                                <div className="w-full md:w-64 space-y-6 flex-shrink-0">

                                    {/* Technologies */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                                            <Code2 size={14} className="text-blue-500" /> Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-md hover:border-blue-200 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Links */}
                                    <div className="space-y-3 pt-2">
                                        {project.liveLink && (
                                            <motion.a
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 hover:-translate-y-0.5"
                                            >
                                                <ExternalLink size={16} /> Live Demo
                                            </motion.a>
                                        )}
                                        {project.githubLink && (
                                            <motion.a
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 }}
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 bg-white border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-sm font-bold rounded-xl transition-all active:scale-95 hover:bg-slate-50"
                                            >
                                                <Github size={16} /> Source Code
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;
