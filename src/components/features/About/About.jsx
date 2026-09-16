import React from "react";
import { User, Code2, Zap, Trophy, GraduationCap, Building2, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs"
                    >
                        <User size={13} />
                        About Me
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                    >
                        Founder@Webiox & Technical Partner for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Startups & Growing Brands.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg mt-4 font-normal leading-relaxed"
                    >
                        Most agencies and founders don't need just another freelancer buried in tickets. They need a reliable technical partner who understands the business goal, handles full-stack architecture, and ships scalable products that drive direct revenue.
                    </motion.p>
                </div>

                {/* --- BENTO GRID LAYOUT --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">

                    {/* 1. THE TECHNICAL PARTNER PHILOSOPHY (Col Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-9 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between relative overflow-hidden group"
                    >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500" />

                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform">
                                    <Building2 size={24} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://webiox.tech/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 transition-colors inline-flex items-center gap-1 shadow-2xs"
                                    >
                                        <span>webiox.tech</span>
                                        <ArrowUpRight size={12} />
                                    </a>
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                                        Engineering Studio
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                Webiox Digital Solution — Dedicated Engineering Arm
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 font-normal">
                                Dedicated frontend &amp; backend engineering arm for founders and marketing agencies—delivering sub-second web platforms without the friction and overhead of hiring in-house.
                            </p>

                            {/* 3 Visual Key Metric Chips */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-5">
                                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Architecture</span>
                                    <span className="text-xs font-extrabold text-slate-900 block">React, Next.js &amp; Node</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Speed</span>
                                    <span className="text-xs font-extrabold text-emerald-700 block">&lt;1s Core Web Vitals</span>
                                </div>
                                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Engagement</span>
                                    <span className="text-xs font-extrabold text-blue-700 block">Zero In-House Overhead</span>
                                </div>
                            </div>
                        </div>

                        {/* Core Competencies Badges */}
                        <div className="pt-4 border-t border-slate-100">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                                Core Capabilities
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "Custom Web Portals",
                                    "Next.js & React Frontend",
                                    "Node.js Backend APIs",
                                    "Sub-Second Core Web Vitals",
                                    "Direct Booking Optimization",
                                ].map((badge) => (
                                    <span
                                        key={badge}
                                        className="px-3 py-1 rounded-full bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-200 text-xs font-semibold text-slate-700 hover:text-blue-900 transition-colors shadow-2xs"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. PROVEN AUTOMATION IMPACT - LUXURY LIGHT MODE (Col Span 1) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-50/90 via-indigo-50/50 to-white border border-blue-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(37,99,235,0.06)] hover:shadow-[0_20px_45px_-10px_rgba(37,99,235,0.12)] relative overflow-hidden group"
                    >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

                        {/* Ambient subtle background glow */}
                        <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-2xs mb-4 group-hover:scale-105 transition-transform">
                                <Zap size={24} />
                            </div>

                            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-1.5 block">
                                Core Performance
                            </span>

                            <h4 className="text-xl font-extrabold tracking-tight text-slate-950 mb-2.5 group-hover:text-blue-600 transition-colors">
                                Sub-Second Load Speeds &amp; 100% Core Web Vitals
                            </h4>

                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                                Modern architectures built with <b className="text-slate-900 font-semibold">Next.js</b> and <b className="text-slate-900 font-semibold">edge CDN caching</b> to eliminate bottlenecks.
                            </p>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                                    <span>100% Mobile &amp; Desktop PageSpeed</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                                    <span>Global Edge Caching via Cloudflare</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                                    <span>Automated Media Compression Pipelines</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 pt-4 border-t border-blue-100/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
                            <span>Next.js • React • Node.js • Cloudflare</span>
                            <Sparkles size={14} className="text-blue-600" />
                        </div>
                    </motion.div>

                    {/* 3. EDUCATION & MILESTONES (Col Span 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08)] transition-all flex flex-col justify-between relative overflow-hidden group"
                    >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500" />

                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                <GraduationCap size={16} className="text-blue-600" />
                                Education &amp; Academic Foundation
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* College */}
                                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-colors">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                                        2023 – 2026
                                    </span>
                                    <h4 className="text-base font-bold text-slate-900 mb-1">
                                        Bachelor of Computer Applications (BCA)
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        SDJ International College (VNSGU), Surat
                                    </p>
                                    <p className="text-xs text-slate-600 mt-2 font-medium">
                                        Specialization: Computer Programming &amp; Database Architecture
                                    </p>
                                </div>

                                {/* School */}
                                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-blue-50/40 hover:border-blue-200 transition-colors">
                                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                                        CBSE – 75.6%
                                    </span>
                                    <h4 className="text-base font-bold text-slate-900 mb-1">
                                        Senior Secondary (Commerce)
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        Jawahar Navodaya Vidyalaya (JNV)
                                    </p>
                                    <p className="text-xs text-slate-600 mt-2 font-medium">
                                        Strong foundation in business logic, accounting &amp; mathematics
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Honors */}
                        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                            <div className="flex items-center gap-2">
                                <Trophy size={15} className="text-amber-500" />
                                <span><b>GREEN Olympiad Rank</b> (Ministry of Environment &amp; Climate Change, Govt. of India)</span>
                            </div>
                            <span className="text-slate-300 hidden sm:inline">•</span>
                            <span>Regional-level Volleyball Player (District Cluster)</span>
                        </div>
                    </motion.div>

                    {/* 4. WORK ETHIC & SPEED (Col Span 1) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08)] transition-all relative overflow-hidden group"
                    >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-105 transition-transform">
                                <CheckCircle2 size={24} />
                            </div>

                            <h4 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight mb-2 group-hover:text-emerald-700 transition-colors">
                                Reliability &amp; Speed to Market
                            </h4>

                            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                                Direct communication, fast iterations, and long-term partnerships. Clean code with zero excuses.
                            </p>

                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                                    <span>Agile Sprints &amp; Daily Commits</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                                    <span>Direct WhatsApp Collaboration</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-xs font-bold text-blue-600">Surat, Gujarat, India</span>
                            <span className="text-xs font-semibold text-slate-400">Available Worldwide</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
