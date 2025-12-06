import React from "react";
import { Database, Server, Layout, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      items: [
        "React.js (Hooks, Component Arch.)", // Shortened for better mobile fit
        "Tailwind CSS & Responsive Layouts",
        "JavaScript (ES6+)",
        "Reusable UI & State Management",
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Server className="w-8 h-8" />,
      items: [
        "Node.js & Express.js",
        "REST API Design & Routing",
        "JWT Authentication & Security",
        "Validation, Error Handling & Middleware",
      ],
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8" />,
      items: [
        "MongoDB + Mongoose (Schemas)",
        "PostgreSQL Basics",
        "Query Design & Indexing",
        "Data Modeling for SaaS Apps",
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <Terminal className="w-8 h-8" />,
      items: [
        "Git & GitHub (Version Control)",
        "Postman / API Testing",
        "Vercel & Render Deployments",
        "VS Code & Developer Productivity",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 md:py-24 px-6 bg-[#020617] text-white scroll-mt-24 md:scroll-mt-32 overflow-hidden"
    >
      {/* BACKGROUND AURORA / GRID */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* soft gradient blobs - resized for mobile */}
        <div className="absolute -top-20 -left-20 md:-top-32 md:-left-32 w-60 h-60 md:w-80 md:h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-blue-500/25 rounded-full blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#64748b_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Skillset
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Tech Stack & <span className="text-accent">Capabilities</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto px-2">
            I work primarily with the <b>MERN stack</b>, taking features from
            idea to deployed product – frontend, backend, database and tooling.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:-translate-y-2 hover:border-accent/60 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20" />

              {/* Icon */}
              <div className="relative mb-5 md:mb-6 inline-flex items-center justify-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <div className="text-accent group-hover:text-white transition duration-300 transform scale-90 md:scale-100">
                    {skill.icon}
                  </div>
                </div>
              </div>

              {/* Category */}
              <h3 className="relative text-lg md:text-xl font-semibold text-white mb-3 md:mb-4">
                {skill.category}
              </h3>

              {/* Items */}
              <ul className="relative space-y-2 md:space-y-3">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm md:text-[15px] text-slate-300"
                  >
                    {/* Fixed bullet point size so it doesn't squash */}
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
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