import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X, ArrowUpRight, Layers, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      category: "E-commerce",
      shortDescription:
        "A hyper-local P2P marketplace connecting students to buy, sell, and exchange used textbooks.",
      fullDescription:
        "Surat BookCycle is a centralized book marketplace designed to reduce textbook waste and cost for students.\n\n" +
        "• Designed and implemented a RESTful API using Node.js and Express to manage book listings and user operations.\n" +
        "• Integrated secure authentication with JWT to protect user sessions and personal data.\n" +
        "• Built a React.js frontend with instant search, filters, and detail pages for a smooth browsing experience.\n" +
        "• Created a responsive user dashboard to manage listings (add, edit, delete) on both mobile and desktop.",
      features: [
        "Secure Login/Signup with JWT",
        "Search, Category & Filter Flow",
        "Book Listing Management (CRUD)",
        "Responsive UI for Students",
      ],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/bookcycle.png",
      modalImage: "/bookcycle-full.png",
      githubLink: "https://github.com/manthanvaghasiya/surat-bookcycle-mern.git",
      liveLink: "#",
    },
    {
      title: "DairyFlow",
      category: "SaaS ERP",
      shortDescription:
        "A modern ERP-style platform helping dairy shops manage sales, credit (udhaar), and inventory.",
      fullDescription:
        "DairyFlow is a SaaS-style system built specifically for small and mid-size dairy businesses in India.\n\n" +
        "• Developed a custom POS flow optimized for high-traffic morning/evening shifts.\n" +
        "• Implemented a robust Udhaar (credit) tracking system replacing the traditional red book.\n" +
        "• Designed real-time inventory tracking to reduce wastage on perishable items.\n" +
        "• Built dashboards for daily revenue, top products, and customer behaviour using clean UI patterns.",
      features: [
        "POS interface tailored to dairy workflows",
        "Customer Udhaar & Ledger Management",
        "Inventory Alerts for Perishables",
        "Daily Revenue & Performance Insights",
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/dairyflow.png",
      modalImage: "/dairyflow-full.png",
      githubLink:
        "https://github.com/manthanvaghasiya/dairyflow-dairy-management-system",
      liveLink: "#",
    },
    {
      title: "LifeOS",
      category: "Productivity",
      shortDescription:
        "An all-in-one personal operating system that combines financial tracking and habit consistency.",
      fullDescription:
        "LifeOS is a MERN-based productivity platform that unifies financial tracking and habit building into a single interface.\n\n" +
        "• Built a financial analytics dashboard using Recharts (area and donut charts) to visualize income vs expense.\n" +
        "• Implemented a GitHub-style habit tracker with optimistic UI updates for instant feedback.\n" +
        "• Used MongoDB aggregations to calculate consistency, streaks, and financial summaries.\n" +
        "• Secured the platform with JWT auth and role-based access for future extensibility.",
      features: [
        "Financial Analytics with Charts",
        "Habit Tracker with Consistency Logic",
        "Goal Setting & Notes",
        "MERN Stack Architecture",
      ],
      tech: ["MERN Stack", "Recharts", "Tailwind CSS", "Render"],
      image: "/lifeos.png",
      modalImage: "/lifeos-full.png",
      githubLink: "https://github.com/manthanvaghasiya/lifeos",
      liveLink: "https://lifeos-by-manthan.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6" data-aos="fade-up">
          <div>
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs border border-indigo-100 px-3 py-1 rounded-full bg-indigo-50">
              Selected Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-2">
              Featured  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Project</span>
            </h2>
            <p className="text-slate-500 max-w-xl text-lg">
              High-performance web applications built for scale.
            </p>
          </div>
          
           <a 
            href="https://github.com/manthanvaghasiya" 
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm hover:shadow-md"
          >
            <Github size={20} />
            <span>View Github</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* --- GRID LAYOUT (Medium/Compact Size) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              
              {/* Image Area (Smaller Height = Compact) */}
              <div  className="relative h-60 overflow-hidden shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} className="text-slate-900" />
                </div>
              </div>
              
              {/* Content Area (Compact Padding) */}
              <div className="p-5 flex flex-col flex-grow">
                
                <div className="mb-3">
                   <div className="flex items-center gap-2 mb-1.5">
                      <Layers size={14} className="text-indigo-500" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        {project.category.split("·")[0].trim()}
                      </span>
                   </div>
                   <h3 
                     className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 cursor-pointer"
                   >
                     {project.title}
                   </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* --- TECH STACK (On Card) --- */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-sm font-bold text-indigo-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Case Study <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL (Fixed Button Layout & No Scroll for Buttons) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Max Height restricted to 85vh to prevent button cutoff on laptops */}
          <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fade-in-up">
            
            {/* 1. Modal Image (Left) */}
            <div className="w-full lg:w-[45%] bg-slate-100 relative h-48 lg:h-auto shrink-0">
              <img 
                src={selectedProject.modalImage || selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 left-3 lg:hidden bg-white/20 backdrop-blur text-white p-2 rounded-full z-10"
              >
                <X size={20} />
              </button>
            </div>

            {/* 2. Content Side (Right) - Using Flex Column for Sticky Footer */}
            <div className="w-full lg:w-[55%] flex flex-col h-full bg-white relative">
              
              {/* Header (Fixed at Top) */}
              <div className="p-6 md:p-8 pb-0 shrink-0">
                 <div className="flex justify-between items-start">
                    <div>
                      <span className="text-indigo-600 font-bold tracking-wider uppercase text-[10px] mb-2 block">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                        {selectedProject.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="hidden lg:block text-slate-400 hover:text-slate-900 bg-slate-50 p-2 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>
                 </div>
              </div>

              {/* Scrollable Body (Middle) */}
              <div className="p-6 md:p-8 overflow-y-auto flex-grow">
                 <div className="prose prose-sm prose-slate text-slate-600 leading-relaxed whitespace-pre-line mb-8">
                    {selectedProject.fullDescription}
                 </div>

                 {/* Key Features */}
                 <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wide flex items-center gap-2 mb-4">
                       <CheckCircle2 size={16} className="text-indigo-500"/> Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                       {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></div>
                             {feature}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Footer Buttons (Fixed at Bottom - NEVER SCROLLS) */}
              <div className="p-6 border-t border-slate-100 shrink-0 bg-white z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
                <div className="flex gap-3">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl font-bold hover:bg-black transition-all text-sm shadow-lg"
                  >
                    <Github size={18} /> View Code
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 border border-indigo-200 transition-all text-sm"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;