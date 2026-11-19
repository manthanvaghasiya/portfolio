import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DesktopSkills from "./DesktopSkills";
import MobileSkills from "./MobileSkills";

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-28 px-4 sm:px-6 bg-slate-50/60 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Sparkles size={13} className="text-blue-500" />
                        Engineering Stack &amp; Capabilities
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight"
                    >
                        Production-Grade{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Tech Stack &amp; Tools.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-xs sm:text-base md:text-lg mt-3 leading-relaxed"
                    >
                        A categorized breakdown of my daily frontend, backend, database, and cloud infrastructure toolsets.
                    </motion.p>
                </div>

                {/* --- 1. SIGNATURE DESKTOP 3D COVERFLOW (>= 768px) --- */}
                <div className="hidden md:block">
                    <DesktopSkills />
                </div>

                {/* --- 2. DEDICATED MOBILE TABS (< 768px) --- */}
                <div className="block md:hidden">
                    <MobileSkills />
                </div>
            </div>
        </section>
    );
};

export default Skills;
