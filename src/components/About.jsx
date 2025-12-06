import React from "react";
import { User, Code, Target, Zap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-20 px-6 bg-transparent scroll-mt-24 md:scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT: NARRATIVE */}
        <div className="md:col-span-7 space-y-6" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            About Me
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight">
            Engineering robust solutions
            <br className="hidden md:block" />
            for real-world challenges.
          </h2>

          <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 pt-2">
            <User className="text-blue-600" size={22} />
            The Developer
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            I am a <b>Full Stack Engineer</b> with a passion for building
            scalable, high-performance web applications. My journey is defined
            by a relentless curiosity for how things work under the hood—from
            the browser rendering engine to database indexing.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            I specialize in the <b>MERN Stack</b>, but I pick the right tool for
            the job. Whether it’s optimizing <b>DairyFlow</b> for
            low-bandwidth environments or architecting the flows behind{" "}
            <b>Surat BookCycle</b>, I focus on <b>User Experience (UX)</b> and{" "}
            <b>System Reliability</b>.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            When I&apos;m not coding, I&apos;m analyzing system designs of major
            tech products or learning from open-source codebases. I see software
            engineering as a team sport and thrive in collaborative
            environments.
          </p>

          <div className="pt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg"
            >
              Let&apos;s build something amazing together →
            </a>
          </div>
        </div>

        {/* RIGHT: CORE VALUES CARDS */}
        <div
          className="md:col-span-5 space-y-4"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {/* Value 1 – Impact First */}
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-white/60 flex gap-4 hover:border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Target className="text-blue-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Impact First
              </p>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                I don&apos;t just write code; I solve business problems. I
                prioritize features that deliver the highest value to both users
                and the business.
              </p>
            </div>
          </div>

          {/* Value 2 – Clean Architecture */}
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-white/60 flex gap-4 hover:border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Code className="text-green-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Clean Architecture
              </p>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                Spaghetti code is a liability. I write modular, testable, and
                self-documenting code that future engineers can easily work
                with and extend.
              </p>
            </div>
          </div>

          {/* Value 3 – Always Shipping */}
          <div className="bg-white p-5 rounded-2xl shadow-lg border border-white/60 flex gap-4 hover:border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
              <Zap className="text-orange-500 w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Always Shipping
              </p>
              <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                I believe in agile iterations — build, measure, learn. Shipping
                small, meaningful updates beats big “mystery releases” every
                time.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;
