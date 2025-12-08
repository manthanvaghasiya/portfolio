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

    // Kept your existing EmailJS credentials exactly as they were
    emailjs.sendForm('service_tqyl1bs', 'template_gji86k6', form.current, 'LejwDMsuSfiQAbUBX')
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
    <section id="contact" className="relative bg-[#0F172A] pt-24 pb-12 overflow-hidden text-white">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* CHANGED: 'gap-16' -> 'gap-12 lg:gap-24'. 
            This brings the text and form closer on tablets so they relate better visually. */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-24">
          
          {/* --- LEFT: Call to Action --- */}
          <div data-aos="fade-right">
            {/* CHANGED: 'md:text-6xl' -> 'md:text-5xl lg:text-6xl'. 
                Fixes the headline being too massive on tablets. */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              Let’s build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                great together.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              I'm currently available for <b>Full-Time Positions And Freelance Work</b>. 
              If you have a project that needs a skilled MERN stack developer, let's talk.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Email Me</p>
                  <a href="mailto:manthanvaghasiya60@gmail.com" className="text-lg hover:text-blue-400 transition-colors break-all md:break-normal">
                    manthanvaghasiya60@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Location</p>
                  <p className="text-lg ">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: Modern Form --- */}
          {/* CHANGED: 'p-8' -> 'p-6 md:p-8'. Gives inputs more room on smaller screens. */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-3xl" data-aos="fade-left">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    placeholder="John Doe"
                    // CHANGED: Added 'text-base' to prevent iOS zoom on focus
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Email</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none placeholder:text-slate-600"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 shadow-lg shadow-blue-600/20"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <>Send Message <ArrowRight size={20} /></>}
              </button>

              {status && (
                <div className={`p-4 rounded-xl text-center text-sm font-medium ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Manthan Vaghasiya. Built with React & Tailwind.
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
                 className="p-3 rounded-full bg-white/5 text-slate-400 border border-white/5 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/20"
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