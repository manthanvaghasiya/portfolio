import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Github, Linkedin, Instagram } from "lucide-react";
import MagneticButton from "../../common/MagneticButton";

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
                setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
                e.target.reset();
            })
            .catch(() => {
                setStatus({ type: 'error', message: "Something went wrong. Please try again or email me directly." });
            })
            .finally(() => setIsSubmitting(false));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
    };

    return (
        <section id="contact" className="relative bg-slate-950 pt-20 md:pt-24 pb-20 md:pb-12 overflow-hidden text-white border-t border-slate-900/50">

            {/* --- Background Patterns --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 mb-12 md:mb-24">

                    {/* --- LEFT: Call to Action --- */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Available for work
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 text-white leading-[1.1]">
                            Let’s build something <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                                great together.
                            </span>
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg font-medium">
                            I'm currently looking for <b>Full-Time Positions</b>.
                            If you have a project that needs a skilled MERN stack developer, drop me a message.
                        </p>

                        <div className="space-y-4 md:space-y-6">
                            <a href="mailto:manthanvaghasiya60@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300 active:scale-[0.98]">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all scale-100 group-hover:scale-110">
                                    <Mail size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email Me</p>
                                    <p className="text-sm sm:text-base md:text-lg font-semibold text-white group-hover:text-blue-200 transition-colors truncate">
                                        manthanvaghasiya60@gmail.com
                                    </p>
                                </div>
                            </a>

                            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all scale-100 group-hover:scale-110">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
                                    <p className="text-sm md:text-lg font-semibold text-white group-hover:text-emerald-200 transition-colors">Surat, Gujarat, India</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-6 mt-2">
                                <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all hover:-translate-y-1 active:scale-95">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 active:scale-95">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1 active:scale-95">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- RIGHT: Contact Form --- */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />
                        <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl">
                            <motion.form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-4 md:space-y-5"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                        <input
                                            type="text"
                                            name="user_name"
                                            autoComplete="name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/80 transition-all placeholder:text-slate-600"
                                        />
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="space-y-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email</label>
                                        <input
                                            type="email"
                                            name="user_email"
                                            autoComplete="email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/80 transition-all placeholder:text-slate-600"
                                        />
                                    </motion.div>
                                </div>

                                <motion.div variants={itemVariants} className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-slate-950/50 border border-slate-800 rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-slate-900/80 transition-all resize-none placeholder:text-slate-600"
                                    ></textarea>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <MagneticButton
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25 active:scale-95 text-base"
                                    >
                                        {isSubmitting ? <Loader2 className="animate-spin" size={20} /> : <>Send Message <Send size={18} /></>}
                                    </MagneticButton>
                                </motion.div>

                                {status && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-4 rounded-xl text-center text-sm font-bold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}
                                    >
                                        {status.message}
                                    </motion.div>
                                )}
                            </motion.form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
