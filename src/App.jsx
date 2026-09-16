import React, { useEffect, useState, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lenis from '@studio-freight/lenis';

// Eager Load (Above the Fold)
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/features/Hero/Hero';
import ScrollToTop from './components/layout/ScrollToTop';
import Preloader from './components/layout/Preloader';
import GrainEffect from './components/layout/GrainEffect';

import FloatingWhatsApp from './components/common/FloatingWhatsApp';

// Lazy Load (Below the Fold)
const Services = lazy(() => import('./components/features/Services/Services'));
const Experience = lazy(() => import('./components/features/Experience/Experience'));
const Stats = lazy(() => import('./components/features/Stats/Stats'));
const Projects = lazy(() => import('./components/features/Projects/Projects'));
const Skills = lazy(() => import('./components/features/Skills/Skills'));
const Contact = lazy(() => import('./components/features/Contact/Contact'));
const About = lazy(() => import('./components/features/About/About'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // AOS Init
      AOS.init({
        duration: 800,
        once: false,
        mirror: false,
        offset: 50,
      });

      // Removed Lenis & AOS.refresh() to prevent hanging (Main Thread Blocking)
      // The previous implementation of checking AOS logic every frame caused the browser to freeze.
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">

          {/* Grain Effect Disabled for Performance */}
          {/* <GrainEffect /> */}

          <Navbar />
          <main>
            <Hero />
            <Stats />
            <About />

            <Suspense fallback={<div className="h-20" />}>
              <Services />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </Suspense>
          </main>
          <ScrollToTop />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}

export default App;