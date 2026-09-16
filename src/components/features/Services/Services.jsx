import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronLeft,
    ChevronRight,
    Globe2,
    Cpu,
    ShoppingCart,
    Bot,
    Smartphone,
    CheckCircle2,
    ArrowUpRight,
    Sparkles,
    MessageCircle,
    ExternalLink,
    Zap,
    ShieldCheck,
    Layers,
    Building2,
    Gauge,
    Server,
    Activity,
    ArrowRight,
    Terminal,
    Code2,
    Database
} from "lucide-react";
import ProcessRoadmap from "./ProcessRoadmap";

const pillars = [
    {
        id: "web-engineering",
        number: "01",
        name: "WEB FLAGSHIPS",
        category: "Digital Flagships",
        headline: "Stand Out With Sub-Second Velocity",
        description:
            "It's not just about responsive layout. It's about engineering bespoke, high-velocity Next.js platforms from scratch that eliminate page-builder lag, maximize conversion rates, and dominate local search.",
        slogan: "Confidence, wrapped in sub-second speed.",
        primaryMetric: "< 0.8s",
        primaryMetricLabel: "Page Load Time",
        comparisonMetric: "~3.8s",
        comparisonLabel: "Legacy WP / CMS templates",
        secondaryMetric: "100/100",
        secondaryLabel: "Core Web Vitals",
        accentColor: "#10B981", // Emerald
        themeGradient: "from-emerald-950 via-slate-900 to-slate-950",
        ambientAura: "rgba(16, 185, 129, 0.22)",
        configs: [
            { name: "Next.js 14+", desc: "Server components & edge routing" },
            { name: "Cloudflare CDN", desc: "Sub-second global static cache" },
            { name: "Dealership SEO", desc: "AutoDealer rich snippets schema" },
        ],
        liveProject: {
            name: "Sadguru Car Surat",
            category: "Commercial Dealership Platform",
            badge: "150+ Inventory",
            image: "/sadguru.png",
            url: "https://sadgurucarsurat.com/",
        },
        tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "Cloudflare"],
        whatsappQuery:
            "Hi Manthan, I want to discuss Enterprise Web Engineering for a custom digital flagship with Webiox!",
        centerType: "cockpit",
    },
    {
        id: "saas-engineering",
        number: "02",
        name: "SAAS PRODUCTS",
        category: "SaaS & Custom Software",
        headline: "Multi-Tenant SaaS Built To Scale",
        description:
            "From conceptual MVP to enterprise cloud software. We engineer resilient full-stack systems featuring multi-tenant database isolation, JWT role-based security, and lightning-fast analytics dashboards.",
        slogan: "Engineered for high concurrency & zero downtime.",
        primaryMetric: "99.9%",
        primaryMetricLabel: "Guaranteed Uptime",
        comparisonMetric: "97.5%",
        comparisonLabel: "Average legacy apps",
        secondaryMetric: "<150ms",
        secondaryLabel: "Database Query Speed",
        accentColor: "#3B82F6", // Blue
        themeGradient: "from-blue-950 via-slate-900 to-slate-950",
        ambientAura: "rgba(59, 130, 246, 0.22)",
        configs: [
            { name: "Multi-Tenant", desc: "Isolated organizational schemas" },
            { name: "JWT Auth & RBAC", desc: "Role-based access security" },
            { name: "Real-Time DB", desc: "MongoDB aggregation pipelines" },
        ],
        liveProject: {
            name: "LifeOS Productivity",
            category: "Habit & Financial Dashboard",
            badge: "Live SaaS MVP",
            image: "/lifeos.png",
            url: "https://lifeos-by-manthan.vercel.app/",
        },
        tags: ["MongoDB", "Express.js", "React", "Node.js", "PostgreSQL"],
        whatsappQuery:
            "Hi Manthan, I have a SaaS product or custom software application to build with Webiox!",
        centerType: "server",
    },
    {
        id: "ecommerce",
        number: "03",
        name: "COMMERCE ENGINES",
        category: "Headless E-Commerce",
        headline: "Frictionless Commerce That Converts",
        description:
            "Say goodbye to rigid storefront limits. We build headless commerce platforms and real-time inventory management with instant checkout flows, multi-gateway payments, and automated WhatsApp order alerts.",
        slogan: "Zero checkout friction. Maximum sales velocity.",
        primaryMetric: "< 1.2s",
        primaryMetricLabel: "Checkout Latency",
        comparisonMetric: "~5.5s",
        comparisonLabel: "Bloated plugin apps",
        secondaryMetric: "150+",
        secondaryLabel: "Live Inventory Sync",
        accentColor: "#8B5CF6", // Violet
        themeGradient: "from-violet-950 via-slate-900 to-slate-950",
        ambientAura: "rgba(139, 92, 246, 0.22)",
        configs: [
            { name: "Headless Next", desc: "Zero vendor lock-in architecture" },
            { name: "Payment Gateways", desc: "Frictionless Stripe & Razorpay" },
            { name: "Automated POS", desc: "Instant stock synchronization" },
        ],
        liveProject: {
            name: "Hariram Motors",
            category: "Luxury Pre-Owned Platform",
            badge: "Commercial Dealership",
            image: "/hariram.png",
            url: "https://www.hariramcars.com/",
        },
        tags: ["Next.js Commerce", "Node.js", "Stripe", "Razorpay", "Redis"],
        whatsappQuery:
            "Hi Manthan, I need a high-conversion custom or headless e-commerce store with Webiox!",
        centerType: "commerce",
    },
    {
        id: "ai-automation",
        number: "04",
        name: "AI & WORKFLOWS",
        category: "AI & Automation",
        headline: "Autonomous AI & Webhook Workflows",
        description:
            "Supercharge business operations with 24/7 autonomous agents and automated event pipelines. We integrate custom LLM assistants, CRM sync webhooks, and intelligent document validation.",
        slogan: "Eliminate manual bottlenecks forever.",
        primaryMetric: "24/7",
        primaryMetricLabel: "Automated Uptime",
        comparisonMetric: "~4.5 hrs",
        comparisonLabel: "Manual human response lag",
        secondaryMetric: "100%",
        secondaryLabel: "Data Sync Reliability",
        accentColor: "#F59E0B", // Amber
        themeGradient: "from-amber-950 via-slate-900 to-slate-950",
        ambientAura: "rgba(245, 158, 11, 0.22)",
        configs: [
            { name: "LLM Assistant", desc: "Trained on your business data" },
            { name: "Event Webhooks", desc: "Instant CRM & inventory sync" },
            { name: "Document AI", desc: "Real-time compliance validation" },
        ],
        liveProject: {
            name: "GovDoc Verification",
            category: "Document Compliance System",
            badge: "Enterprise Pipeline",
            image: "/govdoc.png",
            url: "https://webiox.tech/portfolio#",
        },
        tags: ["Python", "FastAPI", "OpenAI", "Webhooks", "Node.js"],
        whatsappQuery:
            "Hi Manthan, I want to explore AI agents and automated backend workflows with Webiox!",
        centerType: "ai",
    },
    {
        id: "mobile-pwa",
        number: "05",
        name: "MOBILE PWAS",
        category: "Mobile-First Applications",
        headline: "Mobile-First PWAs & Offline Portals",
        description:
            "Give your users the speed and native feel of an app with zero app-store download friction. Progressive Web Apps engineered with offline service workers, push notifications, and instant home-screen installation.",
        slogan: "Native app power. Instant web accessibility.",
        primaryMetric: "0 MB",
        primaryMetricLabel: "App Store Friction",
        comparisonMetric: "~45 MB",
        comparisonLabel: "Heavy native downloads",
        secondaryMetric: "Instant",
        secondaryLabel: "Offline Availability",
        accentColor: "#06B6D4", // Cyan
        themeGradient: "from-cyan-950 via-slate-900 to-slate-950",
        ambientAura: "rgba(6, 182, 212, 0.22)",
        configs: [
            { name: "Offline Cache", desc: "Service workers & IndexedDB" },
            { name: "Staff Portals", desc: "Fast on-the-go stock updates" },
            { name: "Push Notifications", desc: "Direct customer re-engagement" },
        ],
        liveProject: {
            name: "Dealership Staff PWA",
            category: "Real-Time Inventory Mobile Portal",
            badge: "Production Tool",
            image: "/sadguru.png",
            url: "https://sadgurucarsurat.com/",
        },
        tags: ["PWA", "Service Workers", "React", "IndexedDB", "Tailwind CSS"],
        whatsappQuery:
            "Hi Manthan, I want to build a high-performance PWA or internal mobile portal with Webiox!",
        centerType: "mobile",
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedConfigIdx, setSelectedConfigIdx] = useState(0);

    const activePillar = pillars[activeIndex];

    // Reset selected config when switching pillars
    useEffect(() => {
        setSelectedConfigIdx(0);
    }, [activeIndex]);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % pillars.length);
    };

    const handlePrev = () => {
        setActiveIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
    };

    return (
        <section
            id="services"
            className="py-20 md:py-28 px-4 sm:px-6 bg-[#F8FAFC] relative overflow-hidden"
        >
            {/* Ambient Background Aura */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl pointer-events-none transition-all duration-700 -z-10"
                style={{
                    backgroundColor: activePillar.ambientAura,
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- SECTION HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
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
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight"
                    >
                        Engineering Pillars &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Solutions
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg mt-3 leading-relaxed"
                    >
                        Explore our technical architectures, performance benchmarks, and production deliverables built for high-velocity commercial brands.
                    </motion.p>
                </div>

                {/* --- THE GRAND PINTEREST-INSPIRED INTERACTIVE STAGE CARD --- */}
                <div className="relative rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#020617] border border-slate-800 shadow-[0_30px_90px_-20px_rgba(2,6,23,0.7)] text-white overflow-hidden p-6 sm:p-8 lg:p-12 transition-all duration-700">
                    {/* Interior Ambient Glow reacting to active pillar */}
                    <div
                        className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-60"
                        style={{ backgroundColor: activePillar.accentColor }}
                    />
                    <div
                        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[110px] pointer-events-none transition-all duration-700 opacity-40"
                        style={{ backgroundColor: activePillar.accentColor }}
                    />

                    {/* --- TOP FLOATING PILL NAVIGATION BAR --- */}
                    <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
                        {/* Brand Badge */}
                        <div className="flex items-center gap-2.5">
                            <span className="w-2.5 h-2.5 rounded-full animate-ping" style={{ backgroundColor: activePillar.accentColor }} />
                            <span className="text-xs font-black tracking-widest text-slate-300 uppercase">
                                WEBIOX CORE ARCHITECTURE
                            </span>
                        </div>

                        {/* 5 Capsule Navigation Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-inner">
                            {pillars.map((pillar, idx) => {
                                const isActive = activeIndex === idx;
                                return (
                                    <button
                                        key={pillar.id}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 select-none cursor-pointer ${
                                            isActive
                                                ? "text-slate-950 font-black"
                                                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-pillar-capsule"
                                                className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                                                transition={{ type: "spring", stiffness: 450, damping: 35 }}
                                            />
                                        )}
                                        <span className="relative z-10">{pillar.name}</span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Availability Pill */}
                        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-[11px] font-semibold text-slate-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Available For New Projects</span>
                        </div>
                    </div>

                    {/* --- 3-COLUMN INTERACTIVE STAGE CONTENT --- */}
                    <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        {/* === LEFT COLUMN: NARRATIVE & PRIMARY CTA (Span 4) === */}
                        <div className="lg:col-span-4 flex flex-col justify-between">
                            {/* Pagination Controls */}
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

                            {/* Headline */}
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
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                                        {activePillar.headline}
                                    </h3>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                                        {activePillar.description}
                                    </p>

                                    {/* Primary CTA Capsule Button */}
                                    <div className="mb-6">
                                        <a
                                            href={`https://wa.me/919664736245?text=${encodeURIComponent(
                                                activePillar.whatsappQuery
                                            )}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-slate-950 font-black text-sm hover:bg-slate-100 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            <MessageCircle size={17} className="text-emerald-600" />
                                            <span>Consult On Architecture</span>
                                            <ArrowRight size={14} />
                                        </a>
                                    </div>

                                    {/* Slogan Quote */}
                                    <div className="pt-4 border-t border-slate-800/80">
                                        <p className="text-xs font-medium text-slate-400 italic">
                                            "{activePillar.slogan}"
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-3">
                                            {activePillar.tags.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* === CENTER COLUMN: 3D LEVITATING SPOTLIGHT VISUAL (Span 4) === */}
                        <div className="lg:col-span-4 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[380px] relative">
                            {/* Floating 3D Graphic */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePillar.id}
                                    initial={{ opacity: 0, scale: 0.88, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.88, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="relative flex flex-col items-center justify-center w-full"
                                >
                                    {/* Continuous Smooth Levitation Animation */}
                                    <motion.div
                                        animate={{
                                            y: [-8, 8, -8],
                                            rotateZ: [-1, 1, -1],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] rounded-3xl p-5 bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl flex flex-col"
                                    >
                                        {/* Cockpit / Visual Header */}
                                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-700/60">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: activePillar.accentColor }}
                                                />
                                                <span className="text-xs font-mono font-bold text-slate-200">
                                                    SYSTEM.ACTIVE
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                                                LIVE BENCHMARK
                                            </span>
                                        </div>

                                        {/* Central Core Display */}
                                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4">
                                            {activePillar.centerType === "cockpit" && (
                                                <div className="flex flex-col items-center text-center">
                                                    <Gauge
                                                        size={44}
                                                        className="text-emerald-400 mb-2 animate-pulse"
                                                    />
                                                    <span className="text-2xl font-black text-white tracking-tight">
                                                        0.65s TTFB
                                                    </span>
                                                    <span className="text-[10px] font-mono text-emerald-400 mt-1">
                                                        EDGE CACHE • CORE WEB VITALS 100%
                                                    </span>
                                                </div>
                                            )}

                                            {activePillar.centerType === "server" && (
                                                <div className="flex flex-col items-center text-center">
                                                    <Server
                                                        size={44}
                                                        className="text-blue-400 mb-2 animate-pulse"
                                                    />
                                                    <span className="text-2xl font-black text-white tracking-tight">
                                                        99.9% UPTIME
                                                    </span>
                                                    <span className="text-[10px] font-mono text-blue-400 mt-1">
                                                        MULTI-TENANT ISOLATION • JWT SECURE
                                                    </span>
                                                </div>
                                            )}

                                            {activePillar.centerType === "commerce" && (
                                                <div className="flex flex-col items-center text-center">
                                                    <ShoppingCart
                                                        size={44}
                                                        className="text-violet-400 mb-2 animate-pulse"
                                                    />
                                                    <span className="text-2xl font-black text-white tracking-tight">
                                                        1.2s CHECKOUT
                                                    </span>
                                                    <span className="text-[10px] font-mono text-violet-400 mt-1">
                                                        HEADLESS STOREFRONT • STRIPE READY
                                                    </span>
                                                </div>
                                            )}

                                            {activePillar.centerType === "ai" && (
                                                <div className="flex flex-col items-center text-center">
                                                    <Bot
                                                        size={44}
                                                        className="text-amber-400 mb-2 animate-pulse"
                                                    />
                                                    <span className="text-2xl font-black text-white tracking-tight">
                                                        24/7 AI AGENTS
                                                    </span>
                                                    <span className="text-[10px] font-mono text-amber-400 mt-1">
                                                        AUTOMATED WEBHOOKS • LEAD GEN
                                                    </span>
                                                </div>
                                            )}

                                            {activePillar.centerType === "mobile" && (
                                                <div className="flex flex-col items-center text-center">
                                                    <Smartphone
                                                        size={44}
                                                        className="text-cyan-400 mb-2 animate-pulse"
                                                    />
                                                    <span className="text-2xl font-black text-white tracking-tight">
                                                        OFFLINE PWA
                                                    </span>
                                                    <span className="text-[10px] font-mono text-cyan-400 mt-1">
                                                        0MB DOWNLOAD • INSTANT INSTALL
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Dynamic Spec Footer */}
                                        <div className="mt-3 pt-2.5 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-300">
                                            <span>Tier: {activePillar.configs[selectedConfigIdx]?.name}</span>
                                            <span style={{ color: activePillar.accentColor }}>● Verified</span>
                                        </div>
                                    </motion.div>

                                    {/* Realistic Dynamic Ground Shadow */}
                                    <motion.div
                                        animate={{
                                            scale: [0.85, 1.05, 0.85],
                                            opacity: [0.35, 0.55, 0.35],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className="w-48 h-6 rounded-full bg-black/70 blur-md mt-4 pointer-events-none"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* === RIGHT COLUMN: METRICS, CONFIG SELECTOR & LIVE THUMBNAIL (Span 4) === */}
                        <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                            {/* Top Comparison Metric Badge (Mirroring $149 bold vs $199- struck through) */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePillar.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.35 }}
                                    className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-inner"
                                >
                                    <div className="flex items-baseline justify-between mb-1">
                                        <div className="flex items-baseline gap-3">
                                            <span
                                                className="text-3xl sm:text-4xl font-black tracking-tight"
                                                style={{ color: activePillar.accentColor }}
                                            >
                                                {activePillar.primaryMetric}
                                            </span>
                                            <span className="text-slate-500 line-through text-lg font-bold font-mono">
                                                {activePillar.comparisonMetric}
                                            </span>
                                        </div>
                                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                                            Benchmarked
                                        </span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-300 block">
                                        {activePillar.primaryMetricLabel}
                                    </span>
                                    <span className="text-[11px] text-slate-500 font-normal">
                                        vs. {activePillar.comparisonLabel}
                                    </span>
                                </motion.div>
                            </AnimatePresence>

                            {/* Option / Configuration Tier Selector (Mirroring "Choose your size: [36] [38] [40]") */}
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                                    Select Architecture Configuration:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {activePillar.configs.map((cfg, i) => {
                                        const isSelected = selectedConfigIdx === i;
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedConfigIdx(i)}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer select-none flex items-center gap-1.5 ${
                                                    isSelected
                                                        ? "bg-white text-slate-950 font-black shadow-md scale-105"
                                                        : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-800"
                                                }`}
                                            >
                                                <span>{cfg.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                <p className="text-[11px] text-slate-400 mt-2 font-mono">
                                    › {activePillar.configs[selectedConfigIdx]?.desc}
                                </p>
                            </div>

                            {/* Bottom Anchored Live Project Preview Thumbnail (Mirroring floating pink jacket thumbnail) */}
                            {activePillar.liveProject && (
                                <motion.a
                                    key={activePillar.liveProject.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.02 }}
                                    href={activePillar.liveProject.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 shadow-md transition-all cursor-pointer select-none"
                                >
                                    {/* Mini Thumbnail */}
                                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0 relative">
                                        <img
                                            src={activePillar.liveProject.image}
                                            alt={activePillar.liveProject.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Text Info */}
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                                                Live Deployment
                                            </span>
                                        </div>
                                        <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                                            {activePillar.liveProject.name}
                                        </h4>
                                        <span className="text-[11px] text-slate-400 truncate block">
                                            {activePillar.liveProject.category}
                                        </span>
                                    </div>

                                    <div className="shrink-0 p-2 rounded-xl bg-slate-800 text-slate-400 group-hover:text-white group-hover:bg-emerald-600 transition-all">
                                        <ExternalLink size={14} />
                                    </div>
                                </motion.a>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- ENGINEERING WORKFLOW PROCESS ROADMAP (Retained underneath) --- */}
                <div className="mt-16 md:mt-24">
                    <ProcessRoadmap />
                </div>
            </div>
        </section>
    );
};

export default Services;
