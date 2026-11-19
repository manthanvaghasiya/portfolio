import React, { useState, useEffect, useMemo } from "react";
import {
    Sparkles,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Search,
    LayoutGrid,
    SlidersHorizontal,
    Globe2,
    Compass
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../../data/projects";
import HangingProjectCard from "./HangingProjectCard";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const categories = [
    "All",
    "Automotive & Luxury",
    "E-Commerce & D2C",
    "Hospitality & Dining",
    "SaaS & Web Platforms",
    "Corporate & B2B",
];

const countryFilters = [
    { code: "ALL", label: "All Regions", flag: "🌐" },
    { code: "GB", label: "UK", flag: "🇬🇧" },
    { code: "CH", label: "Switzerland", flag: "🇨🇭" },
    { code: "US", label: "USA", flag: "🇺🇸" },
    { code: "FR", label: "France", flag: "🇫🇷" },
    { code: "IN", label: "India", flag: "🇮🇳" },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState("ALL");
    const [searchQuery, setSearchQuery] = useState("");
    const [viewMode, setViewMode] = useState("grid"); // "grid" or "clothesline"
    const [centerIndex, setCenterIndex] = useState(0);

    // Multi-factor filtering: Category + Country + Search query
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesCategory =
                activeCategory === "All" || project.category === activeCategory;

            const matchesCountry =
                selectedCountry === "ALL" ||
                (selectedCountry === "GB" && (project.countryFlag === "🇬🇧" || project.location?.includes("UK"))) ||
                (selectedCountry === "CH" && (project.countryFlag === "🇨🇭" || project.location?.includes("Switzerland"))) ||
                (selectedCountry === "US" && (project.countryFlag === "🇺🇸" || project.location?.includes("USA"))) ||
                (selectedCountry === "FR" && (project.countryFlag === "🇫🇷" || project.location?.includes("France"))) ||
                (selectedCountry === "IN" && (project.countryFlag === "🇮🇳" || project.location?.includes("India")));

            const q = searchQuery.toLowerCase().trim();
            const matchesSearch =
                !q ||
                project.title.toLowerCase().includes(q) ||
                project.shortDescription.toLowerCase().includes(q) ||
                project.location?.toLowerCase().includes(q) ||
                project.tech.some((t) => t.toLowerCase().includes(q));

            return matchesCategory && matchesCountry && matchesSearch;
        });
    }, [activeCategory, selectedCountry, searchQuery]);

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
    const slotConfigs = [
        { offset: -2, rotation: -18, paddingTop: 80, zIndex: 10 },
        { offset: -1, rotation: -9, paddingTop: 149, zIndex: 20 },
        { offset: 0, rotation: 0, paddingTop: 174, zIndex: 30, isCenter: true },
        { offset: 1, rotation: 9, paddingTop: 149, zIndex: 20 },
        { offset: 2, rotation: 18, paddingTop: 80, zIndex: 10 },
    ];

    return (
        <section
            id="projects"
            className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden"
        >
            {/* Ambient Lighting */}
            <div className="absolute bottom-10 -left-40 w-[550px] h-[550px] bg-amber-100/40 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute bottom-10 -right-40 w-[550px] h-[550px] bg-emerald-100/50 rounded-full blur-[130px] pointer-events-none -z-10" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
                    {/* Small Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200/90 text-slate-700 text-xs font-bold shadow-2xs mb-5"
                    >
                        <Sparkles size={13} className="text-emerald-500" />
                        <span>18+ Live Deployments Across 6 Countries</span>
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
                        International client flagships spanning automotive dealerships, fine dining, D2C ecommerce, and custom SaaS platforms.
                    </motion.p>

                    {/* --- FEATURED FLAGSHIP SPOTLIGHT STRIP --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.22 }}
                        className="flex flex-wrap items-center justify-center gap-2 p-2 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs mb-8 max-w-3xl mx-auto"
                    >
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 pl-2">
                            Top Flagships:
                        </span>
                        {[
                            { name: "Qissa (Sevenoaks UK)", flag: "🇬🇧", title: "Qissa — A Tale of Food" },
                            { name: "Royal Drive (Kerala)", flag: "🇮🇳", title: "Royal Drive Luxury Cars" },
                            { name: "Mr. Pal (Geneva)", flag: "🇨🇭", title: "Mr. Pal Geneva" },
                            { name: "Rodeo Werkz (Dallas)", flag: "🇺🇸", title: "Rodeo Werkz Dallas" },
                            { name: "Fine Wine Cosmetics", flag: "🇮🇳", title: "Fine Wine Cosmetics" },
                        ].map((flagship) => (
                            <button
                                key={flagship.name}
                                onClick={() => {
                                    const proj = projects.find((p) => p.title === flagship.title);
                                    if (proj) setSelectedProject(proj);
                                }}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200/70 hover:border-emerald-200 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                            >
                                <span>{flagship.flag}</span>
                                <span>{flagship.name}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* --- CONTROLS BAR: SEARCH, COUNTRY PILLS & VIEW TOGGLE --- */}
                    <div className="space-y-4 mb-6 max-w-4xl mx-auto">
                        {/* Search and View Switcher */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                            {/* Search Input */}
                            <div className="relative w-full sm:max-w-md">
                                <Search
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by client, country, or stack (e.g. Next.js, UK, PPF)..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-slate-200/90 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-2xs font-medium"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>

                            {/* View Switcher: Showcase Grid vs Hanging Clothesline */}
                            <div className="flex items-center gap-1 p-1 bg-white border border-slate-200/90 rounded-full shadow-2xs self-stretch sm:self-auto justify-center">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                        viewMode === "grid"
                                            ? "bg-slate-950 text-white shadow-xs"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    <LayoutGrid size={13} />
                                    <span>Showcase Grid</span>
                                </button>
                                <button
                                    onClick={() => setViewMode("clothesline")}
                                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                        viewMode === "clothesline"
                                            ? "bg-emerald-500 text-white shadow-xs"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    <Compass size={13} />
                                    <span>Interactive Wire</span>
                                </button>
                            </div>
                        </div>

                        {/* Country Region Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                            {countryFilters.map((c) => {
                                const isSelected = selectedCountry === c.code;
                                return (
                                    <button
                                        key={c.code}
                                        onClick={() => setSelectedCountry(c.code)}
                                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                            isSelected
                                                ? "bg-slate-900 text-white shadow-xs"
                                                : "bg-white/80 hover:bg-slate-50 text-slate-600 border border-slate-200/80"
                                        }`}
                                    >
                                        <span>{c.flag}</span>
                                        <span>{c.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
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
                                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 select-none flex items-center gap-2 cursor-pointer shadow-xs ${
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
                        </div>
                    </div>
                </div>

                {/* --- EMPTY RESULTS STATE --- */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16 bg-white/70 border border-slate-200/80 rounded-3xl max-w-lg mx-auto p-8 shadow-xs">
                        <p className="text-slate-800 font-bold text-base mb-2">No projects found</p>
                        <p className="text-slate-500 text-xs mb-4">
                            Try resetting your search query or switching category filters.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setActiveCategory("All");
                                setSelectedCountry("ALL");
                            }}
                            className="px-5 py-2 rounded-full bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}

                {/* === VIEW MODE 1: CLOTHESLINE SHOWCASE === */}
                {viewMode === "clothesline" && filteredProjects.length > 0 && (
                    <>
                        {/* --- DRAMATIC HANGING CLOTHESLINE SHOWCASE (DESKTOP) --- */}
                        <div className="hidden lg:block relative min-h-[660px] pb-16 select-none">
                            {/* The Deep Curved Tension Cable (SVG) */}
                            <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                                <svg
                                    className="w-full h-[260px] overflow-visible"
                                    viewBox="0 0 1200 240"
                                    fill="none"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M -30 23 Q 600 303 1230 23"
                                        stroke="rgba(15,23,42,0.06)"
                                        strokeWidth="4.5"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M -30 20 Q 600 300 1230 20"
                                        stroke="#94A3B8"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="-15" cy="20" r="5.5" fill="#64748B" />
                                    <circle cx="1215" cy="20" r="5.5" fill="#64748B" />
                                </svg>
                            </div>

                            {/* Navigation Arrow Controls */}
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

                            {/* Instruction prompt */}
                            <p className="text-center text-xs text-slate-400 font-medium mt-4">
                                Click any card to examine full case study specifications • Use arrows or switch to "Showcase Grid" to view all {filteredProjects.length} items.
                            </p>
                        </div>

                        {/* --- MOBILE HANGING CAROUSEL (SCREENS < LG) --- */}
                        <div className="block lg:hidden relative pt-6 pb-10">
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

                                    <div className="flex items-center justify-between mt-6 px-4">
                                        <button
                                            onClick={handlePrev}
                                            aria-label="Previous project"
                                            className="p-2 rounded-full bg-white border border-slate-200 shadow-xs text-slate-700"
                                        >
                                            <ChevronLeft size={18} />
                                        </button>
                                        <span className="text-xs font-mono font-bold text-slate-500">
                                            {centerIndex + 1} / {filteredProjects.length}
                                        </span>
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
                    </>
                )}

                {/* === VIEW MODE 2: CURATED SHOWCASE BENTO GRID === */}
                {viewMode === "grid" && filteredProjects.length > 0 && (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4 pb-12"
                    >
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={idx}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </motion.div>
                )}
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
