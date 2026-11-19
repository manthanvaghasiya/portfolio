import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../../../data/projects";
import DesktopProjects from "./DesktopProjects";
import MobileProjectsCarousel from "./MobileProjectsCarousel";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web Development", "SaaS Development", "UI/UX Design"];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [centerIndex, setCenterIndex] = useState(1);

    // Filter projects based on category
    const filteredProjects =
        activeCategory === "All"
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    // Reset center index if out of bounds
    useEffect(() => {
        if (centerIndex >= filteredProjects.length) {
            setCenterIndex(0);
        }
    }, [filteredProjects.length, centerIndex]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="py-16 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Sparkles size={13} className="text-emerald-500" />
                        Curated Works • 18+ Platforms
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-3"
                    >
                        Commercial Web Flagships &amp;{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                            Custom Client Portals.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-xs sm:text-base md:text-lg font-normal max-w-2xl mx-auto mb-6"
                    >
                        With Built-In High Performance, Scalable Architectures &amp; Clean Code
                    </motion.p>

                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                        {categories.map((category) => {
                            const count =
                                category === "All"
                                    ? projects.length
                                    : projects.filter((p) => p.category === category).length;
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setCenterIndex(0);
                                    }}
                                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 select-none flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-2xs ${
                                        isActive
                                            ? "bg-[#10b981] hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-105"
                                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90"
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span
                                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                                            isActive
                                                ? "bg-white/20 text-white"
                                                : "bg-slate-100 text-slate-500"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* --- 1. SIGNATURE DESKTOP HANGING CLOTHESLINE (>= 1024px) --- */}
                <div className="hidden lg:block">
                    <DesktopProjects
                        filteredProjects={filteredProjects}
                        centerIndex={centerIndex}
                        setCenterIndex={setCenterIndex}
                        setSelectedProject={setSelectedProject}
                    />
                </div>

                {/* --- 2. DEDICATED MOBILE SWIPEABLE CAROUSEL (< 1024px) --- */}
                <div className="block lg:hidden">
                    <MobileProjectsCarousel
                        filteredProjects={filteredProjects}
                        setSelectedProject={setSelectedProject}
                    />
                </div>
            </div>

            {/* Shared Fullscreen / Bottom-Sheet Project Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
};

export default Projects;
