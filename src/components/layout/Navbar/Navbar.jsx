import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, ArrowUpRight, FileText } from "lucide-react";
import NavLogo from "./NavLogo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import MagneticButton from "../../common/MagneticButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Scroll Progress for Integrated Micro-Bar
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    // Detect Scroll Position & Active Section
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            const sections = ["home", "about", "services", "skills", "experience", "projects", "contact"];
            const scrollPosition = window.scrollY + 140;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const element = document.getElementById(section);
                if (element) {
                    const top = element.offsetTop;
                    if (scrollPosition >= top) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* FLOATING DYNAMIC ISLAND WRAPPER */}
            <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 pointer-events-none transition-all duration-300">
                <div
                    className={`pointer-events-auto max-w-6xl mx-auto flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl md:rounded-full transition-all duration-300 relative overflow-hidden ${scrolled
                            ? "bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.08),0_2px_6px_rgba(15,23,42,0.03)]"
                            : "bg-white/70 backdrop-blur-lg border border-slate-200/60 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.03)]"
                        }`}
                >
                    {/* INTEGRATED MICRO SCROLL PROGRESS INDICATOR */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 origin-left pointer-events-none opacity-80"
                        style={{ scaleX }}
                    />

                    {/* BRAND LOGO */}
                    <NavLogo setIsOpen={setIsOpen} />

                    {/* APPLE/LINEAR SEGMENTED DESKTOP NAV */}
                    <DesktopNav activeSection={activeSection} />

                    {/* RIGHT ACTION CLUSTER */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                        {/* Manthan_Vaghasiya_Resume QUICK ACTION (DESKTOP) */}
                        <a
                            href="/Manthan_Vaghasiya_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Manthan_Vaghasiya_Manthan_Vaghasiya_Resume.pdf"
                            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-white/90 hover:bg-slate-50 text-slate-700 hover:text-slate-950 text-xs font-semibold shadow-xs hover:shadow transition-all group"
                            title="Download Curriculum Vitae"
                        >
                            <FileText size={13} className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                            <span>Manthan_Vaghasiya_Resume</span>
                        </a>

                        {/* EXECUTIVE 'LET'S TALK' MAGNETIC BUTTON */}
                        <MagneticButton
                            onClick={() => window.open("https://wa.me/919664736245", "_blank")}
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-full text-xs font-semibold tracking-wide shadow-[0_4px_14px_rgba(15,23,42,0.18)] hover:shadow-[0_6px_20px_rgba(15,23,42,0.28)] transition-all group active:scale-95"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span>Let's Talk</span>
                            <ArrowUpRight
                                size={14}
                                className="text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </MagneticButton>

                        {/* MOBILE MENU TOGGLE */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="md:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-full border border-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400/20"
                            aria-label="Open navigation menu"
                        >
                            <Menu size={20} />
                        </button>
                    </div>
                </div>
            </header>

            {/* LUXURY MOBILE MENU OVERLAY */}
            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeSection={activeSection}
            />
        </>
    );
};

export default Navbar;
