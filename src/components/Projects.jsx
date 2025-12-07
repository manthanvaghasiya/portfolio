import React, { useState, useEffect } from "react";
import { ArrowUpRight, X, Github, ExternalLink, Layers, Database, Zap } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  // --- DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      tagline: "Hyper-local Book Exchange",
      category: "E-Commerce",
      description: "A centralized P2P marketplace reducing textbook waste for students. Features instant search, secure user profiles, and a robust listing management system.",
      tech: ["React.js", "Node.js", "MongoDB", "Express"],
      image: "/bookcycle.png",
      github: "https://github.com/manthanvaghasiya/surat-bookcycle-mern.git",
      live: "#",
      features: ["JWT Authentication", "Real-time Search", "Image Optimization", "Responsive Dashboard"]
    },
    {
      title: "DairyFlow",
      tagline: "Modern Dairy ERP",
      category: "SaaS Product",
      description: "A digital ledger and inventory system for dairy businesses. Replaces manual bookkeeping with automated daily reports and credit (Udhaar) tracking.",
      tech: ["React.js", "Tailwind", "Node.js", "Recharts"],
      image: "/dairyflow.png",
      github: "https://github.com/manthanvaghasiya/dairyflow-dairy-management-system",
      live: "#",
      features: ["POS Interface", "Credit Management", "Daily Revenue Charts", "Inventory Alerts"]
    },
    {
      title: "LifeOS",
      tagline: "Personal Operating System",
      category: "Productivity",
      description: "An all-in-one dashboard for habit tracking and financial analytics. Visualizes personal data to help users build consistency and achieve goals.",
      tech: ["MERN Stack", "Render", "Chart.js"],
      image: "/lifeos.png",
      github: "https://github.com/manthanvaghasiya/lifeos",
      live: "https://lifeos-by-manthan.vercel.app/",
      features: ["Habit Streaks", "Expense Visualization", "Goal Setting", "Dark Mode UI"]
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6" data-aos="fade-up">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Featured <br/>Projects.</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg text-right md:text-right">
            A selection of products built from scratch, focusing on real-world utility and clean code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-900/10 group-hover:-translate-y-2">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight size={20} className="text-slate-900"/>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2 px-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                <p className="text-slate-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm font-medium text-slate-400 pt-1">
                   {project.tech.join(" · ")}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL (Full Screen Detail) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProject(null)}
          />
          
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
            
            {/* Modal Image (Left/Top) */}
            <div className="w-full md:w-1/2 bg-slate-100 h-64 md:h-auto relative group">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 left-6 md:hidden bg-white/20 backdrop-blur text-white p-2 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content (Right/Bottom) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col relative">
              <button 
                onClick={() => setSelectedProject(null)}
                className="hidden md:block absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors bg-slate-50 p-2 rounded-full"
              >
                <X size={24} />
              </button>

              <div className="mb-6">
                <span className="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2 block">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{selectedProject.title}</h3>
                <p className="text-slate-500 font-medium text-lg">{selectedProject.tagline}</p>
              </div>

              <div className="prose prose-slate mb-8 text-slate-600 leading-relaxed">
                <p>{selectedProject.description}</p>
              </div>

              <div className="space-y-6 mb-8">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Zap size={18} className="text-blue-500"/> Key Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <a 
                  href={selectedProject.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all hover:-translate-y-0.5"
                >
                  <Github size={18} /> GitHub
                </a>
                {selectedProject.live !== '#' && (
                  <a 
                    href={selectedProject.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-blue-50 text-blue-600 rounded-xl font-bold hover:bg-blue-100 transition-all hover:-translate-y-0.5"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;