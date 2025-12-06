import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Senior Backend Lead", // Update this when you have the real name
      role: "Project Manager",
      company: "Bluestock Fintech",
      // Placeholder avatar - you can replace with a real photo later or keep this abstract one
      image: "https://ui-avatars.com/api/?name=Bluestock+Fintech&background=2563EB&color=fff",
      quote:
        "Manthan consistently delivered high-quality code during his internship. His ability to handle the Company Registration module independently showed a level of maturity well beyond his years. A reliable engineer who learns fast.",
    },
    // Add more here later
  ];

  return (
    <section className="py-20 md:py-24 px-6 bg-[#0F172A] text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background Decor - Subtle Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            What People <span className="text-accent">Say</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Feedback from professional collaborations and internship mentors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-[0_10px_40px_-10px_rgba(37,99,235,0.2)]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-white/5">
                <Quote size={80} fill="currentColor" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-accent/50 shadow-lg"
                  />
                </div>

                {/* Text */}
                <div>
                  <p className="text-lg md:text-xl text-slate-300 italic font-medium leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      {item.name}
                    </h4>
                    <p className="text-accent text-sm font-bold uppercase tracking-wide">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;