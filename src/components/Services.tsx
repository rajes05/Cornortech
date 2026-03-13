'use client';
import { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  badge: string;
  popular?: boolean;
  gradient: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Build modern, responsive, and scalable web applications using cutting-edge technologies and best practices.',
    features: ['Custom Website Development', 'Progressive Web Apps (PWA)', 'API Integration & Development'],
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
    icon: '🎨',
    badge: 'Design',
    gradient: 'bg-linear-to-br from-[#9333EA]/15 to-[#a855f7]/25',
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Develop powerful mobile applications for iOS and Android that engage users and drive growth.',
    features: ['Native iOS & Android Apps', 'Cross-Platform Development', 'App Store Optimization'],
    icon: '📲',
    badge: 'Mobile',
    gradient: 'bg-linear-to-br from-[#7c3aed]/20 to-[#9333EA]/20',
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Design intuitive and beautiful user experiences that keep your customers engaged and satisfied.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Design System Creation'],
    icon: '✨',
    badge: 'Design',
    gradient: 'bg-linear-to-br from-[#9333EA]/25 to-[#7e22ce]/15',
  },
  {
    id: '6',
    title: 'Cloud Solutions',
    description: 'Leverage cloud technology to scale your infrastructure and optimize your business operations.',
    features: ['AWS / Azure / GCP Setup', 'DevOps & CI/CD', 'Cost Optimization'],
    icon: '☁️',
    badge: 'Cloud',
    gradient: 'bg-linear-to-br from-[#7e22ce]/20 to-[#9333EA]/20',
  },
  {
    id: '7',
    title: 'E-commerce Solutions',
    description: 'Build powerful online stores that convert visitors into customers and drive revenue growth.',
    features: ['Custom E-commerce Platforms', 'Payment Gateway Integration', 'Order Management Systems'],
    icon: '🛒',
    badge: 'E-commerce',
    gradient: 'bg-linear-to-br from-[#9333EA]/20 to-[#a855f7]/20',
  },
  {
    id: '8',
    title: 'Branding & Strategy',
    description: 'Develop a compelling brand identity and strategic roadmap to stand out in your market.',
    features: ['Brand Strategy Development', 'Market Research & Analysis', 'Competitive Analysis'],
    icon: '🎯',
    badge: 'Strategy',
    gradient: 'bg-linear-to-br from-[#a855f7]/15 to-[#9333EA]/25',
  },
  {
    id: '9',
    title: 'Content Creation',
    description: 'Engage your audience with high-quality content that tells your story and builds trust.',
    features: ['Blog Writing & Articles', 'Video Production', 'Content Strategy Planning'],
    icon: '✍️',
    badge: 'Content',
    gradient: 'bg-linear-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
  },
];

