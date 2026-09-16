import React, { useState, useEffect } from "react";
import { Github, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web Development", "SaaS Development", "UI/UX Design"];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [selectedProject]);

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- SECTION HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="inline-flex items-center gap-1.5 text-blue-600 font-bold tracking-widest uppercase text-xs border border-blue-200/80 px-3.5 py-1.5 rounded-full bg-blue-50/80 shadow-xs">
                            <Sparkles size={12} />
                            Selected Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mt-4 mb-2 tracking-tight leading-tight">
                            Featured{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                                Projects
                            </span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg mt-3 font-normal">
                            Production-grade web platforms and SaaS systems engineered with modern full-stack architectures.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://github.com/manthanvaghasiya"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/90 rounded-full font-bold text-slate-800 hover:text-blue-600 hover:border-blue-200 transition-all shadow-xs hover:shadow-md"
                    >
                        <Github size={19} />
                        <span className="text-sm">View GitHub</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                </div>

                {/* --- CATEGORY FILTER TABS --- */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/70"
                >
                    {categories.map((category) => {
                        const count = category === "All"
                            ? projects.length
                            : projects.filter((p) => p.category === category).length;
                        const isActive = activeCategory === category;

                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none flex items-center gap-2 ${
                                    isActive
                                        ? "text-slate-950"
                                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-project-tab"
                                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)] border border-slate-200/90 -z-10"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                                <span
                                    className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                                        isActive
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-200/70 text-slate-600"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* --- GRID LAYOUT --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                index={index}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* --- CASE STUDY MODAL --- */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
