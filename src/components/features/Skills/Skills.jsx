import React, { useRef, useState } from "react";
import { Database, Layout, Server, Settings, Terminal, Cpu } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import TiltCard from "../../common/TiltCard";

const Skills = () => {
    const categories = [
        {
            title: "Frontend",
            icon: <Layout className="text-indigo-400" size={28} />,
            skills: ["React.js (Hooks, Component Arch.)",
                "Tailwind CSS & Responsive Layouts",
                "JavaScript (ES6+)",
                "Reusable UI & State Management",]
        },
        {
            title: "Backend",
            icon: <Server className="text-emerald-400" size={28} />,
            skills: ["Node.js & Express.js",
                "REST API Design & Routing",
                "JWT Authentication & Security",
                "Validation, Error Handling & Middleware",]
        },
        {
            title: "Database",
            icon: <Database className="text-orange-400" size={28} />,
            skills: ["MongoDB + Mongoose (Schemas)",
                "PostgreSQL Basics",
                "Query Design & Indexing",
                "Data Modeling for SaaS Apps",]
        },
        {
            title: "DevOps",
            icon: <Settings className="text-pink-400" size={28} />,
            skills: ["Git & GitHub (Version Control)",
                "Postman / API Testing",
                "Vercel & Render Deployments",
                "VS Code & Developer Productivity",]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 10
            }
        }
    };

    const listVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <section id="skills" className="py-24 px-6 bg-[#0F172A] relative overflow-hidden perspective-1000">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
                            <Terminal size={16} />
                            <span>system_capabilities.json</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stack</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-slate-400 max-w-md text-lg"
                    >
                        A comprehensive toolkit for building scalable, high-performance web applications.
                    </motion.p>
                </div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((cat, index) => (
                        <motion.div key={index} variants={itemVariants} className="h-full">
                            <TiltCard
                                withSpotlight={true}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-colors duration-300"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 shadow-inner shadow-white/5">
                                    {cat.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{cat.title}</h3>

                                <ul className="space-y-3">
                                    {cat.skills.map((skill, i) => (
                                        <motion.li
                                            key={i}
                                            variants={listVariants}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed group/item"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 group-hover/item:scale-150 transition-transform"></div>
                                            <span className="group-hover/item:text-white transition-colors">{skill}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;
