"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo('.contact-content',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="contact-title section-title">
            Get In Touch
          </h2>
          <p className="section-subtitle">
            Interested in collaborating or have a question? Let’s connect and make something awesome together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-section glass-card p-6 sm:p-10 flex flex-col gap-8 sm:gap-10 contact-content text-ink">
          {/* Contact Info List */}
          <div className="space-y-6 sm:space-y-7">
            <ContactItem
              icon={<Mail className="text-glow-lavender w-5 h-5" />}
              title="Email"
              value="shravya11r@gmail.com"
            />
            <ContactItem
              icon={<Phone className="text-glow-cyan w-5 h-5" />}
              title="Phone"
              value="+91 7892848220"
            />
            <ContactItem
              icon={<MapPin className="text-glow-pink w-5 h-5" />}
              title="Location"
              value="Available for Remote Work"
            />
          </div>

          {/* Social Icons */}
          <div className="pt-8 sm:pt-10 border-t border-[color:var(--glass-border)]">
            <p className="text-sm font-medium text-ink-muted mb-4 text-center">Follow me on</p>
            <div className="flex justify-center gap-4">
              <SocialLink
                href="https://github.com/shravya235"
                icon={<Github className="w-5 h-5 text-ink" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/shravyar11/"
                icon={<Linkedin className="w-5 h-5 text-glow-cyan" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact item component
function ContactItem({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="group flex items-center gap-4">
      <div className="icon-ring w-12 h-12">{icon}</div>
      <div className="min-w-0">
        <p className="font-bold text-base text-ink">{title}</p>
        <p className="text-sm sm:text-base text-ink-soft break-words">{value}</p>
      </div>
    </div>
  );
}

// Social link icon with hover animation
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group btn-glass w-12 h-12 p-0"
    >
      {icon}
    </a>
  );
}
