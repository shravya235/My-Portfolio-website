"use client";

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Smooth scrolling
    gsap.registerPlugin(ScrollTrigger);
    
    // Update scroll trigger on resize
    window.addEventListener('resize', () => {
      ScrollTrigger.refresh();
    });

    return () => {
      window.removeEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* <CustomCursor /> */}
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}