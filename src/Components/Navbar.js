import img1 from "../images/projectImage/logo.png";
import { NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👨‍💻' },
    { name: 'Projects', path: '/project', icon: '🚀' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25"></div>
              <img 
                src={img1} 
                className="relative w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-lg" 
                alt="Prabhat Sehrawat Logo" 
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-text">
                Prabhat <span className="text-gradient">Sehrawat</span>
              </h1>
              <p className="text-xs text-gray-500">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `
                  group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 
                  ${isActive 
                    ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-lg' 
                    : 'text-text hover:text-primary hover:bg-gray-50'
                  }
                `}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{item.icon}</span>
                  {item.name}
                </span>
                
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              💬 Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-text hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <DehazeIcon className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl mx-4 mt-2 p-6">
            
            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `
                    group flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-300
                    ${isActive 
                      ? 'text-white bg-gradient-to-r from-primary to-secondary shadow-lg' 
                      : 'text-text hover:text-primary hover:bg-gray-50'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.name}</span>
                  
                  {/* Arrow indicator */}
                  <svg className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>💬</span>
                Let's Connect
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://github.com/prabhat-021" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-200 transition-all duration-300">
                <span className="text-lg">🐙</span>
              </a>
              <a href="https://www.linkedin.com/in/prabhatsahrawat/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-200 transition-all duration-300">
                <span className="text-lg">💼</span>
              </a>
              <a href="https://twitter.com/prabhat__021" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-200 transition-all duration-300">
                <span className="text-lg">🐦</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
