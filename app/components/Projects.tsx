"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import { iconMap } from '@/utils/icons';
import { Github, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.projects-grid',
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
    <section id="projects" ref={sectionRef} className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="projects-title section-title">
            Featured Projects
          </h2>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <div
                key={index}
                className="project-card group glass-card glass-card-hover overflow-hidden flex flex-col"
              >
                {/* Project Header */}
                <div className="h-32 relative overflow-hidden rounded-t-[1.75rem]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 transition-opacity duration-500 group-hover:opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/40 via-[#1a0b3a]/40 to-[#0b0418]/70" />
                  <div className="site-backdrop__grain opacity-[0.12]" />
                  <div className="absolute bottom-4 left-5">
                    {Icon && (
                      <div className="icon-ring w-12 h-12 backdrop-blur-md">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-ring w-9 h-9 backdrop-blur-md hover:border-white/50"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-ring w-9 h-9 backdrop-blur-md hover:border-white/50"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight text-ink mb-3">
                    {project.title}
                  </h3>

                  <p className="text-ink-soft mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="chip text-[13px] px-3 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
