import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled 
          ? 'bg-[#0F172A]/80 backdrop-blur-xl py-4 border-white/10 shadow-2xl' 
          : 'bg-[#0F172A] py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        
        {/* --- BRAND LOGO (UPDATED) --- */}
        <div className="text-xl md:text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-1 hover:opacity-90 transition">
          
          {/* 1. Manthan: Now Clean White Text */}
          <span className="text-white font-extrabold tracking-tight">
            Manthan
          </span>

          {/* 2. .Portfolio: Now White Box (Blue Text) */}
          {/* Decreased padding (px-2) to make it compact and tight */}
          <span className="bg-white text-[#0F172A] px-2 py-1 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold">
            .Portfolio
          </span>
          
        </div>
        
        {/* --- DESKTOP MENU --- */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="relative group text-sm font-semibold uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#2563EB]"></span>
            </a>
          ))}
        </div>
        
        {/* --- CTA BUTTON --- */}
        <a 
          href="#contact" 
          className="hidden md:block relative bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
        >
          Let's Talk
        </a>

        {/* --- MOBILE TOGGLE --- */}
        <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-6 shadow-2xl animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-xl font-bold text-gray-300 hover:text-white hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-accent text-center text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;