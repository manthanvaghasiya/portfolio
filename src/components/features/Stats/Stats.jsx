import React, { useRef, useEffect } from "react";
import { Code2, FolderGit2, ShieldCheck, BrainCircuit } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Parse the numeric part if possible
    const numericPart = parseInt(value.replace(/\D/g, '')) || 0;
    const isNumber = !isNaN(parseFloat(value)) && isFinite(numericPart);

    return (
        <span ref={ref} className="inline-block relative">
            {isInView && isNumber ? (
                <CounterLogic from={0} to={numericPart} suffix={value.replace(/[0-9]/g, '')} />
            ) : (
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {value}
                </motion.span>
            )}
        </span>
    );
};

// Logic to animate numbers
const CounterLogic = ({ from, to, suffix }) => {
    const spring = useSpring(from, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current) + (suffix || ""));

    useEffect(() => {
        spring.set(to);
    }, [spring, to]);

    return <motion.span>{display}</motion.span>;
};

const Stats = () => {
    const stats = [
        {
            id: 1,
            value: "3+",
            icon: <Code2 size={24} />,
            label: "Production Projects",

        },
        {
            id: 2,
            value: "MERN",
            icon: <FolderGit2 size={24} />,
            label: "Primary Tech Stack",

        },
        {
            id: 3,
            value: "100%",
            icon: <ShieldCheck size={24} />,
            label: "Clean & scalable code",

        },
        {
            id: 4,
            value: "Daily",
            icon: <BrainCircuit size={24} />,
            label: "Learning & Improvement",

        }
    ];

    return (
        <section className="py-12 px-6 relative z-20 mt-0">
            <div className="max-w-7xl mx-auto">
                {/* 
                  Ultra-Premium Dark HUD 
                  - Backdrop Blur
                  - Subtle Gradient Border
                  - Inner Glow
                */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative bg-[#0F172A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/50 overflow-hidden group"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                    {/* Ambient Glows */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-50" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.id}
                                className={`flex flex-col items-center justify-center text-center space-y-4 group/item ${index !== stats.length - 1 ? "md:border-r border-white/5" : ""
                                    }`}
                            >
                                {/* Icon Circle with Pulse Effect */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
                                    <div className="w-14 h-14 rounded-full bg-slate-800/50 border border-white/10 flex items-center justify-center text-blue-400 group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white group-hover/item:border-blue-500 transition-all duration-300 relative z-10 shadow-lg">
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Animated Digital Counter */}
                                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                                    <AnimatedCounter value={stat.value} />
                                </h3>

                                {/* Label & Desc */}
                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-widest group-hover/item:text-blue-300 transition-colors duration-300">
                                        {stat.label}
                                    </span>
                                    <span className="text-[11px] md:text-xs text-slate-500 font-medium tracking-wide">
                                        {stat.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
