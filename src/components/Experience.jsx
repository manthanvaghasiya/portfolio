import React from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 px-6 bg-transparent scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Hands-on experience building and shipping real-world production
            features in a professional work environment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-4 border-accent/30 pl-6 ml-1 md:pl-8 md:ml-4 space-y-12">
          {/* EXPERIENCE CARD */}
          <div
            className="relative group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Timeline Dot - Position adjusted for mobile/desktop alignment */}
            <div className="absolute -left-[35px] md:-left-[41px] top-2 h-5 w-5 rounded-full border-4 border-white bg-accent shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>

            {/* Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-white/60 hover:border-accent/50 transition duration-300">
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">
                    Full-Stack Developer Intern
                  </h3>
                  <div className="text-accent font-semibold text-base md:text-lg flex items-center gap-2 mt-1">
                    <Briefcase size={18} /> Bluestock Fintech, Pune
                  </div>
                </div>

                <div className="self-start md:self-auto flex items-center gap-2 text-gray-600 font-medium bg-slate-100 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} /> Sep 2025 – Nov 2025
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                Worked as a full-stack intern contributing to production-level
                fintech modules. Actively collaborated with UI/UX designers and
                backend engineers to deliver secure, scalable features for live
                users.
              </p>

              {/* Key Contributions */}
              <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
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
              <div className="mt-8">
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Tech Stack Used
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {[
                    "React.js",
                    "Node.js",
                    "REST APIs",
                    "PostgreSQL",
                    "Responsive CSS",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 md:px-4 bg-slate-100 text-primary text-xs md:text-sm font-semibold rounded-lg border border-slate-200"
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