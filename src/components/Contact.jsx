import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    // NOTE: In production, consider moving these to environment variables (import.meta.env.VITE_...)
    const SERVICE_ID = "service_tqyl1bs";
    const TEMPLATE_ID = "template_gji86k6";
    const PUBLIC_KEY = "LejwDMsuSfiQAbUBX";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatusMessage("Message sent! I’ll get back to you soon.");
        setIsSubmitting(false);
        e.target.reset();

        // auto-hide success message after a few seconds
        setTimeout(() => setStatusMessage(""), 5000);
      },
      () => {
        setStatusMessage("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-6 bg-[#0F172A] text-white relative overflow-hidden scroll-mt-24 md:scroll-mt-32"
    >
      {/* Soft background glow - Optimized size for mobile to prevent overflow/visual clutter */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* LEFT: INTRO & CONTACT INFO */}
        <div className="space-y-6 md:space-y-8" data-aos="fade-right">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Let&apos;s build{" "}
            <br />
            <span className="text-accent">something great together.</span>
          </h2>

          <p className="text-base md:text-xl text-gray-400 max-w-lg leading-relaxed">
            I&apos;m currently open to{" "}
            <b>full-time job opportunities and freelance projects</b> in web
            development (MERN stack).
            <br />
            <span className="text-gray-500 text-sm block mt-2">
              Share a few details about what you need — I usually reply within{" "}
              <b>24 hours</b>.
            </span>
          </p>

          <div className="space-y-4 pt-2 md:pt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium break-all">
                  manthanvaghasiya60@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Based in</p>
                <p className="font-medium">Surat, Gujarat · India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: FORM */}
        <div
          className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 backdrop-blur-sm shadow-xl"
          data-aos="fade-left"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                autoComplete="name"
                className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                required
                autoComplete="email"
                className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How can I help?
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition resize-none"
                placeholder="Tell me a bit about your project, role, or idea..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </button>

            {statusMessage && (
              <p
                className={`text-center text-sm mt-2 ${
                  statusMessage.includes("wrong")
                    ? "text-red-400"
                    : "text-green-400"
                }`}
                aria-live="polite"
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="max-w-7xl mx-auto mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <p className="text-center md:text-left">© {new Date().getFullYear()} Manthan Vaghasiya. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/manthanvaghasiya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/manthan_vaghasiya_07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;