/* eslint-disable react-hooks/static-components */
'use client';
import Logo from '@/../public/cornortech_logo.png'
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useHeaderScroll } from '@/hooks/useAnimations';
import { socialLinks } from '@/data';
import { SocialSection } from '@/types';
import { usePathname, useRouter } from 'next/navigation';

interface HeaderProps {
  bannerVisible?: boolean;
}

const Header = ({ bannerVisible = false }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useHeaderScroll();
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const navigationItems = [
    { title: 'Home', id: 'hero', type: 'scroll' },
    { title: 'Services', id: 'services', type: 'scroll' },
    { title: 'About Us', path: '/about-us', type: 'page' },
    { title: 'Our Works', id: 'our-works', type: 'scroll' },
    { title: 'Career', path: '/careers', type: 'page' },
    {
      title: 'More',
      type: 'dropdown',
      children: [
        { title: 'News & Updates', path: '/news-and-updates' },
      ],
    },
  ];

  const dropdownChildren = navigationItems
    .filter((item) => item.type === 'dropdown')
    .flatMap((item: any) => item.children ?? []);

  const nonDropdownItems = navigationItems.filter((item) => item.type !== 'dropdown').slice(0, 3);
  const hiddenMobileNavItems = navigationItems.filter((item) => item.type !== 'dropdown').slice(3);

  const handleNavClick = (item: any) => {
    if (item.type === 'scroll') {
      if (pathname !== '/') {
        router.push(`/#${item.id}`);
      } else {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    } else if (item.type === 'page') {
      router.push(item.path);
      setIsMobileMenuOpen(false);
    }
  };

  // mobile Nav Style 
  // Set one of: 'pill' | 'segment' | 'tab'
const mobileNavStyle = 'segment' as 'pill' | 'segment' | 'tab'; 
  const MobileNavItems = () => {
    // ── OPTION A: Pill buttons ──────────────────────────────────────────────
    if (mobileNavStyle === 'pill') {
      return (
        <div className="flex items-center gap-2 mx-auto">
          {nonDropdownItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item)}
              className={`
                cursor-pointer shrink-0 px-3 py-1 rounded-full text-[11px] font-medium
                whitespace-nowrap transition-all duration-200
                ${isScrolled
                  ? 'border border-purple-300/60 bg-purple-50/70 text-purple-700 hover:bg-purple-100 hover:border-purple-400'
                  : 'border border-white/30 bg-white/10 text-white/90 hover:bg-white/20 hover:text-white'
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>
      );
    }

    // ── OPTION B: Segmented control ─────────────────────────────────────────
    if (mobileNavStyle === 'segment') {
      return (
        <div className="mx-auto">
          <div
            className={`
              flex items-center gap-0.5 p-1 rounded-full
              ${isScrolled
                ? 'bg-white border border-gray-200'
                : 'bg-white/15 border border-white/20'
              }
            `}
          >
            {nonDropdownItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item)}
                className={`
                  cursor-pointer shrink-0 px-3 py-1 rounded-full text-[11px] font-medium
                  whitespace-nowrap transition-all duration-200
                  ${isScrolled
                    ? 'text-gray-500 hover:text-gray-800 hover:bg-gray-100 first:bg-[#9333EA] first:text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/15'
                  }
                `}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // ── OPTION C: Tab underline ─────────────────────────────────────────────
    if (mobileNavStyle === 'tab') {
      return (
        <div className="flex items-center gap-1 mx-auto">
          {nonDropdownItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => handleNavClick(item)}
              className={`
                cursor-pointer relative shrink-0 px-2.5 py-1.5 rounded-md
                text-[11px] font-medium whitespace-nowrap transition-all duration-200
                ${isScrolled
                  ? index === 0
                    ? 'text-[#9333EA] bg-purple-50 after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-0.5 after:bg-[#9333EA] after:rounded-full'
                    : 'text-gray-600 hover:text-[#9333EA] hover:bg-purple-50/60'
                  : index === 0
                    ? 'text-white bg-white/15'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }
              `}
            >
              {item.title}
            </button>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'top-0 bg-white shadow-soft border-b border-gray-200'
          : `${bannerVisible ? 'top-10' : 'top-0'} bg-transparent border-b border-transparent`
      }`}
    >
      <nav className="container-custom">

        {/* ═══ MAIN BAR ═══ */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div onClick={() => router.push('/')} className="shrink-0 cursor-pointer">
            <Image src={Logo} alt="Cornor Tech" height={70} width={50} />
          </div>

          {/* Desktop Nav with Dropdown */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center">
            {navigationItems.map((item) =>
              item.type === 'dropdown' ? (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => {
                    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                    setOpenDropdown(item.title);
                  }}
                  onMouseLeave={() => {
                    dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 100);
                  }}
                >
                  <button
                    className={`cursor-pointer flex items-center gap-1 transition-colors font-medium text-sm ${
                      isScrolled ? 'text-foreground hover:text-[#9333EA]' : 'text-white hover:text-purple-300'
                    }`}
                  >
                    {item.title}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.title ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === item.title && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
                      onMouseEnter={() => { if (dropdownTimer.current) clearTimeout(dropdownTimer.current); }}
                      onMouseLeave={() => { dropdownTimer.current = setTimeout(() => setOpenDropdown(null), 100); }}
                    >
                      {item.children?.map((child: any) => (
                        <button
                          key={child.title}
                          onClick={() => { router.push(child.path); setOpenDropdown(null); }}
                          className="cursor-pointer w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-[#9333EA] transition-colors"
                        >
                          {child.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.title}
                  onClick={() => handleNavClick(item)}
                  className={`cursor-pointer transition-colors font-medium text-sm ${
                    isScrolled ? 'text-foreground hover:text-[#9333EA]' : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item.title}
                </button>
              )
            )}
          </div>

          {/* NavItems Mobile Nav */}
          {!isMobileMenuOpen && (
            <div className="md:hidden flex-1 flex items-center px-1">
              <MobileNavItems />
            </div>
          )}

          {/* Right: desktop social + hamburger */}
          <div className="flex items-center gap-1 shrink-0">
            <div className="hidden md:flex items-center gap-0.5">
              {socialLinks.map((social: SocialSection) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg hover:scale-110 transition-all duration-200 ${
                    isScrolled ? 'text-[#111827] hover:bg-[#111827]/5' : 'text-white hover:bg-white/10'
                  }`}
                  aria-label={social.name}
                  title={social.name}
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled || isMobileMenuOpen ? 'hover:bg-[#111827]/5' : 'hover:bg-white/10'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-foreground' : 'bg-white'
                } ${isMobileMenuOpen ? 'rotate-45 translate-y-1.75' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-foreground' : 'bg-white'
                } ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full transition-all duration-300 ${
                  isScrolled || isMobileMenuOpen ? 'bg-foreground' : 'bg-white'
                } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.25' : ''}`} />
              </div>
            </button>
          </div>

        </div>
        {/* ═══ End MAIN BAR ═══ */}


        {/* ═══ MOBILE HAMBURGER MENU ═══ */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="pb-4">

            {/* Hidden Nav items — Our Works, Career */}
            {hiddenMobileNavItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100">
                <button
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left px-4 py-3.5 text-sm font-medium text-foreground hover:bg-gray-50 hover:text-[#9333EA] transition-colors"
                >
                  {item.title}
                </button>
              </div>
            ))}

            {/* Dropdown children — Blogs, News & Updates */}
            {dropdownChildren.length > 0 && (
              <div className="px-4 pt-3 pb-1">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">More</span>
              </div>
            )}

            {dropdownChildren.map((child: any) => (
              <div key={child.title} className="border-b border-gray-100">
                <button
                  onClick={() => { router.push(child.path); setIsMobileMenuOpen(false); }}
                  className="w-full text-left px-4 py-3.5 text-sm font-medium text-foreground hover:bg-gray-50 hover:text-[#9333EA] transition-colors"
                >
                  {child.title}
                </button>
              </div>
            ))}

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
        {/* ═══ End MOBILE HAMBURGER MENU ═══ */}

      </nav>
    </header>
  );
};

export default Header;