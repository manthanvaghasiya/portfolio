import React from "react";
import { Download } from "lucide-react";

const HeroActions = () => {
    return (
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-2" data-aos="fade-up" data-aos-delay="360">
            <a href="#contact" className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-slate-900 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 active:scale-95">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                <span className="relative z-20">Hire Me</span>
            </a>

            <a href="/resume.pdf" download="Manthan_Vaghasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-500 hover:text-orange-600 active:scale-95">
                Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            </a>
        </div>
    );
};

export default HeroActions;
