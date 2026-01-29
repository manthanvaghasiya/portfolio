import React, { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import NavLogo from "./NavLogo";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

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

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 flex items-center overflow-hidden ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50" : "bg-transparent"
                    }`}
            >
                <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">

                    {/* LOGO */}
                    <NavLogo setIsOpen={setIsOpen} />

                    {/* DESKTOP NAV */}
                    <DesktopNav activeSection={activeSection} />

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
                        onClick={() => setIsOpen(true)}
                        className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>

                </div>
            </nav>

            {/* MOBILE MENU COMPONENT (Renders as Portal/Overlay) */}
            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeSection={activeSection}
            />
        </>
    );
};

export default Navbar;
