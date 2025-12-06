import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience'; // <--- Import this
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from "./components/About";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      anchorPlacement: "top-center",
      offset: 0,
    });
  }, []);

  return (
    <div className="min-h-screen bg-light bg-grid-pattern text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        
        <Stats />
        <About />
        <Skills />
        <Experience />
        
        <Projects />
        
        <Contact />
      </main>
    </div>
  );
}


export default App;