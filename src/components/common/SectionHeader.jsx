import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const SectionHeader = ({ icon: Icon, title, subtitle, className = "" }) => {
    return (
        <div className={`mb-12 md:mb-16 text-center ${className}`}>
            {Icon && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 text-blue-600 text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm"
                >
                    <Icon size={12} /> {subtitle}
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
                {title}
            </motion.h2>
        </div>
    );
};

export default SectionHeader;
