import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Zap,
    CheckCircle2,
    MessageCircle,
    ExternalLink,
    ArrowRight,
    Layers,
    Sparkles,
    ChevronRight
} from "lucide-react";
import { pillars } from "./servicesData";

const MobileServices = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const activePillar = pillars[activeIdx];

    return (
        <div className="w-full relative select-none">
            {/* Horizontal Capsule Tab Selector */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide px-1 -mx-2 sm:mx-0">
                {pillars.map((pillar, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                        <button
                            key={pillar.id}
                            onClick={() => setActiveIdx(idx)}
                            className={`px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all duration-200 flex items-center gap-1.5 shadow-2xs ${
                                isActive
                                    ? "bg-slate-900 text-white ring-2 ring-slate-800 scale-105"
                                    : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-50"
                            }`}
                        >
                            <span className="text-[10px] font-black opacity-60">0{idx + 1}</span>
                            <span>{pillar.name}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Pillar Mobile Stage Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-3xl bg-slate-950 border border-slate-800 text-white p-5 sm:p-6 shadow-xl relative overflow-hidden"
                >
                    {/* Interior Accent Glow */}
                    <div
                        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
                        style={{ backgroundColor: activePillar.accentColor }}
                    />

                    {/* Top Meta: Number, Category & Slogan */}
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activePillar.accentColor }} />
                            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                                {activePillar.category}
                            </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-800 text-slate-300">
                            Pillar 0{activeIdx + 1}
                        </span>
                    </div>

                    {/* Headline & Description */}
                    <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug mb-2">
                        {activePillar.headline}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                        {activePillar.description}
                    </p>

                    {/* High-Impact Performance Metrics */}
                    <div className="grid grid-cols-2 gap-2.5 mb-4">
                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                {activePillar.primaryMetricLabel}
                            </div>
                            <div className="text-xl font-black text-emerald-400 mt-0.5">
                                {activePillar.primaryMetric}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                                vs {activePillar.comparisonMetric}
                            </div>
                        </div>

                        <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
                            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                                {activePillar.secondaryLabel}
                            </div>
                            <div className="text-xl font-black text-blue-400 mt-0.5">
                                {activePillar.secondaryMetric}
                            </div>
                            <div className="text-[10px] text-slate-500 mt-0.5 truncate">
                                Benchmark Target
                            </div>
                        </div>
                    </div>

                    {/* Key Capabilities Checklist */}
                    <div className="space-y-1.5 mb-4 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/60">
                        {activePillar.configs.map((config, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                                <div className="leading-snug">
                                    <span className="font-bold text-slate-200">{config.name}: </span>
                                    <span className="text-slate-400 text-[11px]">{config.desc}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Live Project Flagship (if available) */}
                    {activePillar.liveProject && (
                        <a
                            href={activePillar.liveProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 mb-4 transition-colors"
                        >
                            <div className="flex items-center gap-2.5 overflow-hidden">
                                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 shrink-0 overflow-hidden">
                                    <img
                                        src={activePillar.liveProject.image}
                                        alt={activePillar.liveProject.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="truncate">
                                    <div className="text-[10px] uppercase font-black tracking-wider text-emerald-400">
                                        Shipped Deliverable
                                    </div>
                                    <div className="text-xs font-bold text-white truncate">
                                        {activePillar.liveProject.name}
                                    </div>
                                </div>
                            </div>
                            <ExternalLink size={14} className="text-slate-400 shrink-0" />
                        </a>
                    )}

                    {/* Action Button */}
                    <a
                        href={`https://wa.me/919664736245?text=${encodeURIComponent(activePillar.whatsappQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-xs tracking-wide shadow-md active:scale-[0.98] transition-all"
                    >
                        <MessageCircle size={15} />
                        <span>Discuss This Architecture</span>
                    </a>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default MobileServices;
