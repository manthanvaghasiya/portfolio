import React, { useState, useEffect, useRef } from "react";
import RevealText from "../../../common/RevealText";

const HeroHeading = () => {
    const line1 = "I turn ideas into";
    const line2 = "Scalable digital products";

    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    const interval1Ref = useRef(null);
    const interval2Ref = useRef(null);
    const mountedRef = useRef(true);

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
    }, [prefersReducedMotion]);

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
            <div className="text-3xl md:text-5xl lg:text-5xl min-h-[70px] md:min-h-[100px] flex flex-col justify-center lg:justify-start">
                <span className="block">{renderLine1()}</span>
                <span className="block">{renderLine2()}</span>
                <span className="sr-only" aria-live="polite">{`${text1} ${text2}`}</span>
            </div>
        </div>
    );
};

export default HeroHeading;
