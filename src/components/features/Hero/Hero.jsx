import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { textVariant, slideIn, staggerContainer, fadeIn } from "../../../utils/motion";
import { useParallax } from "../../../hooks/useParallax";
import RevealText from "../../common/RevealText";

const Hero = () => {
    const ref = useRef(null);
    const parallaxY = useParallax(ref, 100);
    const parallaxYReverse = useParallax(ref, -100);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // --- Typewriter Logic ---
    const line1 = "I turn ideas into";
    const line2 = "Scalable digital products";

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const interval1Ref = useRef(null);
    const interval2Ref = useRef(null);
    const mountedRef = useRef(true);

    // Respect reduced motion
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
        ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
        : false;

    useEffect(() => {
        mountedRef.current = true;
        if (prefersReducedMotion) {
            setText1(line1);
            setText2(line2);
            return;
        }

        let i = 0;
        let j = 0;

        interval1Ref.current = setInterval(() => {
            i++;
            if (!mountedRef.current) return;
            setText1(line1.slice(0, i));

            if (i >= line1.length) {
                clearInterval(interval1Ref.current);
                interval1Ref.current = null;

                // start second typing interval
                interval2Ref.current = setInterval(() => {
                    j++;
                    if (!mountedRef.current) return;
                    setText2(line2.slice(0, j));
                    if (j >= line2.length) {
                        clearInterval(interval2Ref.current);
                        interval2Ref.current = null;
                    }
                }, 60);
            }
        }, 60);

        return () => {
            mountedRef.current = false;
            if (interval1Ref.current) clearInterval(interval1Ref.current);
            if (interval2Ref.current) clearInterval(interval2Ref.current);
        };
    }, [line1, line2, prefersReducedMotion]);

    const renderLine1 = () => {
        if (!text1) return null;
        const word = "ideas";
        const idx = text1.indexOf(word);
        if (idx === -1) return <>{text1}</>;

        const before = text1.slice(0, idx);
        const typedIdeas = text1.slice(idx, idx + word.length);
        const after = text1.slice(idx + word.length);

        return (
            <>
                {before}
                <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text bg-[length:200%_auto]">{typedIdeas}</span>
                {after}
            </>
        );
    };

    const renderLine2 = () => {
        if (!text2) return null;
        const word = "products";
        const idx = text2.indexOf(word);

        if (idx === -1) {
            return (
                <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text bg-[length:200%_auto]">
                    {text2}
                </span>
            );
        }

        const before = text2.slice(0, idx);
        const typedProducts = text2.slice(idx);

        return (
            <>
                <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text bg-[length:200%_auto]">
                    {before}
                </span>{" "}
                <span className="text-slate-900">{typedProducts}</span>
            </>
        );
    };

    return (
        <section
            ref={ref}
            id="home"
            className="relative flex items-center px-6 pt-28 pb-12 lg:min-h-screen lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-tr from-emerald-100 via-white to-sky-100 scroll-mt-24 lg:scroll-mt-32"
        >
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Background shapes (Parallax + Floating) */}
            <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
                <motion.div
                    style={{ y: parallaxY }}
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-[120px]"
                />
                <motion.div
                    style={{ y: parallaxYReverse }}
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-20 bottom-0 lg:-left-40 lg:bottom-[-140px] h-60 w-60 lg:h-80 lg:w-80 rounded-full bg-emerald-300/60 blur-3xl"
                />
                <motion.div
                    style={{ y: parallaxY }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -right-20 top-0 lg:-right-40 lg:-top-32 h-60 w-60 lg:h-72 lg:w-72 rounded-full bg-sky-300/60 blur-3xl"
                />
            </div>

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                initial="hidden"
                whileInView="show"
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[-40px] lg:left-[-140px] lg:translate-x-0 lg:bottom-[-120px] h-[300px] w-[300px] md:h-[450px] md:w-[450px] lg:h-[560px] lg:w-[560px] rounded-full bg-gradient-to-tr from-orange-500 via-orange-400 to-rose-500 -z-10 opacity-60 lg:opacity-100"
            />

            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-14"
            >
                {/* Profile Image Column */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1">
                    <motion.div
                        style={{ y: parallaxYReverse }}
                        variants={fadeIn("right", "spring", 0.5, 0.75)}
                        className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 -mt-8 lg:-mt-24"
                    >
                        <motion.img
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            src="/profile.jpg"
                            alt="Manthan"
                            className="w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl origin-bottom"
                            style={{
                                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Text Content Column */}
                <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5 md:space-y-7 lg:space-y-6 order-2">

                    <motion.div variants={textVariant(0.1)} className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/70 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur">
                        <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        Available for Work
                    </motion.div>

                    <div className="font-black text-slate-900 tracking-tight leading-[1.2]">
                        <RevealText delay={0.2}>
                            <span className="block text-xl md:text-2xl font-bold text-slate-700 mb-2">
                                Hi, I&apos;m Manthan Vaghasiya
                            </span>
                        </RevealText>

                        <RevealText delay={0.3}>
                            <span className="block text-[10px] md:text-sm lg:text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3 md:mb-4 lg:mb-3">
                                Full-Stack Developer
                            </span>
                        </RevealText>

                        {/* Typed Text Reveal */}
                        <div className="text-3xl md:text-5xl lg:text-5xl mb-1 min-h-[80px] md:min-h-[120px] flex flex-col justify-center lg:justify-start">
                            <span className="block mb-1 md:mb-2">{renderLine1()}</span>
                            <span className="block">{renderLine2()}</span>
                            <span className="sr-only" aria-live="polite">{`${text1} ${text2}`}</span>
                        </div>
                    </div>

                    <motion.p variants={fadeIn("up", "spring", 1, 1)} className="mt-2 text-sm md:text-lg lg:text-lg text-slate-700 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0">
                        As a <b>Full Stack Developer</b>, I design and develop complete web products from the ground up. From building <b>robust backend architectures</b> to crafting <b>user–friendly interfaces</b>, I focus on <b>performance, maintainability, and real business impact</b>. My portfolio includes platforms like{" "}
                        <a href="#projects" className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition">LifeOS</a> and{" "}
                        <a href="#projects" className="font-bold text-slate-900 underline underline-offset-4 hover:no-underline transition">DairyFlow</a>.
                    </motion.p>

                    <motion.div variants={fadeIn("up", "spring", 1.2, 1)} className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-2">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-slate-900 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                            <span className="relative z-20">Hire Me</span>
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            download="Manthan_Vaghasiya_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 md:gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-slate-800 shadow-sm hover:border-orange-500 hover:text-orange-600"
                        >
                            Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
                        </motion.a>
                    </motion.div>

                    <motion.div variants={fadeIn("up", "spring", 1.4, 1)} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
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
                    </motion.div>
                </div>
            </motion.div>

            <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
        .sr-only {
          position: absolute !important;
          width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }
      `}</style>
        </section>
    );
};

export default Hero;