import React from "react";
import { motion } from "framer-motion";

const RevealText = ({ children, className = "", delay = 0 }) => {
    return (
        <div style={{ overflow: "hidden" }} className={className}>
            <motion.div
                initial={{ y: "100%", skewY: 5 }}
                whileInView={{ y: 0, skewY: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: delay,
                }}
                className="inline-block origin-top-left"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default RevealText;
