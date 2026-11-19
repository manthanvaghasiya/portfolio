import React, { useRef } from "react";
import { ExternalLink, ArrowRight, Eye, Sparkles } from "lucide-react";

const MobileProjectsCarousel = ({
    filteredProjects,
    setSelectedProject,
}) => {
    const scrollContainerRef = useRef(null);

    return (
        <div className="w-full relative select-none">
            {/* Top Carousel Micro Status Bar */}
            <div className="flex items-center justify-between px-4 mb-3 text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Sparkles size={13} />
                    <span>Swipe horizontally</span>
                </span>
                <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                    {filteredProjects.length} Projects
                </span>
            </div>

            {/* Horizontal Snap Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-6 pt-1 scrollbar-hide -mx-4 sm:mx-0"
                style={{ WebkitOverflowScrolling: "touch" }}
            >
                {filteredProjects.map((project, idx) => (
                    <div
                        key={`${project.title}-${idx}`}
                        onClick={() => setSelectedProject(project)}
                        className="w-[84vw] max-w-[320px] shrink-0 snap-center bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_24px_rgba(15,23,42,0.05)] overflow-hidden flex flex-col justify-between active:scale-[0.98] transition-transform duration-200"
                    >
                        {/* 16:9 Project Thumbnail Container */}
                        <div className="relative aspect-[16/10] bg-slate-950 overflow-hidden group">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                    e.target.src = "/projects/qissa.jpg";
                                }}
                            />

                            {/* Top Badges Overlay */}
                            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                                <span className="px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                                    {project.countryFlag} {project.location?.split(",")[0] || "Global"}
                                </span>

                                <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider shadow-xs">
                                    {project.badge || "Live"}
                                </span>
                            </div>

                            {/* Tap to View Overlay Hint */}
                            <div className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold flex items-center gap-1 pointer-events-none">
                                <Eye size={11} />
                                <span>Details</span>
                            </div>
                        </div>

                        {/* Card Content Details */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-1">
                                    {project.category}
                                </div>
                                <h3 className="text-base font-extrabold text-slate-950 tracking-tight leading-snug line-clamp-1 mb-1.5">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-3">
                                    {project.shortDescription}
                                </p>
                            </div>

                            {/* Tech Stack Chips & Action */}
                            <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1 overflow-hidden">
                                    {project.tech?.slice(0, 2).map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold truncate"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech?.length > 2 && (
                                        <span className="text-[10px] font-bold text-slate-400">
                                            +{project.tech.length - 2}
                                        </span>
                                    )}
                                </div>

                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold text-[11px] shrink-0 border border-emerald-200/60"
                                    >
                                        <span>Live</span>
                                        <ExternalLink size={10} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MobileProjectsCarousel;
