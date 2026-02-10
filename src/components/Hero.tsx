import { motion } from 'framer-motion'
import { HeroProps } from '@/types';

const Hero = ({bannerVisible}:HeroProps) => {
  return (
   <section 
  id="hero" 
  className={`relative overflow-hidden bg-linear-to-br from-white via-[#9333EA]/5 to-white ${
    bannerVisible ? 'min-h-[calc(100vh-128px)]' : 'min-h-[calc(100vh-64px)]'
  } py-8 md:py-0 md:flex md:items-center`}
>
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9333EA]/20 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10 h-full flex items-center">
        <div className="w-full py-20 lg:py-12 flex flex-col items-center">

          {/* Framer motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D8FB] text-muted-foreground text-sm font-medium mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#66FF01] animate-pulse"></span>
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
                  <span className="text-[#111827] text-4xl lg:text-5xl">Where ideas spark tomorrow's technology</span>
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
                      <img
                        src="/cornortech_logo.png"
                        alt="Cornor Tech Logo"
                        className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-white rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  <div className="w-6 h-6 bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-lg" />
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