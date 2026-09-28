import { useState, useEffect, useRef } from 'react';
import { Menu, X, Code, Zap, Sparkles, ChevronDown, Trophy } from 'lucide-react';

export default function AdvancedHeader() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const headerRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // Enhanced scroll handler with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          setScrolled(scrollTop > 50);

          // Update active section based on scroll position
          const sections = ['about', 'skills', 'experience', 'education', 'projects', 'achievements', 'certifications', 'contact'];
          const currentSection = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          if (currentSection) setActiveSection(currentSection);

          ticking = false;
        });
        ticking = true;
      }
    };

    // Intersection Observer for section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6, rootMargin: '-50px 0px' }
    );

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);



  if (!mounted) return null;

  const navigation = [
    { name: 'About', href: '#about', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Zap className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <ChevronDown className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Achievements', href: '#achievements', icon: <Trophy className="w-4 h-4" /> },
    { name: 'Certifications', href: '#certifications', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Zap className="w-4 h-4" /> },
  ];

  // On desktop the last item (Contact) is rendered as the outlined call-to-action button
  const linkItems = navigation.slice(0, -1);
  const ctaItem = navigation[navigation.length - 1];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-40 px-3 pt-3 sm:px-6 sm:pt-5"
      >
        <div className={`glass-nav max-w-6xl mx-auto px-4 sm:px-7 ${scrolled ? 'is-scrolled' : ''}`}>
          <div className="flex justify-between items-center h-16 sm:h-[76px] gap-4">

            {/* Simple Clean Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative cursor-pointer focus:outline-none flex-shrink-0"
            >
              <h1 className="relative text-xl sm:text-2xl font-extrabold tracking-tight text-gradient-brand whitespace-nowrap">
                Shravya R
              </h1>
            </button>

            <div className="flex items-center gap-2 xl:gap-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
                {linkItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative px-2.5 xl:px-3.5 py-2 rounded-full text-[14px] xl:text-[15px] font-semibold transition-colors duration-300 ${
                        isActive ? 'text-ink' : 'text-ink/75 hover:text-ink'
                      }`}
                      style={{
                        animation: `slideInDown 0.6s ease-out ${index * 0.06}s both`
                      }}
                    >
                      {item.name}

                      {/* Active indicator */}
                      <span
                        className={`absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full bg-glow-pink shadow-[0_0_8px_rgba(240,110,220,0.9)] transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </a>
                  );
                })}
              </nav>

              <a
                href={ctaItem.href}
                className={`btn-glass hidden lg:inline-flex text-[14px] xl:text-[15px] px-5 py-2 xl:px-6 xl:py-2.5 ${
                  activeSection === ctaItem.name.toLowerCase() ? 'border-glow-pink/60' : ''
                }`}
                style={{
                  animation: `slideInDown 0.6s ease-out ${linkItems.length * 0.06}s both`
                }}
              >
                {ctaItem.name}
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="icon-ring lg:hidden w-10 h-10"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-glow-pink" />
                ) : (
                  <Menu className="w-5 h-5 text-ink" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="pt-2 pb-4 border-t border-[color:var(--glass-border)]">
              <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-2">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition-colors duration-300 ${
                        isActive
                          ? 'text-ink bg-glow-violet/10'
                          : 'text-ink/75 hover:text-ink hover:bg-glow-violet/[0.06]'
                      }`}
                      style={{
                        animation: isMenuOpen ? `slideInRight 0.4s ease-out ${index * 0.05}s both` : 'none'
                      }}
                    >
                      <span className={`transition-colors duration-300 ${isActive ? 'text-glow-pink' : 'text-glow-lavender/70 group-hover:text-glow-pink'}`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes slideInDown {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-12px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
