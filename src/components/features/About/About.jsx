import React, { useRef } from "react";
import { User, Code, Target, Terminal, CheckCircle2, Layout, TrendingUp, Bot, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "../../common/TiltCard";

const About = () => {
    return (
        <section id="about" className="py-16 px-4 md:py-20 md:px-6 bg-slate-50 relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="mb-10 md:mb-12 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm"
                    >
                        <User size={12} /> About Me
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight"
                    >
                        More than just code. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                            I build digital engines for growth.
                        </span>
                    </motion.h2>
                </div>

                {/* --- COMPACT BENTO GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">

                    {/* 1. THE FULL STACK BUILDER (Span 2) */}
                    <TiltCard
                        className="md:col-span-2 lg:col-span-2 h-full"
                        delay={0.1}
                    >
                        <div className="bg-white rounded-3xl border border-slate-900 p-5 md:p-6 shadow-xl shadow-slate-200/50 hover:shadow-slate-900/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 h-full">
                            {/* Icon Column */}
                            <div className="w-full md:w-20 bg-blue-50 text-black-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 py-6 md:py-0">
                                <Terminal size={32} />
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 w-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">The Full Stack Builder</h3>
                                    <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
                                        <p>
                                            I don't just write code; I build complete solutions. From my background as a <b className="text-slate-900">BCA graduate</b> to completing my internship, I’ve focused on bridging the gap between a database and a responsive UI.
                                        </p>
                                        <p>
                                            I specialize in turning complex logic into clean, user-friendly <b className="text-slate-900">MERN applications</b>.
                                        </p>
                                    </div>
                                </div>

                                {/* Primary Stack Footer */}
                                <div className="border-t border-slate-100 pt-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'Node.js & Express', 'MongoDB', 'PostgreSQL'].map((tech) => (
                                            <span key={tech} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 flex items-center gap-1.5">
                                                <Code size={10} className="text-black-500" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* 2. PRODUCT MINDSET (Span 1) */}
                    <TiltCard className="h-full" delay={0.2}>
                        <div className="bg-[#0F172A] text-white p-5 md:p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-slate-900/20 ring-1 ring-white/10 h-full">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2"
                            />

                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-blue-400">
                                    <Target size={20} />
                                </div>

                                <h4 className="text-lg font-bold mb-3">Product Mindset</h4>
                                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                                    Having worked on tools like <b className="text-white">LifeOS</b>, I understand that code needs to solve a problem. I build with the end-user in mind to drive actual value.
                                </p>

                                <ul className="space-y-2.5 border-t border-white/10 pt-4">
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                        <Layout size={14} className="text-blue-400" /> User Experience (UX)
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                        <CheckCircle2 size={14} className="text-blue-400" /> Problem Solving
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                                        <TrendingUp size={14} className="text-blue-400" /> Responsive Design
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </TiltCard>

                    {/* 3. AI-POWERED EFFICIENCY (Span 1) */}
                    <TiltCard className="h-full" delay={0.3}>
                        <div className="bg-blue-600 text-white p-5 md:p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl shadow-blue-600/20 ring-1 ring-white/20 h-full">
                            <motion.div
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -right-4 text-white/10 rotate-[-15deg]"
                            >
                                <Bot size={100} />
                            </motion.div>

                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-white">
                                    <Sparkles size={20} />
                                </div>

                                <h4 className="text-lg font-bold mb-3">AI-Powered</h4>
                                <p className="text-blue-100 leading-relaxed text-sm mb-6">
                                    I am not just a coder; I am an <b className="text-white">AI-enhanced developer</b>. I leverage Prompt Engineering to write cleaner code faster and debug smarter.
                                </p>
                            </div>

                            <div className="relative z-10 border-t border-white/20 pt-4">
                                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-2">AI Tools</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {['Prompt Eng.', 'AI Integration', 'Smart Debugging'].map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 bg-black/20 rounded text-[10px] font-semibold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                    {/* 4. MODERN EXECUTION (Span 2) */}
                    <TiltCard className="md:col-span-2 lg:col-span-2 h-full" delay={0.4}>
                        <div className="bg-white rounded-3xl border border-blue-500 p-5 md:p-6 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-6 md:gap-8 h-full bg-gradient-to-br from-white to-slate-50/50">
                            {/* Icon Column */}
                            <div className="w-full md:w-20 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 py-6 md:py-0">
                                <Rocket size={32} />
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 w-full flex flex-col justify-between">
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">Workflow & Deployment</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                                        Great code is useless if it doesn't run smoothly in production. I focus on <b className="text-slate-900">maintainable architecture</b> and a streamlined development lifecycle—from strict version control to optimized builds and reliable cloud deployment.
                                    </p>
                                </div>

                                {/* Toolkit Footer */}
                                <div className="border-t border-slate-100 pt-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Toolkit</p>
                                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                                            Bug-Free Shipping
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            'Build: Vite (High-performance tooling)',
                                            'Control: Git & GitHub (Collaboration)',
                                            'Test: Postman (API Reliability)',
                                            'Deploy: Vercel / Netlify (CI/CD)'
                                        ].map((tool) => (
                                            <span key={tool} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 flex items-center gap-1.5 hover:bg-white hover:border-blue-200 transition-colors cursor-default">
                                                <CheckCircle2 size={10} className="text-blue-500 shrink-0" />
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TiltCard>

                </div>
            </div>
        </section>
    );
};

export default About;
