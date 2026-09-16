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
    ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
    {
        step: 1,
        id: "webiox",
        role: "Founder & Lead Developer",
        company: "Webiox Digital Solution",
        period: "Apr 2026 – Present",
        location: "Surat, Gujarat, India",
        badge: "Active Venture • Founder",
        isCurrent: true,
        summary:
            "Dedicated technical partner for commercial brands and marketing agencies—delivering high-performance web platforms.",
        highlights: [
            "Built digital dealership platforms for Sadguru Car Surat (150+ car catalog) and Hariram Motors.",
            "Engineered custom staff portals with PWA capabilities for real-time mobile inventory management.",
            "Optimized edge delivery with Vercel and Cloudflare CDN to guarantee <1s page load speeds.",
        ],
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Vercel"],
        projectLinks: [
            { name: "webiox.tech", href: "https://webiox.tech/" },
            { name: "Sadguru Car Surat", href: "https://sadgurucarsurat.com/" },
            { name: "Hariram Motors", href: "https://www.hariramcars.com/" },
        ],
    },
    {
        step: 2,
        id: "arcelor",
        role: "Software Engineer",
        company: "Arcelor Technology Private Limited",
        period: "Feb 2026 – Mar 2026",
        location: "Surat, Gujarat, India",
        badge: "Production Engineering",
        isCurrent: false,
        summary:
            "Production web application engineering, modular UI development, and enterprise API integrations.",
        highlights: [
            "Developed reusable, modular React components adhering to modern frontend best practices.",
            "Integrated secure RESTful APIs with robust data flow and comprehensive error boundaries.",
            "Conducted performance profiling and cross-device optimization to eliminate client-side lag.",
        ],
        tech: ["React.js", "Node.js", "RESTful APIs", "State Management", "Performance Tuning"],
    },
    {
        step: 3,
        id: "bluestock",
        role: "Full-Stack Developer (Intern)",
        company: "Bluestock Fintech",
        period: "Sep 2025 – Nov 2025",
        location: "Pune, India (Remote)",
        badge: "Fintech Engineering",
        isCurrent: false,
        summary:
            "Production fintech modules, user onboarding validation pipelines, and responsive interfaces within an agile sprint team.",
        highlights: [
            "Built an end-to-end Company Registration & Verification module with dynamic validation.",
            "Refactored views for the HiringInsight platform, eliminating layout shift on mobile screens.",
            "Participated in daily standups, code reviews, and API contract design within sprint cycles.",
        ],
        tech: ["React.js", "PostgreSQL", "Node.js", "Express.js", "Agile Sprints"],
    },
    {
        step: 4,
        id: "education",
        role: "Bachelor of Computer Applications (BCA)",
        company: "SDJ International College (VNSGU)",
        period: "2023 – 2026",
        location: "Surat, Gujarat, India",
        badge: "Academics & National Rank",
        isCurrent: false,
        summary:
            "Computer science, database systems, data structures, and web application architecture, complemented by national honors.",
        highlights: [
            "Achieved National Rank in GREEN Olympiad, recognized by TERI and MoEFCC (Govt. of India).",
            "Completed Higher Secondary (Commerce) at JNV CBSE with 75.6%.",
            "Coursework in Database Management (MongoDB, MySQL, PostgreSQL) and System Architecture.",
        ],
        tech: ["Computer Science", "Database Systems", "Data Structures", "System Design"],
    },
];

