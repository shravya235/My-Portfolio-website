"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../data/portfolioData';
import { lucideIcons } from '@/utils/icons';
import { MotionCard } from './MotionCard';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.education-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.education-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.education-node',
        { scale: 0.4, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.education-tree',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.education-branch',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.education-tree',
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
    <section id="education" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="education-title section-title">
            Education
          </h2>
        </div>

        <div className="education-tree relative max-w-4xl mx-auto">
          {/* Main trunk */}
          <div className="rail absolute left-1/2 -translate-x-1/2 w-0.5 h-full rounded-full hidden md:block" />

          <div className="space-y-8 md:space-y-16">
            {education.map((edu, index) => {
              const Icon = lucideIcons[edu.icon];
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Branch line */}
                  <div className={`education-branch absolute top-8 w-16 h-0.5 bg-gradient-to-r ${
                    isLeft ? 'from-transparent to-glow-lavender/70 right-1/2' : 'from-glow-lavender/70 to-transparent left-1/2'
                  } rounded-full transform-gpu origin-left hidden md:block`} />

                  {/* Node */}
                  <div className="education-node rail-dot absolute top-[26px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 z-10 hidden md:block" />

                  <div className={`w-full md:w-5/12 ${
                    isLeft ? 'md:mr-auto md:pr-20' : 'md:ml-auto md:pl-20'
                  }`}>
                    <MotionCard className="glass-card glass-card-hover p-6 pb-7 sm:p-8">
                      <div className="flex items-center gap-4 mb-4">
                        {Icon && (
                          <div className="icon-ring w-12 h-12">
                            <Icon className="w-5 h-5 text-glow-cyan" />
                          </div>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink">
                          {edu.degree}
                        </h3>
                      </div>

                      <p className="text-base sm:text-lg font-semibold text-glow-pink mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="flex items-center space-x-2">
                          {lucideIcons.Calendar && <lucideIcons.Calendar className="w-4 h-4 text-ink-muted" />}
                          <span className="text-sm text-ink-muted font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <span className="chip text-glow-cyan text-sm font-semibold">
                          {edu.gpa}
                        </span>
                      </div>

                      <p className="text-ink-soft leading-relaxed">
                        {edu.description}
                      </p>
                    </MotionCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
