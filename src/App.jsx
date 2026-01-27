import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Eager Load (Above the Fold)
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/features/Hero/Hero';
import ScrollToTop from './components/layout/ScrollToTop';
import Preloader from './components/layout/Preloader';

// Lazy Load (Below the Fold)
const Experience = lazy(() => import('./components/features/Experience/Experience'));
const Stats = lazy(() => import('./components/features/Stats/Stats'));
const Projects = lazy(() => import('./components/features/Projects/Projects'));
const Skills = lazy(() => import('./components/features/Skills/Skills'));
const Contact = lazy(() => import('./components/features/Contact/Contact'));
const About = lazy(() => import('./components/features/About/About'));
const GithubStats = lazy(() => import('./components/GithubStats'));
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: false,
        offset: 50,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />

            <Suspense fallback={<div className="h-20" />}>
              <Skills />
              <Experience />
              <GithubStats />
              <Projects />
              <Contact />

            </Suspense>
          </main>
          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;