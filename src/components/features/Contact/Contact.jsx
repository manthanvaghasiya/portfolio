import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus({ type: 'success', message: "Message sent successfully!" });
                e.target.reset();
            })
            .catch(() => {
                setStatus({ type: 'error', message: "Something went wrong. Please try again." });
            })
            .finally(() => setIsSubmitting(false));
    };

    return (
        <section id="contact" className="relative bg-slate-900 pt-24 pb-12 overflow-hidden text-white">

            {/* --- Background Patterns --- */}
            {/* 1. Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* 2. Tech Grid Texture (Dot Pattern) */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-24">

                    {/* --- LEFT: Call to Action --- */}
                    <div data-aos="fade-right">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
                            Let’s build something <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                                great together.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg font-medium">
                            I'm currently available for <b>Full-Time Positions</b>.
                            If you have a project that needs a skilled MERN stack developer, let's talk.
                        </p>

                        <div className="space-y-6">
                            <div className="group flex items-center gap-4 p-4 rounded-2xl transition-colors hover:bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email Me</p>
                                    <a href="mailto:manthanvaghasiya60@gmail.com" className="text-lg font-semibold text-white/90 hover:text-blue-400 transition-colors break-all md:break-normal">
                                        manthanvaghasiya60@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-4 p-4 rounded-2xl transition-colors hover:bg-white/5">
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                                    <p className="text-lg font-semibold text-white/90">Surat, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT: Modern Form --- */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-3xl shadow-2xl shadow-blue-500/10" data-aos="fade-left">
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 font-medium"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-600 font-medium"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 shadow-lg shadow-blue-600/20 active:scale-95"
                            >
                                {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <ArrowRight size={20} /></>}
                            </button>

                            {status && (
                                <div className={`p-4 rounded-xl text-center text-sm font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* --- FOOTER --- */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Manthan Vaghasiya. <span className="text-slate-600">Built with React & Tailwind.</span>
                    </p>
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, link: "https://github.com/manthanvaghasiya" },
                            { icon: Linkedin, link: "https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" },
                            { icon: Instagram, link: "https://www.instagram.com/manthan_vaghasiya_07" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 rounded-full bg-white/5 text-slate-400 border border-white/5 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
