import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DesktopServices from "./DesktopServices";
import MobileServices from "./MobileServices";

const Services = () => {
    return (
        <section
            id="services"
            className="py-16 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- SECTION HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Sparkles size={13} className="text-blue-500" />
                        Core Service Capabilities
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight"
                    >
                        Engineering Pillars &amp;{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Solutions
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-xs sm:text-base md:text-lg mt-3 leading-relaxed"
                    >
                        Explore our technical architectures, performance benchmarks, and production deliverables built for high-velocity commercial brands.
                    </motion.p>
                </div>

                {/* --- 1. SIGNATURE DESKTOP COCKPIT & ROADMAP (>= 1024px) --- */}
                <div className="hidden lg:block">
                    <DesktopServices />
                </div>

                {/* --- 2. DEDICATED MOBILE SWIPE ARCHITECTURE (< 1024px) --- */}
                <div className="block lg:hidden">
                    <MobileServices />
                </div>
            </div>
        </section>
    );
};

export default Services;
