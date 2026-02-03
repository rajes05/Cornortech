'use client';
import Logo from '@/../public/cornortech_logo.png'
import Image from 'next/image';
import { useState } from 'react';
import { navigationItems } from '@/data';
import { NavigationItem } from '@/types';
import { useHeaderScroll } from '@/hooks/useAnimations';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isScrolled = useHeaderScroll();

  const handleDropdownToggle = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const DropdownMenu = ({ item }: { item: NavigationItem }) => {
    if (!item.children) return null;

    return (
      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-large border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-2">
          {item.children.map((child) => (
            <a
              key={child.title}
              href={child.link}
              className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50 transition-colors"
            >
              {child.title}
            </a>
          ))}
        </div>
      </div>
    );
  };

  const MobileNavItem = ({ item }: { item: NavigationItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (item.children) {
      return (
        <div className="border-b border-gray-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50"
          >
            <span className="font-medium text-foreground">{item.title}</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-64' : 'max-h-0'}`}>
            <div className="px-4 pb-3 space-y-1">
              {item.children.map((child) => (
                <a
                  key={child.title}
                  href={child.link}
                  className="block py-2 text-sm text-foreground-secondary pl-4 hover:text-foreground"
                >
                  {child.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="border-b border-gray-200">
        <a
          href={item.link}
          className="block px-4 py-3 font-medium text-foreground hover:bg-gray-50"
        >
          {item.title}
        </a>
      </div>
    );
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xs border-b border-gray-200 shadow-soft' 
        : 'bg-white border-b border-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* <h1 className="text-2xl font-bold text-gradient">CapCut</h1> */}
            <Image src={Logo} alt='Cornor Tech' height={70} width={50}/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className="text-foreground hover:text-dark-teal transition-colors font-medium text-sm"
                  onClick={() => handleDropdownToggle(item.title)}
                >
                  {item.title}
                </button>
                <DropdownMenu item={item} />
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm text-foreground hover:text-dark-teal transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-[#9333EA] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all">
              SignUp
            </button>
            <div className="relative group">
              <button className="flex items-center text-sm text-foreground hover:text-dark-teal transition-colors">
                English
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-large border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50">English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50">中文</a>
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50">日本語</a>
                  <a href="#" className="block px-4 py-2 text-sm text-foreground hover:bg-gray-50">한국어</a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
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
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4">
            {navigationItems.map((item) => (
              <MobileNavItem key={item.title} item={item} />
            ))}
            <div className="px-4 py-3 space-y-2">
              <button className="w-full px-4 py-2 text-foreground hover:text-dark-teal transition-colors text-sm">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-dark-teal text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;