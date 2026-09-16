import React from "react";
import { motion } from "framer-motion";
import { navLinks } from "./constants";

const DesktopNav = ({ activeSection }) => {
    return (
        <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-0.5 bg-slate-100/80 backdrop-blur-md p-1 rounded-full border border-slate-200/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]"
        >
            {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;

                return (
                    <a
                        key={link.name}
                        href={link.href}
                        className={`relative px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 select-none ${isActive
                                ? "text-slate-950 font-semibold"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40"
                            }`}
                    >
                        {/* Tactile Sliding Active Pill */}
                        {isActive && (
                            <motion.div
                                layoutId="navbar-active-pill"
                                className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)] border border-slate-200/90 -z-10"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 32,
                                }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                            {link.name}
                        </span>
                    </a>
                );
            })}
        </nav>
    );
};

export default DesktopNav;
