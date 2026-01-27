import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

const ROTATION_RANGE = 20;

const SpotlightOverlay = ({ x, y }) => {
    const background = useMotionTemplate`radial-gradient(400px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-2xl pointer-events-none"
            style={{ background }}
        />
    );
};

const TiltCard = ({ children, className, delay = 0, withSpotlight = false }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = (mouseY / height - 0.5) * ROTATION_RANGE * -1;
        const rY = (mouseX / width - 0.5) * ROTATION_RANGE;

        x.set(mouseX);
        y.set(mouseY);

        rotateX.set(rX);
        rotateY.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true, margin: "-50px" }}
            className={`h-full ${className}`}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    rotateX,
                    rotateY,
                }}
                className="relative h-full group"
            >
                {withSpotlight && <SpotlightOverlay x={x} y={y} />}
                <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="h-full">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default TiltCard;
