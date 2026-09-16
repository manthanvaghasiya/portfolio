import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
    Building2
} from "lucide-react";
import ProcessRoadmap from "./ProcessRoadmap";

const pillars = [
    {
        id: "web-engineering",
        number: "01",
        icon: Globe2,
        badge: "Digital Flagships",
        title: "Enterprise Web Engineering & Digital Flagships",
        tagline: "High-speed custom web architectures built from scratch—avoiding generic page builders.",
        gradient: "from-blue-600 via-indigo-600 to-sky-500",
        items: [
            {
                name: "Custom Web Platforms",
                desc: "Zero page-builder bloat. Handcrafted, high-velocity responsive platforms.",
            },
            {
                name: "Performance & Core Web Vitals",
                desc: "Sub-second (<1s) page loads, global edge caching & clean technical SEO.",
            },
            {
                name: "Commercial Industry Solutions",
                desc: "Automotive dealerships, live vehicle inventories & instant WhatsApp lead capture.",
            },
        ],
        tech: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "Cloudflare CDN"],
        whatsappQuery: "Hi Manthan, I want to discuss Enterprise Web Engineering for a custom digital flagship with Webiox!",
    },
    {
        id: "saas-engineering",
        number: "02",
        icon: Cpu,
        badge: "SaaS & Custom Software",
        title: "SaaS Product Engineering & Custom Software",
        tagline: "End-to-end web applications, multi-tenant architectures, and robust internal portals.",
        gradient: "from-indigo-600 via-violet-600 to-purple-500",
        items: [
            {
                name: "Full-Stack Application Development",
                desc: "End-to-end database design, server-side APIs & responsive UI engineering.",
            },
            {
                name: "Multi-Tenant Architectures",
                desc: "Scalable SaaS MVPs engineered for high concurrency & secure tenant isolation.",
            },
            {
                name: "Internal Tools & Portals",
                desc: "Role-based admin panels (JWT auth), staff PWAs & real-time inventory systems.",
            },
        ],
        tech: ["MongoDB", "PostgreSQL", "Express.js", "RESTful APIs", "JWT Security"],
        whatsappQuery: "Hi Manthan, I have a SaaS product or custom software application to build with Webiox!",
    },
    {
        id: "ecommerce",
        number: "03",
        icon: ShoppingCart,
        badge: "High-Conversion Commerce",
        title: "High-Conversion E-Commerce",
        tagline: "Headless storefronts and frictionless checkout flows engineered for high sales velocity.",
        gradient: "from-emerald-600 via-teal-600 to-cyan-500",
        items: [
            {
                name: "Headless & Custom Storefronts",
                desc: "High-throughput digital stores with zero vendor lock-in and instant checkout.",
            },
            {
                name: "Optimized Checkout & Payments",
                desc: "Frictionless multi-currency gateways (Stripe, Razorpay) to minimize cart dropoff.",
            },
            {
                name: "Inventory & Order Management",
                desc: "Real-time stock synchronization, SKU tracking & automated order fulfillment.",
            },
        ],
        tech: ["Next.js Commerce", "Node.js", "Stripe", "Razorpay", "Redis"],
        whatsappQuery: "Hi Manthan, I need a high-conversion custom or headless e-commerce store with Webiox!",
    },
    {
        id: "ai-automation",
        number: "04",
        icon: Bot,
        badge: "AI & Workflow Systems",
        title: "AI & Workflow Automation",
        tagline: "Autonomous AI agents and operational data pipelines that eliminate manual bottlenecks.",
        gradient: "from-slate-900 via-blue-900 to-indigo-900",
        items: [
            {
                name: "Autonomous AI Agents",
                desc: "24/7 intelligent chatbots & custom LLM pipelines for automated lead qualification.",
            },
            {
                name: "Operational Data Pipelines",
                desc: "Event-driven webhooks & automated backend sync eliminating manual admin tasks.",
            },
        ],
        tech: ["AI Model APIs", "Webhooks", "Node.js / Python", "Data Pipelines"],
        whatsappQuery: "Hi Manthan, I want to implement AI agents and workflow automation for my business with Webiox!",
    },
    {
        id: "mobile-ux",
        number: "05",
        icon: Smartphone,
        badge: "Mobile & Product Design",
        title: "Mobile App Engineering & UI/UX Design",
        tagline: "Cross-platform mobile applications and friction-free user experience design.",
        gradient: "from-sky-600 via-blue-700 to-indigo-700",
        items: [
            {
                name: "Cross-Platform Mobile Apps",
                desc: "Native-feel iOS & Android apps built with React Native for unified cross-device codebases.",
            },
            {
                name: "Product Design & Prototyping",
                desc: "High-fidelity Figma wireframes & interactive prototypes focused on user retention.",
            },
        ],
        tech: ["React Native", "Expo", "Figma", "Design Systems", "Prototyping"],
        whatsappQuery: "Hi Manthan, I am looking for Mobile App development or UI/UX product design with Webiox!",
    },
];

