import React from "react";
import { Layout, Server, Database, Cloud, Zap, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend Engineering",
        subtitle: "High-performance, responsive interfaces",
        badge: "Architecture",
        icon: <Layout className="text-blue-600" size={22} />,
        accent: "from-blue-600 to-indigo-600",
        skills: [
            "Next.js (App Router, SSR / SSG)",
            "React.js (Custom Hooks, Concurrent UI)",
            "TypeScript & Modern JavaScript (ES6+)",
            "Tailwind CSS & Utility Design Systems",
            "CSS Flexbox, Grid & Media Queries",
            "Mobile-First Responsive Optimization",
        ],
    },
    {
        title: "Backend & APIs",
        subtitle: "Scalable server logic & secure endpoints",
        badge: "Server & Microservices",
        icon: <Server className="text-indigo-600" size={22} />,
        accent: "from-indigo-600 to-violet-600",
        skills: [
            "Node.js & Express.js Microservices",
            "RESTful API Architecture & Contract Design",
            "JWT Authentication & Role Authorization",
            "Middleware & Secure Request Pipelines",
            "Third-Party API Integrations & Webhooks",
            "Server-Side State & Session Handling",
        ],
    },
    {
        title: "Databases & Storage",
        subtitle: "Relational & NoSQL data schemas",
        badge: "Data Modeling",
        icon: <Database className="text-emerald-600" size={22} />,
        accent: "from-emerald-600 to-teal-600",
        skills: [
            "MongoDB & Mongoose Schema Validation",
            "PostgreSQL (Relational Design & Indexing)",
            "Supabase (Auth & Realtime DB)",
            "MySQL Database Modeling",
            "Complex Aggregation Pipelines & Queries",
            "Data Integrity & Query Performance Tuning",
        ],
    },
    {
        title: "DevOps & Cloud Infrastructure",
        subtitle: "Global edge networks & cloud deployments",
        badge: "Deployment & CDN",
        icon: <Cloud className="text-sky-600" size={22} />,
        accent: "from-sky-500 to-blue-600",
        skills: [
            "Vercel Edge Network Deployment",
            "Render Cloud Hosting & Microservices",
            "Cloudflare CDN & Edge Caching",
            "ImageKit & Media Delivery Optimization",
            "Git & GitHub Collaborative Workflows",
            "Core Web Vitals & Sub-Second Tuning",
        ],
    },
    {
        title: "Commercial Web Solutions",
        subtitle: "Conversion architectures & client impact",
        badge: "Business Value",
        icon: <Zap className="text-amber-600" size={22} />,
        accent: "from-amber-500 to-orange-500",
        skills: [
            "AutoDealer Schema & Technical Local SEO",
            "Dynamic Inventory Filtering & Showcase",
            "Custom Admin Dashboards & PWA Staff Portals",
            "Frictionless Inquiry & Booking Flows",
            "Clean Code & Architectural Audits",
            "High-Throughput Storefront Architecture",
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/50 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-blue-50/70 via-indigo-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- HEADER --- */}
                <div className="mb-14 md:mb-18 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
                    >
                        <Cpu size={13} />
                        Technical Architecture &amp; Stack
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
                    >
                        Engineered for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Speed, Scale &amp; Precision.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-base md:text-lg mt-3.5 font-normal leading-relaxed"
                    >
                        A battle-tested technical toolkit spanning modern React/Next.js frontends, scalable Node.js architectures, relational and NoSQL databases, and global edge cloud infrastructure.
                    </motion.p>
                </div>

                {/* --- SKILLS BENTO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className={`bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_16px_36px_-8px_rgba(15,23,42,0.08)] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                                idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                            }`}
                        >
                            {/* Top Subtle Accent Strip */}
                            <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${category.accent}`} />

                            <div>
                                {/* Header Row */}
                                <div className="flex items-start justify-between gap-3.5 mb-5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-50/90 border border-slate-200/80 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                                                {category.title}
                                            </h3>
                                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                                                {category.subtitle}
                                            </p>
                                        </div>
                                    </div>

                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/60 shrink-0">
                                        {category.badge}
                                    </span>
                                </div>

                                {/* Skills List */}
                                <div className={`grid gap-2 pt-2 ${idx === 4 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-blue-50/70 hover:border-blue-200 hover:text-blue-950 transition-all shadow-2xs group/chip"
                                        >
                                            <CheckCircle2 size={15} className="text-blue-600 shrink-0 group-hover/chip:scale-110 transition-transform" />
                                            <span>{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
