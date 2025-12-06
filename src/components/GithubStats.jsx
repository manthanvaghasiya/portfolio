import React from "react";

const GithubStats = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-[#0F172A] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Code <span className="text-accent">Activity</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real-time data from my GitHub repository. I believe in consistent contribution and continuous learning.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          
          {/* Card 1: Overall Stats */}
          <div 
            className="bg-white/5 p-4 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 shadow-xl group"
            data-aos="fade-right"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=manthanvaghasiya&show_icons=true&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=3b82f6&icon_color=3b82f6&text_color=cbd5e1" 
              alt="Manthan's GitHub Stats"
              className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Card 2: Top Languages & Streak */}
          <div className="space-y-8">
             {/* Streak Stats */}
            <div 
              className="bg-white/5 p-4 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 shadow-xl group"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=manthanvaghasiya&theme=tokyonight&bg_color=00000000&hide_border=true&ring=3b82f6&currStreakLabel=3b82f6" 
                alt="Manthan's Streak"
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>

            {/* Top Languages */}
            <div 
              className="bg-white/5 p-4 rounded-3xl border border-white/10 hover:border-accent/50 transition-all duration-300 shadow-xl group"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=manthanvaghasiya&layout=compact&theme=tokyonight&bg_color=00000000&hide_border=true&title_color=3b82f6&text_color=cbd5e1" 
                alt="Manthan's Top Languages"
                className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
          <a 
            href="https://github.com/manthanvaghasiya" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-accent font-semibold transition-colors"
          >
            Visit my GitHub Profile →
          </a>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;