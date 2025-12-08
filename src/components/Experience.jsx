import React from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      // CHANGED: 'px-6' -> 'px-4 md:px-6' to maximize width on small mobiles
      className="py-16 md:py-24 px-4 md:px-6 bg-transparent scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Hands-on experience building and shipping real-world production
            features in a professional work environment.
          </p>
        </div>

        {/* Timeline Container */}
        {/* CHANGED: 
            1. 'ml-1' -> 'ml-4 md:ml-6'. Prevents line from hitting screen edge.
            2. 'border-l-4' -> 'border-l-2 md:border-l-4'. Thinner line on mobile looks cleaner.
        */}
        <div className="relative border-l-2 md:border-l-4 border-accent/30 ml-4 md:ml-6 space-y-12">
          
          {/* EXPERIENCE CARD */}
          <div
            className="relative group pl-6 md:pl-10" // Padding left pushes card away from line
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Timeline Dot */}
            {/* CHANGED: Calculated absolute position to center perfectly on the line.
                Mobile: Line is 2px, Dot is 16px (w-4). Center alignment requires precise negative margin.
            */}
            <div className="absolute -left-[9px] md:-left-[18px] top-6 md:top-8 h-4 w-4 md:h-5 md:w-5 rounded-full border-[3px] md:border-4 border-white bg-accent shadow-[0_0_10px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:scale-125"></div>

            {/* Card */}
            {/* CHANGED: 'p-6' -> 'p-5 md:p-8'. Slightly less padding on mobile to save space. */}
            <div className="bg-white p-5 md:p-8 rounded-3xl shadow-xl border border-white/60 hover:border-accent/50 transition duration-300">
              
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Full-Stack Developer Intern
                  </h3>
                  <div className="text-accent font-semibold text-sm md:text-lg flex items-center gap-2 mt-1">
                    <Briefcase size={16} className="md:w-[18px]" /> Bluestock Fintech, Pune
                  </div>
                </div>

                <div className="self-start md:self-auto flex items-center gap-2 text-gray-600 font-medium bg-slate-100 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                  <Calendar size={14} className="md:w-[16px]" /> Sep 2025 – Nov 2025
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-6">
                Worked as a full-stack intern contributing to production-level
                fintech modules. Actively collaborated with UI/UX designers and
                backend engineers to deliver secure, scalable features for live
                users.
              </p>

              {/* Key Contributions */}
              <ul className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    Built a complete{" "}
                    <b>Company Registration & Verification module</b> using
                    React.js and PostgreSQL, handling secure onboarding,
                    validation, and database integration.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    Implemented <b>responsive UI architecture</b> across the
                    HiringInsight application using modern CSS and media queries
                    for mobile-first performance.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>
                    Collaborated with backend developers to integrate REST APIs,
                    improved error handling, and optimized form submission flows.
                  </span>
                </li>
              </ul>

              {/* Tech Stack Used */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Tech Stack Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "REST APIs",
                    "PostgreSQL",
                    "Responsive CSS",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 md:px-4 bg-slate-100 text-primary text-[11px] md:text-sm font-semibold rounded-lg border border-slate-200 hover:bg-slate-200 transition-colors cursor-default"
                    >
                      {tech}
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

export default Experience;