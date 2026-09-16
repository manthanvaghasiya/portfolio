import React, { useState } from "react";
import {
    Layout,
    Server,
    Database,
    Cloud,
    Zap,
    Cpu,
    Sparkles,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
    {
        id: "frontend",
        title: "Frontend Engineering",
        subtitle: "High-performance, responsive interfaces",
        badge: "Client Architecture",
        kpi: "<1s Core Web Vitals",
        icon: Layout,
        accent: "from-blue-600 to-indigo-600",
        iconGradient: "bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25",
        skills: [
            "Next.js (App Router, SSR / SSG)",
            "React.js (Custom Hooks, Concurrent UI)",
            "TypeScript & Modern JavaScript (ES6+)",
            "Tailwind CSS & Utility Design Systems",
            "CSS Flexbox, Grid & Responsive UI",
            "Mobile-First Performance Tuning",
        ],
        techPills: ["Next.js 15", "React.js", "TypeScript", "Tailwind CSS"],
    },
    {
        id: "backend",
        title: "Backend & APIs",
        subtitle: "Scalable server logic & secure endpoints",
        badge: "Server & Microservices",
        kpi: "JWT & Role Auth",
        icon: Server,
        accent: "from-indigo-600 to-violet-600",
        iconGradient: "bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25",
        skills: [
            "Node.js & Express.js Microservices",
            "RESTful API Architecture & Contracts",
            "JWT Authentication & Role Authorization",
            "Middleware & Secure Request Pipelines",
            "Third-Party API Integrations & Webhooks",
            "Server-Side State & Session Handling",
        ],
        techPills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    },
    {
        id: "commercial",
        title: "Commercial Web Solutions",
        subtitle: "Conversion architectures & client impact",
        badge: "Flagship Production",
        kpi: "150+ Dynamic Inventory",
        icon: Zap,
        accent: "from-blue-600 via-indigo-600 to-violet-600",
        iconGradient: "bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25",
        skills: [
            "AutoDealer Schema & Technical Local SEO",
            "Dynamic Inventory Filtering & Showcase",
            "Custom Admin Dashboards & PWA Staff Portals",
            "Frictionless Inquiry & WhatsApp Booking",
            "Production Deployments (Sadguru & Hariram)",
            "High-Throughput Storefront Architecture",
        ],
        techPills: ["AutoDealer SEO", "PWA Portals", "WhatsApp Engine", "Cloudflare CDN"],
    },
    {
        id: "cloud",
        title: "DevOps & Cloud Infrastructure",
        subtitle: "Global edge networks & cloud deployments",
        badge: "Edge Deployment",
        kpi: "Global Edge CDN",
        icon: Cloud,
        accent: "from-sky-500 to-blue-600",
        iconGradient: "bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25",
        skills: [
            "Vercel Edge Network Deployment",
            "Render Cloud Hosting & Microservices",
            "Cloudflare CDN & Edge Caching",
            "ImageKit & Media Delivery Optimization",
            "Git & GitHub Collaborative Workflows",
            "Sub-Second Asset Delivery & Optimization",
        ],
        techPills: ["Vercel Edge", "Cloudflare CDN", "Render", "ImageKit"],
    },
    {
        id: "databases",
        title: "Databases & Storage",
        subtitle: "Relational & NoSQL data schemas",
        badge: "Data Modeling",
        kpi: "Indexed Aggregations",
        icon: Database,
        accent: "from-emerald-600 to-teal-600",
        iconGradient: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25",
        skills: [
            "MongoDB & Mongoose Schema Validation",
            "PostgreSQL (Relational Design & Indexing)",
            "Supabase (Auth & Realtime DB)",
            "MySQL Database Modeling",
            "Complex Aggregation Pipelines & Queries",
            "Data Integrity & Query Performance Tuning",
        ],
        techPills: ["MongoDB", "PostgreSQL", "Supabase", "Mongoose"],
    },
];

