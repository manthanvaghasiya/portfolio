import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  X,
  Github,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      category: "Old Book Exchange · E-commerce",
      shortDescription:
        "A hyper-local P2P marketplace connecting students to buy, sell, and exchange used textbooks — reducing waste and making books more affordable.",
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
      category: "Dairy Management · SaaS ERP",
      shortDescription:
        "A modern ERP-style platform helping dairy shops manage sales, udhaar (credit), inventory, and daily reporting in one place.",
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
      category: "Personal OS · Finance & Habits",
      shortDescription:
        "An all-in-one personal operating system that combines financial tracking, habit consistency, and goal planning into one dashboard.",
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
    <section id="projects" className="py-16 md:py-20 px-6 bg-transparent scroll-mt-24 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Featured <span className="text-accent">Work</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl text-base md:text-lg">
            A selection of real-world products I&apos;ve designed and built
            end-to-end — focused on local businesses, operations, and
            productivity.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition duration-500`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div
                className="w-full md:w-1/2 group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform transition-transform duration-500 md:${
                    index % 2 === 0 ? "rotate-2" : "-rotate-2"
                  } group-hover:rotate-0 group-hover:scale-[1.02]`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] md:h-[350px] object-cover hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white font-bold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      <ExternalLink size={20} /> View project details
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Summary */}
              <div className="w-full md:w-1/2 space-y-4 md:space-y-5">
                <h3 className="text-2xl md:text-3xl font-bold text-primary">
                  {project.title}
                </h3>

                <div className="text-accent font-bold tracking-widest uppercase text-xs">
                  {project.category}
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-100 text-primary text-xs md:text-sm font-semibold rounded-lg border border-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project CTA */}
                <div className="pt-2 md:pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition group text-sm md:text-base"
                  >
                    View project
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up shadow-2xl flex flex-col">
            {/* Close Button - Fixed to top right of modal content */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 hover:bg-gray-100 transition z-30 shadow-md"
            >
              <X size={24} className="text-gray-900" />
            </button>

            {/* Modal Image */}
            <div className="relative h-56 md:h-80 w-full flex-shrink-0">
              <img
                src={selectedProject.modalImage || selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-10 text-white max-w-[85%]">
                <h2 className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-3 shadow-sm leading-tight">
                  {selectedProject.title}
                </h2>
                <span className="inline-block bg-white text-accent px-3 py-1 md:px-4 md:py-2 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm shadow-lg">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 md:p-10 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-primary">
                  About this project
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-primary pt-2 md:pt-4">
                  Key features
                </h3>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600 text-sm md:text-base"
                    >
                      <CheckCircle
                        size={18}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 md:space-y-8 border-t md:border-t-0 border-gray-100 pt-6 md:pt-0">
                <div className="space-y-3 md:space-y-4">
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition active:scale-[0.98]"
                  >
                    <Github size={20} /> GitHub Repo
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-accent text-white py-3.5 rounded-xl font-bold hover:bg-blue-600 transition active:scale-[0.98]"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-accent text-sm font-medium rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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