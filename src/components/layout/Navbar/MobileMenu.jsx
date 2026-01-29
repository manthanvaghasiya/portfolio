import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Instagram, Mail, ChevronRight } from "lucide-react";
import { navLinks } from "./constants";

const MobileMenu = ({ isOpen, setIsOpen, activeSection }) => {
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60] md:hidden"
                    />

                    {/* MENU CONTAINER - Full Screen Takeover */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-[350px] bg-white z-[70] shadow-2xl md:hidden flex flex-col"
                    >
                        {/* HEADER inside menu */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100">
                            <span className="font-bold text-lg text-slate-800">Menu</span>

                            {/* CLOSE BUTTON */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">

                            {/* LINKS */}
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, i) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className={`p-4 rounded-xl flex items-center justify-between group transition-all ${isActive
                                                    ? "bg-blue-50 text-blue-600"
                                                    : "text-slate-600 hover:bg-slate-50"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <link.icon size={20} className={isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"} />
                                                <span className="font-medium">{link.name}</span>
                                            </div>
                                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <a
                                    href="https://wa.me/919664736245"
                                    target="_blank"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 active:scale-95 transition-all"
                                >
                                    <Mail size={20} />
                                    Let's Talk
                                </a>
                            </motion.div>

                            {/* SOCIALS */}
                            <div className="mt-auto pt-10 pb-6 flex justify-center gap-6">
                                <SocialLink href="https://github.com/manthanvaghasiya" icon={Github} />
                                <SocialLink href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" icon={Linkedin} />
                                <SocialLink href="https://www.instagram.com/manthan_vaghasiya_07" icon={Instagram} />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const SocialLink = ({ href, icon: Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-slate-400 hover:text-blue-600 transition-colors p-2"
    >
        <Icon size={24} />
    </a>
);

export default MobileMenu;
