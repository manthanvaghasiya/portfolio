import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";

const Hero = () => {
 const line1 = "I turn ideas into";
const line2 = "scalable digital products";

const [text1, setText1] = React.useState("");
const [text2, setText2] = React.useState("");

React.useEffect(() => {
  let i = 0;
  let j = 0;

  const interval1 = setInterval(() => {
    setText1(line1.slice(0, i + 1));
    i++;

    if (i === line1.length) {
      clearInterval(interval1);

      const interval2 = setInterval(() => {
        setText2(line2.slice(0, j + 1));
        j++;

        if (j === line2.length) clearInterval(interval2);
      }, 60);
    }
  }, 60);

  return () => clearInterval(interval1);
}, []);


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-tr from-emerald-100 via-white to-sky-100 scroll-mt-24 md:scroll-mt-32"
    >

      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-40 bottom-[-140px] h-80 w-80 rounded-full bg-emerald-300/60 blur-3xl" />
        <div className="absolute -right-40 -top-32 h-72 w-72 rounded-full bg-sky-300/60 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute left-[-140px] bottom-[-120px] h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-orange-500 via-orange-400 to-rose-500 -z-10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col md:flex-row items-center gap-10 lg:gap-14">
        {/* LEFT: IMAGE */}
        <div
          className="w-full md:w-[45%] flex justify-center md:justify-start"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl md:-mr-6">
            <img
              src="/profile.jpg"
              alt="Manthan"
              className="w-full h-auto max-h-[720px] object-contain drop-shadow-2xl transform md:scale-110 lg:scale-[1.18] origin-bottom hover:scale-[1.2] transition-transform duration-700 ease-out"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 88%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="w-full md:w-[55%] text-center md:text-left space-y-6">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur"
            data-aos="fade-up"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Full-Time Job Roles & Startups
          </div>

          {/* Small Title */}
          

          {/* Main Heading */}
          <h1
            className="font-black text-slate-900 tracking-tight leading-[1.15]"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            {/* Line 1: I'm Manthan */}
            <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-slate-600 mb-2">
              I&apos;m Manthan Vaghasiya
            </span>

            <p
            className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Full-Stack Developer 
          </p>
          <br/>
            {/* Line 2: Typing – I turn ideas into */}
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-1">
              {text1
                .replace("ideas", "")
                .trim()}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
                {text1.includes("ideas") ? "ideas" : ""}
              </span>
              {/* fallback if typing not yet started */}
              {!text1 && "I turn"}
            </span>

            {/* Line 3: Typing – scalable digital products */}
            <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
                {text2.replace("products", "").trim()}
              </span>{" "}
              <span className="text-slate-900">
                {text2.includes("products") ? "products" : ""}
              </span>
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-5 text-base md:text-lg text-slate-700 leading-relaxed font-medium max-w-xl"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            As a Full Stack Developer, I design and develop complete web
            products from the ground up. From building{" "}
            robust backend architectures to crafting{" "}
            <b>user-friendly interfaces</b>, I focus on{" "}
            <b>performance, maintainability,</b> and <b>real business impact</b>. My
            work includes platforms like <b>DairyFlow</b> and{" "}
            <b>LifeOS</b>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-2"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            <a
              href="#contact"
              className="flex items-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-sm md:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download="Manthan_Vaghasiya_Resume.pdf"
              className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-sm md:text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-500 hover:text-orange-600"
            >
              Download CV <Download size={18} />
            </a>
          </div>

          {/* Socials */}
          <div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
            data-aos="fade-up"
            data-aos-delay="460"
          >
            <div className="mx-2 h-6 w-px bg-slate-400" />
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href="https://github.com/manthanvaghasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/manthan_vaghasiya_07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
