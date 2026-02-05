import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-white via-[#9333EA]/5 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#9333EA]/20 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20 lg:py-20 flex flex-col items-center ">

          {/* Framer motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}

            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D8FB] text-muted-foreground text-sm font-medium mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#9333EA] animate-pulse"></span>
            Now available: Next-Gen IT Consulting
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-transparent bg-clip-text bg-linear-to-r  from-[#9333EA] to-[#635DFF]">Cornor Tech</span>
                    <br />
                    <span className="text-[#111827] text-6xl">Where ideas spark tomorrow's technology</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg lg:text-xl text-[#141b2c] max-w-xl">
                    We empower businesses with cutting-edge software solutions, turning challenges into opportunities and ideas into reality. Secure, scalable, and simple.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
                    Enroll Courses
                  </button>
                  <button className="px-8 py-4 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333Einitial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}A] hover:text-white transform hover:scale-105 transition-all duration-200">
                    Get Start
                  </button>
                </motion.div>
              </div>

            {/* Hero Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative">
              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {/* Main logo container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#9333EA]/10 to-[#7c3aed]/10 p-8">
                  <div className="aspect-square bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20 rounded-xl flex items-center justify-center">
                    {/* Cornor Tech Logo */}
                    <div className="w-full h-full flex items-center justify-center p-8">
                      <img
                        src="/cornortech_logo.png"
                        alt="Cornor Tech Logo"
                        className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#7c3aed] rounded-lg" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#9333EA] rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.8s' }}>
                  <div className="w-6 h-6 bg-white rounded-full" />
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