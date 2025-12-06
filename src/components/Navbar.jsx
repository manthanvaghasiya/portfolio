import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 150;

      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop;
        const sectionHeight = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveLink(id);
        }
      });
    };

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
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled
          ? "bg-[#0F172A]/85 backdrop-blur-xl py-4 border-white/10 shadow-2xl"
          : "bg-[#0F172A] py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-white">
        {/* LOGO */}
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-1 hover:opacity-90 transition"
        >
          <span className="text-white font-extrabold tracking-tight">
            Manthan
          </span>
          <span className="bg-white text-[#0F172A] px-2 py-1 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] font-bold">
            .Portfolio
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-10 items-center">
          {navLinks.map((link) => {
            const isActive = activeLink === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative group text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-accent hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)]"
        >
          Let’s Talk
        </a>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
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

          {/* MOBILE CTA (IMPORTANT FOR CONVERSION) */}
          <a
            href="#contact"
            className="block bg-accent text-center text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
