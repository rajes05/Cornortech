"use client";

import { useState, useRef } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  course?: string;
  gradient: string;
}

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
        {/* End Top row: quote + stars */}

        {/* Quote text */}
        <div className="space-y-3">
          <p className="text-foreground-secondary leading-relaxed italic text-sm group-hover:text-shadow-foreground-secondary transition-colors duration-300">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          {testimonial.course && (
            <span className="inline-block px-3 py-1 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-xs font-semibold">
              {testimonial.course}
            </span>
          )}
        </div>
        {/* End Quote text */}

        {/* User info */}
        <div className="flex items-center space-x-3 pt-4 border-t border-[#9333EA]/10">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#9333EA]/20 group-hover:ring-[#9333EA] transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="w-full h-full bg-linear-to-br from-[#9333EA] to-[#7c3aed] flex items-center justify-center text-white font-bold text-base">${testimonial.name.split(" ").map((n) => n[0]).join("")}</div>`;
                  }
                }}
              />
            </div>
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
        {/* End User info */}


      </div>
    </div>
  );
};
// ===== End Testimonial Card =====

const CARDS_PER_ROW = 3;
const INITIAL_ROWS = 1; // show 1 row (3 cards) to start

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    { id: "1", name: "Sarah Johnson", role: "Full Stack Developer", company: "Tech Solutions Inc.", image: "/testimonials/sarah.jpg", rating: 5, text: "The MERN Stack course completely transformed my career. The instructors are knowledgeable and the hands-on projects gave me real-world experience. I landed my dream job within 3 months!", course: "MERN Stack Development", gradient: "bg-gradient-to-br from-[#9333EA]/5 to-[#7c3aed]/5" },
    { id: "2", name: "Michael Chen", role: "UI/UX Designer", company: "Creative Studios", image: "/testimonials/michael.jpg", rating: 5, text: "Best design course I have ever taken! The UI/UX program at Cornor Tech is comprehensive and practical. I learned everything from user research to prototyping. Highly recommend!", course: "UI/UX Design", gradient: "bg-gradient-to-br from-[#a855f7]/5 to-[#9333EA]/5" },
    { id: "3", name: "Emily Rodriguez", role: "Digital Marketing Specialist", company: "Growth Marketing Co.", image: "/testimonials/emily.jpg", rating: 5, text: "The digital marketing course exceeded my expectations. I learned SEO, social media strategies, and analytics. The real-world case studies were invaluable. My campaigns now generate 3x more leads!", course: "Digital Marketing Pro", gradient: "bg-gradient-to-br from-[#9333EA]/5 to-[#a855f7]/5" },
    { id: "4", name: "David Kumar", role: "Python Developer", company: "DataTech Solutions", image: "/testimonials/david.jpg", rating: 5, text: "Outstanding Python course! The curriculum is well-structured, starting from basics to advanced topics like machine learning. The support from instructors was amazing. Worth every penny!", course: "Python Programming", gradient: "bg-gradient-to-br from-[#7c3aed]/5 to-[#9333EA]/5" },
    { id: "5", name: "Jessica Taylor", role: "Graphic Designer", company: "Design Hub", image: "/testimonials/jessica.jpg", rating: 5, text: "The graphic design masterclass is phenomenal! I learned Adobe Creative Suite inside out and developed a strong portfolio. The feedback on my work helped me grow tremendously.", course: "Graphic Design Masterclass", gradient: "bg-gradient-to-br from-[#9333EA]/5 to-[#7e22ce]/5" },
    { id: "6", name: "Alex Martinez", role: "Cybersecurity Analyst", company: "SecureNet Systems", image: "/testimonials/alex.jpg", rating: 5, text: "The cybersecurity course is comprehensive and up-to-date. I gained practical skills in ethical hacking and network security. The hands-on labs were incredibly valuable.", course: "Cybersecurity Specialist", gradient: "bg-gradient-to-br from-[#7e22ce]/5 to-[#9333EA]/5" },
    { id: "7", name: "Priya Sharma", role: "AI Engineer", company: "AI Innovations Ltd.", image: "/testimonials/priya.jpg", rating: 5, text: "Incredible AI & ML course! The projects were challenging yet rewarding. I built real machine learning models and deployed them. The knowledge I gained has been instrumental in my current role.", course: "AI & Machine Learning", gradient: "bg-gradient-to-br from-[#a855f7]/5 to-[#9333EA]/5" },
    { id: "8", name: "James Wilson", role: "Business Owner", company: "Wilson Enterprises", image: "/testimonials/james.jpg", rating: 5, text: "Cornor Tech helped me build a professional website for my business. The web development service was top-notch — delivered on time, within budget, and exceeded expectations. Highly professional team!", gradient: "bg-gradient-to-br from-[#9333EA]/5 to-[#a855f7]/5" },
    { id: "9", name: "Lisa Anderson", role: "Data Scientist", company: "Analytics Pro", image: "/testimonials/lisa.jpg", rating: 5, text: "The Data Science course was exactly what I needed. From Python to advanced analytics and visualization, everything was covered in depth. The instructors genuinely care about student success.", course: "Data Science & Analytics", gradient: "bg-gradient-to-br from-[#9333EA]/5 to-[#7c3aed]/5" },
  ];

  // How many rows are currently visible
  const [visibleRows, setVisibleRows] = useState(INITIAL_ROWS);
  // Track which cards are "new" (just revealed) for animation
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
    // Clear "new" flag after animation finishes
    setTimeout(() => setNewRowStart(null), 600);
  };

  const collapseLastRow = () => {
    if (visibleRows <= INITIAL_ROWS) return;
    setNewRowStart(null);
    setVisibleRows((r) => r - 1);
    // Smooth scroll to button so user isn't stranded
    setTimeout(() => {
      expandBtnRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-linear-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">
      {/* keyframes injected once */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 xl:px-8 max-w-7xl relative z-10 space-y-12">

        {/* ── Header ── */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            <span className="text-[#9333EA]">What Our Clients</span>
            <br />& Partners Say
          </h2>
          <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
            Trusted by businesses across industries hear from the teams we have helped build, scale, and secure their IT infrastructure.
          </p>

        </div>
        {/* ── Header ── */}

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "🏢", number: "200+", label: "Clients Served" },
            { icon: "⭐", number: "4.9/5", label: "Client Satisfaction" },
            { icon: "🚀", number: "500+", label: "Projects Delivered" },
            { icon: "🛡️", number: "99.9%", label: "Uptime Guaranteed" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-[#9333EA]/10 hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-[#9333EA] mb-1">{stat.number}</div>
              <div className="text-sm text-foreground-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── Testimonial Grid ── */}
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

          {/* ── Show More / Collapse Row buttons ── */}
          <div className="flex flex-col items-center gap-3 pt-2">

            {/* Progress indicator */}
            <p className="text-sm text-foreground-secondary font-medium">
              Showing <span className="text-[#9333EA] font-semibold">{Math.min(visibleCount, testimonials.length)}</span> of <span className="text-[#9333EA] font-semibold">{testimonials.length}</span> reviews
            </p>

            {/* Row dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalRows }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${i < visibleRows
                    ? "w-6 h-2 bg-[#9333EA]"
                    : "w-2 h-2 bg-[#9333EA]/20"
                    }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 pt-1">
              {/* Show More */}
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

              {/* Collapse last row — only visible when more than initial rows shown */}
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

            {/* All shown message */}
            {allShown && (
              <p className="text-xs text-shadow-foreground-secondary italic">You&apos;ve seen all our reviews!</p>
            )}
          </div>
        </div>
        {/* ── End Testimonial Grid ── */}

        {/* ── Video Testimonial ── */}
        <div className="mt-12 p-8 lg:p-12 bg-linear-to-br from-[#9333EA]/10 to-white rounded-3xl shadow-sm border border-[#9333EA]/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#9333EA]">Watch Video Testimonials</h3>
              <p className="text-foreground-secondary">Hear directly from our students and clients about their experiences and success stories with Cornor Tech.</p>
              <button
                onClick={() => setShowVideo(true)}
                className="px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <span>Watch Videos</span>
              </button>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer" onClick={() => setShowVideo(true)}>
              <img src="https://img.youtube.com/vi/mXkmS2asah8/hqdefault.jpg" alt="Video Thumbnail" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-200">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ── End Video Testimonial ── */}

        {/* ===== Video Modal ===== */}
        {showVideo && (
          <div className="fixed inset-0 z-999 bg-black/70 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 z-10 text-white bg-black/50 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              <iframe
                src="https://www.youtube.com/embed/mXkmS2asah8?start=1&autoplay=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        )}
        {/* ===== End Video Modal ===== */}

      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C320,48 320,0 640,0 C960,0 960,48 1280,48 L1440,48 L1440,0 L1280,0 C960,0 960,48 640,48 C320,48 320,0 0,0 L0,48 Z" />
        </svg>
      </div>
      
    </section>
  );
};

export default Testimonials;