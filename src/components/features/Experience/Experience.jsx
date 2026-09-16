import React, { useRef, useState } from "react";
import {
    Briefcase,
    Calendar,
    CheckCircle2,
    MapPin,
    Building2,
    ArrowUpRight,
    GraduationCap,
    Zap,
    Trophy,
    ShieldCheck,
    Sparkles,
    Layers,
    LayoutGrid,
    GitCommit
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const experiences = [
    {
        id: "webiox",
        category: "Leadership & Agency",
        role: "Founder & Lead Developer",
        company: "Webiox Digital Solution",
        monogram: "WX",
        monogramColor: "bg-slate-950 text-white border-slate-800 shadow-slate-900/10",
        type: "Direct Technical Partner",
        location: "Surat, Gujarat, India",
        period: "Apr 2026 – Present",
        isCurrent: true,
        summaryBadge: "Active Venture • Founder",
        description:
            "Dedicated technical partner for commercial brands and marketing agencies—delivering high-performance web platforms.",
        kpis: [
            { label: "Performance", value: "Sub-Second Load", icon: Zap },
            { label: "Vehicle Platform", value: "150+ Cars Catalog", icon: Layers },
            { label: "Commercial Builds", value: "Sadguru & Hariram", icon: Building2 },
        ],
        highlights: [
            "Built digital dealership platforms for <b>Sadguru Car Surat</b> (150+ car catalog) and <b>Hariram Motors</b>.",
            "Engineered custom staff portals with <b>PWA capabilities</b> for real-time on-the-go inventory updates.",
            "Optimized edge delivery with Vercel and Cloudflare CDN to guarantee <b>&lt;1s page load speeds</b>.",
        ],
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Vercel"],
        projectLinks: [
            { name: "webiox.tech", href: "https://webiox.tech/" },
            { name: "Sadguru Car Surat", href: "https://sadgurucarsurat.com/" },
            { name: "Hariram Motors", href: "https://www.hariramcars.com/" },
        ],
    },
    {
        id: "arcelor",
        category: "Software Engineering",
        role: "Software Engineer",
        company: "Arcelor Technology Private Limited",
        monogram: "AT",
        monogramColor: "bg-blue-900 text-white border-blue-800 shadow-blue-900/10",
        type: "Full-Time Role",
        location: "Surat, Gujarat, India",
        period: "Feb 2026 – Mar 2026",
        isCurrent: false,
        summaryBadge: "Production Engineering",
        description:
            "Production web application engineering, modular UI development, and enterprise API integrations.",
        kpis: [
            { label: "App Architecture", value: "Modular React", icon: Layers },
            { label: "Performance", value: "Sub-Second Tuning", icon: Zap },
            { label: "API Integrations", value: "REST Services", icon: ShieldCheck },
        ],
        highlights: [
            "Developed reusable, modular React components adhering to modern frontend best practices.",
            "Integrated secure RESTful APIs with robust data flow and comprehensive error boundaries.",
            "Conducted performance profiling and cross-device optimization to eliminate client-side lag.",
        ],
        tech: ["JavaScript (ES6+)", "React.js", "Node.js", "RESTful APIs", "State Management", "Performance Tuning"],
    },
    {
        id: "bluestock",
        category: "Software Engineering",
        role: "Full-Stack Developer (Intern)",
        company: "Bluestock Fintech",
        monogram: "BF",
        monogramColor: "bg-indigo-950 text-white border-indigo-900 shadow-indigo-950/10",
        type: "Fintech Internship",
        location: "Pune, India (Remote)",
        period: "Sep 2025 – Nov 2025",
        isCurrent: false,
        summaryBadge: "Fintech Engineering",
        description:
            "Production fintech modules, user onboarding validation pipelines, and responsive interfaces within an agile sprint team.",
        kpis: [
            { label: "Core Module", value: "Company Registration", icon: ShieldCheck },
            { label: "Platform", value: "HiringInsight", icon: Layers },
            { label: "Database", value: "PostgreSQL", icon: Zap },
        ],
        highlights: [
            "Built an end-to-end <b>Company Registration &amp; Verification module</b> with dynamic validation.",
            "Refactored views for the <b>HiringInsight</b> platform, eliminating layout shift on mobile screens.",
            "Participated in daily standups, code reviews, and API contract design within sprint cycles.",
        ],
        tech: ["React.js", "PostgreSQL", "Node.js", "REST APIs", "Form Validation", "Agile Sprints"],
    },
    {
        id: "education",
        category: "Education & Honors",
        role: "Bachelor of Computer Applications (BCA)",
        company: "SDJ International College (VNSGU)",
        monogram: "BCA",
        monogramColor: "bg-slate-900 text-white border-slate-700 shadow-slate-900/10",
        type: "Degree & Honors",
        location: "Surat, Gujarat, India",
        period: "2023 – 2026",
        isEducation: true,
        summaryBadge: "Academics & Honors",
        description:
            "Computer science, database systems, data structures, and web application architecture, complemented by national-level honors.",
        kpis: [
            { label: "National Rank", value: "GREEN Olympiad", icon: Trophy },
            { label: "Higher Secondary", value: "JNV CBSE 75.6%", icon: GraduationCap },
            { label: "Sports Leadership", value: "Regional Volleyball", icon: Sparkles },
        ],
        highlights: [
            "Coursework in Database Management (MongoDB, MySQL, PostgreSQL) and System Architecture.",
            "Completed Higher Secondary (Commerce) at <b>JNV CBSE</b> with <b>75.6%</b>.",
            "Achieved <b>National Rank in GREEN Olympiad</b>, recognized by TERI and MoEFCC (Govt. of India).",
        ],
        tech: ["Computer Science", "Database Systems", "Data Structures", "System Design", "Web Architecture"],
    },
];

const categories = ["All Milestones", "Leadership & Agency", "Software Engineering", "Education & Honors"];

const careerHighlights = [
    {
        icon: Building2,
        label: "Founder @ Webiox",
        subtext: "Technical partner for agency & commercial brands",
    },
    {
        icon: Zap,
        label: "Sub-Second Speeds",
        subtext: "Optimized Core Web Vitals & CDN tuning",
    },
    {
        icon: Layers,
        label: "150+ Vehicle Platform",
        subtext: "Client websites & admin inventory dashboard",
    },
    {
        icon: Trophy,
        label: "National Rank Holder",
        subtext: "GREEN Olympiad (MoEFCC, Govt. of India)",
    },
];

const Experience = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState("All Milestones");
    const [viewMode, setViewMode] = useState("timeline"); // "timeline" or "grid"

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const filteredExperiences =
        activeTab === "All Milestones"
            ? experiences
            : experiences.filter((e) => e.category === activeTab);

    return (
        <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/70 relative overflow-hidden">
            {/* AMBIENT BACKGROUND ACCENTS */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-100/30 via-indigo-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto" ref={containerRef}>
                {/* --- SECTION HEADER --- */}
                <div className="mb-10 md:mb-14 text-center max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Briefcase size={13} />
                        Executive Track Record
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                    >
                        Career{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Milestones
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-3 text-slate-600 text-base md:text-lg font-normal"
                    >
                        Commercial founder at Webiox Digital Solution, engineering at Arcelor & Bluestock Fintech, and academic excellence.
                    </motion.p>
                </div>

                {/* --- EXECUTIVE CAREER STATS RIBBON --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-12"
                >
                    {careerHighlights.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-md transition-all group"
                            >
                                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-2.5 group-hover:scale-105 transition-transform">
                                    <Icon size={16} />
                                </div>
                                <div className="font-bold text-slate-950 text-sm tracking-tight mb-0.5">
                                    {stat.label}
                                </div>
                                <div className="text-slate-500 text-xs leading-snug">
                                    {stat.subtext}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* --- INTERACTIVE CONTROLS: CATEGORIES & VIEW SWITCHER --- */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-2">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-1.5 p-1 rounded-full bg-slate-200/60 border border-slate-200">
                        {categories.map((tab) => {
                            const count =
                                tab === "All Milestones"
                                    ? experiences.length
                                    : experiences.filter((e) => e.category === tab).length;
                            const isActive = activeTab === tab;

                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 select-none flex items-center gap-1.5 ${
                                        isActive
                                            ? "text-slate-950 font-bold"
                                            : "text-slate-600 hover:text-slate-900"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="milestone-filter-pill"
                                            className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.08)] border border-slate-200/80 -z-10"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{tab}</span>
                                    <span
                                        className={`relative z-10 px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                                            isActive
                                                ? "bg-slate-900 text-white"
                                                : "bg-slate-300/70 text-slate-600"
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* View Mode Switcher (Timeline vs Executive Grid) */}
                    <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-slate-200/60 border border-slate-200 text-xs font-semibold">
                        <button
                            onClick={() => setViewMode("timeline")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                                viewMode === "timeline"
                                    ? "bg-white text-slate-950 shadow-xs font-bold"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <GitCommit size={14} className={viewMode === "timeline" ? "text-blue-600" : "text-slate-400"} />
                            <span>Timeline</span>
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                                viewMode === "grid"
                                    ? "bg-white text-slate-950 shadow-xs font-bold"
                                    : "text-slate-600 hover:text-slate-900"
                            }`}
                        >
                            <LayoutGrid size={14} className={viewMode === "grid" ? "text-blue-600" : "text-slate-400"} />
                            <span>Executive Grid</span>
                        </button>
                    </div>
                </div>

                {/* ============================================================== */}
                {/* --- VIEW MODE 1: CHRONOLOGICAL TIMELINE --- */}
                {/* ============================================================== */}
                {viewMode === "timeline" ? (
                    <div className="relative pl-6 md:pl-12 space-y-10 md:space-y-12">
                        {/* Timeline Spine Line Background */}
                        <div className="absolute left-[11px] md:left-[21px] top-6 bottom-6 w-[2px] bg-slate-200 origin-top pointer-events-none" />

                        {/* Animated Progress Spine Line */}
                        <motion.div
                            style={{ scaleY }}
                            className="absolute left-[11px] md:left-[21px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-600 to-emerald-500 origin-top pointer-events-none"
                        />

                        <AnimatePresence mode="popLayout">
                            {filteredExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    layout
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="relative"
                                >
                                    {/* Timeline Pin Indicator Node */}
                                    <div
                                        className={`absolute -left-[31px] md:-left-[44px] top-7 w-6 h-6 rounded-full border-4 border-white shadow-md flex items-center justify-center z-10 transition-transform ${
                                            exp.isCurrent
                                                ? "bg-emerald-500 ring-4 ring-emerald-100"
                                                : exp.isEducation
                                                ? "bg-indigo-600 ring-4 ring-indigo-50"
                                                : "bg-blue-600 ring-4 ring-blue-50"
                                        }`}
                                    >
                                        {exp.isCurrent && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                                        )}
                                    </div>

                                    {/* MILESTONE CARD */}
                                    <MilestoneCard exp={exp} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    /* ============================================================== */
                    /* --- VIEW MODE 2: EXECUTIVE BENTO GRID --- */
                    /* ============================================================== */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatePresence mode="popLayout">
                            {filteredExperiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    className="flex"
                                >
                                    <MilestoneCard exp={exp} isGrid />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </section>
    );
};

// Reusable Luxury Milestone Card Component
const MilestoneCard = ({ exp, isGrid = false }) => {
    return (
        <div
            className={`w-full bg-white rounded-3xl p-6 sm:p-8 md:p-9 border transition-all duration-300 relative group overflow-hidden ${
                exp.isCurrent
                    ? "border-slate-300 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(15,23,42,0.1)]"
                    : "border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08)] hover:border-slate-300"
            }`}
        >
            {/* TOP ACCENT GRADIENT */}
            <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                    exp.isCurrent
                        ? "from-blue-600 via-indigo-600 to-emerald-500"
                        : exp.isEducation
                        ? "from-indigo-600 to-purple-600"
                        : "from-blue-600 to-indigo-600"
                }`}
            />

            {/* TOP ROW: Brand Crest, Title, Status & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-slate-100">
                <div className="flex items-start sm:items-center gap-3.5">
                    {/* Brand Monogram Squircle Badge */}
                    <div
                        className={`w-12 h-12 rounded-2xl ${exp.monogramColor} border flex items-center justify-center font-bold text-sm tracking-wider shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200`}
                    >
                        {exp.monogram}
                    </div>

                    <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight">
                                {exp.role}
                            </h3>
                            <span
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                    exp.isCurrent
                                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
                                        : exp.isEducation
                                        ? "bg-indigo-50 text-indigo-700 border border-indigo-200/80"
                                        : "bg-slate-100 text-slate-700 border border-slate-200/70"
                                }`}
                            >
                                {exp.type}
                            </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-slate-800">
                            <span className="text-blue-600 font-bold">
                                {exp.company}
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="flex items-center gap-1 text-slate-500 font-normal text-xs sm:text-sm">
                                <MapPin size={13} />
                                {exp.location}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Period Pill */}
                <div className="self-start sm:self-auto flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200/80 shrink-0 shadow-2xs">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{exp.period}</span>
                </div>
            </div>

            {/* ROLE SUMMARY */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                {exp.description}
            </p>

            {/* KEY IMPACT & KPI RIBBON */}
            {exp.kpis && (
                <div className="flex flex-wrap gap-2.5 mb-6 p-3 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                    {exp.kpis.map((kpi, kIdx) => {
                        const KpiIcon = kpi.icon;
                        return (
                            <div
                                key={kIdx}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 text-xs shadow-2xs"
                            >
                                <KpiIcon size={14} className="text-blue-600" />
                                <span className="font-semibold text-slate-500">{kpi.label}:</span>
                                <span className="font-bold text-slate-900">{kpi.value}</span>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* HIGHLIGHTS CHECKLIST */}
            <div className="space-y-3 mb-6">
                {exp.highlights.map((item, hIdx) => (
                    <div
                        key={hIdx}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed"
                    >
                        <CheckCircle2 size={17} className="text-blue-600 mt-1 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                    </div>
                ))}
            </div>

            {/* FOOTER: TECH CHIPS & PROJECT DEPLOYMENTS */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-600 group-hover:border-blue-100 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {exp.projectLinks && (
                    <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0">
                        <span className="text-xs font-bold text-slate-400">Live Work:</span>
                        {exp.projectLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 bg-blue-50/80 px-2.5 py-1 rounded-md border border-blue-200/60 transition-colors group/link"
                            >
                                <span>{link.name}</span>
                                <ArrowUpRight
                                    size={12}
                                    className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Experience;
