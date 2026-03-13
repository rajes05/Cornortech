'use client';
import Logo from '@/../public/cornortech_logo.png'
import Image from 'next/image';
import { useState } from 'react';
import { useHeaderScroll } from '@/hooks/useAnimations';
import { socialLinks } from '@/data';
import { SocialSection } from '@/types';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll();

  const navigationItems = [
    { title: 'Home', id: 'hero' },
    { title: 'Services', id: 'services' },
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


          {/* ===== Right: Social Icons (desktop) + Mobile Menu Button ===== */}
          <div className="flex items-center gap-1">

            {/* ===== Social Links (desktop only) ===== */}
            <div className="hidden md:flex items-center gap-0.5">
              {socialLinks.map((social: SocialSection) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[#111827] hover:bg-[#111827]/5 hover:scale-110 transition-all duration-200"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg
                    className="w-4.5 h-4.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
            {/* ===== End Social Links ===== */}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-[#111827]/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.25' : ''}`} />
              </div>
            </button>

          </div>
          {/* ===== End Right: Social Icons + Mobile Menu Button ===== */}

        </div>

        {/* ===== Mobile Menu ===== */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4">

            {/* Nav items */}
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3.5 text-sm font-medium text-foreground hover:bg-gray-50 hover:text-[#9333EA] transition-colors"
                >
                  {item.title}
                </button>
              </div>
            ))}

            {/* Social icons in mobile menu */}
            <div className="flex items-center gap-2 px-4 pt-4">
              <span className="text-xs text-[#111827]/40 font-medium mr-1">Follow us</span>
              {socialLinks.map((social: SocialSection) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-lg text-[#111827]/50 hover:text-[#111827] hover:bg-[#111827]/5 transition-all duration-200"
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

          </div>
        </div>
        {/* ===== End Mobile Menu ===== */}

      </nav>
    </header>
  );
};

export default Header;