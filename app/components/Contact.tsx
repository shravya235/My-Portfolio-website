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
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Get In Touch
          </h2>
          <div className="w-16 h-1 mt-4 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
          <p className="mt-6 text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating or have a question? Let’s connect and make something awesome together.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-section flex flex-col gap-10 contact-content text-gray-700 dark:text-gray-300">
          {/* Contact Info List */}
          <div className="space-y-8">
            <ContactItem
              icon={<Mail className="text-blue-500 w-6 h-6" />}
              title="Email"
              value="shravya11r@gmail.com"
            />
            <ContactItem
              icon={<Phone className="text-green-500 w-6 h-6" />}
              title="Phone"
              value="+91 7892848220"
            />
            <ContactItem
              icon={<MapPin className="text-purple-500 w-6 h-6" />}
              title="Location"
              value="Available for Remote Work"
            />
          </div>

          {/* Social Icons */}
          <div className="pt-10 border-t border-gray-300/30 dark:border-gray-700/30">
            <p className="text-sm mb-4 text-center">Follow me on</p>
            <div className="flex justify-center space-x-6">
              <SocialLink
                href="https://github.com/shravya235"
                icon={<Github className="w-6 h-6" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/shravya-r-32913028b/"
                icon={<Linkedin className="w-6 h-6 text-blue-500" />}
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
    <div className="flex items-center gap-4">
      <div className="shrink-0">{icon}</div>
      <div>
        <p className="font-semibold text-base">{title}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{value}</p>
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
      className="hover:scale-110 transition-transform duration-200"
    >
      {icon}
    </a>
  );
}
