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

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? 'bg-[#0F172A]/90 backdrop-blur-md py-4 border-white/10 shadow-lg shadow-black/5' 
          : 'bg-[#0F172A] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        
        {/* LOGO */}
        <div className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-1">
          <span>Manthan<span className="text-accent">Portfolio</span>.</span>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-wide text-gray-300">
          <a href="#home" className="hover:text-white hover:scale-105 transition">Home</a>
          <a href="#experience" className="hover:text-white hover:scale-105 transition">Experience</a>
          <a href="#projects" className="hover:text-white hover:scale-105 transition">Projects</a>
          <a href="#skills" className="hover:text-white hover:scale-105 transition">Skills</a>
        </div>
        
        {/* CTA BUTTON */}
        <a 
          href="#contact" 
          className="hidden md:block bg-accent hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/30"
        >
          Let's Talk
        </a>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0F172A] border-t border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
          <a href="#home" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#experience" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#projects" className="text-lg font-medium text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-lg font-medium text-accent" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;