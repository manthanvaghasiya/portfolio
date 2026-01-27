import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const HeroSocials = () => {
    return (
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4" data-aos="fade-up" data-aos-delay="460">
            <div className="hidden lg:block mx-2 h-6 w-px bg-slate-400" />
            <div className="flex items-center gap-6 md:gap-8 lg:gap-4 text-slate-400">
                <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition hover:scale-110">
                    <Github size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
                </a>
                <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition hover:scale-110">
                    <Linkedin size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
                </a>
                <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition hover:scale-110">
                    <Instagram size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
                </a>
            </div>
        </div>
    );
};

export default HeroSocials;
