'use client';
import Logo from '@/../public/cornortech_logo.png'
import Image from 'next/image';
import { useState } from 'react';
import { useHeaderScroll } from '@/hooks/useAnimations';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll();

  const navigationItems = [
    { title: 'Home', id: 'hero' },
    { title: 'Services', id: 'services' },
    { title: 'Courses', id: 'courses' },
    { title: 'Our Works', id: 'our-works' },
    { title: 'About Us', id: 'about-us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-xs border-b border-gray-200 shadow-soft'
        : 'bg-white border-b border-transparent'
      }`}>
      <nav className="container-custom">

        <div className="flex items-center justify-between h-16">

          {/* ===== Logo + Desktop Navigation ===== */}
          <div className='flex items-center space-x-77'>

            {/* Logo */}
            <div
              onClick={() => scrollToSection('hero')}
              className="shrink-0 cursor-pointer"
            >
              <Image src={Logo} alt='Cornor Tech' height={70} width={50} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.title}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-[#9333EA] transition-colors font-medium text-sm"
                >
                  {item.title}
                </button>
              ))}
            </div>

          </div>
          {/* ===== End Logo + Desktop Navigation ===== */}


          {/* ===== Right: Mobile Menu Button ===== */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
          {/* ===== End Right: Mobile Menu Button ===== */}

        </div>

        {/* ===== Mobile Menu ===== */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-gray-200">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 font-medium text-foreground hover:bg-gray-50"
                >
                  {item.title}
                </button>
              </div>
            ))} 
          </div>
        </div>
        {/* ===== End Mobile Menu ===== */}
      </nav>
    </header>
  );
};

export default Header;