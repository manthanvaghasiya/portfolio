import React, { useEffect, useState } from "react";
// Removed CodeXml since we are using your image now
import { Layers } from "lucide-react"; 

const Preloader = ({ onFinish }) => {
  const [fadeLimit, setFadeLimit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeLimit(true);
      setTimeout(() => {
        onFinish();
      }, 800); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A] transition-opacity duration-700 ${
        fadeLimit ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* --- BRAND ICON --- */}
      <div className="relative mb-6">
        {/* Background Glow - Matches your brand accent */}
        <div className="absolute inset-0 bg-accent/40 blur-2xl rounded-full animate-pulse"></div>
        
        {/* Icon Container */}
        <div className="relative bg-white/10 p-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm">
          {/* YOUR CUSTOM IMAGE ICON */}
          <img 
            src="/icon.jpg" 
            alt="Manthan Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl shadow-inner animate-[bounce_2s_infinite]"
          />
        </div>
      </div>

      {/* --- BRAND TEXT --- */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center justify-center gap-2">
          Manthan
          <span className="hidden md:inline-block bg-white text-[#0F172A] px-3 py-1 rounded-lg text-lg font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)] transform -rotate-3">
            .Portfolio
          </span>
        </h1>
        
        <span className="md:hidden block text-accent font-bold tracking-[0.2em] uppercase text-sm">
          .Portfolio
        </span>
      </div>

      {/* --- LOADING BAR --- */}
      <div className="mt-8 w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-accent w-1/2 animate-[loading_1.5s_ease-in-out_infinite]"></div>
      </div>

      <p className="mt-4 text-gray-500 text-xs font-mono tracking-[0.3em] uppercase animate-pulse">
        Loading System...
      </p>

      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%) scaleX(0.5); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;