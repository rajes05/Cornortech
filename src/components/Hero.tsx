/* eslint-disable react-hooks/refs */
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeroProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';


// ============================================================
// Hero Section
// Top-of-funnel landing section for Cornor Tech Pvt. Ltd.
// Layout: Bento-grid, 12-col at lg+, stacked on mobile
// ============================================================

// ── Floating particle (decorative, aria-hidden) ──────────────
const Particle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-purple-400/40 pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{ y: [0, -18, 0], opacity: [0.3, 0.7, 0.3] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    aria-hidden="true"
  />
);

// ── Typed text hook ───────────────────────────────────────────
const useTypedText = (phrases: string[], speed = 80) => {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplayed(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), 1600);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplayed(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % phrases.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed]);

  return displayed;
};


// ============================================================
// Component
// ============================================================

const Hero = ({ bannerVisible }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Parallax: noise layer drifts slightly on scroll ──────
  const { scrollY } = useScroll();
  const noiseY = useTransform(scrollY, [0, 600], [0, 40]);

  // ── Typewriter: cycles through all 9 service titles ─────
  const typedText = useTypedText([
    'Web Development',
    'Digital Marketing',
    'Graphic Design',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'E-commerce Solutions',
    'Branding & Strategy',
    'Content Creation',
  ]);

  // ── Particle positions (stable across renders) ───────────
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      x: (i * 37 + 11) % 100,
      y: (i * 53 + 7) % 100,
      delay: (i * 0.3) % 3,
    }))
  ).current;


  // ============================================================
  // Render
  // ============================================================
  return (
    <section
      ref={sectionRef}
      id="hero"
      className={`relative ${
        bannerVisible ? 'pt-32' : 'pt-28'
      } w-full min-h-screen bg-linear-to-b from-[#1e003a] via-[#2d0a52] to-[#3b1266] overflow-hidden flex flex-col font-sans`}
    >

      {/* ==================================================
          1. Background Layer
          Noise texture + ambient glow + floating particles
          ================================================== */}

      {/* Scrolling noise texture overlay */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          y: noiseY,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient top-left glow */}
      <div
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Floating ambient particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* === End 1. Background Layer === */}


      {/* ==================================================
          2. Main Bento Grid
          12-col on lg, single-col on mobile
          ================================================== */}
      <div className="flex-1 container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-8 relative z-10">


        {/* ================================================
            2a. Giant Stacked Headline  (col-span-12)
            Left:  "Cornor Tech Pvt. Ltd" + typewriter
            Right: slogan pill + scrolling keywords + dot grid
            ================================================ */}
        <div className="lg:col-span-12 flex flex-col lg:flex-row lg:items-end lg:justify-between relative gap-4 lg:gap-0">

          {/* Left: headline block — w-fit keeps subline flush with heading edge */}
          <div className="flex flex-col w-fit">

            {/* Line 1: "Cornor" */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-white uppercase"
            >
              Cornor
            </motion.h1>

            {/* Line 2: badge + "Tech Pvt. Ltd" — nowrap keeps badge on same line always */}
            <div className="flex items-center gap-3 lg:-mt-4 flex-nowrap">

              {/* Pulsing code badge — desktop only, original size */}
              <div
                className="hidden lg:flex w-32 h-16 bg-[#a855f7] rounded-full items-center justify-center animate-pulse shrink-0"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32" height="32" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-white/90 uppercase whitespace-nowrap"
              >
                Tech{' '}
                <span className="text-[#a855f7]">Pvt. Ltd</span>
              </motion.h1>
            </div>

            {/* Typewriter: cycles through 9 service names */}
            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 text-purple-300 text-base lg:text-lg font-mono tracking-wide min-h-[1.5rem]"
              aria-live="polite"
            >
              We build{' '}
              <span className="text-[#a3e635] border-r-2 border-[#a3e635] pr-0.5">
                {typedText}
              </span>
            </motion.p> */}

          </div>


          {/* ── Right decorative accent column ──────────────
              Slogan pill (frosted glass + diamond accents),
              vertical scrolling service keywords, dot-grid motif
          ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="hidden lg:flex flex-col items-end gap-4 pb-2 shrink-0"
          >

            {/* Slogan pill — frosted glass with diamond end-caps */}
            <div className="flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-purple-400/25 rounded-full px-5 py-2.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 0L10 5L5 10L0 5Z" fill="#a855f7"/>
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide italic">
                Where tech meets solution!
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 0L10 5L5 10L0 5Z" fill="#a3e635"/>
              </svg>
            </div>

            {/* Vertical scrolling service keywords */}
            <div className="relative h-24 overflow-hidden w-52" aria-hidden="true">
              <motion.div
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                className="flex flex-col items-end gap-2.5"
              >
                {[
                  'Web Development', 'Digital Marketing', 'Graphic Design',
                  'Mobile App Dev', 'UI/UX Design', 'Cloud Solutions',
                  'E-commerce', 'Branding & Strategy', 'Content Creation',
                  'Web Development', 'Digital Marketing', 'Graphic Design',
                  'Mobile App Dev', 'UI/UX Design', 'Cloud Solutions',
                  'E-commerce', 'Branding & Strategy', 'Content Creation',
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono tracking-widest uppercase text-purple-300/50"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
              {/* Fade masks top & bottom */}
              <div className="absolute inset-x-0 top-0 h-6 bg-linear-to-b from-[#1e003a] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-[#2d0a52] to-transparent pointer-events-none" />
            </div>

            {/* Dot-grid motif */}
            <div
              className="w-28 h-16 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #a855f7 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
              aria-hidden="true"
            />

          </motion.div>
          {/* === End right decorative accent column === */}

        </div>
        {/* === End 2a. Giant Stacked Headline === */}


        {/* ================================================
            2b. Logo / Mascot Card  (col-span-3)
            Stats strip removed — cleaner, logo breathes more
            ================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-3 bg-purple-500/30 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-6 flex flex-col justify-between hover:bg-purple-500/50 transition-all duration-300 group"
        >
          <div className="flex justify-between items-start">
            <span className="w-2 h-2 bg-[#a3e635] rounded-full" />
            <span className="text-purple-200 text-xs uppercase tracking-widest">Est. 2023</span>
          </div>

          {/* Logo area — taller now that stats are gone */}
          <div className="relative w-full aspect-square my-4 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-purple-900/40 flex items-center justify-center">
            <Image
              src="/cornortech_logo.png"
              alt="Cornor Tech Pvt. Ltd Logo"
              fill
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </div>

          <p className="text-white text-sm font-medium leading-tight">
            Not freelancers. Not outsourcing. PM-led teams that work like your own.
          </p>
        </motion.div>
        {/* === End 2b. Logo / Mascot Card === */}


        {/* ================================================
            2c. Workspace Image Card  (col-span-6)
            ================================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative h-100 lg:h-auto rounded-3xl overflow-hidden bg-purple-800 border border-purple-500/30 group"
        >
          <Image
            src="/hero_workspace.png"
            alt="Cornor Tech Pvt. Ltd workspace — engineers collaborating"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1e003a] via-transparent to-transparent opacity-70" />

          {/* Availability badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5">
            <span className="w-2 h-2 bg-[#a3e635] rounded-full animate-pulse" aria-hidden="true" />
            <span className="text-white text-xs font-medium">Available for new projects</span>
          </div>

          {/* Bottom caption row */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-lg leading-tight">
                We help businesses scale delivery with accountable, structured tech teams.
              </h2>
              <Link
                href="#contact"
                aria-label="Start a project with Cornor Tech"
                className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center hover:scale-110 hover:bg-[#9333ea] transition-all duration-200 text-white shrink-0 focus-visible:ring-2 focus-visible:ring-[#a3e635] outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" viewBox="0 0 24 24"
                  fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="-rotate-45"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        {/* === End 2c. Workspace Image Card === */}


        {/* ================================================
            2d. Right Column — Two Stacked Action Cards  (col-span-3)
            ================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >

          {/* Top: Brand highlight card */}
          <div className="flex-1 bg-[#9333EA] rounded-3xl p-6 flex flex-col justify-end text-white relative overflow-hidden group">
            {/* Shimmer on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            {/* Watermark number */}
            <span
              className="absolute top-3 right-4 text-[72px] font-black leading-none text-white/10 select-none pointer-events-none"
              aria-hidden="true"
            >
              01
            </span>
            {/* Tightly stacked label block */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">
                Service model
              </span>
              <span className="text-4xl font-black tracking-tighter leading-none">Fully</span>
              <span className="text-4xl font-black tracking-tighter leading-none text-white/80">Managed</span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-white/50 mt-1">
                Projects
              </span>
            </div>
            {/* Decorative ring */}
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/20 pointer-events-none"
              aria-hidden="true"
            />
          </div>

          {/* Bottom: CTA card */}
          <Link
            href="#contact"
            className="flex-1 focus-visible:ring-2 focus-visible:ring-[#9333EA] outline-none rounded-3xl"
          >
            <div className="h-full bg-white rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] active:scale-[0.99] transition-transform duration-300 cursor-pointer min-h-40 group">
              <div className="flex justify-between items-center">
                <span className="text-[#9333EA] font-bold uppercase text-sm tracking-wide">
                  Start a Project
                </span>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20" viewBox="0 0 24 24"
                    fill="none" stroke="#9333EA" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </motion.div>
              </div>
              <span className="text-2xl font-bold text-[#1e003a] leading-none mt-4">
                Deploy <br /> Engineers.
              </span>
            </div>
          </Link>

        </motion.div>
        {/* === End 2d. Right Column === */}


      </div>
      {/* === End 2. Main Bento Grid === */}


      {/* ==================================================
          3. Bottom Ambient Glow Blob
          ================================================== */}
      <div
        className="absolute bottom- left-1/252 -translate-x-1/2 w-150 h-75 bg-purple-600/20 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      {/* === End 3. Bottom Ambient Glow Blob === */}


    </section>
  );
};

export default Hero;