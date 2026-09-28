"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { aboutData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-content',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-stats',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-content">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {aboutData.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-card p-6 sm:p-8">
                {aboutData.description.map((paragraph, index) => (
                  <p key={index} className="text-ink-soft leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {aboutData.stats.map((stat, index) => (
                <div
                  key={index}
                  className="about-stats glass-card glass-card-hover rounded-3xl p-5 sm:p-6 text-center"
                >
                  <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-2 ${
                    ['text-glow-pink', 'text-glow-cyan', 'text-glow-lavender'][index % 3]
                  }`}>{stat.value}</div>
                  <div className="text-ink-soft text-sm sm:text-base font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