const Services = () => {
    const [activePillar, setActivePillar] = useState("all");

    const displayedPillars =
        activePillar === "all"
            ? pillars
            : pillars.filter((p) => p.id === activePillar);

    return (
        <section id="services" className="py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
            {/* AMBIENT BACKGROUND GLOW */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-tr from-blue-50/70 via-indigo-50/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* --- OFFICIAL WEBIOX AGENCY HERO CARD (LUXURY LIGHT ARCHITECTURE) --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-14 p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50/90 to-blue-50/40 border border-slate-200/90 relative overflow-hidden shadow-[0_12px_36px_rgba(15,23,42,0.05),0_2px_8px_rgba(15,23,42,0.02)] group"
                >
                    {/* Top Multi-Stop Accent Gradient Line */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 pointer-events-none" />

                    {/* Ambient Subtle Sheen */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                        <div className="max-w-3xl">
                            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
                                    Software Engineering Studio
                                </span>
                                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full font-bold text-xs flex items-center gap-1.5 shadow-2xs">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    Active Client Deployments
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 mb-3">
                                Webiox Digital Solutions
                            </h3>

                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                Webiox Digital Solutions provides end-to-end software engineering, high-performance web platforms, and business automation tailored for growing businesses, startups, and commercial enterprises.
                            </p>
                        </div>

                        {/* Direct Agency Website Link & WhatsApp Inquire */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                            <a
                                href="https://webiox.tech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-xs hover:shadow-md transition-all group/link"
                            >
                                <span>webiox.tech</span>
                                <ExternalLink
                                    size={15}
                                    className="text-slate-500 group-hover/link:text-slate-950 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                                />
                            </a>

                            <a
                                href="https://wa.me/919664736245?text=Hi%20Manthan,%20I'd%20like%20to%20consult%20with%20Webiox%20Digital%20Solutions%20about%20a%20new%20project!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] transition-all active:scale-95"
                            >
                                <MessageCircle size={16} />
                                <span>Discuss Project</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* --- 3-STEP CHEVRON PROCESS ROADMAP (INFORMATIVE INFOGRAPHIC) --- */}
                <ProcessRoadmap />

                {/* --- SECTION HEADER --- */}
                <div className="mb-10 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Sparkles size={13} />
                        Core Service Capabilities
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                    >
                        Engineering Pillars &amp;{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Solutions
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="mt-3.5 text-slate-600 text-base md:text-lg leading-relaxed font-normal"
                    >
                        From custom digital flagships to scalable SaaS platforms and autonomous AI workflows—explore how Webiox delivers measurable commercial impact.
                    </motion.p>
                </div>

                {/* --- INTERACTIVE PILLAR FILTER TABS --- */}
                <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
                    <button
                        onClick={() => setActivePillar("all")}
                        className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all select-none ${
                            activePillar === "all"
                                ? "bg-slate-950 text-white shadow-sm"
                                : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 shadow-2xs"
                        }`}
                    >
                        All Capabilities (5)
                    </button>
                    {pillars.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => setActivePillar(p.id)}
                            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all select-none ${
                                activePillar === p.id
                                    ? "bg-slate-950 text-white shadow-sm"
                                    : "bg-white text-slate-600 hover:text-slate-950 hover:bg-slate-50 border border-slate-200/80 shadow-2xs"
                            }`}
                        >
                            {p.badge}
                        </button>
                    ))}
                </div>

                {/* --- 5 PILLARS BENTO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {displayedPillars.map((pillar, idx) => {
                            const Icon = pillar.icon;
                            const whatsappUrl = `https://wa.me/919664736245?text=${encodeURIComponent(
                                pillar.whatsappQuery
                            )}`;

                            return (
                                <motion.div
                                    key={pillar.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                                    className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.09)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                                >
                                    {/* Top Gradient Highlight */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.gradient}`}
                                    />

                                    <div>
                                        {/* Top Meta: Icon + Number */}
                                        <div className="flex items-center justify-between gap-3 mb-6">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center text-blue-600 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                                                <Icon size={22} />
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                                                    {pillar.badge}
                                                </span>
                                                <span className="font-mono text-xs font-bold text-slate-400">
                                                    {pillar.number}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title & Tagline */}
                                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                                            {pillar.tagline}
                                        </p>

                                        {/* Detailed Capabilities List */}
                                        <div className="space-y-4 mb-6 pt-5 border-t border-slate-100">
                                            {pillar.items.map((item, iIdx) => (
                                                <div key={iIdx} className="space-y-1">
                                                    <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-slate-900">
                                                        <CheckCircle2
                                                            size={15}
                                                            className="text-blue-600 shrink-0 mt-0.5"
                                                        />
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <p className="pl-6 text-xs text-slate-500 leading-relaxed font-normal">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer: Tech Stack + WhatsApp Trigger */}
                                    <div className="pt-5 border-t border-slate-100 mt-2">
                                        <div className="flex flex-wrap gap-1.5 mb-5">
                                            {pillar.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-[11px] font-semibold text-slate-600"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold tracking-wide shadow-xs hover:shadow-md transition-all active:scale-[0.98] group/btn"
                                        >
                                            <MessageCircle size={15} className="text-emerald-400" />
                                            <span>Inquire on WhatsApp</span>
                                            <ArrowUpRight
                                                size={14}
                                                className="text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                                            />
                                        </a>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* --- BOTTOM QUICK CALLOUT BANNER --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-2xs"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 hidden sm:flex">
                            <Zap size={22} />
                        </div>
                        <div>
                            <h4 className="font-extrabold text-slate-950 text-base sm:text-lg tracking-tight">
                                Have an upcoming project or need a reliable technical partner?
                            </h4>
                            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
                                Visit our studio at <a href="https://webiox.tech/" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">webiox.tech</a> or chat with Manthan on WhatsApp.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                        <a
                            href="https://webiox.tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs transition-all"
                        >
                            <span>Visit webiox.tech</span>
                            <ExternalLink size={13} className="text-slate-400" />
                        </a>

                        <a
                            href="https://wa.me/919664736245?text=Hi%20Manthan,%20I'd%20like%20to%20consult%20with%20Webiox%20on%20a%20new%20build!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] transition-all active:scale-95"
                        >
                            <MessageCircle size={16} />
                            <span>WhatsApp Chat</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
