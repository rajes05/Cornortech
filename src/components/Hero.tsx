import { motion } from 'framer-motion';
import { HeroProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';


const Hero = ({ bannerVisible }: HeroProps) => {
  return (
    <section
      id="hero"
      className={`relative ${
        bannerVisible ? 'pt-32' : 'pt-28'
      } w-full min-h-screen bg-gradient-to-b from-[#1e003a] via-[#2d0a52] to-[#3b1266] overflow-hidden flex flex-col font-sans`}
    >
      {/* ── Noise texture overlay ── */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Main bento grid ── */}
      <div className="flex-1 container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 pb-8 relative z-10">

        {/* ────── Row 1: Giant stacked headline (col-span-12) ────── */}
        <div className="lg:col-span-12 flex flex-col lg:block relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-white uppercase"
          >
            Cornor
          </motion.h1>
          <div className="flex items-center gap-4 lg:-mt-4">
            {/* Pulsing code badge */}
            <div className="hidden lg:flex w-32 h-16 bg-[#a855f7] rounded-full items-center justify-center animate-pulse flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
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
              className="text-[8vw] leading-[0.9] font-bold tracking-tighter text-white/90 uppercase"
            >
              Tech
            </motion.h1>
          </div>
        </div>

        {/* ────── Col 1: Logo / mascot card (col-span-3) ────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="lg:col-span-3 bg-purple-500/30 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-6 flex flex-col justify-between hover:bg-purple-500/50 transition-all duration-300 group"
        >
          <div className="flex justify-between items-start">
            <span className="w-2 h-2 bg-[#a3e635] rounded-full" />
            <span className="text-purple-200 text-xs uppercase">Est. 2024</span>
          </div>
          <div className="relative w-full aspect-square my-4 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 bg-purple-900/40 flex items-center justify-center">
            <Image
              src="/cornortech_logo.png"
              alt="Cornor Tech Logo"
              fill
              className="object-contain p-8"
              sizes="100vw"
            />
          </div>
          <p className="text-white text-sm font-medium leading-tight">
            Not freelancers. Not outsourcing. PM-led teams that work like your own.
          </p>
        </motion.div>

        {/* ────── Col 2: Workspace image card (col-span-6) ────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden bg-purple-800 border border-purple-500/30 group"
        >
          <Image
            src="/hero_workspace.png"
            alt="Cornor Tech Workspace"
            fill
            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e003a] via-transparent to-transparent opacity-70" />
          {/* Bottom caption row */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white max-w-lg leading-tight">
                We help businesses scale delivery with accountable, structured tech teams.
              </h2>
              <div className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-white flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-rotate-45"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ────── Col 3: Two stacked action cards (col-span-3) ────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          {/* Top: Brand highlight card */}
          <div className="flex-1 bg-[#9333EA] rounded-3xl p-6 flex flex-col justify-center items-start text-white">
            <span className="text-5xl font-bold tracking-tighter block leading-none">Fully</span>
            <span className="text-sm font-bold uppercase tracking-wide opacity-80 mt-1">
              Managed Projects
            </span>
          </div>

          {/* Bottom: CTA card */}
          <Link href="#contact" className="flex-1">
            <div className="h-full bg-white rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 cursor-pointer min-h-[160px]">
              <div className="flex justify-between items-center">
                <span className="text-[#9333EA] font-bold uppercase text-sm">Start a Project</span>
                {/* MoveRight icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
              <span className="text-2xl font-bold text-[#1e003a] leading-none mt-4">
                Deploy <br /> Engineers.
              </span>
            </div>
          </Link>
        </motion.div>

      </div>

      {/* ── Bottom glow blob ── */}
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[100px] pointer-events-none rounded-full" />
    </section>
  );
};

export default Hero;