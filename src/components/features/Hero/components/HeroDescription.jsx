import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";

const HeroDescription = () => {
    return (
        <motion.p
            variants={fadeIn("up", "spring", 1, 1)}
            className="-mt-6 text-sm md:text-lg lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0"
        >
            As a <b>Full-Stack Developer</b> and <b>Founder at Webiox</b>, I engineer high-velocity digital products and commercial web flagships for brands across the <b>UK, Switzerland, US, France, and India</b>. Trusted by international clients including{" "}
            <a
                href="https://www.qissa.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 underline underline-offset-4 hover:text-emerald-600 transition"
            >
                Qissa (UK)
            </a>,{" "}
            <a
                href="https://www.royaldrive.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 underline underline-offset-4 hover:text-emerald-600 transition"
            >
                Royal Drive
            </a>, and{" "}
            <a
                href="https://hariramcars.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-slate-900 underline underline-offset-4 hover:text-emerald-600 transition"
            >
                Hariram Motors
            </a>.
        </motion.p>
    );
};

export default HeroDescription;
