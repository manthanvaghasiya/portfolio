import React, { useState } from "react";
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
    MessageCircle,
    ExternalLink,
    Code2,
    Compass,
    ChevronRight,
    Laptop,
    Check
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
    {
        id: "webiox",
        step: 1,
        role: "Founder & Lead Full-Stack Developer",
        company: "Webiox Digital Solution",
        period: "Apr 2026 – Present",
        location: "Surat, Gujarat, India",
        badge: "Active Venture • Founder",
        isCurrent: true,
        category: "Commercial Leadership",
        monogram: "WX",
        theme: {
            accent: "emerald",
            gradient: "from-emerald-500 to-teal-600",
            lightBg: "bg-emerald-50/70",
            border: "border-emerald-200",
            text: "text-emerald-700",
            badgeBg: "bg-emerald-100/80 text-emerald-800 border-emerald-200/80",
            ring: "ring-emerald-400/30",
        },
        summary:
            "Dedicated technical partner for commercial brands, automotive dealerships, and international enterprises—architecting high-speed web platforms with sub-second response times.",
        kpis: [
            { label: "Global Reach", value: "UK, Swiss & India", icon: Compass },
            { label: "Page Speed", value: "< 0.8s CDN Load", icon: Zap },
            { label: "Inventory Scale", value: "150+ Vehicles", icon: Layers },
        ],
        highlights: [
            "Delivered international commercial web flagships including Qissa (Sevenoaks, UK) and Royal Drive (Kerala).",
            "Built digital dealership platforms for Sadguru Car Surat (150+ car catalog) and Hariram Motors with PWA staff portals.",
            "Optimized global edge delivery with Next.js and Cloudflare CDN to guarantee sub-second (<0.8s) page load speeds.",
            "Maintains 100% clean architecture with modular React components, typed APIs, and automated deployments.",
        ],
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Cloudflare CDN", "Vercel"],
        projectLinks: [
            { name: "webiox.tech", href: "https://webiox.tech/" },
            { name: "Qissa (UK)", href: "https://www.qissa.co.uk/" },
            { name: "Royal Drive", href: "https://www.royaldrive.in/" },
            { name: "Hariram Motors", href: "https://hariramcars.com/" },
        ],
    },
    {
        id: "arcelor",
        step: 2,
        role: "Software Engineer",
        company: "Arcelor Technology Private Limited",
        period: "Feb 2026 – Mar 2026",
        location: "Surat, Gujarat, India",
        badge: "Production Engineering",
        isCurrent: false,
        category: "Software Engineering",
        monogram: "AT",
        theme: {
            accent: "blue",
            gradient: "from-blue-600 to-indigo-600",
            lightBg: "bg-blue-50/70",
            border: "border-blue-200",
            text: "text-blue-700",
            badgeBg: "bg-blue-100/80 text-blue-800 border-blue-200/80",
            ring: "ring-blue-400/30",
        },
        summary:
            "Production web application engineering, scalable UI architecture, enterprise API integration, and client-side performance profiling.",
        kpis: [
            { label: "Focus", value: "Modular React UI", icon: Layers },
            { label: "Architecture", value: "REST Services", icon: ShieldCheck },
            { label: "Optimization", value: "Bundle Tuning", icon: Zap },
        ],
        highlights: [
            "Developed reusable, modular React components adhering to strict frontend design systems and performance standards.",
            "Integrated secure RESTful APIs with robust state management, clean data flows, and comprehensive error boundaries.",
            "Conducted runtime performance profiling and cross-device optimization to eliminate client-side UI lag.",
        ],
        tech: ["JavaScript (ES6+)", "React.js", "Node.js", "RESTful APIs", "State Management", "Performance Tuning"],
    },
    {
        id: "bluestock",
        step: 3,
        role: "Full-Stack Developer (Intern)",
        company: "Bluestock Fintech",
        period: "Sep 2025 – Nov 2025",
        location: "Pune, India (Remote)",
        badge: "Fintech Engineering",
        isCurrent: false,
        category: "Fintech Engineering",
        monogram: "BF",
        theme: {
            accent: "indigo",
            gradient: "from-indigo-600 to-purple-600",
            lightBg: "bg-indigo-50/70",
            border: "border-indigo-200",
            text: "text-indigo-700",
            badgeBg: "bg-indigo-100/80 text-indigo-800 border-indigo-200/80",
            ring: "ring-indigo-400/30",
        },
        summary:
            "Engineered secure fintech modules, multi-step customer verification pipelines, and responsive interfaces within fast-paced agile sprint cycles.",
        kpis: [
            { label: "Core Module", value: "Company KYC", icon: ShieldCheck },
            { label: "Platform", value: "HiringInsight", icon: Laptop },
            { label: "Database", value: "PostgreSQL", icon: Zap },
        ],
        highlights: [
            "Built an end-to-end Company Registration & Verification module with dynamic validation and multi-tier KYC pipelines.",
            "Refactored views for the HiringInsight platform, eliminating layout shift and elevating mobile UX.",
            "Participated in daily standups, peer code reviews, and API contract specifications within agile sprint cycles.",
        ],
        tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "REST APIs", "Form Validation", "Agile Sprints"],
    },
    {
        id: "education",
        step: 4,
        role: "Bachelor of Computer Applications (BCA)",
        company: "SDJ International College (VNSGU)",
        period: "2023 – 2026",
        location: "Surat, Gujarat, India",
        badge: "Academics & National Rank",
        isCurrent: false,
        category: "Education & Honors",
        monogram: "BCA",
        theme: {
            accent: "teal",
            gradient: "from-teal-600 to-cyan-600",
            lightBg: "bg-teal-50/70",
            border: "border-teal-200",
            text: "text-teal-700",
            badgeBg: "bg-teal-100/80 text-teal-800 border-teal-200/80",
            ring: "ring-teal-400/30",
        },
        summary:
            "Rigorous foundation in computer science, database management systems, data structures, and scalable web architectures complemented by national-level recognition.",
        kpis: [
            { label: "Olympiad", value: "National Rank", icon: Trophy },
            { label: "High School", value: "75.6% Distinction", icon: GraduationCap },
            { label: "Core Focus", value: "DBMS & Systems", icon: Code2 },
        ],
        highlights: [
            "Achieved National Rank in GREEN Olympiad, recognized by TERI and MoEFCC (Government of India).",
            "Completed Higher Secondary Certificate (Commerce) at JNV CBSE with 75.6% distinction.",
            "In-depth academic coursework covering Database Management Systems (MongoDB, MySQL, PostgreSQL), Data Structures, and Software Engineering.",
        ],
        tech: ["Computer Science", "Database Systems (DBMS)", "Data Structures", "System Design", "SQL / NoSQL"],
    },
];

