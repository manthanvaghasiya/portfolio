import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { skillCategories } from "./skillsData";

const DesktopSkills = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    };

    const getDelta = (index) => {
        let diff = index - activeIndex;
        if (diff > 2) diff -= skillCategories.length;
        if (diff < -2) diff += skillCategories.length;
        return diff;
    };

    return (
        <div className="w-full">
            {/* Category Indicator Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {skillCategories.map((cat, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 select-none cursor-pointer flex items-center gap-2 ${
                                isActive
                                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105"
                                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80"
                            }`}
                        >
                            <span>{cat.title}</span>
                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                                isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                            }`}>
                                {cat.kpi}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* 3D Coverflow Container */}
            <div className="relative min-h-[460px] flex items-center justify-center">
                {/* Arrow Controls */}
                <button
                    onClick={handlePrev}
                    aria-label="Previous skill track"
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={handleNext}
                    aria-label="Next skill track"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                >
                    <ChevronRight size={20} />
                </button>

                {/* 5 Layered 3D Cards */}
                <div className="relative w-full max-w-4xl h-[440px] flex items-center justify-center perspective-[1200px]">
                    {skillCategories.map((category, idx) => {
                        const delta = getDelta(idx);
                        const isCenter = delta === 0;
                        const isVisible = Math.abs(delta) <= 2;
                        if (!isVisible) return null;

                        const xOffset = delta * 240;
                        const scale = isCenter ? 1 : 0.85;
                        const rotateY = delta * -16;
                        const zIndex = 30 - Math.abs(delta) * 10;
                        const opacity = isCenter ? 1 : 0.65;
                        const Icon = category.icon;

                        return (
                            <motion.div
                                key={category.id}
                                animate={{
                                    x: xOffset,
                                    scale,
                                    rotateY,
                                    opacity,
                                    zIndex,
                                }}
                                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                                onClick={() => setActiveIndex(idx)}
                                className={`absolute w-[360px] sm:w-[400px] h-[420px] rounded-3xl p-7 bg-white border transition-shadow duration-300 select-none cursor-pointer flex flex-col justify-between ${
                                    isCenter
                                        ? "border-slate-300 shadow-[0_20px_50px_rgba(15,23,42,0.12)] ring-2 ring-blue-500/10"
                                        : "border-slate-200/90 shadow-sm hover:border-slate-300"
                                }`}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.accent} rounded-t-3xl`} />

                                <div>
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-2xl ${category.iconGradient} flex items-center justify-center shrink-0`}>
                                            <Icon size={22} />
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                                                {category.badge}
                                            </span>
                                            <span className="text-[11px] font-mono text-blue-600 font-bold mt-1">
                                                {category.kpi}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-extrabold text-slate-950 tracking-tight mb-1">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-500 text-xs mb-4">
                                        {category.subtitle}
                                    </p>

                                    <div className="space-y-2">
                                        {category.skills.map((skill, sIdx) => (
                                            <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                                <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                                <span className="leading-tight">{skill}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                                    {category.techPills.map((pill) => (
                                        <span key={pill} className="px-2.5 py-0.5 rounded-md bg-slate-50 border border-slate-200/80 text-[10px] font-semibold text-slate-600">
                                            {pill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DesktopSkills;
