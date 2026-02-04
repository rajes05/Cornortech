import { footerSections } from '@/data';
import { FooterSection } from '@/types';
import Logo from '@/../public/cornortech_logo.png'
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'TikTok', 
      icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z', 
      href: '#' 
    },
    { 
      name: 'YouTube', 
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', 
      href: '#' 
    },
    { 
      name: 'Instagram', 
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z', 
      href: '#' 
    },
    { 
      name: 'Facebook', 
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', 
      href: '#' 
    },
    { 
      name: 'Twitter', 
      icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z', 
      href: '#' 
    },
    { 
      name: 'LinkedIn', 
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', 
      href: '#' 
    }
  ];

  const legalLinks = [
    { title: 'Terms of Service', href: '#' },
    { title: 'Privacy Policy', href: '#' },
    { title: 'Cookies Policy', href: '#' },
    { title: 'License Agreement', href: '#' },
    { title: 'Creator Terms', href: '#' },
    { title: 'Community Guidelines', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#111827]/5 via-white to-[#111827]/5 border-t border-[#111827]/10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#111827] to-transparent" />
      
      <div className="container-custom">
        <div className="py-16 space-y-12">
          {/* Newsletter Section */}
          <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-3xl p-8 lg:p-12 shadow-large">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Stay Updated with Cornor Tech
                </h3>
                <p className="text-white/90">
                  Subscribe to our newsletter for the latest courses, tech insights, and exclusive offers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
                <button className="px-8 py-4 bg-white text-[#111827] rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-xl flex items-center justify-center shadow-medium">
                  {/* <span className="text-white font-bold text-xl">CT</span> */}
                  <Image src={Logo} alt='CT' height={35} width={35}/>
                </div>
                <h3 className="text-xl font-bold text-[#111827]">Cornor Tech</h3>
              </div>
              <p className="text-sm text-foreground-secondary">
                Where ideas meet technology. Empowering individuals and businesses with cutting-edge digital solutions.
              </p>
              <div className="flex items-center space-x-2 text-sm text-[#111827]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@cornortech.com" className="hover:text-[#1f2937] transition-colors">
                  info@cornortech.com
                </a>
              </div>
            </div>

            {/* Footer Sections */}
            {footerSections.map((section: FooterSection) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-[#111827] text-sm uppercase tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a 
                        href={link.link}
                        className="text-sm text-foreground-secondary hover:text-[#111827] transition-colors inline-flex items-center group"
                      >
                        <svg className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-[#111827]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-[#111827]/10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-foreground-secondary mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-[#111827] hover:shadow-medium transition-all duration-200 group border border-[#111827]/10"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <svg 
                      className="w-5 h-5 text-[#111827] group-hover:text-white transition-colors" 
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4">
                {legalLinks.map((link, index) => (
                  <span key={link.title} className="flex items-center">
                    <a
                      href={link.href}
                      className="text-sm text-foreground-secondary hover:text-[#111827] transition-colors"
                    >
                      {link.title}
                    </a>
                    {index < legalLinks.length - 1 && (
                      <span className="mx-3 text-[#111827]/30">•</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright and Additional Info */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
              <p className="text-sm text-foreground-secondary">
                © {currentYear} <span className="text-[#111827] font-semibold">Cornor Tech</span>. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6 text-sm text-foreground-secondary">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#111827]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Made with ❤️ in Nepal</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-[#111827]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  <span>Powered by Innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="h-2 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827]" />
    </footer>
  );
};

export default Footer;