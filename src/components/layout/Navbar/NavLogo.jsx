import React from "react";

const NavLogo = ({ setIsOpen }) => {
    return (
        <a
            href="#home"
            className="flex items-center group relative z-50 select-none py-1 transition-all duration-200"
            onClick={() => setIsOpen && setIsOpen(false)}
        >
            <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-slate-950 group-hover:text-blue-600 transition-colors duration-200">
                Manthan Vaghasiya
            </span>
        </a>
    );
};

export default NavLogo;
