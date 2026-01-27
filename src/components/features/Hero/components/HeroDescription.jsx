import React from "react";

const HeroDescription = () => {
    return (
        <p className="mt-4 text-sm md:text-lg lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0" data-aos="fade-up" data-aos-delay="260">
            As a <b>Full Stack Developer</b>, I design and develop complete web products from the ground up. From building <b>robust backend architectures</b> to crafting <b>user–friendly interfaces</b>, I focus on <b>performance, maintainability, and real business impact</b>. My portfolio includes platforms like{" "}
            <a href="#projects" className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition">LifeOS</a> and{" "}
            <a href="#projects" className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition">DairyFlow</a>.
        </p>
    );
};

export default HeroDescription;
