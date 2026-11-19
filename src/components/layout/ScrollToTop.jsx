import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 350) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="hidden md:flex fixed bottom-7 right-24 z-40 w-11 h-11 rounded-full bg-slate-900/90 hover:bg-black text-white shadow-[0_8px_20px_rgba(15,23,42,0.25)] hover:-translate-y-1 transition-all duration-300 items-center justify-center border border-slate-700/60 active:scale-95"
            title="Back to Top"
        >
            <ArrowUp size={18} />
        </button>
    );
};

export default ScrollToTop;
