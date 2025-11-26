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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,       // Repeat animations
      mirror: true,      // Animate when scrolling backward (up)
      offset: 0,         // Trigger immediately when element touches screen edge
      anchorPlacement: 'top-bottom', // Triggers as soon as the top of element hits bottom of window
      easing: 'ease-out',
    });
  }, []);

  return (
    // ADDED 'bg-grid-pattern' here
    <div className="min-h-screen bg-light bg-grid-pattern text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Experience /> 
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;