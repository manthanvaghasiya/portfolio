import React, { useRef, useEffect } from "react";
import { Globe, Zap, Car, ShieldCheck } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Animated Counter Component
const AnimatedCounter = ({ value }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract numerical part and prefixes/suffixes
    const numericMatch = value.match(/\d+/);
    const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : null;
    const prefix = value.startsWith("<") ? "< " : "";
    const suffix = value.replace(/[0-9< ]/g, "");

    return (
        <span ref={ref} className="inline-block relative font-black">
            {isInView && numericPart !== null ? (
                <CounterLogic from={0} to={numericPart} prefix={prefix} suffix={suffix} />
            ) : (
                <span>{value}</span>
            )}
        </span>
    );
};

const CounterLogic = ({ from, to, prefix, suffix }) => {
    const spring = useSpring(from, { mass: 0.8, stiffness: 80, damping: 18 });
    const display = useTransform(spring, (current) => `${prefix}${Math.round(current)}${suffix}`);

    useEffect(() => {
        spring.set(to);
    }, [spring, to]);

    return <motion.span>{display}</motion.span>;
};

const Stats = () => {
    const stats = [
        {
            id: 1,
            value: "6+",
            icon: <Globe size={20} />,
            label: "Production Platforms",
            desc: "Custom client portals & web apps",
            badge: "Commercial",
            accent: "group-hover/card:text-blue-600 group-hover/card:border-blue-200 group-hover/card:bg-blue-50/80",
        },
        {
            id: 2,
            value: "<1s",
            icon: <Zap size={20} />,
            label: "Page Load Speed",
            desc: "Optimized Core Web Vitals",
            badge: "Speed",
            accent: "group-hover/card:text-amber-600 group-hover/card:border-amber-200 group-hover/card:bg-amber-50/80",
        },
        {
            id: 3,
            value: "150+",
            icon: <Car size={20} />,
            label: "Digital Inventory",
            desc: "Client website & dashboard built",
            badge: "Production",
            accent: "group-hover/card:text-emerald-600 group-hover/card:border-emerald-200 group-hover/card:bg-emerald-50/80",
        },
        {
            id: 4,
            value: "100%",
            icon: <ShieldCheck size={20} />,
            label: "Clean Architecture",
            desc: "Modular React & Node.js code",
            badge: "Quality",
            accent: "group-hover/card:text-indigo-600 group-hover/card:border-indigo-200 group-hover/card:bg-indigo-50/80",
        },
    ];

    return (
        <section className="py-8 md:py-12 px-4 sm:px-6 relative z-20 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.06),0_2px_6px_rgba(15,23,42,0.02)] overflow-hidden group"
                >
                    {/* Subtle Top Ambient Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 pointer-events-none opacity-90" />

                    {/* Ambient subtle background radial */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100/90 relative z-10">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="flex flex-col items-center text-center px-4 py-2 group/card transition-all duration-300 rounded-2xl hover:bg-slate-50/50"
                            >
                                {/* Icon & Badge Pill */}
                                <div className="relative mb-3.5">
                                    <div
                                        className={`w-12 h-12 rounded-2xl bg-slate-50 text-slate-700 border border-slate-200/80 flex items-center justify-center transition-all duration-300 shadow-2xs group-hover/card:scale-105 ${stat.accent}`}
                                    >
                                        {stat.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-3 text-[9px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2 py-0.5 rounded-full scale-90 shadow-xs">
                                        {stat.badge}
                                    </span>
                                </div>

                                {/* Animated Value */}
                                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-1 group-hover/card:text-blue-600 transition-colors">
                                    <AnimatedCounter value={stat.value} />
                                </h3>

                                {/* Label & Description */}
                                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                                    {stat.label}
                                </span>
                                <span className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                                    {stat.desc}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
