import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    MessageCircle,
    ExternalLink,
    Zap,
    Layers,
    Server,
    Activity,
    Code2,
    Database
} from "lucide-react";
import { pillars } from "./servicesData";
import ProcessRoadmap from "./ProcessRoadmap";

const DesktopServices = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);

    const activePillar = pillars[activeIndex];

    useEffect(() => {
        setSelectedConfigIdx(0);
    }, [activeIndex]);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % pillars.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + pillars.length) % pillars.length);

    return (
        <div className="w-full">
            {/* Ambient Background Aura reacting to active pillar */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl pointer-events-none transition-all duration-700 -z-10"
                style={{ backgroundColor: activePillar.ambientAura }}
            />

            {/* Interactive Stage Card */}
            <div className="relative rounded-[40px] bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#020617] border border-slate-800 shadow-[0_30px_90px_-20px_rgba(2,6,23,0.7)] text-white overflow-hidden p-8 lg:p-12 transition-all duration-700">
                <div
                    className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none opacity-60 transition-all duration-700"
                    style={{ backgroundColor: activePillar.accentColor }}
                />

                {/* Top Floating Pill Navigation Bar */}
                <div className="relative z-20 flex items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
                    <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: activePillar.accentColor }} />
                        <span className="text-xs font-black tracking-widest text-slate-300 uppercase">
                            WEBIOX CORE ARCHITECTURE
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl">
                        {pillars.map((pillar, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <button
                                    key={pillar.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                                        isActive ? "text-slate-950 font-black" : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pillar-capsule-desktop"
                                            className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                        />
                                    )}
                                    <span className="relative z-10">{pillar.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] font-semibold text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Available For New Projects</span>
                    </div>
                </div>

                {/* 3-Column Content */}
                <div className="relative z-20 grid grid-cols-12 gap-10 items-center">
                    {/* Left Column: Narrative (Span 4) */}
                    <div className="col-span-4 flex flex-col justify-between">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous capability"
                                    className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-white hover:text-slate-950 border border-slate-700/80 text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90"
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next capability"
                                    className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-white hover:text-slate-950 border border-slate-700/80 text-slate-300 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-90"
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                            <span className="text-xs font-mono font-bold text-slate-400">
                                {activePillar.number} / 05
                            </span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35 }}
                            >
                                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-2">
                                    {activePillar.category}
                                </span>
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tight mb-4">
                                    {activePillar.headline}
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {activePillar.description}
                                </p>

                                <div className="mb-6">
                                    <a
                                        href={`https://wa.me/919664736245?text=${encodeURIComponent(activePillar.whatsappQuery)}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-slate-950 font-black text-sm hover:bg-slate-100 transition-all hover:-translate-y-0.5 active:translate-y-0"
                                    >
                                        <MessageCircle size={17} className="text-emerald-600" />
                                        <span>Consult On Architecture</span>
                                        <ArrowRight size={14} />
                                    </a>
                                </div>

                                <div className="pt-4 border-t border-slate-800/80">
                                    <p className="text-xs font-medium text-slate-400 italic">
                                        "{activePillar.slogan}"
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {activePillar.tags.map((t, i) => (
                                            <span key={i} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Center Column: Levitating Graphic (Span 4) */}
                    <div className="col-span-4 flex flex-col items-center justify-center min-h-[380px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePillar.id}
                                initial={{ opacity: 0, scale: 0.88 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.88 }}
                                transition={{ duration: 0.4 }}
                                className="relative flex flex-col items-center justify-center w-full"
                            >
                                <motion.div
                                    animate={{ y: [-8, 8, -8], rotateZ: [-1, 1, -1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 w-full max-w-[320px] rounded-3xl p-5 bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col"
                                >
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activePillar.accentColor }} />
                                            <span className="text-xs font-mono font-bold text-slate-200">SYSTEM.ACTIVE</span>
                                        </div>
                                        <span className="text-[10px] font-mono text-emerald-400 font-bold">100% HEALTHY</span>
                                    </div>

                                    <div className="space-y-2 mb-4">
                                        <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                                            <div className="text-[10px] font-mono text-slate-400">LATENCY BENCHMARK</div>
                                            <div className="text-2xl font-mono font-black text-white mt-0.5">{activePillar.primaryMetric}</div>
                                            <div className="text-[10px] text-slate-400">{activePillar.primaryMetricLabel}</div>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                                            <div className="text-[10px] font-mono text-slate-400">STABILITY TARGET</div>
                                            <div className="text-2xl font-mono font-black text-emerald-400 mt-0.5">{activePillar.secondaryMetric}</div>
                                            <div className="text-[10px] text-slate-400">{activePillar.secondaryLabel}</div>
                                        </div>
                                    </div>

                                    <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                                        <span>EDGE STATUS:</span>
                                        <span className="text-emerald-400 font-bold">ONLINE (SURAT, IN)</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Spec Selector & Live Work (Span 4) */}
                    <div className="col-span-4 flex flex-col justify-between">
                        <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 block mb-3">
                                ARCHITECTURE SPECS
                            </span>
                            <div className="space-y-2.5 mb-6">
                                {activePillar.configs.map((config, cIdx) => (
                                    <div
                                        key={cIdx}
                                        onClick={() => setSelectedConfigIdx(cIdx)}
                                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                                            selectedConfigIdx === cIdx
                                                ? "bg-slate-800/90 border-slate-600 shadow-md"
                                                : "bg-slate-900/50 border-slate-800/70 hover:bg-slate-800/50"
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-white">{config.name}</span>
                                            <CheckCircle2 size={16} className="text-emerald-400" />
                                        </div>
                                        <span className="text-xs text-slate-400 mt-1 block">{config.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {activePillar.liveProject && (
                            <a
                                href={activePillar.liveProject.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-md transition-all cursor-pointer"
                            >
                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                                    <img
                                        src={activePillar.liveProject.image}
                                        alt={activePillar.liveProject.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 block">
                                        Live Deployment
                                    </span>
                                    <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                                        {activePillar.liveProject.name}
                                    </h4>
                                    <span className="text-[11px] text-slate-400 truncate block">
                                        {activePillar.liveProject.category}
                                    </span>
                                </div>
                                <div className="p-2 rounded-xl bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-emerald-600 transition-all">
                                    <ExternalLink size={14} />
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Workflow Process Roadmap */}
            <div className="mt-16 md:mt-24">
                <ProcessRoadmap />
            </div>
        </div>
    );
};

export default DesktopServices;
