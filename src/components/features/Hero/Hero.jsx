import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { staggerContainer } from "../../../utils/motion";
import { useParallax } from "../../../hooks/useParallax";

import HeroBackground from "./components/HeroBackground";
import HeroStatus from "./components/HeroStatus";
import HeroHeading from "./components/HeroHeading";
import HeroDescription from "./components/HeroDescription";
import HeroActions from "./components/HeroActions";
import HeroSocials from "./components/HeroSocials";
import HeroImage from "./components/HeroImage";

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

            <HeroBackground parallaxY={parallaxY} parallaxYReverse={parallaxYReverse} />

            <motion.div
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-14"
            >
                {/* Profile Image Column (Mobile Order 1) */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1">
                    <HeroImage parallaxYReverse={parallaxYReverse} />
                </div>

                {/* Text Content Column (Mobile Order 2) */}
                <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5 md:space-y-7 lg:space-y-6 order-2">
                    <HeroStatus />
                    <HeroHeading />
                    <HeroDescription />
                    <HeroActions />
                    <HeroSocials />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;