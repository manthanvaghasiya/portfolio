import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    // Changed bg-light to bg-transparent so the dot pattern shows
    <section id="experience" className="py-20 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            My professional journey in the tech industry.
          </p>
        </div>

        {/* Experience Card */}
        <div className="relative border-l-4 border-accent/30 pl-8 ml-4 md:ml-0 space-y-12">
          
          <div className="relative group" data-aos="fade-up" data-aos-delay="100">
            {/* Timeline Dot with Glow */}
            <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full border-4 border-white bg-accent shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
            
            {/* The Card - Now with stronger shadow and border */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-white/50 hover:border-accent/50 transition duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary">Full-Stack Developer (Intern)</h3>
                  <div className="text-accent font-semibold text-lg flex items-center gap-2 mt-1">
                    <Briefcase size={18} /> Bluestock Fintech, Pune
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500 font-medium bg-slate-100 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} /> Sep 2025 – Nov 2025
                </div>
              </div>

              <ul className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                  <span>
                    Developed a complete <b>Company Registration & Verification module</b> using React.js and PostgreSQL, handling user input, data validation, and secure sign-up.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></span>
                  <span>
                    Optimized the <b>'HiringInsight'</b> application by implementing a fully responsive design using CSS Media Queries, ensuring a seamless experience.
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;