const ServiceCard = ({ service }: { service: Service }) => (
  /*
   * Hover effect:
   *  - rounded-2xl at rest → rounded-xl on hover (squarer feel, still soft)
   *  - deeper shadow for lift
   *  - purple border appears on hover
   */
  <div className="group relative w-full
                  rounded-2xl hover:rounded-xl
                  overflow-hidden bg-white
                  shadow-soft hover:shadow-large
                  border border-transparent hover:border-[#9333EA]/15
                  transition-all duration-300
                  cursor-pointer">

    {/* ── Card top: gradient banner with icon ── */}
    <div className={`relative h-52 ${service.gradient} overflow-hidden`}>

      {/* Ambient glow behind icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 rounded-full bg-white/12 blur-2xl" />
      </div>

      {/* Decorative rotating square */}
      <div className="absolute top-5 left-5 w-10 h-10 rounded-lg bg-white/30
                      rotate-12 group-hover:rotate-45 transition-transform duration-500" />
      {/* Decorative circle */}
      <div className="absolute bottom-5 right-6 w-14 h-14 rounded-full bg-white/20
                      group-hover:scale-125 transition-transform duration-500" />
      {/* Small floating dot */}
      <div className="absolute top-8 right-12 w-4 h-4 rounded-full bg-white/25
                      group-hover:-translate-y-1 transition-transform duration-700" />

      {/* Icon tile */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20.5 h-20.5 rounded-2xl bg-white/90 shadow-medium
                        flex items-center justify-center text-[38px] relative z-10
                        group-hover:scale-110 group-hover:rotate-3
                        transition-all duration-300">
          {service.icon}
        </div>
      </div>

      {/* Category badge */}
      <span className="absolute top-3 left-3 z-20
                       px-2.5 py-1 text-[10px] font-black uppercase tracking-widest
                       text-[#7c3aed] bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
        {service.badge}
      </span>

      {/* Popular badge */}
      {service.popular && (
        <span className="absolute top-3 right-3 z-20
                         px-2.5 py-1 text-[10px] font-black uppercase tracking-wide
                         text-white bg-[#9333EA] rounded-full shadow-sm">
          Popular
        </span>
      )}

      {/* Hover CTA overlay */}
      <div className="absolute inset-0 z-10
                      bg-linear-to-t from-[#6d28d9]/92 via-[#9333EA]/55 to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      flex items-end p-5">
        <button className="w-full py-2.5 bg-white text-[#7c3aed]
                           text-sm font-extrabold tracking-wide rounded-xl
                           hover:bg-[#f5f3ff] transition-colors shadow-medium">
          Get Started →
        </button>
      </div>
    </div>

    {/* ── Card body: main content + right meta strip ── */}
    <div className="flex gap-4 p-5">

      {/* Main content */}
      <div className="flex-1 min-w-0 space-y-3">
        <h3 className="text-[17px] font-extrabold text-foreground leading-snug
                       group-hover:text-[#7c3aed] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-[12.5px] text-foreground-secondary leading-relaxed">
          {service.description}
        </p>

        {/* Features list */}
        <ul className="space-y-1.5 pt-0.5">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[12px] text-[#7c3aed]/75 font-medium">
              <svg className="w-3.5 h-3.5 text-[#9333EA] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Right meta column */}
      <div className="flex flex-col items-center justify-center gap-3
                      border-l border-[#9333EA]/10 pl-4 min-w-17">

        {/* Fast Delivery */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-xl bg-[#f5f3ff] flex items-center justify-center
                          group-hover:bg-[#ede9fe] transition-colors">
            <svg className="w-4 h-4 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#9333EA]/55 text-center leading-tight">
            Fast<br/>Delivery
          </span>
        </div>

        <div className="w-px h-4 bg-[#9333EA]/10" />

        {/* Quality */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="w-8 h-8 rounded-xl bg-[#f5f3ff] flex items-center justify-center
                          group-hover:bg-[#ede9fe] transition-colors">
            <svg className="w-4 h-4 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-wider text-[#9333EA]/55 text-center leading-tight">
            Quality<br/>Work
          </span>
        </div>
      </div>

    </div>
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

  // ── Measure slide width on mount (useLayoutEffect avoids setState-in-effect lint warning) ──
  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    computeLayout();
  }, [computeLayout]);

  // ── Re-measure on window resize ──
  useEffect(() => {
    window.addEventListener('resize', computeLayout);
    return () => window.removeEventListener('resize', computeLayout);
  }, [computeLayout]);

  const goTo = useCallback((idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, total - 1)));
  }, [total]);

  const offset = current * slideWidth;

  return (
    <section id="services" className="py-20 lg:py-32 bg-linear-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">

      {/* ── Background blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9333EA]/5 rounded-full blur-3xl" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container-custom relative z-10 space-y-16">

        {/* ── Layout: impactful left, carousel right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

          {/* ── Left: effective content block ── */}
          <div className="space-y-7 animate-fade-in">

            {/* Section label */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-0.5 bg-[#9333EA] rounded-full" />
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#9333EA]">
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

          {/* ── Right: single-card carousel + dots below ── */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Carousel — one card at a time */}
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

            {/* ── Dot navigation — below the card ── */}
            <div className="flex items-center justify-center gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 bg-[#9333EA]'
                      : 'w-2 bg-[#9333EA]/20 hover:bg-[#9333EA]/40'
                  }`}
                  aria-label={`Go to service ${i + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ── CTA Section ── */}
        <div className="border border-[#111827]/8 rounded-2xl overflow-hidden bg-white">
          <div className="grid lg:grid-cols-[1fr_auto] items-stretch">

            {/* Left: content */}
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
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#9333EA] text-white text-sm font-semibold rounded-lg hover:bg-[#7c3aed] transition-colors duration-150 active:scale-95">
                  Book a Free Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent text-[#111827] text-sm font-semibold rounded-lg border border-[#111827]/15 hover:border-[#111827]/30 hover:bg-[#111827]/3 transition-all duration-150 active:scale-95">
                  See Our Work
                </button>
              </div>
            </div>

            {/* Right: contact strip */}
            <div className="hidden lg:flex flex-col justify-between border-l border-[#111827]/8 px-8 py-10 min-w-55 bg-[#fafafa]">
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#111827]/35">
                  Get in touch
                </p>
                <div className="space-y-4">
                  <a href="mailto:info@cornortech.com" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-[#9333EA]/8 flex items-center justify-center shrink-0 group-hover:bg-[#9333EA]/15 transition-colors">
                      <svg className="w-4 h-4 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#111827]/35 uppercase tracking-wider font-medium">Email</p>
                      <p className="text-sm text-[#111827] font-medium group-hover:text-[#9333EA] transition-colors">info@cornortech.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#9333EA]/8 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#9333EA]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#111827]/35 uppercase tracking-wider font-medium">Response time</p>
                      <p className="text-sm text-[#111827] font-medium">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 pt-6 mt-6 border-t border-[#111827]/8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs text-[#111827]/50 font-medium">Available for new projects</span>
              </div>
            </div>

          </div>
        </div>
        {/* ── End CTA Section ── */}

      </div>

      {/* ── Bottom wave ── */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C320,48 320,0 640,0 C960,0 960,48 1280,48 L1440,48 L1440,0 L1280,0 C960,0 960,48 640,48 C320,48 320,0 0,0 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Services;