"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { education } from '../data/portfolioData';
import { lucideIcons } from '@/utils/icons';

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
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="education-title text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="education-tree relative max-w-4xl mx-auto">
          {/* Main trunk */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full hidden md:block" />

          <div className="space-y-16">
            {education.map((edu, index) => {
              const Icon = lucideIcons[edu.icon];
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Branch line */}
                  <div className={`education-branch absolute top-8 w-16 h-1 bg-gradient-to-r ${
                    isLeft ? 'from-green-500 to-blue-500 right-1/2' : 'from-blue-500 to-green-500 left-1/2'
                  } rounded-full transform-gpu origin-left hidden md:block`} />

                  {/* Node */}
                  <div className="education-node absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10 hidden md:block" />

                  <div className={`w-full md:w-5/12 ${
                    isLeft ? 'md:mr-auto md:pr-20' : 'md:ml-auto md:pl-20'
                  }`}>
                    <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-3 mb-4">
                        {Icon && <Icon className="w-6 h-6 text-blue-500" />}
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {edu.institution}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {lucideIcons.Calendar && <lucideIcons.Calendar className="w-4 h-4 text-gray-500" />}
                          <span className="text-gray-600 dark:text-gray-400 font-medium">
                            {edu.period}
                          </span>
                        </div>
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                          {edu.gpa}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
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
