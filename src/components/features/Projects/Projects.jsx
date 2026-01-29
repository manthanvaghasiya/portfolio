import React, { useState, useEffect } from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [selectedProject]);

    return (
        <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs border border-blue-100 px-3 py-1 rounded-full bg-blue-50">
                            Selected Work
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-4 mb-2 leading-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Project</span>
                        </h2>
                        <p className="text-slate-500 text-base md:text-lg mt-3">
                            High-performance web applications built for scale and user experience.
                        </p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/manthanvaghasiya"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md active:scale-95"
                    >
                        <Github size={20} />
                        <span>View Github</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                </div>

                {/* --- GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-9">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* --- MODAL --- */}
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
