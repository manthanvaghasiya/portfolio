import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FileText, MessageCircle, ArrowUpRight } from "lucide-react";

const MobileHeader = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] px-4 py-2.5 flex items-center justify-between md:hidden">
            {/* Integrated Micro Scroll Indicator */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 origin-left pointer-events-none"
                style={{ scaleX }}
            />

            {/* Brand Logo & Status */}
            <a href="#home" className="flex items-center gap-2 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    MV
                </div>
                <div className="flex flex-col">
                    <span className="font-extrabold text-sm tracking-tight text-slate-950 leading-tight">
                        Manthan V.
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available for Work
                    </span>
                </div>
            </a>

            {/* Quick Actions Cluster */}
            <div className="flex items-center gap-2">
                {/* Resume Pill */}
                <a
                    href="/Manthan_Vaghasiya_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Manthan_Vaghasiya_Resume.pdf"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold active:bg-slate-200 transition-colors"
                    aria-label="Download CV"
                >
                    <FileText size={12} className="text-slate-500" />
                    <span>CV</span>
                </a>

                {/* Direct WhatsApp Callout Button */}
                <a
                    href="https://wa.me/919664736245?text=Hi%20Manthan,%20I%20am%20interested%20in%20discussing%20a%20project!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#10b981] text-white shadow-xs active:scale-95 transition-transform"
                    aria-label="WhatsApp Contact"
                >
                    <MessageCircle size={15} />
                </a>
            </div>
        </header>
    );
};

export default MobileHeader;
