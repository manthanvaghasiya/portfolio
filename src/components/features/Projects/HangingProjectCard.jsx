import React from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const HangingProjectCard = ({
    project,
    onClick,
    isCenter = false,
    rotation = 0,
    className = "",
}) => {
    if (!project) return null;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={`relative flex flex-col items-center select-none ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                transformOrigin: "top center",
            }}
        >
            {/* --- TOP GREEN CLIP TAG (Clamped directly over wire) --- */}
            <div className="absolute -top-5 z-30 flex flex-col items-center pointer-events-none">
                {/* Clip Body */}
                <div className="w-6 h-8 rounded-t-md rounded-b-xs bg-emerald-500 shadow-md flex items-start justify-center pt-1.5 relative border-t border-emerald-300/70">
                    {/* Metal Eyelet Hole Intersected by Cable */}
                    <div className="w-2.5 h-2.5 rounded-full bg-white shadow-inner flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-slate-900/60" />
                    </div>
                    {/* Clamping Base Shadow onto Card Top */}
                    <div className="absolute -bottom-0.5 left-0 right-0 h-1 bg-emerald-700/60 rounded-b-xs" />
                </div>
            </div>

            {/* --- POLAROID LUXURY CARD BODY --- */}
            <motion.div
                whileHover={{
                    y: -14,
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 350, damping: 22 },
                }}
                onClick={onClick}
                className={`w-full bg-white rounded-[26px] sm:rounded-[30px] p-3 sm:p-3.5 pb-4 sm:pb-5 border transition-all duration-300 cursor-pointer flex flex-col group ${
                    isCenter
                        ? "border-emerald-400 shadow-[0_25px_55px_-10px_rgba(16,185,129,0.22),0_12px_24px_rgba(15,23,42,0.06)] ring-2 ring-emerald-500/20"
                        : "border-slate-200/90 shadow-[0_20px_45px_rgba(15,23,42,0.09)] hover:shadow-[0_30px_65px_rgba(15,23,42,0.18)] hover:border-slate-300"
                }`}
            >
                {/* Image Container with Polaroid Margin */}
                <div className="relative aspect-[4/3] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-inner border border-slate-100/80">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        loading="lazy"
                    />

                    {/* Gradient scrim on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Quick Action Indicator */}
                    <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center shadow-xs border border-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <ArrowUpRight size={14} />
                    </div>

                    {/* Live Link Badge */}
                    {project.liveLink && project.liveLink !== "#" && (
                        <div className="absolute bottom-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-bold shadow-xs">
                                <ExternalLink size={10} /> Live
                            </span>
                        </div>
                    )}
                </div>

                {/* Minimalist, Clean Typography Matching Reference */}
                <div className="pt-3 px-1 flex flex-col">
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                        {project.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-500 font-medium truncate mt-0.5">
                        {project.shortDescription || project.category}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HangingProjectCard;
