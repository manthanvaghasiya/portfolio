import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, FileText, Sparkles, Github, Linkedin, Mail } from "lucide-react";

const MobileHero = () => {
    return (
        <section
            id="home"
            className="flex md:hidden relative w-full h-[100dvh] min-h-[560px] max-h-[100dvh] pt-16 pb-20 px-5 flex-col justify-between overflow-hidden bg-gradient-to-tr from-emerald-50 via-white to-sky-50 select-none"
        >
            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-200/50 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* --- TOP: COMPACT STATUS BADGE --- */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center pt-2"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/95 border border-slate-200/90 shadow-2xs text-[11px] font-bold text-slate-800">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span>Founder@Webiox • Active Technical Partner</span>
                </div>
            </motion.div>

            {/* --- CENTER: AVATAR, HEADLINE & METRICS --- */}
            <div className="flex flex-col items-center text-center my-auto space-y-3 sm:space-y-4">
                {/* Compact Portrait Avatar with Status Ring */}
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                >
                    <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 shadow-md">
                        <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white">
                            <img
                                src="/profile.jpg"
                                alt="Manthan Vaghasiya"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>
                    </div>
                    {/* Live Online Badge */}
                    <span className="absolute bottom-0 right-1 px-1.5 py-0.5 rounded-full bg-emerald-500 text-white font-extrabold text-[9px] border-2 border-white shadow-xs">
                        LIVE
                    </span>
                </motion.div>

                {/* Primary Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                >
                    <h1 className="text-[26px] sm:text-[30px] font-black text-slate-950 tracking-tight leading-tight">
                        Full-Stack Architect &amp; <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">
                            Digital Product Engineer
                        </span>
                    </h1>
                </motion.div>

                {/* Scannable Value Proposition */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed max-w-[330px] mx-auto"
                >
                    Engineering bespoke web flagships, digital automotive platforms &amp; multi-tenant SaaS with sub-second page velocity.
                </motion.p>

                {/* Credibility Metric Pills */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-1.5 pt-1"
                >
                    <span className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/90 text-slate-800 text-[11px] font-bold shadow-2xs">
                        18+ Deployments
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/90 border border-slate-200/90 text-slate-800 text-[11px] font-bold shadow-2xs">
                        6+ Countries
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-2xs">
                        &lt;0.8s Speed
                    </span>
                </motion.div>
            </div>

            {/* --- BOTTOM: 1-TOUCH THUMB ACTIONS & SOCIALS --- */}
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                className="space-y-2.5 w-full max-w-sm mx-auto"
            >
                {/* Primary Action Button (Full Width) */}
                <a
                    href="#projects"
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 text-white font-extrabold text-sm tracking-wide shadow-[0_6px_20px_rgba(16,185,129,0.35)] active:scale-[0.98] transition-all"
                >
                    <Sparkles size={16} />
                    <span>Explore 18+ Projects</span>
                    <ArrowUpRight size={16} />
                </a>

                {/* Secondary Dual Action Row */}
                <div className="grid grid-cols-2 gap-2">
                    <a
                        href="https://wa.me/919664736245?text=Hi%20Manthan,%20I%20am%20interested%20in%20discussing%20a%20project!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-bold text-xs shadow-2xs active:bg-slate-50 transition-colors"
                    >
                        <MessageCircle size={14} className="text-emerald-500" />
                        <span>WhatsApp</span>
                    </a>

                    <a
                        href="/Manthan_Vaghasiya_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Manthan_Vaghasiya_Resume.pdf"
                        className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-slate-200/90 text-slate-800 font-bold text-xs shadow-2xs active:bg-slate-50 transition-colors"
                    >
                        <FileText size={14} className="text-blue-500" />
                        <span>Resume CV</span>
                    </a>
                </div>

                {/* Micro Social Icons */}
                <div className="flex items-center justify-center gap-4 pt-1 text-slate-400">
                    <a
                        href="https://github.com/manthanvaghasiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 transition-colors p-1"
                        aria-label="GitHub Profile"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://linkedin.com/in/manthanvaghasiya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors p-1"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={16} />
                    </a>
                    <a
                        href="mailto:manthanvaghasiya60@gmail.com"
                        className="hover:text-slate-900 transition-colors p-1"
                        aria-label="Email Address"
                    >
                        <Mail size={16} />
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default MobileHero;
