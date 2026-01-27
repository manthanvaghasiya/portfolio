import React from "react";
import { ExternalLink, Github, X, ChevronLeft, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const ProjectModal = ({ selectedProject, onClose }) => {
    if (!selectedProject) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex sm:items-center justify-center p-0 sm:p-4"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Container */}
            <motion.div
                layoutId={`project-${selectedProject.title}`}
                className="fixed inset-0 sm:relative bg-white w-full h-full sm:h-[90vh] sm:max-w-5xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row"
                initial={{ y: 50, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.95 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            >

                {/* Mobile Header (Sticky) */}
                <div className="flex sm:hidden items-center justify-between p-4 border-b border-slate-100 bg-white shrink-0 z-20">
                    <button
                        onClick={onClose}
                        className="flex items-center gap-1 text-slate-600 font-bold text-sm active:text-blue-600 transition-colors"
                    >
                        <ChevronLeft size={22} /> Back
                    </button>
                    <span className="font-bold text-slate-900 truncate max-w-[200px]">
                        {selectedProject.title}
                    </span>
                    <div className="w-6"></div>
                </div>

                {/* 1. Image Side */}
                <div className="hidden sm:flex w-full lg:w-[45%] bg-slate-100 relative h-64 lg:h-auto shrink-0 items-center justify-center p-6 border-r border-blind-100/50">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-10 blur-xl scale-110"
                        style={{ backgroundImage: `url(${selectedProject.modalImage || selectedProject.image})` }}
                    />

                    <img
                        src={selectedProject.modalImage || selectedProject.image}
                        alt={selectedProject.title}
                        className="w-full h-auto max-h-full object-contain rounded-lg shadow-lg relative z-10"
                    />
                </div>

                {/* 2. Content Side */}
                <div className="w-full lg:w-[55%] flex flex-col h-full bg-white relative">

                    {/* Desktop Modal Header */}
                    <div className="hidden sm:flex p-6 lg:p-8 border-b border-slate-100 shrink-0 justify-between items-start bg-white">
                        <div>
                            <span className="text-blue-600 font-bold tracking-wider uppercase text-[10px] mb-1 block">
                                {selectedProject.category}
                            </span>
                            <h3 className="text-3xl font-black text-slate-900 leading-tight">
                                {selectedProject.title}
                            </h3>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-slate-900 bg-slate-50 p-2 rounded-full transition-colors hover:bg-slate-100"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="p-5 sm:p-6 lg:p-8 overflow-y-auto flex-1 bg-white overscroll-contain">
                        {/* Mobile Image */}
                        <div className="sm:hidden mb-6 rounded-xl overflow-hidden shadow-sm border border-slate-100 relative group">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        <div className="prose prose-sm prose-slate text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                            {selectedProject.fullDescription}
                        </div>

                        <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2 mb-4">
                                <CheckCircle2 size={16} className="text-blue-500" /> Key Features
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {selectedProject.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="p-5 sm:p-6 lg:p-8 border-t border-slate-100 shrink-0 bg-white z-20 pb-12 sm:pb-6 lg:pb-8 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all text-sm shadow-lg active:scale-95"
                            >
                                <Github size={18} /> View Code
                            </a>
                            {selectedProject.liveLink !== "#" && (
                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 border border-blue-200 transition-all text-sm active:scale-95"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectModal;
