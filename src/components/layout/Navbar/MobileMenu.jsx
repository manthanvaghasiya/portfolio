import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Instagram, Mail, ArrowUpRight, FileText, Send } from "lucide-react";
import { navLinks } from "./constants";

const MobileMenu = ({ isOpen, setIsOpen, activeSection }) => {
    // Lock body scroll when drawer is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* FROSTED BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-[60] md:hidden"
                    />

                    {/* LUXURY SLIDE-OVER SHEET */}
                    <motion.aside
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 260 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[380px] bg-white/95 backdrop-blur-2xl z-[70] shadow-2xl md:hidden flex flex-col border-l border-slate-200/80"
                    >
                        {/* DRAWER HEADER */}
                        <div className="flex items-center justify-between p-5 border-b border-slate-100/90">
                            <span className="font-extrabold text-slate-950 text-base tracking-tight">
                                Manthan Vaghasiya
                            </span>

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* DRAWER BODY */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col justify-between">
                            <div className="space-y-4">
                                {/* LIVE STATUS BADGE */}
                                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-center gap-2.5">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span className="text-xs font-semibold text-emerald-800 tracking-wide">
                                        Available for Freelance & Full-time Roles
                                    </span>
                                </div>

                                {/* NUMBERED NAVIGATION LINKS */}
                                <nav className="flex flex-col gap-1.5 pt-2">
                                    {navLinks.map((link, i) => {
                                        const isActive = activeSection === link.href.substring(1);
                                        const Icon = link.icon;

                                        return (
                                            <motion.a
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.04 }}
                                                className={`group px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-200 ${isActive
                                                        ? "bg-slate-900 text-white shadow-sm"
                                                        : "text-slate-700 hover:bg-slate-100/70 hover:text-slate-950"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`font-mono text-xs ${isActive ? "text-slate-400" : "text-slate-400"}`}>
                                                        {link.index}
                                                    </span>
                                                    <Icon size={18} className={isActive ? "text-white" : "text-slate-500 group-hover:text-slate-900"} />
                                                    <span className="font-semibold text-sm tracking-wide">
                                                        {link.name}
                                                    </span>
                                                </div>

                                                <ArrowUpRight
                                                    size={16}
                                                    className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isActive ? "text-white opacity-80" : "text-slate-400 opacity-0 group-hover:opacity-100"
                                                        }`}
                                                />
                                            </motion.a>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* BOTTOM ACTIONS & SOCIALS */}
                            <div className="space-y-4 pt-6 border-t border-slate-100 mt-6">
                                {/* ACTION BUTTONS */}
                                <div className="grid grid-cols-2 gap-2.5">
                                    <a
                                        href="/Manthan_Vaghasiya_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download="Manthan_Vaghasiya_Manthan_Vaghasiya_Resume.pdf"
                                        className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold shadow-xs transition-colors"
                                    >
                                        <FileText size={15} className="text-slate-500" />
                                        <span>Manthan_Vaghasiya_Resume</span>
                                    </a>

                                    <a
                                        href="https://wa.me/919664736245"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold shadow-sm transition-colors"
                                    >
                                        <Send size={14} />
                                        <span>Let's Talk</span>
                                    </a>
                                </div>

                                {/* SOCIAL CHANNELS */}
                                <div className="flex items-center justify-between pt-2 px-2 text-slate-500">
                                    <span className="text-xs font-medium text-slate-400">Find me on</span>
                                    <div className="flex items-center gap-3">
                                        <SocialIcon href="https://github.com/manthanvaghasiya" icon={Github} label="GitHub" />
                                        <SocialIcon href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" icon={Linkedin} label="LinkedIn" />
                                        <SocialIcon href="https://www.instagram.com/manthan_vaghasiya_07" icon={Instagram} label="Instagram" />
                                        <SocialIcon href="mailto:manthanvaghasiya07@gmail.com" icon={Mail} label="Email" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

const SocialIcon = ({ href, icon: Icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        aria-label={label}
    >
        <Icon size={18} />
    </a>
);

export default MobileMenu;
