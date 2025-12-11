import React from "react";
import { Database, Layout, Server, Settings, Terminal, Cpu } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="text-indigo-400" size={28} />,
      skills: ["React.js (Hooks, Component Arch.)", 
        "Tailwind CSS & Responsive Layouts",
        "JavaScript (ES6+)",
        "Reusable UI & State Management",]
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-400" size={28} />,
      skills: [ "Node.js & Express.js",
        "REST API Design & Routing",
        "JWT Authentication & Security",
        "Validation, Error Handling & Middleware",]
    },
    {
      title: "Database",
      icon: <Database className="text-orange-400" size={28} />,
      skills: ["MongoDB + Mongoose (Schemas)",
        "PostgreSQL Basics",
        "Query Design & Indexing",
        "Data Modeling for SaaS Apps",]
    },
    {
      title: "DevOps",
      icon: <Settings className="text-pink-400" size={28} />,
      skills: ["Git & GitHub (Version Control)",
        "Postman / API Testing",
        "Vercel & Render Deployments",
        "VS Code & Developer Productivity",]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0F172A] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
           <div>
              <div className="flex items-center gap-2 text-blue-400 font-mono text-sm mb-4">
                 <Terminal size={16} />
                 <span>system_capabilities.json</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white">
                 Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">Stack</span>
              </h2>
           </div>
           <p className="text-slate-400 max-w-md text-lg">
              A comprehensive toolkit for building scalable, high-performance web applications.
           </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{cat.title}</h3>
              
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;