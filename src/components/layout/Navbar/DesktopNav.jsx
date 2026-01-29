import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "./constants";

const DesktopNav = ({ activeSection }) => {
    return (
        <div className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === link.href.substring(1)
                            ? "text-blue-600"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                >
                    {activeSection === link.href.substring(1) && (
                        <motion.div
                            layoutId="active-pill"
                            className="absolute inset-0 bg-blue-50 border border-blue-100 rounded-full -z-10 shadow-sm"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default DesktopNav;
