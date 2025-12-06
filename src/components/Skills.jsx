import React from "react";
import { Database, Server, Layout, Terminal } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      items: [
        "React.js (Hooks, component architecture)",
        "Tailwind CSS & responsive layouts",
        "JavaScript (ES6+)",
        "Reusable UI components & state management",
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Server className="w-8 h-8" />,
      items: [
        "Node.js & Express.js",
        "REST API design & routing",
        "JWT-based authentication & authorization",
        "Validation, error handling & middleware",
      ],
    },
    {
      category: "Databases",
      icon: <Database className="w-8 h-8" />,
      items: [
        "MongoDB + Mongoose (schemas & relations)",
        "PostgreSQL basics",
        "Query design & indexing (basics)",
        "Data modeling for SaaS-style apps",
      ],
    },
    {
      category: "Tools & Workflow",
      icon: <Terminal className="w-8 h-8" />,
      items: [
        "Git & GitHub (branching, PRs)",
        "Postman / API testing",
        "Vercel & Render deployments",
        "VS Code & productive dev setup",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-24 px-6 bg-[#020617] text-white scroll-mt-24 md:scroll-mt-32 overflow-hidden"
    >
      {/* BACKGROUND AURORA / GRID */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* soft gradient blobs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-blue-500/25 rounded-full blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#64748b_1px,transparent_0)] bg-[length:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-14 md:mb-16 text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Skillset
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">
            Tech Stack & <span className="text-accent">Capabilities</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto">
            I work primarily with the <b>MERN stack</b>, taking features from
            idea to deployed product – frontend, backend, database and tooling.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl p-7 md:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:-translate-y-2 hover:border-accent/60 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Glow border on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20" />

              {/* Icon */}
              <div className="relative mb-6 inline-flex items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <div className="text-accent group-hover:text-white transition duration-300">
                    {skill.icon}
                  </div>
                </div>
              </div>

              {/* Category */}
              <h3 className="relative text-lg md:text-xl font-semibold text-white mb-4">
                {skill.category}
              </h3>

              {/* Items */}
              <ul className="relative space-y-3">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm md:text-[15px] text-slate-300"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
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
