"use client";

import { Fragment, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { publications, publicationAuthorName } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Publications() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.publications-heading',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.publications-heading',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.publication-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.publications-grid',
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
    <section
      id="publications"
      ref={sectionRef}
      aria-labelledby="publications-title"
      className="py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="publications-heading text-center mb-12 sm:mb-16">
          <h2 id="publications-title" className="section-title">
            Research &amp; Publications
          </h2>
        </div>

        <ul className="publications-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {publications.map((publication) => (
            <li key={publication.doi} className="publication-card h-full">
              <article className="group h-full glass-card glass-card-hover p-6 sm:p-8 flex flex-col transition-transform duration-500 hover:-translate-y-1">
                {/* Publisher + year */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="chip text-xs font-bold tracking-[0.12em] px-3 py-1 text-glow-pink border-glow-pink/40">
                    {publication.publisher}
                  </span>
                  <span className="chip text-xs font-semibold px-3 py-1">
                    <span className="sr-only">Published in </span>
                    {publication.year}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink leading-snug mb-3 break-words">
                  {publication.title}
                </h3>

                <p className="text-ink-soft leading-relaxed mb-6">
                  {publication.description}
                </p>

                <dl className="space-y-4 mb-7 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted mb-1">
                      Conference
                    </dt>
                    <dd className="text-ink-soft leading-relaxed">
                      {publication.conference}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted mb-1">
                      Authors
                    </dt>
                    <dd className="text-ink-soft leading-relaxed">
                      {publication.authors.map((author, index) => (
                        <Fragment key={author}>
                          {index > 0 && ', '}
                          <span className={author === publicationAuthorName ? 'font-semibold text-ink' : undefined}>
                            {author}
                          </span>
                        </Fragment>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted mb-1">
                      DOI
                    </dt>
                    <dd className="font-mono text-[13px] text-ink-soft break-all">
                      {publication.doi}
                    </dd>
                  </div>
                </dl>

                <div className="mt-auto">
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View "${publication.title}" on IEEE Xplore (opens in a new tab)`}
                    className="btn-glass-primary text-sm px-5 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-glow-lavender/60"
                  >
                    View on IEEE Xplore
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
