"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, ChevronDown, FileText } from 'lucide-react';
import img from '../images/Shravya.jpg'; // Adjust the path as necessary
import { resumeUrl } from '../data/portfolioData';

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
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-28 pb-16 sm:pt-32 text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left space-y-8 lg:w-1/2">
            <div className="space-y-5">
              <h1 className="hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink">
                <span>
                  Shravya R
                </span>
              </h1>

              <h2 className="hero-subtitle flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight">
                <span className="whitespace-nowrap text-glow-pink">Software Developer</span>
                <span className="hidden sm:inline text-ink-muted/60 font-medium">|</span>
                <span className="whitespace-nowrap text-glow-cyan">Cybersecurity Enthusiast</span>
              </h2>

              <p className="hero-description text-base sm:text-lg text-ink-soft max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Passionate about building practical software solutions and exploring cybersecurity, cloud technologies, and emerging technologies.
                I enjoy solving problems, learning how systems work, and turning ideas into real-world applications.
              </p>
            </div>

            <div className="hero-links flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid px-7 py-3"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </a>

              <a
                href="https://github.com/shravya235"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-glass px-6 py-3"
              >
                <Github className="w-5 h-5 text-glow-lavender group-hover:text-ink transition-colors duration-300" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/shravya-r-32913028b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group btn-glass px-6 py-3"
              >
                <Linkedin className="w-5 h-5 text-glow-cyan group-hover:text-ink transition-colors duration-300" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>


          {/* Right - Image */}
<div className="order-first lg:order-none lg:w-1/2 flex justify-center relative">
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_30px_80px_-30px_rgba(10,0,40,0.9),0_0_70px_-10px_rgba(168,85,247,0.55)]"
  >
    {/* Glowing Background Circle */}
    <motion.div
      initial={{ scale: 1.2, opacity: 0 }}
      animate={{ scale: 1, opacity: 0.35 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute inset-0 rounded-full bg-fuchsia-400 blur-[60px] z-0"
    />

    {/* Ring Border */}
    <div className="absolute inset-0 rounded-full border-[6px] border-white/25 shadow-[inset_0_0_30px_rgba(216,180,254,0.35)] z-30 pointer-events-none" />

    {/* Left Bracket */}
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.2 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute -left-10 top-1/2 -translate-y-1/2 text-6xl font-bold text-glow-lavender z-0"
    >
      &lt;
    </motion.div>

    {/* Right Bracket */}
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 0.2 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute -right-10 top-1/2 -translate-y-1/2 text-6xl font-bold text-glow-lavender z-0"
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
    </section>
  );
}