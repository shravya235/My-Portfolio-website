"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { iconMap } from '@/utils/icons';
import { skillsData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-title', { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.skill-orb', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.06,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.tech-orb', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.05,
        scrollTrigger: {
          trigger: '.tech-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="skills-title section-title">
            Skills & Expertise
          </h2>
        </div>

        {/* Cybersecurity Skills */}
        <div className="glass-card glass-card-hover p-6 sm:p-10 mb-8 sm:mb-10">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-ink">Cybersecurity Skills</h3>
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8 sm:gap-8 justify-items-center">
            {skillsData.cybersecuritySkills.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div key={skill.name} className="skill-orb group flex flex-col items-center">
                  <div className="relative w-[72px] h-[72px] sm:w-20 sm:h-20 mb-3 sm:mb-4">
                    <div className={`absolute inset-1 rounded-full ${skill.bgColor} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className="icon-ring w-full h-full group-hover:-translate-y-1">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-glow-lavender group-hover:text-ink transition-colors duration-300" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-ink-soft text-center max-w-[6rem] leading-tight group-hover:text-ink transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="glass-card glass-card-hover p-6 sm:p-10">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-center mb-8 sm:mb-10 text-ink">Technical Skills</h3>
          <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-4 gap-y-8 sm:gap-8 justify-items-center">
            {skillsData.technicalSkills.map((skill) => {
              const Icon = iconMap[skill.icon as keyof typeof iconMap];
              return (
                <div key={skill.name} className="tech-orb group flex flex-col items-center">
                  <div className="relative w-[72px] h-[72px] sm:w-20 sm:h-20 mb-3 sm:mb-4">
                    <div className={`absolute inset-1 rounded-full ${skill.bgColor} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                    <div className="icon-ring w-full h-full group-hover:-translate-y-1">
                      {Icon ? (
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-glow-cyan group-hover:text-ink transition-colors duration-300" />
                      ) : skill.icon.length <= 3 ? (
                        <span className="text-xl sm:text-2xl font-bold text-glow-cyan group-hover:text-ink transition-colors duration-300 flex items-center justify-center w-8 h-8">
                          {skill.icon}
                        </span>
                      ) : (
                        <span className="text-[28px] sm:text-[32px] leading-none flex items-center justify-center w-8 h-8">
                          {skill.icon}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-ink-soft text-center max-w-[6rem] leading-tight group-hover:text-ink transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
