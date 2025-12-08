import React from "react";
// FIX: Added 'TrendingUp' to the imports below
import { User, Code, Target, Zap, ArrowRight, Terminal, CheckCircle2, Layout, ShieldCheck, Database, Rocket, Bot, Sparkles, GitBranch, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-50 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 max-w-2xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm">
            <User size={12} /> About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight">
            More than just code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              I build digital engines for growth.
            </span>
          </h2>
        </div>

        {/* --- COMPACT BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          
          {/* 1. THE FULL STACK BUILDER (Span 2) - Side-by-Side Layout */}
          <div 
            className="md:col-span-2 bg-white rounded-3xl border border-slate-900 p-6 shadow-xl shadow-slate-200/50 hover:shadow-slate-900/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-8 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Icon Column */}
            <div className="w-full md:w-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
               <Terminal size={32} />
            </div>

            {/* Content Column */}
            <div className="flex-1 w-full flex flex-col justify-between">
               <div>
                 <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3">The Full Stack Builder</h3>
                 <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
                    <p>
                      I don't just write code; I build complete solutions. From my background as a <b className="text-slate-900">BCA graduate</b> to completing my internship, I’ve focused on bridging the gap between a database and a responsive UI.
                    </p>
                    <p>
                      I specialize in turning complex logic into clean, user-friendly <b className="text-slate-900">MERN applications</b>.
                    </p>
                 </div>
               </div>

               {/* Primary Stack Footer */}
               <div className="border-t border-slate-100 pt-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Primary Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Node.js & Express',  'MongoDB', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 flex items-center gap-1.5">
                        <Code size={10} className="text-indigo-500" />
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* 2. PRODUCT MINDSET (Span 1) - Dark Card */}
          <div 
            className="bg-[#0F172A] text-white p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between shadow-2xl shadow-slate-900/20 ring-1 ring-white/10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/30 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-indigo-400">
                <Target size={20} />
              </div>

              <h4 className="text-lg font-bold mb-3">Product Mindset</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Having worked on tools like <b className="text-white">LifeOS</b>, I understand that code needs to solve a problem. I build with the end-user in mind to drive actual value.
              </p>

              <ul className="space-y-2.5 border-t border-white/10 pt-4">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <Layout size={14} className="text-indigo-400" /> User Experience (UX)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <CheckCircle2 size={14} className="text-indigo-400" /> Problem Solving
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <TrendingUp size={14} className="text-indigo-400" /> Responsive Design
                </li>
              </ul>
            </div>
          </div>

          {/* 3. AI-POWERED EFFICIENCY (Span 1) - Brand Color Card */}
          <div 
            className="bg-indigo-600 text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl shadow-indigo-600/20 ring-1 ring-white/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
             <div className="absolute -bottom-4 -right-4 text-white/10 rotate-[-15deg]">
                <Bot size={100} />
             </div>

             <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-white">
                    <Sparkles size={20} />
                </div>

                <h4 className="text-lg font-bold mb-3">AI-Powered</h4>
                <p className="text-indigo-100 leading-relaxed text-sm mb-6">
                  I am not just a coder; I am an <b className="text-white">AI-enhanced developer</b>. I leverage Prompt Engineering to write cleaner code faster and debug smarter.
                </p>
             </div>

             <div className="relative z-10 border-t border-white/20 pt-4">
                <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-2">AI Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Prompt Eng.', 'AI Integration', 'Smart Debugging'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-black/20 rounded text-[10px] font-semibold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </div>

          {/* 4. MODERN EXECUTION (Span 2) - Side-by-Side Layout */}
          <div 
            className="md:col-span-2 bg-white rounded-3xl border border-indigo-500 p-6 shadow-xl shadow-slate-200/50 hover:shadow-indigo-500/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-8 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Icon Column */}
            
            <div className="w-full md:w-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
               <Rocket size={32} />
            </div>
            
            {/* Content Column */}
            <div className="flex-1 w-full flex flex-col justify-between">
               <div>
                 <h4 className="text-lg font-bold text-slate-900 mb-2">Modern Execution</h4>
                 <p className="text-slate-600 leading-relaxed text-sm mb-6">
                    Speed matters, but stability matters more. Whether it's converting legacy PHP projects to modern MERN stacks or deploying fresh apps, I focus on <b className="text-slate-900">clean architecture</b> and smooth deployment.
                 </p>
               </div>
               
               {/* Toolkit Footer */}
               <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Toolkit</p>
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-orange-100">
                      Bug-Free Shipping
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Vite', 'Git & GitHub', 'Postman', 'Vercel/Netlify'].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 size={10} className="text-indigo-500" />
                        {tool}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;