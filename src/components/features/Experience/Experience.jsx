import React from "react";
import {
    Briefcase,
    Calendar,
    MapPin,
    ExternalLink,
    Check,
    MessageCircle,
    ArrowUpRight,
    Sparkles,
    Zap,
    ShieldCheck,
    Globe2
} from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
    {
        id: "webiox",
        step: 1,
        role: "Founder & Lead Full-Stack Developer",
        company: "Webiox Digital Solution",
        period: "Apr 2026 – Present",
        location: "Surat, India",
        isCurrent: true,
        monogram: "WX",
        theme: "from-emerald-500 to-teal-600",
        nodeBg: "bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 text-emerald-400 border-slate-800",
        badge: "Active Venture • Founder",
        tagline: "Dedicated technical partner for commercial brands, automotive dealerships, and international enterprises.",
        highlights: [
            "Delivered international commercial web flagships including Qissa (Sevenoaks, UK) and Royal Drive (Kerala).",
            "Built digital dealership platforms for Sadguru Car Surat (150+ car catalog) & Hariram Motors with <0.8s CDN speed.",
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
        nodeBg: "bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-blue-300 border-blue-900/60",
        badge: "Production Engineering",
        tagline: "Production web application engineering, modular component systems & API integrations.",
        highlights: [
            "Developed reusable, modular React components adhering to modern frontend best practices.",
            "Integrated secure REST APIs with robust state management and optimized client-side bundles.",
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
        nodeBg: "bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-indigo-300 border-indigo-900/60",
        badge: "Fintech Engineering",
        tagline: "Fintech engineering, user onboarding validation pipelines & responsive UI architecture.",
        highlights: [
            "Built an end-to-end Company Registration & Verification KYC module with dynamic validation.",
            "Refactored HiringInsight platform views, eliminating layout shifts in fast agile sprint cycles.",
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
        nodeBg: "bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-teal-300 border-teal-900/60",
        badge: "Academics & National Rank",
        tagline: "Computer science foundation, database systems, data structures & system architecture.",
        highlights: [
            "National Rank holder in GREEN Olympiad, recognized by TERI and MoEFCC (Government of India).",
            "Higher Secondary (Commerce) at JNV CBSE with 75.6% distinction; core foundation in DBMS & algorithms.",
        ],
        tech: ["Computer Science", "Database Systems (DBMS)", "Data Structures", "System Design"],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden">
            {/* Ambient Background Lighting */}
            <div className="absolute top-1/3 -left-20 w-[600px] h-[400px] bg-gradient-to-tr from-blue-100/50 via-emerald-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                    
                    {/* --- LEFT COLUMN: STICKY EDITORIAL & VALUE SUMMARY (Span 5) --- */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider shadow-2xs">
                            <Briefcase size={13} className="text-blue-500" />
                            Career Milestones
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                            Engineering Journey &amp;{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                                Proven Leadership.
                            </span>
                        </h2>

                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                            A track record of technical ownership—founding <span className="font-semibold text-slate-900">Webiox Digital Solution</span>, shipping international commercial platforms, and engineering high-availability full-stack systems.
                        </p>

                        {/* Credibility Micro-Tiles */}
                        <div className="grid grid-cols-2 gap-3 pt-1">
                            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                                <div className="flex items-center gap-2 text-blue-600 mb-1">
                                    <Globe2 size={16} />
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Global Reach</span>
                                </div>
                                <div className="text-base font-extrabold text-slate-950">UK, Swiss &amp; India</div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                                    <Zap size={16} />
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Performance</span>
                                </div>
                                <div className="text-base font-extrabold text-slate-950">&lt; 0.8s CDN Load</div>
                            </div>
                        </div>

                        {/* Executive 'Let's Collaborate' Card */}
                        <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] relative overflow-hidden group">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />
                            
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider">
                                    Available for New Projects
                                </span>
                            </div>

                            <h3 className="text-lg font-extrabold text-slate-950 tracking-tight mb-1.5">
                                Need a Technical Partner?
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                                Available for web development flagships, digital dealership platforms, and full-stack architecture roles.
                            </p>

                            <div className="flex items-center gap-2.5">
                                <a
                                    href="https://wa.me/919664736245?text=Hi%20Manthan,%20I%20would%20like%20to%20discuss%20a%20project!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(16,185,129,0.3)] active:scale-95 transition-all"
                                >
                                    <MessageCircle size={15} />
                                    <span>WhatsApp Direct</span>
                                </a>

                                <a
                                    href="mailto:manthanvaghasiya60@gmail.com"
                                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                                >
                                    <span>Email</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: SOPHISTICATED TIMELINE CARDS (Span 7) --- */}
                    <div className="lg:col-span-7 relative">
                        {/* Connected Vertical Timeline Spine */}
                        <div className="absolute left-6 sm:left-7 top-8 bottom-8 w-[2px] bg-gradient-to-b from-emerald-500 via-blue-400 to-slate-200 pointer-events-none" />

                        <div className="space-y-6 sm:space-y-7">
                            {milestones.map((m, idx) => (
                                <motion.div
                                    key={m.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                                    className="relative flex items-start gap-4 sm:gap-6 group"
                                >
                                    {/* Monogram Node Tile */}
                                    <div className="relative z-10 shrink-0">
                                        <div
                                            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm tracking-wider shadow-sm transition-all duration-300 border ${m.nodeBg} ${
                                                m.isCurrent
                                                    ? "ring-4 ring-emerald-50 shadow-emerald-500/25 scale-105"
                                                    : "group-hover:scale-105"
                                            }`}
                                        >
                                            {m.monogram}
                                        </div>

                                        {/* Active Pulse for Current Role */}
                                        {m.isCurrent && (
                                            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white" />
                                            </span>
                                        )}
                                    </div>

                                    {/* Elevated Minimalist Card */}
                                    <div className="flex-1 rounded-3xl p-5 sm:p-6 bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_36px_rgba(15,23,42,0.06)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden">
                                        {/* Top Accent Gradient Line */}
                                        <div className={`absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r ${m.theme}`} />

                                        {/* Card Header: Role & Meta */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                                            <div>
                                                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 tracking-tight">
                                                    {m.role}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 font-semibold mt-0.5">
                                                    <span className="text-blue-600 font-bold">{m.company}</span>
                                                    <span className="text-slate-300">•</span>
                                                    <span className="text-slate-500 font-normal flex items-center gap-1">
                                                        <MapPin size={12} className="text-slate-400" />
                                                        {m.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Period Capsule */}
                                            <div className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 text-xs font-bold shadow-2xs">
                                                <Calendar size={12} className="text-slate-400" />
                                                <span>{m.period}</span>
                                            </div>
                                        </div>

                                        {/* Tagline */}
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-3.5 font-normal">
                                            {m.tagline}
                                        </p>

                                        {/* 2 High-Impact Accomplishment Checkpoints */}
                                        <div className="space-y-2 mb-4">
                                            {m.highlights.map((h, hIdx) => (
                                                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                                        <Check size={10} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-snug">{h}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Live Work Deployment Shelf (Webiox) */}
                                        {m.liveLinks && (
                                            <div className="mb-4 p-2.5 rounded-2xl bg-blue-50/50 border border-blue-200/60 flex flex-wrap items-center gap-1.5">
                                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 mr-1 flex items-center gap-1">
                                                    <Sparkles size={11} />
                                                    Shipped:
                                                </span>
                                                {m.liveLinks.map((link) => (
                                                    <a
                                                        key={link.name}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white text-blue-700 hover:text-blue-900 text-[11px] font-bold border border-blue-200 shadow-2xs hover:shadow-xs transition-all"
                                                    >
                                                        <span>{link.name}</span>
                                                        <ExternalLink size={10} />
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        {/* Tech Stack Chips Footer */}
                                        <div className="pt-2.5 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                                            <span className="text-[10px] uppercase font-bold text-slate-400 mr-1">
                                                Stack:
                                            </span>
                                            {m.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] sm:text-[11px] font-medium text-slate-700"
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
