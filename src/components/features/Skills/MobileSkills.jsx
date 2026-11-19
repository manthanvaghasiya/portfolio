import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { skillCategories } from "./skillsData";

const MobileSkills = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeCat = skillCategories[activeIdx];
    const Icon = activeCat.icon;

    return (
        <div className="w-full relative select-none">
            {/* Horizontal Segmented Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide px-1 -mx-2 sm:mx-0">
                {skillCategories.map((cat, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveIdx(idx)}
                            className={`px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all duration-200 flex items-center gap-1.5 shadow-2xs ${
                                isActive
                                    ? "bg-slate-900 text-white ring-2 ring-slate-800 scale-105"
                                    : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50"
                            }`}
                        >
                            <span>{cat.title.split(" ")[0]}</span>
                            <span className="text-[10px] font-mono opacity-60">({cat.skills.length})</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Category Mobile Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCat.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-3xl bg-white border border-slate-200/90 p-5 shadow-lg relative overflow-hidden"
                >
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeCat.accent}`} />

                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                            <div className={`w-10 h-10 rounded-xl ${activeCat.iconGradient} flex items-center justify-center shrink-0`}>
                                <Icon size={18} />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-slate-950 text-base leading-tight">
                                    {activeCat.title}
                                </h3>
                                <span className="text-[10px] font-mono text-blue-600 font-bold">
                                    {activeCat.kpi}
                                </span>
                            </div>
                        </div>

                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-700">
                            {activeCat.badge}
                        </span>
                    </div>

                    <p className="text-slate-500 text-xs mb-4">
                        {activeCat.subtitle}
                    </p>

                    {/* Skills Checklist */}
                    <div className="space-y-2 mb-4">
                        {activeCat.skills.map((skill, sIdx) => (
                            <div
                                key={sIdx}
                                className="flex items-start gap-2.5 p-2 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs text-slate-800"
                            >
                                <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                                <span className="font-medium leading-snug">{skill}</span>
                            </div>
                        ))}
                    </div>

                    {/* Tech Pills Footer */}
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {activeCat.techPills.map((pill) => (
                            <span
                                key={pill}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-semibold"
                            >
                                {pill}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MobileSkills;
