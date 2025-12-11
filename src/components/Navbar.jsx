import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO WITH IMAGE --- */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Image Container with Styling */}
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300 group-hover:rotate-6 border border-slate-100">
              <img 
                src="../iconblack.jpg" 
                alt="Manthan Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Manthan<span className="text-blue-600">.portfolio</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 bg-white/50 px-6 py-2 rounded-full border border-slate-200/50 backdrop-blur-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              className="px-5 py-2.5 bg-slate-900 hover:bg-black text-white text-sm font-bold rounded-xl transition-all hover:scale-105 shadow-xl shadow-slate-900/20"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-between items-center border-b border-slate-100">
          <div className="flex items-center gap-2">
            <img src="/icon.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-xl text-slate-900">Menu</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
            <X size={24} />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-6 mt-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-bold text-slate-900 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 w-full py-4 bg-indigo-600 text-white text-center font-bold text-lg rounded-xl"
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;