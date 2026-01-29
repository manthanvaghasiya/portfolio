import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../utils/motion";

const HeroImage = ({ parallaxYReverse }) => {
    return (
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
    );
};

export default HeroImage;
