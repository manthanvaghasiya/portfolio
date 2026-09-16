import React from "react";
import { Github, Code2, GitCommit } from "lucide-react";
import { motion } from "framer-motion";

const GithubStats = () => {
    return (
        <section className="py-20 md:py-24 px-4 sm:px-6 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* --- HEADER --- */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                        Open-Source &{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                            Code Activity
                        </span>
                    </h2>

                    <p className="mt-3 text-slate-600 text-base md:text-lg font-normal">
                        Real-time metrics from my GitHub profile. I believe in consistent contribution, reliable shipping, and clean code.
                    </p>
                </div>

                {/* --- STATS CARDS GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start max-w-5xl mx-auto">

                    {/* CARD 1: OVERALL STATS */}
                    <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                <Github size={18} className="text-slate-700" />
                                <span>GitHub Summary</span>
                            </div>
                            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                                @manthanvaghasiya
                            </span>
                        </div>

                        <img
                            src="https://github-readme-stats.vercel.app/api?username=manthanvaghasiya&show_icons=true&theme=default&bg_color=ffffff&hide_border=true&title_color=0f172a&icon_color=2563eb&text_color=475569"
                            alt="Manthan's GitHub Stats"
                            loading="lazy"
                            className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-300"
                        />
                    </div>

                    {/* CARD 2: STREAK & TOP LANGUAGES */}
                    <div className="space-y-6">
                        {/* STREAK */}
                        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 group">
                            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                    <Code2 size={18} className="text-blue-600" />
                                    <span>Contribution Consistency</span>
                                </div>
                                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">
                                    Active Streak
                                </span>
                            </div>

                            <img
                                src="https://github-readme-streak-stats.herokuapp.com/?user=manthanvaghasiya&theme=default&bg_color=ffffff&hide_border=true&ring=2563eb&currStreakLabel=2563eb&stroke=e2e8f0"
                                alt="Manthan's Streak"
                                loading="lazy"
                                className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-300"
                            />
                        </div>

                        {/* TOP LANGUAGES */}
                        <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 group">
                            <img
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=manthanvaghasiya&layout=compact&theme=default&bg_color=ffffff&hide_border=true&title_color=0f172a&text_color=475569"
                                alt="Manthan's Top Languages"
                                loading="lazy"
                                className="w-full h-auto transform group-hover:scale-[1.01] transition-transform duration-300"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GithubStats;