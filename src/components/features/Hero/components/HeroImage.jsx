import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";

const HeroImage = () => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.3, 0.8)}
            className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg mx-auto flex justify-center items-center"
        >
            {/* LUXURY AMBIENT GLOW BACKDROP (STATIC) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 via-indigo-100/40 to-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none scale-105" />

            {/* SOFT CIRCULAR BASE ACCENT (STATIC) */}
            <div className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-b from-white/70 to-slate-100/60 border border-slate-200/60 -z-10 pointer-events-none shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)]" />

            {/* STABLE, CRISP PORTRAIT IMAGE (NO MOVEMENT/FLOATING) */}
            <div className="relative z-10 w-full flex justify-center">
                <img
                    src="/profile.jpg"
                    alt="Manthan Vaghasiya"
                    className="w-full h-auto max-h-[380px] sm:max-h-[480px] lg:max-h-[580px] object-contain drop-shadow-xl select-none"
                    style={{
                        maskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 88%, transparent 100%)",
                    }}
                />
            </div>
        </motion.div>
    );
};

export default HeroImage;
