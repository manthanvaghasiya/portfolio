import React from "react";
import { Home, FolderKanban, Handshake, Briefcase, Mail } from "lucide-react";

const mobileLinks = [
    { name: "Home", href: "#home", icon: Home, sectionId: "home" },
    { name: "Work", href: "#projects", icon: FolderKanban, sectionId: "projects", badge: "18" },
    { name: "Services", href: "#services", icon: Handshake, sectionId: "services" },
    { name: "Milestones", href: "#experience", icon: Briefcase, sectionId: "experience" },
    { name: "Contact", href: "#contact", icon: Mail, sectionId: "contact" },
];

const MobileBottomNav = ({ activeSection }) => {
    return (
        <nav
            aria-label="Mobile Bottom Navigation"
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-2xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(15,23,42,0.07)] pb-[calc(env(safe-area-inset-bottom)+6px)] pt-1.5 px-2"
        >
            <div className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center">
                {mobileLinks.map((link) => {
                    const isActive = activeSection === link.sectionId;
                    const Icon = link.icon;

                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`flex flex-col items-center justify-center py-1 px-1 rounded-2xl relative transition-all duration-200 active:scale-90 select-none min-h-[46px] ${
                                isActive
                                    ? "text-blue-600 font-bold"
                                    : "text-slate-500 hover:text-slate-800 font-medium"
                            }`}
                        >
                            {/* Top Micro-Bar for Active Tab */}
                            {isActive && (
                                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-blue-600" />
                            )}

                            {/* Icon with Optional Badge */}
                            <div className="relative">
                                <Icon
                                    size={20}
                                    strokeWidth={isActive ? 2.5 : 2}
                                    className={`transition-transform duration-200 ${isActive ? "scale-110" : ""}`}
                                />
                                {link.badge && (
                                    <span className="absolute -top-1.5 -right-3 px-1 py-0.2 rounded-full bg-emerald-500 text-white font-black text-[9px] leading-tight">
                                        {link.badge}
                                    </span>
                                )}
                            </div>

                            {/* Label */}
                            <span className="text-[10px] tracking-tight mt-1 truncate">
                                {link.name}
                            </span>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileBottomNav;
