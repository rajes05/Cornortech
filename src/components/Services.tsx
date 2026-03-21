'use client';
import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import Image from 'next/image';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
  popular?: boolean;
  gradient: string;
  image?: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Build modern, responsive, and scalable web applications using cutting-edge technologies and best practices.',
    features: ['Custom Website Development', 'Progressive Web Apps (PWA)', 'API Integration & Development'],
    image: '/services/web_dev.jpeg',
    icon: '💻',
    badge: 'Development',
    gradient: 'bg-linear-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
    popular: true,
  },
  {
    id: '2',
    title: 'Digital Marketing',
    description: 'Grow your business with data-driven digital marketing strategies that deliver measurable results.',
    features: ['Search Engine Optimization (SEO)', 'Social Media Marketing', 'Analytics & Reporting'],
    image: '/services/digital.png',
    icon: '📱',
    badge: 'Marketing',
    gradient: 'bg-linear-to-br from-[#a855f7]/20 to-[#9333EA]/20',
    popular: true,
  },
  {
    id: '3',
    title: 'Graphic Design',
    description: 'Create stunning visual designs that communicate your brand message and captivate your audience.',
    features: ['Brand Identity Design', 'Logo & Visual Assets', 'Social Media Graphics'],
    image: '/services/graphic.png',
    icon: '🎨',
    badge: 'Design',
    gradient: 'bg-linear-to-br from-[#9333EA]/15 to-[#a855f7]/25',
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Develop powerful mobile applications for iOS and Android that engage users and drive growth.',
    features: ['Native iOS & Android Apps', 'Cross-Platform Development', 'App Store Optimization'],
    image: '/services/mobile_dev.png',
    icon: '📲',
    badge: 'Mobile',
    gradient: 'bg-linear-to-br from-[#7c3aed]/20 to-[#9333EA]/20',
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Design intuitive and beautiful user experiences that keep your customers engaged and satisfied.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design System Creation'],
    image: '/services/ui.png',
    icon: '✨',
    badge: 'Design',
    gradient: 'bg-linear-to-br from-[#9333EA]/25 to-[#7e22ce]/15',
  },
  {
    id: '6',
    title: 'Cloud Solutions',
    description: 'Leverage cloud technology to scale your infrastructure and optimize your business operations.',
    features: ['AWS / Azure / GCP Setup', 'DevOps & CI/CD', 'Cost Optimization'],
    image: '/services/cloud.png',
    icon: '☁️',
    badge: 'Cloud',
    gradient: 'bg-linear-to-br from-[#7e22ce]/20 to-[#9333EA]/20',
  },
  {
    id: '7',
    title: 'E-commerce Solutions',
    description: 'Build powerful online stores that convert visitors into customers and drive revenue growth.',
    features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Order Management Systems'],
    image: '/services/e_com.png',
    icon: '🛒',
    badge: 'E-commerce',
    gradient: 'bg-linear-to-br from-[#9333EA]/20 to-[#a855f7]/20',
  },
  {
    id: '9',
    title: 'Content Creation',
    description: 'Engage your audience with high-quality content that tells your story and builds trust.',
    features: ['Blog Writing & Articles', 'Video Production', 'Content Strategy Planning'],
    image: '/services/content.png',
    icon: '✍️',
    badge: 'Content',
    gradient: 'bg-linear-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  // ==== Service Card — full overlay layout ====
  // Image fills entire card. Title always visible at bottom.
  // Frosted glass details panel slides up on hover.
  <div className="group relative w-full h-120
                  rounded-2xl overflow-hidden cursor-pointer
                  shadow-lg hover:shadow-[0_16px_48px_rgba(147,51,234,.22)]
                  border border-transparent hover:border-[#9333EA]/20
                  transition-all duration-300 hover:-translate-y-1">

    {/* ── Full-card image (clear at rest) OR icon background ── */}
    {service.image ? (
      <>
        {/* Normal state: crisp, no scale, no blur. Hover: gentle zoom only. */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105
                     transition-transform duration-700 ease-out"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Bottom gradient dim — keeps title readable, lightens on hover */}
        <div className="absolute inset-0
                        bg-linear-to-t from-[#0f001e]/80 via-[#0f001e]/20 to-transparent
                        transition-all duration-500" />
      </>
    ) : (
      /* ── No image: icon fills the card ── */
      <div className={`absolute inset-0 ${service.gradient} flex items-center justify-center`}>
        <div className="w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-2xl bg-white/95
                        flex items-center justify-center text-[80px]
                        transition-transform duration-300
                        group-hover:scale-105 group-hover:rotate-2">
          {service.icon}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0f001e]/85 via-[#0f001e]/30 to-transparent" />
      </div>
    )}

    {/* ── Badges — always on top ── */}
    <span className="absolute top-3 left-3 z-10
                     px-2.5 py-1 text-[10px] font-black uppercase tracking-widest
                     text-[#7c3aed] bg-white/95 backdrop-blur-sm rounded-full">
      {service.badge}
    </span>
    {service.popular && (
      <span className="absolute top-3 right-3 z-10
                       px-2.5 py-1 text-[10px] font-black uppercase tracking-wide
                       text-white bg-[#9333EA] rounded-full">
        Popular
      </span>
    )}

    {/* ── Static title strip — always visible, fades out when details panel opens ── */}
    <div className="absolute bottom-0 inset-x-0 z-5 px-4 pb-4 pt-10
                    transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
      <h3 className="text-[16px] font-bold text-white leading-snug">{service.title}</h3>
      <span className="text-[10px] text-white/50 font-medium">Hover to explore</span>
    </div>

    {/* ── Details panel — slides up from bottom on hover ── */}
    <div className="absolute inset-x-0 bottom-0 z-8
                    bg-[rgba(15,0,35,0.85)] backdrop-blur-xl
                    border-t border-[#a855f7]/20
                    px-4 pt-4 pb-4
                    translate-y-full group-hover:translate-y-0
                    transition-transform duration-300 ease-in-out">

      <h3 className="text-[15px] font-bold text-white mb-1.5">{service.title}</h3>
      <p className="text-[11px] text-white/60 leading-[1.55] mb-3">{service.description}</p>

      {/* Features list */}
      <ul className="flex flex-col gap-1.5 mb-3">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-[10.5px] text-purple-200/85 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* Meta row + CTA */}
      <div className="flex items-center justify-between pt-2.5 border-t border-[#a855f7]/15">
        <div className="flex items-center gap-3">
          {/* Fast delivery */}
          <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-purple-300/60">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Fast
          </span>
          {/* Quality */}
          <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wide text-purple-300/60">
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Quality
          </span>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-[#9333ea]/80 border border-[#a855f7]/40
                           text-white text-[10px] font-semibold
                           hover:bg-[#9333ea] transition-colors duration-200 group/btn">
          Get Started
          <svg className="w-2.5 h-2.5 transition-transform duration-200 group-hover/btn:translate-x-0.5"
            viewBox="0 0 16 16" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
      </div>
    </div>
    {/* ==== End Service Card ==== */}
  </div>
);

const Services = () => {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const touchStartX = useRef(0);
  const total = services.length;

  // ── Measure slide width from the carousel container ──
  const computeLayout = useCallback(() => {
    if (!trackRef.current) return;
    const w = trackRef.current.parentElement?.offsetWidth ?? 0;
    setSlideWidth(w);
  }, []);

  // ── Measure on mount ──
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    computeLayout();
  }, [computeLayout]);

  // ── Re-measure on resize ──
  useEffect(() => {
    window.addEventListener('resize', computeLayout);
    return () => window.removeEventListener('resize', computeLayout);
  }, [computeLayout]);

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [total]);

  // ===== Auto-slide every 10 seconds =====
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 10000);
    return () => clearInterval(timer);
  }, [total]);

  const offset = current * slideWidth;

  const scrollIntoSection = (id:string) =>{
    const element = document.getElementById(id);
    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-linear-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">

      {/* === Background blobs === */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9333EA]/5 rounded-full blur-3xl" style={{ animationDelay: '0.5s' }} />
      </div>
      {/* === End Background blobs === */}

      <div className="container-custom relative z-10 space-y-16">

        {/* ── Layout: content left, carousel right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* ── Left: content block ── */}
          <div className="space-y-7 animate-fade-in">

            {/* Section label */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-0.5 bg-[#9333EA] rounded-full" />
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#9333EA]">
                What we do
              </span>
            </div>

            {/* Bold headline */}
            <h2 className="text-3xl lg:text-4xl xl:text-[2.6rem] font-black text-[#111827] leading-[1.1]">
              We Build<br />
              <span className="text-[#9333EA]">Digital Products</span><br />
              That Scale
            </h2>

            {/* Supporting copy */}
            <p className="text-[14.5px] text-foreground-secondary leading-[1.72]">
              Every service is crafted with precision, speed, and your growth in mind — trusted by startups and enterprises alike.
            </p>

          </div>

          {/* === Right: carousel + dots === */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Carousel */}
            <div
              className="overflow-hidden"
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
              onTouchEnd={(e) => {
                const dx = e.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
              }}
            >
              <div
                ref={trackRef}
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${offset}px)`, willChange: 'transform' }}
              >
                {services.map((s) => (
                  <div
                    key={s.id}
                    style={{ width: slideWidth > 0 ? slideWidth : undefined, flexShrink: 0 }}
                  >
                    <ServiceCard service={s} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dot navigation */}
            <div className="flex items-center justify-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current
                    ? 'w-6 bg-[#9333EA]'
                    : 'w-2 bg-[#9333EA]/20 hover:bg-[#9333EA]/40'
                    }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>
            {/* End Dot navigation */}

          </div>
          {/* === End Right: carousel + dots === */}


        </div>

        {/* ── CTA Section ── */}
        <div className="border border-[#111827]/8 rounded-2xl overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr_auto] items-stretch">

            {/* Left: Buttons */}
            <div className="px-8 py-10 sm:px-12 sm:py-12 space-y-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#9333EA]">
                Work with us
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111827] leading-snug max-w-lg">
                Have a project in mind?<br />Let&apos;s talk about it.
              </h3>
              <p className="text-[#111827]/55 text-base leading-relaxed max-w-md">
                We work with startups and established businesses to deliver digital products that are fast, beautiful, and built to scale.
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <button className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-[#9333EA] text-white text-sm font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors duration-150 active:scale-95">
                  Book a Free Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-[#111827] text-sm font-semibold rounded-lg border border-[#111827]/15 hover:border-[#111827]/30 hover:bg-[#111827]/3 transition-all duration-150 active:scale-95" onClick={() => scrollIntoSection('our-works')}>
                  See Our Work
                </button>
              </div>
            </div>
            {/* End Left: Buttons */}

            {/* Right: contact strip */}
            <div className="hidden lg:flex flex-col justify-between px-8 py-10 min-w-55 bg-linear-to-br from-[#1e003a] via-[#2d0a52] to-[#3b1266]">
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-white/40">
                  Get in touch
                </p>
                <div className="space-y-4">

                  {/* mail */}
                  <a href="mailto:info@cornortech.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Email</p>
                      <p className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors">info@cornortech.com</p>
                    </div>
                  </a>
                  {/* End mail */}

                  {/* Phone */}
                  <a href="tel:+9779828750115" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Phone</p>
                      <p className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors">+977 9828750115</p>
                    </div>
                  </a>
                  {/* End Phone */}


                  {/* Response Time */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    <div>
                      <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">Response time</p>
                      <p className="text-sm text-white font-medium">Within 24 hours</p>
                    </div>
                  </div>
                  {/* End Response Time */}


                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-white/70 font-medium">Available for new projects</span>
              </div>
              {/* End Availability */}

            </div>
            {/* End Right: contact strip */}


          </div>
        </div>
        {/* ── End CTA Section ── */}

      </div>

    </section>
  );
};

export default Services;