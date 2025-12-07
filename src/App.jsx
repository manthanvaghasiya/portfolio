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
import Preloader from './components/Preloader';

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
            <Skills />
            <Experience />
            <Stats />
            <About />
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