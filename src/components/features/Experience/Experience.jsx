import React from "react";
import {
    Briefcase,
    Calendar,
    MapPin,
    ExternalLink,
    Check,
    MessageCircle,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
    {
        id: "webiox",
        step: 1,
        role: "Founder & Lead Developer",
        company: "Webiox Digital Solution",
        period: "Apr 2026 – Present",
        location: "Surat, India",
        isCurrent: true,
        monogram: "WX",
        theme: "from-emerald-500 to-teal-600",
        tagline: "Technical partner for commercial brands, dealerships & international flagships.",
        highlights: [
            "Shipped commercial web flagships for Qissa (Sevenoaks, UK) and Royal Drive (Kerala).",
            "Engineered dealership platforms for Sadguru Car Surat (150+ cars) & Hariram Motors with <0.8s CDN speed.",
        ],
        liveLinks: [
            { name: "webiox.tech", href: "https://webiox.tech/" },
            { name: "Qissa (UK)", href: "https://www.qissa.co.uk/" },
            { name: "Royal Drive", href: "https://www.royaldrive.in/" },
            { name: "Hariram Motors", href: "https://hariramcars.com/" },
        ],
        tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Cloudflare CDN"],
    },
    {
        id: "arcelor",
        step: 2,
        role: "Software Engineer",
        company: "Arcelor Technology",
        period: "Feb 2026 – Mar 2026",
        location: "Surat, India",
        isCurrent: false,
        monogram: "AT",
        theme: "from-blue-600 to-indigo-600",
        tagline: "Production web application engineering & modular component systems.",
        highlights: [
            "Developed reusable, modular React components and state management pipelines.",
            "Integrated secure REST APIs and optimized client-side bundles for lag-free performance.",
        ],
        tech: ["React.js", "JavaScript (ES6+)", "REST APIs", "State Management"],
    },
    {
        id: "bluestock",
        step: 3,
        role: "Full-Stack Developer (Intern)",
        company: "Bluestock Fintech",
        period: "Sep 2025 – Nov 2025",
        location: "Pune, India (Remote)",
        isCurrent: false,
        monogram: "BF",
        theme: "from-indigo-600 to-purple-600",
        tagline: "Fintech engineering & customer onboarding verification pipelines.",
        highlights: [
            "Built end-to-end Company Registration & Verification KYC module with dynamic validation.",
            "Refactored HiringInsight platform views, eliminating mobile layout shifts within agile sprints.",
        ],
        tech: ["React.js", "PostgreSQL", "Node.js", "Express.js"],
    },
    {
        id: "education",
        step: 4,
        role: "Bachelor of Computer Applications (BCA)",
        company: "SDJ International College (VNSGU)",
        period: "2023 – 2026",
        location: "Surat, India",
        isCurrent: false,
        monogram: "BCA",
        theme: "from-teal-600 to-cyan-600",
        tagline: "Computer science foundation, data structures & system architecture.",
        highlights: [
            "National Rank holder in GREEN Olympiad (TERI & MoEFCC, Government of India).",
            "HSC (Commerce) at JNV CBSE with 75.6% distinction; core foundation in DBMS & Data Structures.",
        ],
        tech: ["Computer Science", "Database Systems", "Data Structures", "System Design"],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* --- LEFT COLUMN: COMPACT INTRO & CTA (Span 4) --- */}
                    <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
                            <Briefcase size={13} />
                            Career Milestones
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                            Engineering Journey &amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                                Proven Impact.
                            </span>
                        </h2>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            Chronological milestones spanning technical leadership at Webiox, production engineering, and academic achievements.
                        </p>

                        {/* Minimalist Contact Card */}
                        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs relative overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-emerald-500" />
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                                    Open for Opportunities
                                </span>
                            </div>
                            <p className="text-xs text-slate-500 leading-normal mb-3.5">
                                Available for technical consulting, client platforms &amp; engineering roles.
                            </p>
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://wa.me/919664736245?text=Hi%20Manthan,%20I%20would%20like%20to%20discuss%20a%20project!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-all"
                                >
                                    <MessageCircle size={14} />
                                    <span>WhatsApp</span>
                                </a>
                                <a
                                    href="mailto:manthanvaghasiya60@gmail.com"
                                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                                >
                                    <span>Email</span>
                                    <ArrowUpRight size={13} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: MINIMALIST TIMELINE CARDS (Span 8) --- */}
                    <div className="lg:col-span-8 relative">
                        {/* Connected Vertical Timeline Spine */}
                        <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-400 to-slate-200 pointer-events-none" />

                        <div className="space-y-4 sm:space-y-5">
                            {milestones.map((m, idx) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                                    className="relative flex items-start gap-3.5 sm:gap-5"
                                >
                                    {/* Monogram Node */}
                                    <div className="relative z-10 shrink-0">
                                        <div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-[11px] sm:text-xs tracking-wider shadow-2xs ${
                                                m.isCurrent
                                                    ? "bg-gradient-to-br from-emerald-500 to-teal-700 text-white ring-4 ring-emerald-50 shadow-emerald-500/20"
                                                    : "bg-white text-slate-800 border border-slate-200/90"
                                            }`}
                                        >
                                            {m.monogram}
                                        </div>
                                        {m.isCurrent && (
                                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white" />
                                            </span>
                                        )}
                                    </div>

                                    {/* Minimalist Card */}
                                    <div className="flex-1 rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.02)] hover:border-slate-300 hover:shadow-xs transition-all">
                                        {/* Card Top: Role, Company & Period */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-slate-100">
                                            <div>
                                                <h3 className="text-sm sm:text-base font-extrabold text-slate-950 tracking-tight">
                                                    {m.role}
                                                </h3>
                                                <div className="flex items-center gap-1.5 text-xs text-slate-600 font-semibold mt-0.5">
                                                    <span className="text-blue-600 font-bold">{m.company}</span>
                                                    <span className="text-slate-300">•</span>
                                                    <span className="text-slate-400 font-normal flex items-center gap-0.5">
                                                        <MapPin size={11} />
                                                        {m.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200/70 text-slate-700 text-[11px] font-bold">
                                                <Calendar size={11} className="text-slate-400" />
                                                <span>{m.period}</span>
                                            </div>
                                        </div>

                                        {/* 1-Sentence Tagline */}
                                        <p className="text-slate-600 text-xs leading-relaxed my-2.5 font-normal">
                                            {m.tagline}
                                        </p>

                                        {/* 2 Concise Bullet Points */}
                                        <div className="space-y-1.5 mb-3">
                                            {m.highlights.map((h, hIdx) => (
                                                <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check size={9} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-snug">{h}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Client Links (Webiox only) */}
                                        {m.liveLinks && (
                                            <div className="mb-3 flex flex-wrap items-center gap-1.5">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1">
                                                    Live:
                                                </span>
                                                {m.liveLinks.map((link) => (
                                                    <a
                                                        key={link.name}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 text-[10px] font-bold border border-blue-200/60 transition-colors"
                                                    >
                                                        <span>{link.name}</span>
                                                        <ExternalLink size={9} />
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap items-center gap-1 pt-2 border-t border-slate-100">
                                            {m.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/70 text-[10px] font-medium text-slate-600"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
