import React from "react";
import {
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

    return () => {
      clearInterval(interval1);
    };
  }, []);

  // Render line 1 with only "ideas" in gradient once it appears
  const renderLine1 = () => {
    if (!text1) return null;
    const word = "ideas";
    const idx = text1.indexOf(word);

    if (idx === -1) {
      return <>{text1}</>;
    }

    const before = text1.slice(0, idx);
    const typedIdeas = text1.slice(idx, idx + word.length);
    const after = text1.slice(idx + word.length);

    return (
      <>
        {before}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {typedIdeas}
        </span>
        {after}
      </>
    );
  };

  // Render line 2 with "scalable digital" in gradient and "products" black
  const renderLine2 = () => {
    if (!text2) return null;
    const word = "products";
    const idx = text2.indexOf(word);

    if (idx === -1) {
      return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {text2}
        </span>
      );
    }

    const before = text2.slice(0, idx);
    const typedProducts = text2.slice(idx);

    return (
      <>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-rose-500 to-red-500">
          {before}
        </span>{" "}
        <span className="text-slate-900">{typedProducts}</span>
      </>
    );
  };

  return (
    <section
      id="home"
      // UX Fix: Added overflow-hidden to prevent horizontal scrolling on mobile due to background blobs
      // UX Fix: Adjusted min-h to fit content better on mobile, keep screen height on desktop
      className="relative flex items-center px-6 pt-28 pb-12 md:min-h-screen md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-tr from-emerald-100 via-white to-sky-100 scroll-mt-24 md:scroll-mt-32"
    >
      {/* ---------------- BACKGROUND SHAPES ---------------- */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute -left-20 bottom-0 md:-left-40 md:bottom-[-140px] h-60 w-60 md:h-80 md:w-80 rounded-full bg-emerald-300/60 blur-3xl" />
        <div className="absolute -right-20 top-0 md:-right-40 md:-top-32 h-60 w-60 md:h-72 md:w-72 rounded-full bg-sky-300/60 blur-3xl" />
      </div>

      {/* Big orange circle behind image - Adjusted positioning for mobile */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-40px] md:left-[-140px] md:translate-x-0 md:bottom-[-120px] h-[300px] w-[300px] md:h-[560px] md:w-[560px] rounded-full bg-gradient-to-tr from-orange-500 via-orange-400 to-rose-500 -z-10 opacity-60 md:opacity-100" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-14">
        {/* ---------- LEFT: IMAGE ---------- */}
        <div
          className="w-full md:w-[45%] flex justify-center md:justify-start order-1 md:order-1"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* UX Fix: Removed negative margin on mobile to prevent overflow. Added max-width constraint for mobile. */}
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl md:-mr-6">
            <img
              src="/profile.jpg"
              alt="Manthan"
              // UX Fix: Removed scale on mobile (scale-100) to keep layout clean, kept scale-110 for desktop
              className="w-full h-auto max-h-[350px] md:max-h-[720px] object-contain drop-shadow-2xl transform scale-100 md:scale-110 lg:scale-[1.18] origin-bottom hover:scale-[1.05] md:hover:scale-[1.2] transition-transform duration-700 ease-out"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* ---------- RIGHT: TEXT ---------- */}
        <div className="w-full md:w-[55%] text-center md:text-left space-y-5 md:space-y-6 order-2 md:order-2">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
            </span>
            Available for Work
          </div>

          {/* Heading */}
          <h1
            className="font-black text-slate-900 tracking-tight leading-[1.2]"
            data-aos="fade-up"
            data-aos-delay="160"
          >
            <span className="block text-lg md:text-2xl lg:text-3xl font-semibold text-slate-600 mb-1">
              I&apos;m Manthan Vaghasiya
            </span>

            <span className="block text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3 md:mb-3">
              Full-Stack Developer
            </span>

            {/* UX Fix: Adjusted font sizes for mobile to prevent word breaking */}
            <span className="block text-3xl md:text-4xl lg:text-5xl mb-1 min-h-[40px] md:min-h-auto">
              {renderLine1()}
            </span>

            <span className="block mt-1 md:mt-2 text-3xl md:text-4xl lg:text-5xl whitespace-normal md:whitespace-nowrap">
              {renderLine2()}
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-4 text-sm md:text-base lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl mx-auto md:mx-0 px-2 md:px-0"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            As a <b>Full Stack Developer</b>, I design and develop complete web
            products from the ground up. From building{" "}
            <b>robust backend architectures</b> to crafting{" "}
            <b>user–friendly interfaces</b>, I focus on{" "}
            <b>performance, maintainability, and real business impact</b>. My
            portfolio includes platforms like{" "}
            <a
              href="#projects"
              className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition"
            >
              DairyFlow
            </a>{" "}
            and{" "}
            <a
              href="#projects"
              className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition"
            >
              LifeOS
            </a>.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2"
            data-aos="fade-up"
            data-aos-delay="360"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 md:gap-3 rounded-full bg-slate-900 px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black active:scale-95"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download="Manthan_Vaghasiya_Resume.pdf"
              className="flex items-center gap-2 md:gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 md:px-8 md:py-3.5 text-sm md:text-base font-semibold text-slate-800 shadow-sm transition hover:border-orange-500 hover:text-orange-600 active:scale-95"
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
            <div className="hidden md:block mx-2 h-6 w-px bg-slate-400" />
            <div className="flex items-center gap-6 md:gap-4 text-slate-400">
              <a
                href="https://github.com/manthanvaghasiya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 transition hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/manthan_vaghasiya_07"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition hover:scale-110"
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