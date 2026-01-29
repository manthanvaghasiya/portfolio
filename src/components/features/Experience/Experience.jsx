import React, { useRef } from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="experience"
            className="py-12 md:py-24 px-2 md:px-6 bg-transparent scroll-mt-24 md:scroll-mt-32"
        >
            <div className="max-w-4xl mx-auto" ref={containerRef}>
                {/* Header */}
                <div className="mb-12 md:mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-extrabold text-primary mb-4"
                    >
                        Professional <span className="text-accent">Experience</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
                    >
                        Hands-on experience building and shipping real-world production
                        features in a professional work environment.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative ml-1 md:ml-6 space-y-12">

                    {/* Scroll-Linked Line Background */}
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-slate-200 origin-top"></div>

                    {/* Animated Progress Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-0 top-0 bottom-0 w-0.5 md:w-1 bg-blue-600 origin-top"
                    ></motion.div>

                    {/* EXPERIENCE CARD */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="relative pl-5 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-[-5.5px] md:left-[-7px] top-8 h-3 w-3 md:h-5 md:w-5 rounded-full border-2 md:border-4 border-white bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.2)] z-10"></div>

                        {/* Interactive Card */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-lg md:shadow-xl border border-slate-100 hover:border-blue-200 transition-colors duration-300 group"
                        >

                            {/* Top Row */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        Full-Stack Developer Intern
                                    </h3>
                                    <div className="text-blue-500 font-semibold text-sm md:text-lg flex items-center gap-2 mt-1">
                                        <Briefcase size={16} className="md:w-[18px]" /> Bluestock Fintech, Pune
                                    </div>
                                </div>

                                <div className="self-start md:self-auto flex items-center gap-2 text-slate-500 font-medium bg-slate-50 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm border border-slate-100">
                                    <Calendar size={14} className="md:w-[16px]" /> Sep 2025 – Nov 2025
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-6">
                                Worked as a full-stack intern contributing to production-level
                                fintech modules. Actively collaborated with UI/UX designers and
                                backend engineers to deliver secure, scalable features for live
                                users.
                            </p>

                            {/* Staggered List */}
                            <ul className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed">
                                {[
                                    "Built a complete Company Registration & Verification module using React.js and PostgreSQL.",
                                    "Implemented responsive UI architecture across the HiringInsight application.",
                                    "Collaborated with backend developers to integrate REST APIs and improved error handling."
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle
                                            className="text-blue-500 mt-1 flex-shrink-0"
                                            size={18}
                                        />
                                        <span dangerouslySetInnerHTML={{ __html: item.replace("Company Registration & Verification module", "<b>Company Registration & Verification module</b>").replace("responsive UI architecture", "<b>responsive UI architecture</b>") }}></span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Tech Stack Used */}
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">
                                    Tech Stack Used
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React.js",
                                        "Node.js",
                                        "REST APIs",
                                        "PostgreSQL",
                                        "Responsive CSS",
                                    ].map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 md:px-4 bg-slate-50 text-slate-700 text-[11px] md:text-sm font-semibold rounded-lg border border-slate-200/60 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
