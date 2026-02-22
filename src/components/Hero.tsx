import { motion } from 'framer-motion';
import { HeroProps } from '@/types';
import Image from 'next/image';

const Hero = ({ bannerVisible }: HeroProps) => {
  return (
    <section
      id="hero"
      className={`relative overflow-hidden bg-white ${
        bannerVisible ? 'min-h-[calc(100vh-128px)]' : 'min-h-[calc(100vh-64px)]'
      } py-8 md:py-0 md:flex md:items-center`}
    >
      <style>{`
        /* ── CapCut aurora: orbs move around screen, hue slowly shifts ── */

        .aurora-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
          pointer-events: none;
          will-change: top, left;
        }

        /* Orb 1 — top-left, drifts clockwise */
        @keyframes orb1 {
          0%   { top: -10vh; left: 10vw;  }
          25%  { top: 15vh;  left: -5vw;  }
          50%  { top: 30vh;  left: 20vw;  }
          75%  { top: 5vh;   left: 40vw;  }
          100% { top: -10vh; left: 10vw;  }
        }

        /* Orb 2 — bottom-right, drifts counter-clockwise */
        @keyframes orb2 {
          0%   { top: 60vh;  left: 70vw;  }
          25%  { top: 80vh;  left: 50vw;  }
          50%  { top: 50vh;  left: 80vw;  }
          75%  { top: 75vh;  left: 65vw;  }
          100% { top: 60vh;  left: 70vw;  }
        }

        /* Orb 3 — center, slow drift */
        @keyframes orb3 {
          0%   { top: 40vh;  left: 45vw;  }
          33%  { top: 20vh;  left: 60vw;  }
          66%  { top: 55vh;  left: 30vw;  }
          100% { top: 40vh;  left: 45vw;  }
        }

        /* Orb 4 — top-right */
        @keyframes orb4 {
          0%   { top: 5vh;   left: 75vw;  }
          50%  { top: 25vh;  left: 90vw;  }
          100% { top: 5vh;   left: 75vw;  }
        }

        /* Slow hue drift — CapCut's signature colour breathing */
        @keyframes hueShift {
          0%,100% { filter: blur(90px) hue-rotate(0deg);   }
          50%      { filter: blur(90px) hue-rotate(30deg);  }
        }

        .aurora-orb-1 {
          width: 55vw; height: 55vw;
          max-width: 700px; max-height: 700px;
          background: radial-gradient(circle, rgba(147,51,234,0.45) 0%, rgba(147,51,234,0) 70%);
          animation: orb1 20s ease-in-out infinite, hueShift 12s ease-in-out infinite;
        }
        .aurora-orb-2 {
          width: 50vw; height: 50vw;
          max-width: 640px; max-height: 640px;
          background: radial-gradient(circle, rgba(99,91,255,0.38) 0%, rgba(99,91,255,0) 70%);
          animation: orb2 25s ease-in-out infinite, hueShift 16s ease-in-out 4s infinite;
        }
        .aurora-orb-3 {
          width: 40vw; height: 40vw;
          max-width: 520px; max-height: 520px;
          background: radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 70%);
          animation: orb3 18s ease-in-out 2s infinite, hueShift 20s ease-in-out 8s infinite;
        }
        .aurora-orb-4 {
          width: 35vw; height: 35vw;
          max-width: 420px; max-height: 420px;
          background: radial-gradient(circle, rgba(147,51,234,0.22) 0%, rgba(147,51,234,0) 70%);
          animation: orb4 22s ease-in-out 6s infinite, hueShift 14s ease-in-out 2s infinite;
        }

        /* Status dot */
        @keyframes statusBlink {
          0%,100% { opacity:1;   }
          50%      { opacity:0.3; }
        }
        .status-blink { animation: statusBlink 1.6s ease-in-out infinite; }
      `}</style>

      {/* ── Aurora orbs ── */}
      <div className="aurora-orb aurora-orb-1" />
      <div className="aurora-orb aurora-orb-2" />
      <div className="aurora-orb aurora-orb-3" />
      <div className="aurora-orb aurora-orb-4" />

      {/* ── Everything below is 100% unchanged from original ── */}
      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="w-full py-20 lg:py-12 flex flex-col items-center">

          {/* Framer motion badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D8FB] text-muted-foreground text-sm font-medium mb-6"
          >
            <span className="status-blink flex h-2 w-2 rounded-full bg-[#66FF01]"></span>
            Now available: Next-Gen IT Consulting
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center w-full">

            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9333EA] to-[#635DFF]">Cornor Tech</span>
                  <br />
                  <span className="text-[#111827] text-4xl lg:text-5xl">Where ideas spark tomorrow technology</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-base lg:text-lg text-[#141b2c] max-w-xl">
                  We empower businesses with cutting-edge software solutions, turning challenges into opportunities and ideas into reality. Secure, scalable, and simple.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
                  Enroll Courses
                </button>
                <button className="px-6 py-3 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333EA] hover:text-white transform hover:scale-105 transition-all duration-200">
                  Get Start
                </button>
              </motion.div>
            </div>

            {/* Hero Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative max-w-md mx-auto w-full">
              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {/* Main logo container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-linear-to-br from-[#9333EA]/10 to-[#7c3aed]/10 p-6">
                  <div className="aspect-square bg-linear-to-br from-[#9333EA]/20 to-[#7c3aed]/20 rounded-xl flex items-center justify-center">
                    {/* Cornor Tech Logo */}
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <Image
                        src="/cornortech_logo.png"
                        alt="Cornor Tech Logo"
                        height={200}
                        width={200}
                        className="w-full h-full object-contain transform hover:scale-120 transition-transform duration-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  <div className="w-6 h-6 bg-linear-to-br from-[#9333EA] to-[#7c3aed] rounded-lg" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-[#9333EA] rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.8s' }}>
                  <div className="w-5 h-5 bg-white rounded-full" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C320,48 320,0 640,0 C960,0 960,48 1280,48 L1440,48 L1440,0 L1280,0 C960,0 960,48 640,48 C320,48 320,0 0,0 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;