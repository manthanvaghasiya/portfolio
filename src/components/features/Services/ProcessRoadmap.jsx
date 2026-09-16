import React from "react";
import { motion } from "framer-motion";
import {
    MapPin,
    Layers,
    Code2,
    Rocket,
    CheckCircle2,
    Sparkles,
    Zap
} from "lucide-react";

const steps = [
    {
        number: "1",
        title: "Technical Architecture & Scoping",
        badge: "Discovery & Blueprint",
        icon: Layers,
        color: "from-blue-600 to-indigo-700",
        pinColor: "text-blue-600 bg-blue-50 border-blue-200",
        deliverables: [
            "Full-Stack System Architecture Design",
            "Database Schemas & Data Modeling",
            "Sub-Second Performance Benchmarks",
            "API Contracts & Security Specifications",
        ],
        kpiLabel: "Target Milestone",
        kpiValue: "0 Technical Debt Blueprint",
    },
    {
        number: "2",
        title: "Full-Stack Engineering & QA",
        badge: "Production Build",
        icon: Code2,
        color: "from-indigo-600 to-violet-700",
        pinColor: "text-indigo-600 bg-indigo-50 border-indigo-200",
        deliverables: [
            "Next.js & React High-Speed Frontend",
            "Node.js API Microservices & Middleware",
            "Core Web Vitals & Asset Compression",
            "Cross-Device & Cross-Browser Testing",
        ],
        kpiLabel: "Speed Benchmark",
        kpiValue: "<1s Core Web Vitals",
    },
    {
        number: "3",
        title: "Edge Deployment & Scale",
        badge: "Go-Live & Conversion",
        icon: Rocket,
        color: "from-emerald-600 to-teal-700",
        pinColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
        deliverables: [
            "Global Edge Deployment (Vercel & CDN)",
            "AutoDealer & Structured JSON-LD SEO",
            "Frictionless WhatsApp & Lead Capture",
            "Staff Admin Dashboards & Live Analytics",
        ],
        kpiLabel: "Live Performance",
        kpiValue: "100% Production Readiness",
    },
];

const ProcessRoadmap = () => {
    return (
        <div className="mb-20">
            {/* --- ROADMAP HEADER --- */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
                    <Sparkles size={13} />
                    Proven 3-Step Methodology
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                    How Webiox Ships{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                        High-Impact Products
                    </span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2.5 font-normal">
                    A streamlined, visual delivery pipeline built to replace chaotic freelancing with predictable engineering milestones.
                </p>
            </div>

            {/* --- CHEVRON ARROW PROGRESSION (DESKTOP & TABLET) --- */}
            <div className="relative">
                {/* 1. INTERLOCKING CHEVRON ARROWS BAR */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 mb-8">
                    {steps.map((step, idx) => {
                        return (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="relative group"
                            >
                                {/* CHEVRON SHAPE CONTAINER */}
                                <div
                                    className={`relative z-20 py-4 px-6 md:px-8 text-white font-bold flex items-center gap-3.5 shadow-md transition-all duration-300 group-hover:scale-[1.02] bg-gradient-to-r ${step.color} ${
                                        idx === 0
                                            ? "rounded-2xl md:rounded-l-2xl md:rounded-r-none"
                                            : idx === 1
                                            ? "rounded-2xl md:rounded-none"
                                            : "rounded-2xl md:rounded-r-2xl md:rounded-l-none"
                                    }`}
                                    style={{
                                        clipPath:
                                            typeof window !== "undefined" && window.innerWidth >= 768
                                                ? idx === 0
                                                    ? "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%)"
                                                    : idx === 1
                                                    ? "polygon(0% 0%, calc(100% - 20px) 0%, 100% 50%, calc(100% - 20px) 100%, 0% 100%, 20px 50%)"
                                                    : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 20px 50%)"
                                                : undefined,
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center shrink-0 text-white font-extrabold text-sm">
                                        {step.number}
                                    </div>
                                    <div className="min-w-0 pr-4">
                                        <span className="text-[10px] uppercase tracking-wider font-semibold text-white/80 block leading-tight">
                                            {step.badge}
                                        </span>
                                        <h4 className="text-sm sm:text-base font-extrabold tracking-tight truncate text-white">
                                            {step.title}
                                        </h4>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 2. DASHED ROADMAP TRAIL WITH MILESTONE PINS (LIKE THE USER IMAGE) */}
                <div className="relative pt-2">
                    {/* SVG DASHED JOURNEY CURVE (Desktop Only) */}
                    <div className="hidden md:block absolute top-6 left-12 right-12 h-16 pointer-events-none -z-0">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 60">
                            <path
                                d="M 50 30 Q 200 55, 400 30 T 750 30"
                                fill="none"
                                stroke="#94A3B8"
                                strokeWidth="2.5"
                                strokeDasharray="6 6"
                                opacity="0.6"
                            />
                        </svg>
                    </div>

                    {/* 3 MILESTONE CARDS WITH LOCATION PINS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {steps.map((step, idx) => {
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.1 }}
                                    className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                                >
                                    {/* Top subtle glow strip */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />

                                    <div>
                                        {/* Milestone Pin Header */}
                                        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className={`w-9 h-9 rounded-xl border flex items-center justify-center shadow-2xs ${step.pinColor} group-hover:scale-110 transition-transform`}
                                                >
                                                    <MapPin size={17} />
                                                </div>
                                                <div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                                                        Phase {step.number}
                                                    </span>
                                                    <span className="text-xs font-extrabold text-slate-900">
                                                        Milestone Checkpoint
                                                    </span>
                                                </div>
                                            </div>

                                            <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                                                Step 0{step.number}
                                            </span>
                                        </div>

                                        {/* Deliverables Checklist */}
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                                            Key Deliverables &amp; Value:
                                        </span>
                                        <div className="space-y-2 mb-5">
                                            {step.deliverables.map((item, dIdx) => (
                                                <div
                                                    key={dIdx}
                                                    className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700 leading-snug"
                                                >
                                                    <CheckCircle2
                                                        size={14}
                                                        className="text-blue-600 shrink-0 mt-0.5"
                                                    />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Measurable KPI Badge */}
                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 rounded-b-3xl">
                                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                                            {step.kpiLabel}:
                                        </span>
                                        <span className="text-xs font-extrabold text-slate-900 bg-white px-2.5 py-1 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
                                            <Zap size={12} className="text-amber-500" />
                                            {step.kpiValue}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessRoadmap;
