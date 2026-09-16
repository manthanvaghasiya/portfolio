import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Send,
    Loader2,
    MessageCircle,
    ArrowUpRight,
    CheckCircle2,
    Building2,
    ExternalLink
} from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSend = async (e, channel = "email") => {
        if (e) e.preventDefault();
        setStatus(null);

        const name = formData.user_name || form.current?.user_name?.value;
        const email = formData.user_email || form.current?.user_email?.value;
        const topic = formData.subject || form.current?.subject?.value || "Web Project Inquiry";
        const message = formData.message || form.current?.message?.value;

        if (!name || !email || !message) {
            setStatus({
                type: "error",
                message: "Please fill in your name, email, and message details before submitting.",
            });
            return;
        }

        setIsSubmitting(true);

        // --- OPTION 1: DIRECT WHATSAPP SUBMISSION ---
        if (channel === "whatsapp") {
            const waText = encodeURIComponent(
                `*New Project Inquiry via Webiox Portfolio*\n\n` +
                `*Client Name:* ${name}\n` +
                `*Client Email:* ${email}\n` +
                `*Project Topic:* ${topic}\n\n` +
                `*Message Details:*\n${message}`
            );
            window.open(`https://wa.me/919664736245?text=${waText}`, "_blank");
            setStatus({
                type: "success",
                message: `Thank you, ${name}! Your inquiry was opened in WhatsApp. Manthan will connect with you directly.`,
            });
            setIsSubmitting(false);
            return;
        }

        // --- OPTION 2: EMAILJS (IF KEYS ARE CONFIGURED) ---
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
            try {
                await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
                setStatus({
                    type: "success",
                    message: "Inquiry sent successfully! Manthan will review and respond within 24 hours.",
                });
                form.current?.reset();
                setFormData({ user_name: "", user_email: "", subject: "", message: "" });
                setIsSubmitting(false);
                return;
            } catch (err) {
                console.warn("EmailJS submission encountered an error, activating mailto fallback:", err);
            }
        }

        // --- OPTION 3: BULLETPROOF MAILTO & DIRECT WHATSAPP FALLBACK ---
        const mailSubject = encodeURIComponent(`Project Inquiry: ${topic} (from ${name})`);
        const mailBody = encodeURIComponent(
            `Hi Manthan,\n\n` +
            `I would like to discuss a project with Webiox Digital Solutions.\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Project Topic: ${topic}\n\n` +
            `Message:\n${message}\n\n` +
            `Sent from your portfolio website.`
        );

        // Open mail client
        window.location.href = `mailto:vaghasiyamanthan60@gmail.com?subject=${mailSubject}&body=${mailBody}`;

        const waQuickLink = `https://wa.me/919664736245?text=${encodeURIComponent(
            `Hi Manthan, I sent an email inquiry (${topic}). My name is ${name} (${email}). Details: ${message}`
        )}`;

        setStatus({
            type: "success",
            message: `Thank you, ${name}! Your inquiry has been prepared for vaghasiyamanthan60@gmail.com. You can also chat directly on WhatsApp.`,
            whatsappFallback: waQuickLink,
        });

        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50/70 relative overflow-hidden border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* --- LEFT COLUMN: VALUE PROPOSITION & DIRECT CONTACT (Span 5) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            Accepting New Projects &amp; Partnerships
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
                            Let’s build your next{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                                high-impact product.
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base leading-relaxed">
                            Whether you're a startup founder looking for a dedicated technical partner or an agency needing a dependable engineering arm, I'm ready to ship scalable code that drives real results.
                        </p>

                        {/* DIRECT CONTACT CARDS */}
                        <div className="space-y-3 pt-2">
                            {/* Email Card */}
                            <a
                                href="mailto:vaghasiyamanthan60@gmail.com"
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Email Address</p>
                                    <p className="text-sm sm:text-base font-semibold text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                                        vaghasiyamanthan60@gmail.com
                                    </p>
                                </div>
                                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                            </a>

                            {/* WhatsApp Card */}
                            <a
                                href="https://wa.me/919664736245"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                                    <MessageCircle size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Direct WhatsApp &amp; Phone</p>
                                    <p className="text-sm sm:text-base font-semibold text-slate-900 truncate group-hover:text-emerald-600 transition-colors">
                                        +91 96647 36245
                                    </p>
                                </div>
                                <ArrowUpRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                            </a>

                            {/* Location Card */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                                <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Base Location</p>
                                    <p className="text-sm sm:text-base font-semibold text-slate-900">
                                        Surat, Gujarat, India (Available Worldwide)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Agency Badge */}
                        <div className="pt-3 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
                            <Building2 size={15} className="text-blue-600" />
                            <span>Founder at <a href="https://webiox.tech/" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-blue-600 hover:underline">Webiox Digital Solution</a> • High-Performance Web Solutions</span>
                        </div>
                    </motion.div>

                    {/* --- RIGHT COLUMN: INTERACTIVE LUXURY FORM (Span 7) --- */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-10px_rgba(15,23,42,0.08)] transition-all relative overflow-hidden"
                    >
                        {/* Top Accent Gradient Line */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 pointer-events-none" />

                        <div className="mb-6">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                                Send a Direct Project Inquiry
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">
                                Tell me about your requirements, timeline, or technical goals.
                            </p>
                        </div>

                        {/* STATUS NOTIFICATION BANNER */}
                        {status && (
                            <div
                                className={`mb-6 p-4 rounded-2xl text-sm font-semibold flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                                    status.type === "success"
                                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200/90"
                                        : "bg-red-50 text-red-800 border border-red-200/90"
                                }`}
                            >
                                <div className="flex items-center gap-2.5">
                                    <CheckCircle2 size={18} className={status.type === "success" ? "text-emerald-600 shrink-0" : "text-red-600 shrink-0"} />
                                    <span>{status.message}</span>
                                </div>
                                {status.whatsappFallback && (
                                    <a
                                        href={status.whatsappFallback}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shrink-0 transition-colors shadow-xs"
                                    >
                                        <MessageCircle size={14} />
                                        <span>Chat on WhatsApp</span>
                                    </a>
                                )}
                            </div>
                        )}

                        <form ref={form} onSubmit={(e) => handleSend(e, "email")} className="space-y-4 sm:space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        value={formData.user_name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Alex Johnson"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        required
                                        placeholder="alex@company.com"
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                    Project Type / Topic
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="e.g. Next.js Web App, Dealership Platform, Agency Partner"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                    Message Details
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Briefly describe your project requirements, goals, or timeline..."
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none font-medium"
                                />
                            </div>

                            {/* DUAL ACTION BUTTONS: EMAIL & WHATSAPP */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 py-3.5 px-6 rounded-2xl bg-slate-950 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-[0_10px_25px_-5px_rgba(15,23,42,0.25)] hover:shadow-[0_15px_30px_-5px_rgba(15,23,42,0.35)] flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 active:scale-[0.99]"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" />
                                            <span>Sending Inquiry...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={15} />
                                            <span>Send via Email</span>
                                        </>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={(e) => handleSend(e, "whatsapp")}
                                    disabled={isSubmitting}
                                    className="py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.5)] flex items-center justify-center gap-2 transition-all duration-300 active:scale-[0.99] shrink-0"
                                >
                                    <MessageCircle size={17} />
                                    <span>Send via WhatsApp</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* --- FOOTER COPYRIGHT & CHANNELS --- */}
                <div className="mt-16 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
                    <p>© {new Date().getFullYear()} Manthan Vaghasiya. Founder @ Webiox Digital Solution.</p>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors">
                            GitHub
                        </a>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                            LinkedIn
                        </a>
                        <span>•</span>
                        <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors">
                            Instagram
                        </a>
                        <span>•</span>
                        <a href="https://webiox.tech" target="_blank" rel="noreferrer" className="hover:text-blue-600 font-semibold transition-colors inline-flex items-center gap-1">
                            <span>webiox.tech</span>
                            <ExternalLink size={11} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
