import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Instagram, LayoutGrid, User, Code, Briefcase, FileText, Mail, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Simple active section detection
            const sections = ["home", "about", "skills", "experience", "projects", "contact"];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home", icon: Home },
        { name: "About", href: "#about", icon: User },
        { name: "Skills", href: "#skills", icon: Code },
        { name: "Experience", href: "#experience", icon: Briefcase },
        { name: "Projects", href: "#projects", icon: LayoutGrid },

    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* LOGO */}
                <a href="#home" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                        <img
                            src="/iconblack.jpg"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className="font-bold text-slate-800 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                        Manthan<span className="text-blue-600">.portfolio</span>
                    </span>
                </a>

                {/* DESKTOP NAV */}
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

                {/* LET'S TALK BUTTON (DESKTOP) */}
                <a
                    href="https://wa.me/919664736245"
                    target="_blank"
                    className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                    <Mail size={18} />
                    <span>Let's Talk</span>
                </a>

                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`flex items-center gap-4 text-lg font-medium p-3 rounded-xl transition-colors ${activeSection === link.href.substring(1)
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-slate-600 hover:bg-slate-50"
                                        }`}
                                >
                                    <link.icon size={20} />
                                    {link.name}
                                </motion.a>
                            ))}

                            <motion.a
                                href="https://wa.me/919664736245"
                                target="_blank"
                                onClick={() => setIsOpen(false)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-md active:scale-95"
                            >
                                <Mail size={20} />
                                Let's Talk
                            </motion.a>

                            <div className="pt-6 mt-6 border-t border-slate-100 flex gap-4 justify-center">
                                <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
                                    <Instagram size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
