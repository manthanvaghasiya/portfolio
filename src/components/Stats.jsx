import React from "react";

const Stats = () => {
  const stats = [
    { num: "3+", label: "Production Projects" },
    { num: "MERN", label: "Primary Tech Stack" },
    { num: "100%", label: "Ownership & Reliability" },
    { num: "Daily", label: "Learning & Improvement" },
  ];

  return (
   <section className="bg-[#0F172A] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              {stat.num}
            </h3>
            <p className="text-white/80 text-sm uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
