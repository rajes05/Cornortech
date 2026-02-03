const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-accent-cyan/5 to-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-cyan/20 rounded-full blur-3xl animate-bounce-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-dark-teal/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#9333EA]">Cornor Tech</span>
                  <br />
                  <span className="text-[#9333EA]">Where idea meet technology</span>
                </h1>
                <p className="text-lg lg:text-xl text-[#9333EA] max-w-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-dark-teal/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
                  Enroll Courses
                </button>
                <button className="px-8 py-4 bg-white text-foreground border-2 border-dark-teal rounded-xl font-semibold hover:bg-dark-teal hover:text-white transform hover:scale-105 transition-all duration-200">
                  Get Start
                </button>
              </div>

              {/* <div className="flex items-center space-x-2 text-sm text-foreground-secondary">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div> */}

            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {/* Main image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-dark-teal/10 to-accent-cyan/10 p-8">
                  <div className="aspect-video bg-gradient-to-br from-dark-teal/20 to-accent-cyan/20 rounded-xl flex items-center justify-center">
                    {/* Placeholder for hero image/editor interface */}
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-dark-teal/30 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-foreground-secondary">
                        <p className="text-sm"></p>
                        <p className="text-xs mt-1"></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent-cyan rounded-xl shadow-large flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.8s' }}>
                  <div className="w-6 h-6 bg-dark-teal rounded-full" />
                </div>
              </div>
            </div>
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