const Experience = () => {
    // Default active milestone is Step 1 (Webiox)
    const [activeStep, setActiveStep] = useState(1);

    return (
        <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background Lighting */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-50/80 via-emerald-50/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* --- LEFT COLUMN: HEADING, NARRATIVE & READY TO START CARD (Span 5) --- */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28">
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
                            Simple Steps to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600">
                                Success.
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
                            From founding Webiox Digital Solutions to delivering commercial digital flagships and engineering fintech modules—explore the milestones that define my software engineering journey.
                        </motion.p>

                        {/* Quick Reassurance Highlights */}
                        <div className="mt-6 space-y-2.5">
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                <span>Founder @ Webiox Digital Solutions</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                <span>Commercial Dealership Platforms (Sadguru &amp; Hariram)</span>
                            </div>
                            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                <span>Sub-Second (&lt;1s) Core Web Vitals Optimization</span>
                            </div>
                        </div>

                        {/* "Ready to start?" Anchor Card (Directly Matching Reference Image) */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_36px_rgba(15,23,42,0.04)] relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />

                            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-2">
                                Ready to start?
                            </h3>
                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                                Have an upcoming web project, need a dedicated technical partner, or want to consult on full-stack architecture?
                            </p>

                            <a
                                href="https://wa.me/919664736245?text=Hi%20Manthan,%20I'd%20like%20to%20consult%20with%20you%20about%20a%20new%20project!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-sm tracking-wide shadow-[0_6px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.5)] transition-all active:scale-[0.98]"
                            >
                                <MessageCircle size={17} />
                                <span>LET'S TALK</span>
                            </a>

                            <p className="text-center text-[11px] text-slate-400 font-medium mt-3">
                                All queries are replied within <span className="text-slate-800 font-bold underline">24hrs</span>.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- RIGHT COLUMN: 4-STEP CONNECTED VERTICAL TIMELINE (Span 7) --- */}
                    <div className="lg:col-span-7 relative">
                        {/* Continuous Vertical Timeline Line */}
                        <div className="absolute left-6 sm:left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-200 pointer-events-none" />

                        {/* Timeline Milestone Steps */}
                        <div className="space-y-8 sm:space-y-10">
                            {milestones.map((milestone) => {
                                const isActive = activeStep === milestone.step;

                                return (
                                    <div
                                        key={milestone.id}
                                        onClick={() => setActiveStep(milestone.step)}
                                        className="relative flex items-start gap-4 sm:gap-6 group cursor-pointer"
                                    >
                                        {/* Numbered Step Circle Badge */}
                                        <div
                                            className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-base sm:text-lg shrink-0 transition-all duration-300 ${
                                                isActive
                                                    ? "bg-[#10b981] text-white shadow-[0_6px_20px_rgba(16,185,129,0.4)] ring-4 ring-emerald-50 scale-105"
                                                    : "bg-white border-2 border-slate-200 text-slate-700 shadow-xs hover:border-emerald-300"
                                            }`}
                                        >
                                            {milestone.step}
                                        </div>

                                        {/* Speech-Bubble Milestone Card */}
                                        <div
                                            className={`flex-1 rounded-3xl p-6 sm:p-7 relative transition-all duration-300 ${
                                                isActive
                                                    ? "bg-[#10b981] text-white shadow-[0_16px_36px_rgba(16,185,129,0.25)] ring-2 ring-emerald-400/40 scale-[1.01]"
                                                    : "bg-white border border-slate-200/90 text-slate-900 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:border-slate-300 hover:shadow-md"
                                            }`}
                                        >
                                            {/* Speech-Bubble Left Pointer Arrow */}
                                            <div
                                                className={`absolute -left-2.5 top-4 sm:top-5 w-0 h-0 border-y-[8px] border-y-transparent transition-colors ${
                                                    isActive
                                                        ? "border-r-[10px] border-r-[#10b981]"
                                                        : "border-r-[10px] border-r-white"
                                                }`}
                                            />

                                            {/* Top Meta: Role & Period */}
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-black/10">
                                                <div>
                                                    <h3 className={`text-lg sm:text-xl font-extrabold tracking-tight ${
                                                        isActive ? "text-white" : "text-slate-950"
                                                    }`}>
                                                        {milestone.role}
                                                    </h3>
                                                    <p className={`text-xs sm:text-sm font-bold ${
                                                        isActive ? "text-emerald-100" : "text-blue-600"
                                                    }`}>
                                                        {milestone.company}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                                        isActive
                                                            ? "bg-white/20 text-white"
                                                            : "bg-slate-100 text-slate-700"
                                                    }`}>
                                                        {milestone.period}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Summary Description */}
                                            <p className={`text-xs sm:text-sm leading-relaxed mb-4 font-normal ${
                                                isActive ? "text-emerald-50" : "text-slate-600"
                                            }`}>
                                                {milestone.summary}
                                            </p>

                                            {/* Key Highlights Checklist */}
                                            <div className="space-y-1.5 mb-4">
                                                {milestone.highlights.map((h, hIdx) => (
                                                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                                        <CheckCircle2
                                                            size={14}
                                                            className={`shrink-0 mt-0.5 ${
                                                                isActive ? "text-white" : "text-emerald-500"
                                                            }`}
                                                        />
                                                        <span className={isActive ? "text-white/95" : "text-slate-800"}>
                                                            {h}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech Stack Chips */}
                                            <div className="pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                                                {milestone.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                                            isActive
                                                                ? "bg-white/15 text-white border border-white/20"
                                                                : "bg-slate-50 border border-slate-200/80 text-slate-600"
                                                        }`}
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Live Project Links (for Webiox) */}
                                            {milestone.projectLinks && (
                                                <div className="mt-3 pt-3 border-t border-black/10 flex flex-wrap items-center gap-2">
                                                    <span className={`text-[11px] font-bold ${
                                                        isActive ? "text-emerald-100" : "text-slate-400"
                                                    }`}>
                                                        Live Deployments:
                                                    </span>
                                                    {milestone.projectLinks.map((link) => (
                                                        <a
                                                            key={link.name}
                                                            href={link.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                                                                isActive
                                                                    ? "bg-white text-emerald-800 hover:bg-emerald-50 shadow-xs"
                                                                    : "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/60"
                                                            }`}
                                                        >
                                                            <span>{link.name}</span>
                                                            <ExternalLink size={11} />
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
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
