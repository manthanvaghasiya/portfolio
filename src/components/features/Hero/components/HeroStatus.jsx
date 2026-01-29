import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../../../utils/motion";

const HeroStatus = () => {
    return (
        <motion.div variants={textVariant(0.1)} className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Work
        </motion.div>
    );
};

export default HeroStatus;
