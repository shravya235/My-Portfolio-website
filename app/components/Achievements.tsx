"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Medal, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { iconMap } from '@/utils/icons';
import { MotionCard } from './MotionCard';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.achievements-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.achievements-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.achievement-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.achievements-grid',
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
    <section id="achievements" ref={sectionRef} className="py-20 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="achievements-title text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;
            
            const cardContent = (
              <MotionCard className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/30 hover:shadow-2xl transition-shadow duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                  {achievement.link && (
                    <div className="p-2 bg-gray-100 dark:bg-gray-700/50 rounded-lg text-gray-400 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 transition-all duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {achievement.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                    {achievement.location}
                  </div>
                </div>

                <ul className="space-y-3">
                  {achievement.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start leading-relaxed">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </MotionCard>
            );

            return (
              <div
                key={index}
                className="achievement-card h-full"
              >
                {achievement.link ? (
                  <a 
                    href={achievement.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
