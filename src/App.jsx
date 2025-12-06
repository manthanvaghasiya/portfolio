import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from "./components/About";
import ScrollToTop from './components/ScrollToTop';
import Testimonials from './components/Testimonials';
import Preloader from './components/Preloader';

function App() {
  // 2. Add Loading State
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS only after loading is done for smoother animations
    if (!isLoading) {
      AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        anchorPlacement: "top-center",
        offset: 0,
      });
    }
  }, [isLoading]);

  // 3. Render Logic
  return (
    <>
      {/* Show Preloader if loading */}
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {/* Main Website - Only visible when not loading */}
      {!isLoading && (
        <div className="min-h-screen bg-light bg-grid-pattern text-primary overflow-x-hidden animate-fade-in-up">
          <Navbar />
          
          <main>
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Experience />
            <Testimonials />
            <Projects />
            <Contact />
          </main>

          <ScrollToTop />
        </div>
      )}
    </>
  );
}

export default App;