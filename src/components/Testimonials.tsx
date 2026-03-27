"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  service?: string;
  gradient: string;
}

// ── Shared openings positions ──────────
const OPENINGS = [
  { role: 'Senior Full Stack Developer', type: 'Full-time', location: 'Remote', tags: ['React', 'Node.js', 'PostgreSQL'], hot: true },
  { role: 'UI/UX Designer', type: 'Full-time', location: 'Hybrid · Butwal', tags: ['Figma', 'Prototyping', 'Design Systems'], hot: true },
  { role: 'DevOps Engineer', type: 'Full-time', location: 'Remote', tags: ['AWS', 'Docker', 'Kubernetes'], hot: false },
  { role: 'Digital Marketing Specialist', type: 'Full-time', location: 'On-site · Butwal', tags: ['SEO', 'Meta Ads', 'Analytics'], hot: false },
  { role: 'React Native Developer', type: 'Contract', location: 'Remote', tags: ['React Native', 'iOS', 'Android'], hot: false },
  { role: 'Business Development Executive', type: 'Full-time', location: 'On-site · Butwal', tags: ['Sales', 'CRM', 'Strategy'], hot: false },
];

// ===== Avatar — shows image if available, initials fallback if not =====
const AvatarImage = ({ name, src }: { name: string; src?: string }) => {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join('');

  if (failed || !src) {
    return (
      <div className="w-12 h-12 rounded-full ring-2 ring-[#9333EA]/20 group-hover:ring-[#9333EA] transition-all duration-300
                      bg-linear-to-br from-[#9333EA] to-[#7c3aed]
                      flex items-center justify-center
                      text-white font-bold text-sm select-none">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#9333EA]/20 group-hover:ring-[#9333EA] transition-all duration-300">
      <Image
        src={src}
        alt={name}
        width={48}
        height={48}
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
};
// ===== End Avatar =====


// ===== Testimonial Card =====
const TestimonialCard = ({
  testimonial,
  index,
  isNew,
}: {
  testimonial: Testimonial;
  index: number;
  isNew?: boolean;
}) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border border-[#9333EA]/10
        ${isNew ? "animate-[fadeSlideIn_0.4s_ease_forwards]" : ""}`}
      style={isNew ? { animationDelay: `${(index % 3) * 0.08}s`, opacity: 0 } : {}}
    >
      {/* Hover gradient bg */}
      <div className={`absolute inset-0 ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10 p-6 space-y-4">

        {/* Top row: quote + stars */}
        <div className="flex justify-between items-start">
          <div className="w-11 h-11 bg-[#9333EA]/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? "text-[#9333EA]" : "text-[#9333EA]/20"}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Quote text */}
        <div className="space-y-3">
          <p className="text-foreground-secondary leading-relaxed italic text-sm transition-colors duration-300">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          {testimonial.service && (
            <span className="inline-block px-3 py-1 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-xs font-semibold">
              {testimonial.service}
            </span>
          )}
        </div>

        {/* User info */}
        <div className="flex items-center space-x-3 pt-4 border-t border-[#9333EA]/10">
          <div className="relative shrink-0">
            <AvatarImage name={testimonial.name} src={testimonial.image} />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#9333EA] rounded-full border-2 border-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-800 text-sm group-hover:text-[#9333EA] transition-colors truncate">
              {testimonial.name}
            </h4>
            <p className="text-xs text-[#9333EA]/70">{testimonial.role}</p>
            <p className="text-xs text-foreground-secondary truncate">{testimonial.company}</p>
          </div>
          <div className="shrink-0 w-7 h-7 bg-[#9333EA] rounded-full flex items-center justify-center" title="Verified">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
};
// ===== End Testimonial Card =====


// ===== Voices Slider =====
const VOICES_SLIDES = [
  {
    image: '/teams/ceo.jpeg',
    quote: 'I believe that the strength in our team and our ability to deal with adversities is what makes us a great partner for our clients.',
    highlight: "THIS IS WHY I'M PROUD TO BE ON THIS TEAM.",
    name: 'Ramit Neupane',
    role: 'CEO, Cornor Tech',
  },
  {
    image: '/teams/coo.jpeg',
    quote: "At Cornor Tech, every challenge is an opportunity. We don't just deliver projects — we build long-term partnerships that create real impact.",
    highlight: 'THIS IS WHAT DRIVES US EVERY SINGLE DAY.',
    name: 'Santosh Kunwar',
    role: 'COO, Cornor Tech',
  },
  {
    image: '/teams/cfo.jpeg',
    quote: "Sound financial strategy is the backbone of every great tech company. At Cornor Tech, we build with clarity, accountability, and long-term vision.",
    highlight: 'THIS IS HOW WE BUILD FOR THE FUTURE.',
    name: 'Laxman Neupane',
    role: 'CFO, Cornor Tech',
  },
  {
    image: '/teams/om.jpeg',
    quote: "Great organizations don't happen by accident. Every system, every process, every person — we align them all toward one goal: excellence.",
    highlight: 'THIS IS THE STANDARD WE HOLD OURSELVES TO.',
    name: 'Aman Pokhrel',
    role: 'Organizational Manager, Cornor Tech',
  },
  {
    image: '/teams/mh.jpg',
    quote: "Marketing isn't just about visibility — it's about connection. We tell stories that resonate, campaigns that convert, and brands that last.",
    highlight: 'THIS IS HOW WE MAKE CORNOR TECH KNOWN.',
    name: 'Rubi Ale',
    role: 'Marketing Head, Cornor Tech',
  },
];

const VoicesSlider = () => {
  const [active, setActive] = useState(0);
  const total = VOICES_SLIDES.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);
  const slide = VOICES_SLIDES[active];

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#9333EA]/15">

      {/* Section label */}
      <div className="absolute top-6 left-6 z-20">
        <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-sm border border-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
          
        </span>
      </div>

      {/* Dot indicators */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-1">
        {VOICES_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Image + quote grid */}
      <div className="grid lg:grid-cols-2 min-h-105">

        {/* Left: Portrait image */}
        <div className="relative min-h-65 lg:min-h-0 overflow-hidden">
          <Image
            key={active}
            src={slide.image}
            alt={slide.name}
            fill
            className="object-cover object-top transition-all duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Desktop: fade right into quote panel */}
          <div className="absolute inset-0 bg-linear-to-b lg:bg-linear-to-r from-transparent via-transparent to-[#1e003a]/80" />
          {/* Mobile: fade bottom into quote panel */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#1e003a] to-transparent lg:hidden" />
        </div>

        {/* Right: Quote panel */}
        <div
          className="relative flex flex-col justify-center gap-6 px-8 py-10 lg:px-12 lg:py-14"
          style={{ background: 'linear-gradient(135deg, #1e003a 0%, #2d0a52 60%, #3b1266 100%)' }}
        >
          {/* Decorative large quote mark */}
          <svg
            className="absolute top-8 right-8 w-20 h-20 text-purple-400/10 pointer-events-none"
            fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Accent rule */}
          <div className="w-10 h-0.5 bg-[#a855f7] rounded-full" />

          {/* Quote body */}
          <blockquote className="text-white/75 text-base lg:text-lg leading-relaxed italic font-medium">
            &ldquo;{slide.quote}&rdquo;
          </blockquote>

          {/* Bold all-caps highlight */}
          <p className="text-white font-black text-lg lg:text-2xl tracking-tight leading-snug uppercase">
            {slide.highlight}
          </p>

          {/* Person info row */}
          <div className="flex items-center gap-4 pt-2 border-t border-white/10">
            <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-[#a855f7]/60 shrink-0 relative">
              <Image
                src={slide.image}
                alt={slide.name}
                fill
                className="object-cover object-top"
                sizes="44px"
              />
            </div>
            <div>
              <p className="text-white font-bold text-sm">{slide.name}</p>
              <p className="text-purple-300/70 text-xs">{slide.role}</p>
            </div>
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
// ===== End Voices Slider =====


const CARDS_PER_ROW = 3;
const INITIAL_ROWS = 1;

// ===== Client logos data =====
const CLIENT_LOGOS = [
  { alt: 'Career Guide', src: '/clients/caareer.webp' },
  { alt: 'Debai', src: '/clients/debai.webp' },
  { alt: 'Dynamic Education', src: '/clients/dynamic.webp' },
  { alt: 'Web Surfer', src: '/clients/neplo.webp' },
  { alt: 'Learn Nepal', src: '/clients/ln.webp' },
  { alt: 'Shine Education Hub', src: '/clients/shine.webp' },
  { alt: 'Writeeasy', src: '/clients/we.svg' },
  { alt: 'Hotel Green Peace', src: '/clients/pz.webp' },
  { alt: 'Sulav Kharel', src: '/clients/Sulav_kharel.jpeg' },
  { alt: 'Siddhartha Hospitality', src: '/clients/Siddhartha_hospitality.jpeg' },
  { alt: 'Kalika Manavgyan Secondary School', src: '/clients/kalika.jpg' },
];
// ===== End Client logos data =====


const Testimonials = () => {

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "ARKBO Technologies",
      image: '/testimonials/arkbo_tech.png',
      role: "Tech Company",
      company: "ARKBO Technologies Pvt. Ltd",
      rating: 5,
      text: "We had a great experience working with the team. They took the time to understand our needs and delivered a clean, well-structured design that truly fits our vision.",
      service: "Web Development",
      gradient: "bg-linear-to-br from-[#9333EA]/5 to-[#7c3aed]/5",
    },
    {
      id: "2",
      name: "Sulav Kharel",
      image: '/testimonials/sulav_kharel.jpeg',
      role: "Public Figure & Political Leader",
      company: "Rastriya Swatantra Party (RSP)",
      rating: 5,
      text: "Cornor Tech managed our social media content with excellent professionalism and creativity. Their team understood our audience and delivered clear, engaging, and impactful content consistently. Our digital presence saw noticeable improvement in a short time.",
      service: "Social Media Content",
      gradient: "bg-linear-to-br from-[#a855f7]/5 to-[#9333EA]/5",
    },
    {
      id: "3",
      name: "Manish Thapa",
      role: "Digital Marketing Specialist",
      company: "Growth Marketing Co.",
      rating: 5,
      text: "Cornor Tech handled our full digital marketing strategy — SEO, social media, and paid ads. Within three months our organic traffic doubled and lead generation increased by 3x. Their data-driven approach sets them apart from other agencies.",
      service: "Digital Marketing",
      gradient: "bg-linear-to-br from-[#9333EA]/5 to-[#a855f7]/5",
    },
    {
      id: "4",
      name: "Bhusan Giri",
      role: "Python Developer",
      company: "DataTech Solutions",
      rating: 5,
      text: "We hired Cornor Tech to build a custom data pipeline and automation system for our business. The backend architecture was clean, well-documented, and scalable. Delivery was ahead of schedule and the team was extremely communicative throughout.",
      service: "Web Development",
      gradient: "bg-linear-to-br from-[#7c3aed]/5 to-[#9333EA]/5",
    },
    {
      id: "5",
      name: "Padam Neupane",
      role: "Graphic Designer",
      company: "Design Hub",
      rating: 5,
      text: "The branding package Cornor Tech delivered was beyond what we imagined. Logo, color system, typography, and social media assets all felt cohesive and premium. Our brand identity now stands out in a crowded market.",
      service: "Branding & Strategy",
      gradient: "bg-linear-to-br from-[#9333EA]/5 to-[#7e22ce]/5",
    },
    {
      id: "6",
      name: "Bardan Acharya",
      role: "IT Manager",
      company: "SecureNet Systems",
      rating: 5,
      text: "Cornor Tech migrated our entire infrastructure to AWS with zero downtime. The CI/CD pipelines they set up have drastically reduced our deployment time. Their DevOps expertise is world-class and the post-launch support has been excellent.",
      service: "Cloud Solutions",
      gradient: "bg-linear-to-br from-[#7e22ce]/5 to-[#9333EA]/5",
    },
  ];

  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  const [newRowStart, setNewRowStart] = useState<number | null>(null);

  const totalRows = Math.ceil(testimonials.length / CARDS_PER_ROW);
  const visibleCount = visibleRows * CARDS_PER_ROW;
  const visibleCards = testimonials.slice(0, visibleCount);
  const allShown = visibleRows >= totalRows;

  const expandBtnRef = useRef<HTMLButtonElement>(null);

  const showMore = () => {
    const nextRowStart = visibleRows * CARDS_PER_ROW;
    setNewRowStart(nextRowStart);
    setVisibleRows((r) => Math.min(r + 1, totalRows));
    setTimeout(() => setNewRowStart(null), 600);
  };

  const collapseLastRow = () => {
    if (visibleRows <= INITIAL_ROWS) return;
    setNewRowStart(null);
    setVisibleRows((r) => r - 1);
    setTimeout(() => {
      expandBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-linear-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-8 max-w-7xl relative z-10 space-y-10">

        {/*  Header  */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            <span className="text-[#9333EA]">What Our Clients</span>
            <br />& Partners Say
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Trusted by businesses across industries — hear from the teams we have helped build, scale, and secure their IT infrastructure.
          </p>
        </div>
        {/* End Header  */}


        {/*  Testimonial Grid  */}
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCards.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                isNew={newRowStart !== null && index >= newRowStart}
              />
            ))}
          </div>

          {/* Show More / Collapse */}
          <div className="flex flex-col items-center gap-3 pt-2">
            <p className="text-sm text-foreground-secondary font-medium">
              Showing{" "}
              <span className="text-[#9333EA] font-semibold">{Math.min(visibleCount, testimonials.length)}</span>
              {" "}of{" "}
              <span className="text-[#9333EA] font-semibold">{testimonials.length}</span> reviews
            </p>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalRows }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${i < visibleRows ? "w-6 h-2 bg-[#9333EA]" : "w-2 h-2 bg-[#9333EA]/20"}`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3 pt-1">
              {!allShown && (
                <button
                  ref={expandBtnRef}
                  onClick={showMore}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold text-sm hover:bg-[#7c3aed] active:scale-95 transition-all duration-200 shadow-md hover:shadow-[#9333EA]/40 hover:shadow-lg"
                >
                  <span>Show More Reviews</span>
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
              {visibleRows > INITIAL_ROWS && (
                <button
                  onClick={collapseLastRow}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-[#9333EA] border-2 border-[#9333EA]/30 rounded-xl font-semibold text-sm hover:border-[#9333EA] hover:bg-[#9333EA]/5 active:scale-95 transition-all duration-200"
                >
                  <svg className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                  <span>Collapse Row</span>
                </button>
              )}
            </div>
            {allShown && (
              <p className="text-xs text-foreground-secondary italic">You&apos;ve seen all our reviews!</p>
            )}
          </div>
          {/* End Show More / Collapse */}

        </div>
        {/* End Testimonial Grid  */}



        {/* ===== Trusted Clients — infinite horizontal marquee ===== */}
        <div className="pt-4 pb-0">
          <div className="text-center mb-5">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9333EA]/70">
              Trusted by leading companies
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />
            <div className="flex gap-12 w-max animate-[marquee_28s_linear_infinite]">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center w-45 h-25 shrink-0 bg-white rounded-xl border border-[#9333EA]/10 px-5 py-3 shadow-sm hover:border-[#9333EA]/30 hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={160}
                    height={80}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ===== End Trusted Clients — infinite horizontal marquee ===== */}


        {/* === Stats Section === */}
        <div className="relative bg-linear-to-br from-[#1e003a] via-[#2d0a52] to-[#3b1266] rounded-3xl p-8 lg:p-14 shadow-large overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-purple-500/20 pointer-events-none" />
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-purple-400/10 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-purple-500/15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
          <div className="text-center mb-10 relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-purple-200 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              By the Numbers
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Cornor Tech at a Glance</h3>
            <p className="text-white/50 text-sm max-w-md mx-auto">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 relative z-10">
            {[
              { number: '3+', label: 'Years of Excellence', sub: 'Since 2024', accent: 'from-purple-500/30 to-violet-600/20', ring: 'ring-purple-400/30', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { number: '50+', label: 'Projects Delivered', sub: 'Across industries', accent: 'from-violet-500/30 to-purple-600/20', ring: 'ring-violet-400/30', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
              { number: '90+', label: 'Happy Clients', sub: 'Worldwide', accent: 'from-fuchsia-500/30 to-purple-600/20', ring: 'ring-fuchsia-400/30', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { number: '15+', label: 'Team Members', sub: 'Expert engineers', accent: 'from-purple-600/30 to-fuchsia-500/20', ring: 'ring-purple-300/30', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`group relative bg-linear-to-br ${stat.accent} backdrop-blur-sm rounded-2xl p-5 lg:p-6 ring-1 ${stat.ring} hover:ring-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center gap-3`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-purple-200 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">{stat.number}</div>
                <div>
                  <p className="text-sm font-semibold text-white/90 leading-snug">{stat.label}</p>
                  <p className="text-[11px] text-white/40 mt-0.5 font-medium">{stat.sub}</p>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-purple-400/40 group-hover:w-16 group-hover:bg-purple-300/60 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
        {/* === End Stats Section === */}

        {/* === Voices of Satisfaction === */}
        <VoicesSlider />

        {/* ===== View Career Section ===== */}
        <div id="career" className="relative rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-linear-to-br from-[#9333EA]/8 via-[#a855f7]/5 to-[#9333EA]/8" />
          <div className="absolute inset-0 border border-[#9333EA]/15 rounded-3xl pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-[#9333EA]/10 pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-[#9333EA]/8 pointer-events-none" />
          <div className="relative z-10 px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-xs font-bold uppercase tracking-widest">
                Careers
              </span>
              <h3 className="text-2xl lg:text-4xl font-black text-gray-900 leading-tight">
                Ready to build something
                <span className="text-[#9333EA]"> great together?</span>
              </h3>
              <p className="text-gray-500 text-sm lg:text-base max-w-lg leading-relaxed">
                We&apos;re growing fast and looking for talented people who love building products that make a real difference. Competitive pay, great culture, remote options.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
                {[
                  { icon: '🌍', label: 'Remote Friendly' },
                  { icon: '⚡', label: 'Fast Growth' },
                  { icon: '💜', label: 'Great Culture' },
                ].map((pill, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#9333EA]/15 rounded-full text-xs font-semibold text-gray-600 shadow-sm">
                    <span>{pill.icon}</span>
                    {pill.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <Link
                href="/careers"
                className="group relative flex items-center gap-3 px-8 py-4 bg-[#9333EA] text-white rounded-2xl font-bold text-base hover:bg-[#7c3aed] active:scale-95 transition-all duration-200 shadow-lg shadow-[#9333EA]/30 hover:shadow-xl hover:shadow-[#9333EA]/40"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                View Career Options
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-xs text-gray-400 font-medium">{OPENINGS.length} positions open right now</p>
            </div>
          </div>
        </div>
        {/* ===== End View Career Section ===== */}


      </div>
    </section>
  );
};

export default Testimonials;