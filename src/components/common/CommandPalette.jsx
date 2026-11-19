import React, { useState, useEffect, useRef } from "react";
import {
    Search,
    Command,
    ExternalLink,
    FileText,
    MessageCircle,
    Mail,
    Check,
    FolderKanban,
    X,
    ArrowRight
} from "lucide-react";
import { projects } from "../../data/projects";

const CommandPalette = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [copied, setCopied] = useState("");
    const inputRef = useRef(null);

    // Global Keyboard Shortcut: Cmd+K / Ctrl+K & Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
            setQuery("");
        }
    }, [isOpen]);

    const handleCopy = (text, label) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(""), 2000);
    };

    // Filter projects based on search query
    const filteredProjects = query
        ? projects.filter(
              (p) =>
                  p.title.toLowerCase().includes(query.toLowerCase()) ||
                  p.category.toLowerCase().includes(query.toLowerCase()) ||
                  p.location?.toLowerCase().includes(query.toLowerCase())
          )
        : projects.slice(0, 6);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[99999] bg-slate-950/70 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 select-none animate-fade-in-up">
            <div
                className="w-full max-w-xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search Bar Input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects, stack, or commands... (ESC to exit)"
                        className="w-full text-slate-900 placeholder:text-slate-400 text-sm sm:text-base outline-none bg-transparent font-medium"
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Copied Toast Banner */}
                {copied && (
                    <div className="bg-emerald-50 text-emerald-800 px-4 py-2 text-xs font-bold flex items-center justify-between border-b border-emerald-200">
                        <span className="flex items-center gap-1.5">
                            <Check size={14} className="text-emerald-600" />
                            {copied} copied to clipboard!
                        </span>
                    </div>
                )}

                {/* Scrollable Results */}
                <div className="overflow-y-auto p-3 space-y-4 max-h-[60vh] scrollbar-hide">
                    {/* Quick Action Commands */}
                    <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mb-1.5">
                            Quick Actions
                        </div>
                        <div className="space-y-1">
                            <button
                                onClick={() => handleCopy("manthanvaghasiya60@gmail.com", "Email address")}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <Mail size={15} className="text-blue-600" />
                                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                                        Copy Email: <span className="text-slate-500 font-normal">manthanvaghasiya60@gmail.com</span>
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold text-blue-600 uppercase">Copy</span>
                            </button>

                            <button
                                onClick={() => handleCopy("+919664736245", "WhatsApp number")}
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <MessageCircle size={15} className="text-emerald-500" />
                                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                                        WhatsApp Chat: <span className="text-slate-500 font-normal">+91 96647 36245</span>
                                    </span>
                                </div>
                                <span className="text-[10px] font-bold text-emerald-600 uppercase">Chat</span>
                            </button>

                            <a
                                href="/Manthan_Vaghasiya_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download="Manthan_Vaghasiya_Resume.pdf"
                                className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 text-left transition-colors group"
                            >
                                <div className="flex items-center gap-2.5">
                                    <FileText size={15} className="text-purple-600" />
                                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                                        Download Official Resume / CV (PDF)
                                    </span>
                                </div>
                                <ExternalLink size={13} className="text-slate-400" />
                            </a>
                        </div>
                    </div>

                    {/* Filtered Projects */}
                    <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider px-3 mb-1.5 flex items-center justify-between">
                            <span>Projects &amp; Deployments</span>
                            <span>{filteredProjects.length} available</span>
                        </div>
                        <div className="space-y-1">
                            {filteredProjects.map((p) => (
                                <a
                                    key={p.title}
                                    href={p.liveLink || "#projects"}
                                    target={p.liveLink ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-3 overflow-hidden">
                                        <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 shrink-0 overflow-hidden flex items-center justify-center">
                                            {p.image ? (
                                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <FolderKanban size={15} className="text-slate-400" />
                                            )}
                                        </div>
                                        <div className="truncate">
                                            <div className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                                                {p.title}
                                            </div>
                                            <div className="text-[11px] text-slate-500 truncate flex items-center gap-1.5">
                                                <span>{p.countryFlag} {p.location?.split(",")[0]}</span>
                                                <span>•</span>
                                                <span className="text-emerald-600 font-semibold">{p.badge}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span>Visit</span>
                                        <ExternalLink size={11} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Keyboard Hints */}
                <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 font-medium flex items-center justify-between">
                    <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-bold">ESC</kbd> to close
                    </span>
                    <span className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-bold">⌘K</kbd> to toggle anywhere
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommandPalette;
