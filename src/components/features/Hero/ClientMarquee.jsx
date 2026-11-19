import React from "react";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";

const clients = [
    { name: "Qissa — A Tale of Food", country: "🇬🇧 Sevenoaks, UK", badge: "Restaurant Flagship", href: "https://www.qissa.co.uk/" },
    { name: "Royal Drive Luxury", country: "🇮🇳 Kerala, India", badge: "Pre-Owned Exotic Cars", href: "https://www.royaldrive.in/" },
    { name: "Mr. Pal Geneva", country: "🇨🇭 Geneva, Switzerland", badge: "Swiss Gastronomy", href: "https://mrpal.ch/en/" },
    { name: "Rodeo Werkz Dallas", country: "🇺🇸 Dallas, Texas", badge: "Auto PPF & Restyling", href: "https://rodeowerkz.com/" },
    { name: "BRIGHT™ Sport Europe", country: "🇪🇺 Europe / Global", badge: "Holographic Sports", href: "https://brightsport.com" },
    { name: "Sadguru Car Surat", country: "🇮🇳 Gujarat, India", badge: "150+ Car Dealership", href: "https://sadgurucarsurat.com/" },
    { name: "Fine Wine Cosmetics", country: "🇮🇳 Pan-India", badge: "D2C Beauty & Makeup", href: "https://finewine-cosmetics.com/" },
    { name: "Hariram Motors", country: "🇮🇳 Surat, India", badge: "Dealership Portal", href: "https://hariramcars.com/" },
    { name: "Julie Epis Patrimoine", country: "🇫🇷 Meaux, France", badge: "Wealth Advisory", href: "https://julie-epis.fr/" },
    { name: "Kidsty Trendy Wear", country: "🇮🇳 Pan-India", badge: "Kids Fashion D2C", href: "https://kidsty.in/" },
    { name: "Huggler Kids", country: "🇮🇳 Tirupur, India", badge: "Cotton Wear (20k+)", href: "https://huggler.in/" },
    { name: "Jisha Label Mfg", country: "🇮🇳 Gujarat, India", badge: "ISO 9001 Industrial", href: "https://jishalabel.com" },
];

const ClientMarquee = () => {
    // Duplicate array for infinite seamless looping
    const marqueeList = [...clients, ...clients];

    return (
        <section aria-label="International Clients" className="py-8 sm:py-10 bg-white border-y border-slate-200/80 relative overflow-hidden select-none">
            {/* Ambient edge fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
                <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 inline-flex items-center gap-1.5">
                    <Globe size={12} className="text-blue-500" />
                    <span>Trusted Technical Partner For Commercial Brands &amp; Global Enterprises</span>
                </span>
            </div>

            {/* Seamless Marquee Track */}
            <div className="overflow-hidden">
                <div className="animate-marquee flex items-center gap-3 sm:gap-4">
                    {marqueeList.map((client, idx) => (
                        <a
                            key={`${client.name}-${idx}`}
                            href={client.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-blue-300 text-slate-800 shadow-2xs hover:shadow-xs transition-all duration-200 group shrink-0"
                        >
                            <span className="text-sm">{client.country.split(" ")[0]}</span>
                            <div className="flex flex-col text-left">
                                <span className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                                    {client.name}
                                </span>
                                <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                                    {client.badge} • <span className="text-slate-400">{client.country.split(" ").slice(1).join(" ")}</span>
                                </span>
                            </div>
                            <ArrowUpRight
                                size={12}
                                className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientMarquee;
