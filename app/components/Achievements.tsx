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
    <section id="achievements" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="achievements-title section-title">
            Achievements
          </h2>
        </div>

        <div className="achievements-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((achievement, index) => {
            const IconComponent = iconMap[achievement.icon] || Trophy;

            const cardContent = (
              <MotionCard className="group glass-card glass-card-hover p-6 pb-7 sm:p-8">
                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="icon-ring w-14 h-14 sm:w-16 sm:h-16">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-glow-pink" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-ink mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-glow-pink font-semibold">
                        {achievement.event}
                      </p>
                    </div>
                  </div>
                  {achievement.link && (
                    <div className="icon-ring w-10 h-10 text-ink-muted group-hover:text-ink transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6">
                  <div className="flex items-center text-ink-muted text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-2 text-glow-cyan" />
                    {achievement.date}
                  </div>
                  <div className="flex items-center text-ink-muted text-sm font-medium">
                    <MapPin className="w-4 h-4 mr-2 text-glow-cyan" />
                    {achievement.location}
                  </div>
                </div>

                <ul className="space-y-3">
                  {achievement.description.map((item, idx) => (
                    <li key={idx} className="text-ink-soft flex items-start leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-glow-pink rounded-full mt-2.5 mr-3 flex-shrink-0 shadow-[0_0_8px_rgba(240,110,220,0.8)]" />
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
