import React from "react";
import { User, Code, Target, Zap, ArrowRight, Terminal, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-16 max-w-4xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-6">
            <User size={14} />
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
            More than just code. <br />
            <span className="text-indigo-600">I build digital engines for growth.</span>
          </h2>
        </div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. MAIN BIO CARD (Span 2) */}
          <div 
            className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">The Strategic Developer</h3>
              </div>

              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  I don't just write functions; I solve problems. As a <b className="text-slate-900">Full Stack Engineer</b>, I bridge the gap between complex backend logic and intuitive frontend design.
                </p>
                <p>
                  My expertise lies in the <b className="text-slate-900">MERN Ecosystem</b>. I’ve built everything from hyper-local marketplaces like <b className="text-slate-900">Surat BookCycle</b> to complex SaaS ERPs like <b className="text-slate-900">DairyFlow</b>.
                </p>
                <p>
                  I approach every project with a product-first mindset: <i>How does this feature help the user? How does this architecture support future growth?</i>
                </p>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-slate-100">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors"
              >
                Let's discuss your project 
                <ArrowRight className="group-hover:translate-x-1 transition-transform text-indigo-600" size={20} />
              </a>
            </div>
          </div>

          {/* 2. VALUE CARD: BUSINESS MINDSET (Span 1) */}
          <div 
            className="bg-slate-900 text-white p-8 rounded-[2rem] relative overflow-hidden group flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/40 transition-all"></div>
            
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6 text-indigo-400">
                <Target size={24} />
              </div>

              <h4 className="text-2xl font-bold mb-4">Business-First</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Code is an investment. I prioritize features that drive ROI. If a feature doesn't add value, I'll challenge it.
              </p>

              <ul className="space-y-3 border-t border-white/10 pt-6">
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <TrendingUp size={16} className="text-indigo-400" /> SEO & Performance
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="text-indigo-400" /> User Retention
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-300">
                  <Target size={16} className="text-indigo-400" /> Conversion Rates
                </li>
              </ul>
            </div>
          </div>

          {/* 3. VALUE CARD: ARCHITECTURE (Span 1) */}
          <div 
            className="bg-indigo-600 text-white p-8 rounded-[2rem] relative overflow-hidden flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="300"
          >
             <div className="absolute -bottom-4 -right-4 text-white/10 rotate-[-15deg]">
                <ShieldCheck size={120} />
             </div>

             <div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-6 text-white">
                    <Code size={24} />
                </div>

                <h4 className="text-2xl font-bold mb-4">Scalable Systems</h4>
                <p className="text-indigo-100 leading-relaxed text-sm mb-6">
                  Technical debt kills startups. I write modular, strictly-typed code. Whether it's database indexing or API caching, I build for 10x growth.
                </p>
             </div>

             <div className="relative z-10 border-t border-white/20 pt-6">
                <p className="text-xs font-bold text-indigo-200 uppercase tracking-widest mb-3">Standards</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm">Modular</span>
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm">Secure</span>
                  <span className="px-3 py-1 bg-white/20 rounded-lg text-xs font-semibold backdrop-blur-sm">Tested</span>
                </div>
             </div>
          </div>

          {/* 4. VALUE CARD: EXECUTION (Span 2) */}
          <div 
            className="md:col-span-2 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md hover:border-orange-100 transition-colors flex flex-col md:flex-row items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="w-20 h-20 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center shrink-0">
               <Zap size={40} />
            </div>
            
            <div className="flex-1 w-full">
               <h4 className="text-2xl font-bold text-slate-900 mb-3">Rapid Execution</h4>
               <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Speed is currency. I specialize in <b>Rapid Prototyping</b>—turning abstract ideas into deployable MVPs in days, not months. I iterate fast based on real user feedback.
               </p>
               
               {/* Compact Workflow Timeline */}
               <div className="flex items-center gap-2 w-full bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <span className="text-xs font-bold text-slate-500 uppercase">Idea</span>
                  <div className="h-0.5 flex-1 bg-slate-300 relative">
                    <div className="absolute right-0 -top-1 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-orange-600 uppercase bg-orange-100 px-2 py-1 rounded">MVP Build</span>
                  <div className="h-0.5 flex-1 bg-slate-300 relative">
                    <div className="absolute right-0 -top-1 w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase">Scale</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;