const Skills = () => {
    // Default active card is index 2: Commercial Web Solutions (Centerpiece)
    const [activeIndex, setActiveIndex] = useState(2);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    // Calculate circular delta for 5 cards: returns -2, -1, 0, 1, 2
    const getDelta = (index) => {
        let diff = index - activeIndex;
        if (diff > 2) diff -= skillCategories.length;
        if (diff < -2) diff += skillCategories.length;
        return diff;
    };

    return (
        <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/60 relative overflow-hidden">
            {/* Ambient Background Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-blue-100/60 via-indigo-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="mb-10 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Cpu size={13} />
                        Technical Architecture &amp; Stack
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                    >
                        Engineered for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Speed, Scale &amp; Precision.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg mt-3.5 font-normal leading-relaxed"
                    >
                        A battle-tested technical toolkit spanning modern React/Next.js frontends, scalable Node.js architectures, relational &amp; NoSQL databases, and global edge cloud infrastructure.
                    </motion.p>
                </div>

                {/* --- INTERACTIVE CATEGORY TABS --- */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        const isActive = activeIndex === idx;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none flex items-center gap-2 ${
                                    isActive
                                        ? "bg-slate-950 text-white shadow-sm scale-105"
                                        : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200/80 shadow-2xs hover:bg-slate-50"
                                }`}
                            >
                                <Icon size={14} className={isActive ? "text-blue-400" : "text-slate-400"} />
                                <span>{category.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* --- 5-CARD FANNED 3D PERSPECTIVE DECK (DESKTOP / TABLET) --- */}
                <div className="relative hidden md:flex items-center justify-center min-h-[520px] lg:min-h-[560px] select-none py-6">
                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous Architecture Card"
                        className="absolute left-2 lg:left-8 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all active:scale-95"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next Architecture Card"
                        className="absolute right-2 lg:right-8 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-slate-950 border border-slate-200/90 shadow-md hover:shadow-lg flex items-center justify-center transition-all active:scale-95"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Fanned Cards Container with 3D Perspective */}
                    <div
                        className="relative w-full max-w-5xl h-[480px] flex items-center justify-center"
                        style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
                    >
                        {skillCategories.map((category, idx) => {
                            const Icon = category.icon;
                            const delta = getDelta(idx);
                            const isActive = delta === 0;

                            // 3D Perspective Transform Values based on position
                            const xOffsets = {
                                "-2": -370,
                                "-1": -200,
                                "0": 0,
                                "1": 200,
                                "2": 370,
                            };

                            const rotations = {
                                "-2": 24,
                                "-1": 13,
                                "0": 0,
                                "1": -13,
                                "2": -24,
                            };

                            const scales = {
                                "-2": 0.84,
                                "-1": 0.93,
                                "0": 1.05,
                                "1": 0.93,
                                "2": 0.84,
                            };

                            const zIndices = {
                                "-2": 10,
                                "-1": 20,
                                "0": 35,
                                "1": 20,
                                "2": 10,
                            };

                            const opacities = {
                                "-2": 0.75,
                                "-1": 0.92,
                                "0": 1,
                                "1": 0.92,
                                "2": 0.75,
                            };

                            const x = xOffsets[delta.toString()] || 0;
                            const rotateY = rotations[delta.toString()] || 0;
                            const scale = scales[delta.toString()] || 1;
                            const zIndex = zIndices[delta.toString()] || 10;
                            const opacity = opacities[delta.toString()] || 1;

                            return (
                                <motion.div
                                    key={category.id}
                                    onClick={() => setActiveIndex(idx)}
                                    animate={{
                                        x,
                                        rotateY,
                                        scale,
                                        opacity,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 280,
                                        damping: 28,
                                        mass: 0.8,
                                    }}
                                    style={{
                                        zIndex,
                                        transformOrigin: "center center",
                                    }}
                                    className={`absolute w-[330px] lg:w-[360px] rounded-3xl p-6 lg:p-7 cursor-pointer transition-shadow duration-300 ${
                                        isActive
                                            ? "bg-white border-2 border-blue-500/80 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.2),0_10px_25px_-5px_rgba(15,23,42,0.06)] ring-4 ring-blue-50/60"
                                            : "bg-white/95 border border-slate-200/90 shadow-[0_12px_30px_-5px_rgba(15,23,42,0.05)] hover:border-slate-300"
                                    }`}
                                >
                                    {/* Top Colored Accent Strip */}
                                    <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r ${category.accent}`} />

                                    {/* Header Row */}
                                    <div className="flex items-start justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-2xl ${category.iconGradient} flex items-center justify-center shrink-0`}>
                                                <Icon size={22} />
                                            </div>
                                            <div>
                                                <h3 className="text-base lg:text-lg font-extrabold text-slate-950 tracking-tight leading-snug">
                                                    {category.title}
                                                </h3>
                                                <span className="text-[11px] font-mono font-bold text-blue-600">
                                                    {category.kpi}
                                                </span>
                                            </div>
                                        </div>

                                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 shrink-0">
                                            {category.badge}
                                        </span>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">
                                        {category.subtitle}
                                    </p>

                                    {/* Skills Checklist */}
                                    <div className="space-y-2 mb-5">
                                        {category.skills.slice(0, 5).map((skill) => (
                                            <div
                                                key={skill}
                                                className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50/80 px-2.5 py-1.5 rounded-lg border border-slate-200/70"
                                            >
                                                <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                                <span className="truncate">{skill}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom Tech Pills */}
                                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                                        {category.techPills.map((pill) => (
                                            <span
                                                key={pill}
                                                className="px-2 py-0.5 rounded bg-slate-100/90 text-[10px] font-bold text-slate-700"
                                            >
                                                {pill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* --- MOBILE ACCORDION / CAROUSEL FALLBACK (<768px) --- */}
                <div className="md:hidden space-y-4">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        const isExpanded = activeIndex === idx;

                        return (
                            <div
                                key={category.id}
                                className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                                    isExpanded
                                        ? "border-blue-500 shadow-md ring-2 ring-blue-50"
                                        : "border-slate-200/90 shadow-2xs"
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(idx)}
                                    className="w-full p-4 flex items-center justify-between text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl ${category.iconGradient} flex items-center justify-center shrink-0`}>
                                            <Icon size={18} />
                                        </div>
                                        <div>
                                            <h3 className="font-extrabold text-slate-950 text-sm">
                                                {category.title}
                                            </h3>
                                            <span className="text-[10px] font-mono text-blue-600 font-bold">
                                                {category.kpi}
                                            </span>
                                        </div>
                                    </div>

                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">
                                        {category.badge}
                                    </span>
                                </button>

                                {isExpanded && (
                                    <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-3">
                                        <p className="text-xs text-slate-500 font-normal">
                                            {category.subtitle}
                                        </p>
                                        <div className="space-y-1.5">
                                            {category.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="flex items-center gap-2 text-xs font-semibold text-slate-800 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200/70"
                                                >
                                                    <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                                                    <span>{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-2 flex flex-wrap gap-1">
                                            {category.techPills.map((pill) => (
                                                <span
                                                    key={pill}
                                                    className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-bold text-slate-700"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
