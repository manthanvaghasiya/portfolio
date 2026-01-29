import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../../../utils/motion";

const HeroBackground = ({ parallaxY, parallaxYReverse }) => {
    return (
        <>
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
        </>
    );
};

export default HeroBackground;
