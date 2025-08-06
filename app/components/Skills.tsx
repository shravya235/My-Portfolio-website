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

      gsap.fromTo('.skill-orb', { scale: 0, opacity: 0, rotationY: 180 }, {
        scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.1,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      gsap.fromTo('.tech-orb', { scale: 0, opacity: 0, rotationX: 180 }, {
        scale: 1, opacity: 1, rotationX: 0, duration: 0.8, ease: 'back.out(1.7)', stagger: 0.08,
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="skills-title text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Cybersecurity Skills */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-100">Cybersecurity Expertise</h3>
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-items-center">
            {skillsData.cybersecuritySkills.map((skill, index) => {
              const Icon = iconMap[skill.icon];
              return (
                <div key={skill.name} className="skill-orb group flex flex-col items-center">
                  <div className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                    style={{
                      top: `${Math.random() * 20 - 10}px`,
                      left: `${Math.random() * 20 - 10}px`,
                      animationDelay: `${index * 0.2}s`
                    }} />
                  <div className="relative w-20 h-20 mb-4">
                    <div className={`absolute inset-0 rounded-full ${skill.bgColor} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`} />
                    <div className="relative w-full h-full bg-gray-800/60 dark:bg-gray-700/60 backdrop-blur-xl rounded-full border border-gray-600/30 dark:border-gray-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-700/70 dark:group-hover:bg-gray-600/70 transition-all duration-300 shadow-2xl">
                      <Icon className="w-8 h-8 text-gray-300 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute top-2 left-2 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center max-w-20 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12 text-gray-800 dark:text-gray-100">Technical Proficiencies</h3>
          <div className="tech-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-items-center">
            {skillsData.technicalSkills.map((skill, index) => (
              <div key={skill.name} className="tech-orb group flex flex-col items-center">
                <div className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-bounce"
                  style={{
                    top: `${Math.random() * 15 - 7}px`,
                    right: `${Math.random() * 15 - 7}px`,
                    animationDelay: `${index * 0.15}s`
                  }} />
                <div className="relative w-20 h-20 mb-4">
                  <div className={`absolute inset-0 rounded-full ${skill.bgColor} blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300`} />
                  <div className="relative w-full h-full bg-gray-800/60 dark:bg-gray-700/60 backdrop-blur-xl rounded-full border border-gray-600/30 dark:border-gray-500/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-gray-700/70 dark:group-hover:bg-gray-600/70 transition-all duration-300 shadow-2xl">
                    {skill.icon.length === 2 ? (
                      <span className="text-lg font-bold text-gray-300 dark:text-gray-200 group-hover:text-white transition-colors duration-300">
                        {skill.icon}
                      </span>
                    ) : (
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-white/20 rounded-full blur-sm" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center max-w-20 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
