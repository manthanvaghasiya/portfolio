import React, { useState, useEffect } from "react";
import {
    Github,
    ArrowUpRight,
    Sparkles,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects";
import HangingProjectCard from "./HangingProjectCard";
import ProjectModal from "./ProjectModal";

const categories = ["All", "Web Development", "SaaS Development", "UI/UX Design"];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [centerIndex, setCenterIndex] = useState(1); // Default center project

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

    // Navigation handlers for clothesline
    const handleNext = () => {
        if (filteredProjects.length === 0) return;
        setCenterIndex((prev) => (prev + 1) % filteredProjects.length);
    };

    const handlePrev = () => {
        if (filteredProjects.length === 0) return;
        setCenterIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
    };

    const total = filteredProjects.length;
    const getProjectAtOffset = (offset) => {
        if (total === 0) return null;
        const targetIndex = (centerIndex + offset + total * 10) % total;
        return filteredProjects[targetIndex];
    };

    // Deep, dramatic curve configuration matching the user's reference image:
    // Slot 0: Far Left (tilted -18deg counter-clockwise, elevated high)
    // Slot 1: Mid Left (tilted -9deg counter-clockwise, mid sag)
    // Slot 2: Center (0deg upright, at lowest sag point of curve)
    // Slot 3: Mid Right (tilted +9deg clockwise, mid sag)
    // Slot 4: Far Right (tilted +18deg clockwise, elevated high)
    const slotConfigs = [
        {
            offset: -2,
            rotation: -18,
            paddingTop: 80, // High up on wire
            zIndex: 10,
        },
        {
            offset: -1,
            rotation: -9,
            paddingTop: 149, // Mid drop along curve
            zIndex: 20,
        },
        {
            offset: 0,
            rotation: 0, // Perfectly vertical center at lowest sag
            paddingTop: 174,
            zIndex: 30,
            isCenter: true,
        },
        {
            offset: 1,
            rotation: 9,
            paddingTop: 149, // Mid rise along curve
            zIndex: 20,
        },
        {
            offset: 2,
            rotation: 18,
            paddingTop: 80, // High up on wire
            zIndex: 10,
        },
    ];

    return (
        <section
            id="projects"
            className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden"
        >
            {/* Ambient Lighting matching reference (warm peach bottom-left, mint bottom-right) */}
            <div className="absolute bottom-10 -left-40 w-[550px] h-[550px] bg-amber-100/40 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 -right-40 w-[550px] h-[550px] bg-emerald-100/50 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER MATCHING PINTEREST REFERENCE --- */}
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                    {/* Small Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 text-xs font-bold shadow-2xs mb-5"
                    >
                        <Sparkles size={13} className="text-emerald-500" />
                        <span>Selected Work & Production Platforms</span>
                    </motion.div>

                    {/* Massive Bold Headline with Green Accent */}
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-950 uppercase tracking-tight leading-[1.08] mb-4"
                    >
                        FEATURED{" "}
                        <span className="text-emerald-500">
                            PROJECTS
                        </span>{" "}
                        ENGINEERED TO GROW
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base sm:text-lg font-normal max-w-2xl mx-auto mb-8"
                    >
                        With Built-In High Performance, Scalable Architectures & Clean Code
                    </motion.p>

                    {/* Central Green Capsule CTA Button (Matching Reference) & Category Filters */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
                    >
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
                                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 select-none flex items-center gap-2 cursor-pointer shadow-xs ${
                                        isActive
                                            ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/25 scale-105"
                                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200/90"
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span
                                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
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
                    </motion.div>
                </div>

                {/* --- DRAMATIC HANGING CLOTHESLINE SHOWCASE (DESKTOP) --- */}
                <div className="hidden lg:block relative min-h-[660px] pb-16 select-none">
                    {/* The Deep Curved Tension Cable (SVG) with 140px Sag */}
                    <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                        <svg
                            className="w-full h-[260px] overflow-visible"
                            viewBox="0 0 1200 240"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            {/* Cable Soft Blur Shadow */}
                            <path
                                d="M -30 23 Q 600 303 1230 23"
                                stroke="rgba(15,23,42,0.06)"
                                strokeWidth="4.5"
                                strokeLinecap="round"
                            />
                            {/* Main Wire Cable */}
                            <path
                                d="M -30 20 Q 600 300 1230 20"
                                stroke="#94A3B8"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                            />
                            {/* Left & Right Anchor Pegs */}
                            <circle cx="-15" cy="20" r="5.5" fill="#64748B" />
                            <circle cx="1215" cy="20" r="5.5" fill="#64748B" />
                        </svg>
                    </div>

                    {/* Navigation Arrow Controls (Floating on Sides) */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous project"
                        className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next project"
                        className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* 5 Hanging Polaroid Cards Positioned Along the Deep Curve */}
                    <div className="grid grid-cols-5 gap-4 xl:gap-6 relative z-20 items-start px-4 sm:px-8">
                        {slotConfigs.map((config, slotIdx) => {
                            const project = getProjectAtOffset(config.offset);
                            if (!project) return <div key={slotIdx} />;

                            // If filtered set has fewer than 5 items, only render valid offsets
                            if (total < 5 && Math.abs(config.offset) > Math.floor(total / 2)) {
                                return <div key={slotIdx} />;
                            }

                            return (
                                <div
                                    key={`${project.title}-${slotIdx}`}
                                    className="relative flex flex-col items-center"
                                    style={{
                                        paddingTop: `${config.paddingTop}px`,
                                        zIndex: config.zIndex,
                                    }}
                                >
                                    <HangingProjectCard
                                        project={project}
                                        onClick={() => {
                                            if (config.isCenter) {
                                                setSelectedProject(project);
                                            } else {
                                                setCenterIndex(
                                                    (centerIndex + config.offset + total * 10) % total
                                                );
                                            }
                                        }}
                                        isCenter={config.isCenter}
                                        rotation={config.rotation}
                                        className="w-full"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- MOBILE & TABLET HANGING CAROUSEL (SCREENS < LG) --- */}
                <div className="block lg:hidden relative pt-6 pb-10">
                    {/* Top Curved Wire for Mobile */}
                    <div className="relative mb-6">
                        <svg
                            className="w-full h-12 overflow-visible"
                            viewBox="0 0 400 40"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M -10 12 Q 200 38 410 12"
                                stroke="#94A3B8"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Active Featured Card on Mobile */}
                    {filteredProjects.length > 0 && (
                        <div className="relative max-w-xs mx-auto">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={filteredProjects[centerIndex]?.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <HangingProjectCard
                                        project={filteredProjects[centerIndex]}
                                        onClick={() => setSelectedProject(filteredProjects[centerIndex])}
                                        isCenter={true}
                                        rotation={0}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Mobile Dot & Arrow Navigation */}
                            <div className="flex items-center justify-between mt-6 px-4">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous project"
                                    className="p-2 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <div className="flex items-center gap-1.5">
                                    {filteredProjects.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCenterIndex(idx)}
                                            aria-label={`Go to slide ${idx + 1}`}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                centerIndex === idx
                                                    ? "w-7 bg-emerald-500"
                                                    : "w-2 bg-slate-300"
                                            }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next project"
                                    className="p-2 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700"
                                >
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
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
