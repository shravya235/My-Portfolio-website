"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { MotionCard } from './MotionCard';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.certifications-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.certifications-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.cert-card',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.certifications-grid',
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
    <section id="certifications" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="certifications-title section-title">
            Certifications
          </h2>
        </div>

        <div className="certifications-grid grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card h-full"
            >
              <a 
                href={cert.link || "#"} 
                target={cert.link ? "_blank" : "_self"}
                rel={cert.link ? "noopener noreferrer" : undefined}
                className={`block h-full rounded-[1.75rem] outline-none focus-visible:ring-2 focus-visible:ring-glow-lavender/60 ${!cert.link ? "cursor-default" : "cursor-pointer"} transform hover:-translate-y-1 transition-transform duration-500`}
                onClick={(e) => !cert.link && e.preventDefault()}
              >
                <div className="group h-full glass-card glass-card-hover rounded-3xl p-5 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="icon-ring w-12 h-12">
                        <Award className="w-5 h-5 text-glow-lavender" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold tracking-tight text-ink pr-8 leading-snug">
                          {cert.name}
                        </h3>
                        <p className="text-glow-pink text-sm sm:text-base font-semibold">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    {cert.link && (
                      <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                        <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-ink transition-colors duration-300" />
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-ink-muted" />
                    <span className="text-ink-muted text-sm font-medium">
                      Issued: {cert.date}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-ink-muted">
            Continuously pursuing additional certifications to stay updated with emerging technologies.
          </p>
        </div>
      </div>
    </section>
  );
}