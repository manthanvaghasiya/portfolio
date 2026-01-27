import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const HeroBackground = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Mouse Motion Values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth Mouse Spring
    const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

    // Initialize mouse to center
    useEffect(() => {
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Use page coordinates for absolute positioning within the document
            mouseX.set(e.pageX);
            mouseY.set(e.pageY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Parallax effects
    const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.4]);

    return (
        <div ref={containerRef} className="absolute inset-0 -z-20 overflow-hidden bg-slate-50">

            {/* --- 1. Interactive Spotlight Grid --- */}
            {/* Moving Gradient Spotlight */}
            <motion.div
                className="absolute z-0 rounded-full blur-[80px]"
                style={{
                    background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 60%)", // Increased opacity to 0.2
                    x: springX,
                    y: springY,
                    left: -400, // Offset by radius to center
                    top: -400,
                    width: 800,
                    height: 800,
                }}
            />

            {/* Static Clean Grid Pattern - Made Darker for Visibility */}
            <div
                className="absolute inset-0 z-0 opacity-60 bg-[linear-gradient(to_right,#64748b20_1px,transparent_1px),linear-gradient(to_bottom,#64748b20_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
            />

            {/* --- 2. Ambient Aurora Blobs (Increased Visibility) --- */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] md:w-[600px] md:h-[600px] bg-blue-500/30 rounded-full blur-[80px] mix-blend-multiply"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] md:w-[500px] md:h-[500px] bg-purple-500/30 rounded-full blur-[80px] mix-blend-multiply"
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-emerald-400/20 rounded-full blur-[80px] mix-blend-multiply"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
            />

            {/* --- 3. Bottom Fade for Clean Transition --- */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
        </div>
    );
};

export default HeroBackground;
