import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HangingProjectCard from "./HangingProjectCard";

const slotConfigs = [
    { offset: -2, rotation: -18, paddingTop: 80, zIndex: 10 },
    { offset: -1, rotation: -9, paddingTop: 149, zIndex: 20 },
    { offset: 0, rotation: 0, paddingTop: 174, zIndex: 30, isCenter: true },
    { offset: 1, rotation: 9, paddingTop: 149, zIndex: 20 },
    { offset: 2, rotation: 18, paddingTop: 80, zIndex: 10 },
];

const DesktopProjects = ({
    filteredProjects,
    centerIndex,
    setCenterIndex,
    setSelectedProject,
}) => {
    const total = filteredProjects.length;

    const handleNext = () => {
        if (total === 0) return;
        setCenterIndex((prev) => (prev + 1) % total);
    };

    const handlePrev = () => {
        if (total === 0) return;
        setCenterIndex((prev) => (prev - 1 + total) % total);
    };

    const getProjectAtOffset = (offset) => {
        if (total === 0) return null;
        const targetIndex = (centerIndex + offset + total * 10) % total;
        return filteredProjects[targetIndex];
    };

    return (
        <div className="relative min-h-[660px] pb-16 select-none">
            {/* The Deep Curved Tension Cable (SVG) with 140px Sag */}
            <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
                <svg
                    className="w-full h-[260px] overflow-visible"
                    viewBox="0 0 1200 240"
                    fill="none"
                    preserveAspectRatio="none"
                >
                    {/* Cable Soft Blur Shadow */}
                    <path
                        d="M -30 23 Q 600 303 1230 23"
                        stroke="rgba(15,23,42,0.06)"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                    />
                    {/* Main Wire Cable */}
                    <path
                        d="M -30 20 Q 600 300 1230 20"
                        stroke="#94A3B8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                    {/* Left & Right Anchor Pegs */}
                    <circle cx="-15" cy="20" r="5.5" fill="#64748B" />
                    <circle cx="1215" cy="20" r="5.5" fill="#64748B" />
                </svg>
            </div>

            {/* Navigation Arrow Controls (Floating on Sides) */}
            <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={handleNext}
                aria-label="Next project"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-md hover:border-emerald-300 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
                <ChevronRight size={20} />
            </button>

            {/* 5 Hanging Polaroid Cards Positioned Along the Deep Curve */}
            <div className="grid grid-cols-5 gap-4 xl:gap-6 relative z-20 items-start px-4 sm:px-8">
                {slotConfigs.map((config, slotIdx) => {
                    const project = getProjectAtOffset(config.offset);
                    if (!project) return <div key={slotIdx} />;

                    if (total < 5 && Math.abs(config.offset) > Math.floor(total / 2)) {
                        return <div key={slotIdx} />;
                    }

                    return (
                        <div
                            key={`${project.title}-${slotIdx}`}
                            className="relative flex flex-col items-center"
                            style={{
                                paddingTop: `${config.paddingTop}px`,
                                zIndex: config.zIndex,
                            }}
                        >
                            <HangingProjectCard
                                project={project}
                                onClick={() => {
                                    const targetIndex = (centerIndex + config.offset + total * 10) % total;
                                    setCenterIndex(targetIndex);
                                    setSelectedProject(project);
                                }}
                                isCenter={config.isCenter}
                                rotation={config.rotation}
                                className="w-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DesktopProjects;
