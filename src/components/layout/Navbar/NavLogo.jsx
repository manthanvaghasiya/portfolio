import React from "react";

const NavLogo = ({ setIsOpen }) => {
    return (
        <a
            href="#home"
            className="flex items-center gap-2 group relative z-50"
            onClick={() => setIsOpen(false)}
        >
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
    );
};

export default NavLogo;
