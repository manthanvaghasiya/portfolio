import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { fadeIn } from "../../../../utils/motion";

const HeroActions = () => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 1.2, 1)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 pt-3"
        >
            {/* LUXURY PRIMARY CTA - HIRE ME */}
            <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-full bg-slate-950 hover:bg-black text-white px-7 py-3.5 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] hover:shadow-[0_16px_35px_-5px_rgba(15,23,42,0.35)] border border-slate-800 transition-all duration-300"
            >
                {/* Subtle Light Sheen on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

                {/* Pulsing Availability Dot */}
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>

                <span className="relative z-10 tracking-tight">Hire Me</span>

                {/* Animated Directional Arrow */}
                <ArrowUpRight
                    size={17}
                    className="relative z-10 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
            </motion.a>

            {/* LUXURY SECONDARY CTA - DOWNLOAD CV */}
            <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Manthan_Vaghasiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-slate-200/90 hover:border-slate-300 bg-white/90 hover:bg-white text-slate-800 hover:text-slate-950 px-6 sm:px-7 py-3.5 sm:py-3.5 text-sm sm:text-base font-semibold shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
                <span className="tracking-tight">Download CV</span>

                {/* Elegant Icon Badge */}
                <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 flex items-center justify-center transition-colors">
                    <Download
                        size={13}
                        className="group-hover:translate-y-0.5 transition-transform duration-300"
                    />
                </div>
            </motion.a>
        </motion.div>
    );
};

export default HeroActions;
