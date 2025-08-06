"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import img from '../images/Shravya.png'; // Adjust the path as necessary

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo('.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      )
        .fromTo('.hero-subtitle',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo('.hero-description',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        )
        .fromTo('.hero-links',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo('.hero-scroll',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
          '-=0.1'
        );

      gsap.to('.hero-scroll', {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left space-y-8 lg:w-1/2">
            <div className="space-y-4">
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                  Shravya R
                </span>
              </h1>

              <h2 className="hero-subtitle text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
                Cybersecurity Enthusiast
              </h2>

              <p className="hero-description text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about securing digital landscapes and exploring the ever-evolving world of cybersecurity.
                Building robust solutions and staying ahead of emerging threats.
              </p>
            </div>

            <div className="hero-links flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/shravya235"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shravya-r-32913028b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>


          {/* Right - Image */}
<div className="lg:w-1/2 flex justify-center relative">
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
  >
    {/* White Glowing Background Circle */}
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.12 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 rounded-full bg-white blur-[60px] z-0"
    />

    {/* White Ring Border */}
    <div className="absolute inset-0 rounded-full border-[6px] border-white/30 z-10" />

    {/* Left Bracket */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.2 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute -left-10 top-1/2 -translate-y-1/2 text-6xl font-bold text-white z-0"
    >
      &lt;
    </motion.div>

    {/* Right Bracket */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.2 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute -right-10 top-1/2 -translate-y-1/2 text-6xl font-bold text-white z-0"
    >
      &gt;
    </motion.div>

    {/* Profile Image */}
    <Image
      src={img}
      alt="Shravya R"
      className="w-full h-full object-cover rounded-full relative z-20"
    />
  </motion.div>
</div>


        </div>
        
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}