import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X, Code, Zap, Sparkles, ChevronDown } from 'lucide-react';

export default function AdvancedHeader() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredItem, setHoveredItem] = useState(null);
  const headerRef = useRef(null);
  const cursorRef = useRef(null);
  const logoRef = useRef(null);

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
          const sections = ['about', 'skills', 'experience', 'education', 'projects', 'certifications', 'contact'];
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

    // Mouse tracking for cursor effects
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
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
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Animate logo on hover
  const handleLogoHover = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = 'scale(1.1) rotate(5deg)';
      logoRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }
  };

  const handleLogoLeave = () => {
    if (logoRef.current) {
      logoRef.current.style.transform = 'scale(1) rotate(0deg)';
    }
  };

  if (!mounted) return null;

  const navigation = [
    { name: 'About', href: '#about', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <Code className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <Zap className="w-4 h-4" /> },
    { name: 'Education', href: '#education', icon: <ChevronDown className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <Code className="w-4 h-4" /> },
    { name: 'Certifications', href: '#certifications', icon: <Sparkles className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <Zap className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Custom cursor */}
      <div 
        ref={cursorRef}
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
          transform: hoveredItem ? 'scale(2)' : 'scale(1)',
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full opacity-50"></div>
      </div>

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-b border-white/20 dark:border-gray-700/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Enhanced Logo */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => {
                handleLogoHover();
                setHoveredItem('logo');
              }}
              onMouseLeave={() => {
                handleLogoLeave();
                setHoveredItem(null);
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
              <h1 
                ref={logoRef}
                className="relative text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                style={{ 
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 3s ease-in-out infinite'
                }}
              >
                Shravya R
              </h1>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.name.toLowerCase()
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    animation: `slideInDown 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center space-x-2">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.name.toLowerCase() && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-xl transition-colors duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Enhanced Controls */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              {/* <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative p-3 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 group overflow-hidden"
                onMouseEnter={() => setHoveredItem('theme')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </button> */}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden relative p-3 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
                onMouseEnter={() => setHoveredItem('menu')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                  {isMenuOpen ? (
                    <X className="w-5 h-5 text-red-500" />
                  ) : (
                    <Menu className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 border-t border-gray-200/20 dark:border-gray-700/20">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`group relative px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    style={{
                      animation: `slideInRight 0.4s ease-out ${index * 0.1}s both`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <span className="opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slideInDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(20px);
        }
      `}</style>
    </>
  );
}