const Experience = () => {
    const [selectedId, setSelectedId] = useState("webiox");

    return (
        <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background Gradient Glows */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[400px] bg-gradient-to-tr from-blue-100/60 via-emerald-100/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-0 w-[500px] h-[350px] bg-gradient-to-bl from-indigo-100/50 via-teal-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    
                    {/* --- LEFT COLUMN: EDITORIAL INTRO & VALUE PROPOSITION (Span 5) --- */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                        {/* Section Pill Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                        >
                            <Briefcase size={13} />
                            Career Milestones
                        </motion.div>

                        {/* Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                        >
                            Engineering Leadership &{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                                Proven Impact.
                            </span>
                        </motion.h2>

                        {/* Narrative Intro */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed font-normal"
                        >
                            From establishing <span className="font-semibold text-slate-900">Webiox Digital Solution</span> as a trusted technical partner to building commercial automotive portals, engineering fintech modules, and academic honors—here is a chronological record of my software engineering career.
                        </motion.p>

                        {/* Core Pillars Checklist */}
                        <div className="mt-6 space-y-3">
                            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Active Technical Venture</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Leading full-stack delivery for UK, Swiss, and Indian clients.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                                    <Zap size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">High-Performance Obsessed</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Core Web Vitals optimized, edge caching, sub-second responses.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0 mt-0.5 text-indigo-600">
                                    <ShieldCheck size={16} />
                                </div>
                                <div>
                                    <h4 className="text-xs sm:text-sm font-bold text-slate-900">Production-Grade Standards</h4>
                                    <p className="text-[12px] text-slate-500 mt-0.5">Modular component systems, secure APIs, and responsive UI.</p>
                                </div>
                            </div>
                        </div>

                        {/* "Let's Collaborate" Direct Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

                            <div className="flex items-center gap-2 mb-2">
                                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700">Open for New Opportunities</span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-2">
                                Looking for a Lead Engineer?
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                                Whether you need a dedicated technical partner for a commercial platform or want to discuss full-stack engineering roles—I'm ready to connect.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/919664736245?text=Hi%20Manthan,%20I'd%20like%20to%20discuss%20a%20project%20or%20engineering%20opportunity!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] transition-all active:scale-[0.98]"
                                >
                                    <MessageCircle size={16} />
                                    <span>WhatsApp Direct</span>
                                </a>

                                <a
                                    href="mailto:manthanvaghasiya60@gmail.com"
                                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-all"
                                >
                                    <span>Email Me</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>

                            <p className="text-center text-[11px] text-slate-400 font-medium mt-3.5">
                                Response guaranteed within <span className="text-slate-700 font-bold">24 hours</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- RIGHT COLUMN: CHRONOLOGICAL TIMELINE CARDS (Span 7) --- */}
                    <div className="lg:col-span-7 relative">
                        {/* Connected Vertical Timeline Spine */}
                        <div className="absolute left-6 sm:left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-500 to-slate-200 pointer-events-none" />

                        <div className="space-y-8 sm:space-y-10">
                            {milestones.map((milestone, idx) => {
                                const isSelected = selectedId === milestone.id;

                                return (
                                    <motion.div
                                        key={milestone.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        onClick={() => setSelectedId(milestone.id)}
                                        className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer"
                                    >
                                        {/* Timeline Node Badge */}
                                        <div className="relative z-10 shrink-0">
                                            <div
                                                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-sm transition-all duration-300 ${
                                                    milestone.isCurrent
                                                        ? "bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-[0_8px_20px_rgba(16,185,129,0.35)] ring-4 ring-emerald-50 scale-105"
                                                        : isSelected
                                                        ? "bg-slate-900 text-white ring-4 ring-slate-100 shadow-md"
                                                        : "bg-white text-slate-700 border-2 border-slate-200/90 hover:border-slate-400 group-hover:scale-105"
                                                }`}
                                            >
                                                <span>{milestone.monogram}</span>
                                                <span className="text-[9px] sm:text-[10px] font-bold opacity-80 mt-0.5">
                                                    0{milestone.step}
                                                </span>
                                            </div>

                                            {/* Pulse Dot for Active Venture */}
                                            {milestone.isCurrent && (
                                                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white" />
                                                </span>
                                            )}
                                        </div>

                                        {/* Milestone Card */}
                                        <div
                                            className={`flex-1 rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-300 relative overflow-hidden ${
                                                isSelected
                                                    ? "border-slate-300 shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-2 ring-blue-500/10 -translate-y-0.5"
                                                    : "border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:border-slate-300 hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
                                            }`}
                                        >
                                            {/* Top Subtle Gradient Accent Line */}
                                            <div
                                                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${milestone.theme.gradient}`}
                                            />

                                            {/* Header: Role, Company, Period & Badges */}
                                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                        <span
                                                            className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${milestone.theme.badgeBg}`}
                                                        >
                                                            {milestone.badge}
                                                        </span>
                                                        {milestone.isCurrent && (
                                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200/80 inline-flex items-center gap-1">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                                Active Role
                                                            </span>
                                                        )}
                                                    </div>

                                                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                                                        {milestone.role}
                                                    </h3>

                                                    <div className="flex flex-wrap items-center gap-2 mt-1 text-xs sm:text-sm font-semibold">
                                                        <span className="text-slate-900 font-bold">{milestone.company}</span>
                                                        <span className="text-slate-300">•</span>
                                                        <span className="text-slate-500 font-normal flex items-center gap-1">
                                                            <MapPin size={13} className="text-slate-400" />
                                                            {milestone.location}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Period Capsule */}
                                                <div className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 text-xs font-bold shadow-2xs">
                                                    <Calendar size={13} className="text-slate-400" />
                                                    <span>{milestone.period}</span>
                                                </div>
                                            </div>

                                            {/* Summary */}
                                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-4 mb-5 font-normal">
                                                {milestone.summary}
                                            </p>

                                            {/* Key KPIs Ribbon */}
                                            {milestone.kpis && (
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5 p-2.5 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                                                    {milestone.kpis.map((kpi, kIdx) => {
                                                        const KpiIcon = kpi.icon;
                                                        return (
                                                            <div
                                                                key={kIdx}
                                                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                                                            >
                                                                <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                                                    <KpiIcon size={13} />
                                                                </div>
                                                                <div className="overflow-hidden">
                                                                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider truncate">
                                                                        {kpi.label}
                                                                    </div>
                                                                    <div className="text-xs font-extrabold text-slate-900 truncate">
                                                                        {kpi.value}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {/* Highlights Checklist */}
                                            <div className="space-y-2.5 mb-6">
                                                {milestone.highlights.map((h, hIdx) => (
                                                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                                        <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                            <Check size={11} strokeWidth={3} />
                                                        </div>
                                                        <span className="text-slate-700 leading-snug">
                                                            {h}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Live Deployments (if present) */}
                                            {milestone.projectLinks && (
                                                <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/80 to-emerald-50/60 border border-blue-200/60">
                                                    <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                                        <Sparkles size={12} className="text-blue-600" />
                                                        <span>Shipped Client Work</span>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {milestone.projectLinks.map((link) => (
                                                            <a
                                                                key={link.name}
                                                                href={link.href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-blue-200/80 text-blue-700 hover:text-blue-900 hover:border-blue-300 font-bold text-xs shadow-2xs hover:shadow-xs transition-all group/link"
                                                            >
                                                                <span>{link.name}</span>
                                                                <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tech Stack Chips Footer */}
                                            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                                                <span className="text-[10px] uppercase font-bold text-slate-400 mr-1.5 tracking-wider">
                                                    Tech Stack:
                                                </span>
                                                {milestone.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/90 text-[11px] font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
