"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { MotionCard } from './MotionCard';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.experience-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experience-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.experience-item',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.experience-timeline',
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
    <section id="experience" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="experience-title section-title">
            Experience
          </h2>
        </div>

        <div className="experience-timeline relative">
          {/* Timeline line */}
          <div className="rail absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 h-full w-0.5 rounded-full" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="rail-dot absolute left-4 sm:left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 z-10" />

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'} ml-10 sm:ml-16 md:ml-0`}>
                  <MotionCard className="glass-card glass-card-hover p-6 pb-7 sm:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="icon-ring w-12 h-12">
                        <Briefcase className="w-5 h-5 text-glow-lavender" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">
                        {exp.title}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 mb-1.5">
                      <Calendar className="w-4 h-4 text-ink-muted" />
                      <span className="text-sm text-ink-muted font-medium">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg font-semibold text-glow-pink mb-5">
                      {exp.company}
                    </p>

                    <ul className="space-y-2.5">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-ink-soft leading-relaxed flex items-start">
                          <span className="w-1.5 h-1.5 bg-glow-pink rounded-full mt-2.5 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(240,110,220,0.8)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </MotionCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}