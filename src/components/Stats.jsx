import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#0F172A] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { num: "3+", label: "Live Projects" },
          { num: "MERN", label: "Specialist" },
          { num: "100%", label: "Commitment" },
          { num: "24/7", label: "Learner" }
        ].map((stat, i) => (
          <div key={i} className="space-y-2">
            {/* Changed text-blue-500 to text-white */}
            <h3 className="text-4xl md:text-5xl font-bold text-white">{stat.num}</h3>
            {/* Changed text-gray-400 to text-white/80 (slightly transparent white for hierarchy) */}
            <p className="text-white/80 text-sm uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;