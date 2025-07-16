import img1 from "../images/projectImage/logo.png";
import { NavLink } from "react-router-dom";
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
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
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: PersonIcon },
    { name: 'Projects', path: '/project', icon: WorkIcon },
    { name: 'Contact', path: '/contact', icon: ContactMailIcon }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={img1} 
                className="w-10 h-10 rounded-lg object-cover border border-gray-200" 
                alt="Prabhat Sehrawat" 
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-800">
                Prabhat Sehrawat
              </h1>
              <p className="text-xs text-gray-500">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `
                    group relative px-5 py-2.5 rounded-lg font-medium transition-all duration-200 
                    ${isActive 
                      ? 'text-primary bg-primary/10 border border-primary/20' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    <IconComponent className="text-base" />
                    {item.name}
                  </span>
                </NavLink>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/contact" 
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
            >
              <EmailIcon className="text-base" />
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative p-2 text-gray-700 hover:text-primary transition-colors duration-200"
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
          <div className="bg-white border border-gray-200 shadow-lg rounded-lg mx-4 mt-2 p-4">
            
            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) => `
                      group flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-200
                      ${isActive 
                        ? 'text-primary bg-primary/10 border border-primary/20' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                      }
                    `}
                  >
                    <IconComponent className="text-lg" />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <EmailIcon className="text-base" />
                Contact Me
              </a>
            </div>
            
            {/* Social Links */}
            <div className="mt-4 flex justify-center space-x-3">
              <a 
                href="https://github.com/prabhat-021" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-200 transition-all duration-200"
              >
                <GitHubIcon className="text-lg" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prabhatsahrawat/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200"
              >
                <LinkedInIcon className="text-lg" />
              </a>
              <a 
                href="https://twitter.com/prabhat__021" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-400 hover:bg-blue-50 transition-all duration-200"
              >
                <TwitterIcon className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
