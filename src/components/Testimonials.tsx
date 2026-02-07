import { useState } from 'react';

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

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id='testimonials'
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative gradient background */}
      <div className={`absolute inset-0 ${testimonial.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative z-10 p-6 space-y-4">
        {/* Quote Icon */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 bg-[#9333EA]/10 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            <svg className="w-6 h-6 text-[#9333EA]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Rating Stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#9333EA]' : 'text-[#9333EA]/20'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="space-y-4">
          <p className="text-foreground-secondary leading-relaxed italic text-sm lg:text-base group-hover:text-foreground transition-colors duration-300">
            "{testimonial.text}"
          </p>

          {/* Course Badge (if applicable) */}
          {testimonial.course && (
            <div className="inline-block">
              <span className="px-3 py-1 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-xs font-semibold">
                {testimonial.course}
              </span>
            </div>
          )}
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4 pt-4 border-t border-[#9333EA]/10">
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#9333EA]/20 group-hover:ring-[#9333EA] transition-all duration-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to avatar with initials if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-[#9333EA] to-[#7c3aed] flex items-center justify-center text-white font-bold text-lg">
                        ${testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    `;
                  }
                }}
              />
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#9333EA] rounded-full border-2 border-white" />
          </div>

          <div className="flex-1">
            <h4 className="font-bold text-foreground group-hover:text-[#9333EA] transition-colors">
              {testimonial.name}
            </h4>
            <p className="text-sm text-[#9333EA]/70">
              {testimonial.role}
            </p>
            <p className="text-xs text-foreground-secondary">
              {testimonial.company}
            </p>
          </div>

          {/* Verified Badge */}
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-[#9333EA] rounded-full flex items-center justify-center" title="Verified Student">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      image: '/testimonials/sarah.jpg',
      rating: 5,
      text: 'The MERN Stack course completely transformed my career. The instructors are knowledgeable and the hands-on projects gave me real-world experience. I landed my dream job within 3 months of completing the course!',
      course: 'MERN Stack Development',
      gradient: 'bg-gradient-to-br from-[#9333EA]/5 to-[#7c3aed]/5'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      company: 'Creative Studios',
      image: '/testimonials/michael.jpg',
      rating: 5,
      text: 'Best design course I have ever taken! The UI/UX program at Cornor Tech is comprehensive and practical. I learned everything from user research to prototyping. Highly recommend to anyone looking to break into design.',
      course: 'UI/UX Design',
      gradient: 'bg-gradient-to-br from-[#a855f7]/5 to-[#9333EA]/5'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Specialist',
      company: 'Growth Marketing Co.',
      image: '/testimonials/emily.jpg',
      rating: 5,
      text: 'The digital marketing course exceeded my expectations. I learned SEO, social media strategies, and analytics. The real-world case studies were invaluable. My campaigns now generate 3x more leads!',
      course: 'Digital Marketing Pro',
      gradient: 'bg-gradient-to-br from-[#9333EA]/5 to-[#a855f7]/5'
    },
    {
      id: '4',
      name: 'David Kumar',
      role: 'Python Developer',
      company: 'DataTech Solutions',
      image: '/testimonials/david.jpg',
      rating: 5,
      text: 'Outstanding Python course! The curriculum is well-structured, starting from basics to advanced topics like machine learning. The support from instructors was amazing. Worth every penny!',
      course: 'Python Programming',
      gradient: 'bg-gradient-to-br from-[#7c3aed]/5 to-[#9333EA]/5'
    },
    {
      id: '5',
      name: 'Jessica Taylor',
      role: 'Graphic Designer',
      company: 'Design Hub',
      image: '/testimonials/jessica.jpg',
      rating: 5,
      text: 'The graphic design masterclass is phenomenal! I learned Adobe Creative Suite inside out and developed a strong portfolio. The feedback on my work was constructive and helped me grow tremendously.',
      course: 'Graphic Design Masterclass',
      gradient: 'bg-gradient-to-br from-[#9333EA]/5 to-[#7e22ce]/5'
    },
    {
      id: '6',
      name: 'Alex Martinez',
      role: 'Cybersecurity Analyst',
      company: 'SecureNet Systems',
      image: '/testimonials/alex.jpg',
      rating: 5,
      text: 'The cybersecurity course is comprehensive and up-to-date. I gained practical skills in ethical hacking and network security. The hands-on labs were incredibly valuable for understanding real-world threats.',
      course: 'Cybersecurity Specialist',
      gradient: 'bg-gradient-to-br from-[#7e22ce]/5 to-[#9333EA]/5'
    },
    {
      id: '7',
      name: 'Priya Sharma',
      role: 'AI Engineer',
      company: 'AI Innovations Ltd.',
      image: '/testimonials/priya.jpg',
      rating: 5,
      text: 'Incredible AI & ML course! The projects were challenging yet rewarding. I built real machine learning models and deployed them. The knowledge I gained has been instrumental in my current role.',
      course: 'AI & Machine Learning',
      gradient: 'bg-gradient-to-br from-[#a855f7]/5 to-[#9333EA]/5'
    },
    {
      id: '8',
      name: 'James Wilson',
      role: 'Business Owner',
      company: 'Wilson Enterprises',
      image: '/testimonials/james.jpg',
      rating: 5,
      text: 'Cornor Tech helped me build a professional website for my business. The web development service was top-notch - delivered on time, within budget, and exceeded expectations. Highly professional team!',
      gradient: 'bg-gradient-to-br from-[#9333EA]/5 to-[#a855f7]/5'
    },
    {
      id: '9',
      name: 'Lisa Anderson',
      role: 'Data Scientist',
      company: 'Analytics Pro',
      image: '/testimonials/lisa.jpg',
      rating: 5,
      text: 'The Data Science course was exactly what I needed. From Python to advanced analytics and visualization, everything was covered in depth. The instructors are industry experts who genuinely care about student success.',
      course: 'Data Science & Analytics',
      gradient: 'bg-gradient-to-br from-[#9333EA]/5 to-[#7c3aed]/5'
    }
  ];
  const [showVideo, setShowVideo] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const videoThumbnail = "https://img.youtube.com/vi/mXkmS2asah8/hqdefault.jpg";


  // Auto-play carousel
  useState(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 3));
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            <span className="text-[#9333EA]">What Our Students</span>
            <br />
            & Clients Say
          </h2>
          <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
            Join thousands of satisfied students and clients who have transformed their careers and businesses with Cornor Tech.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: '👨‍🎓', number: '5,000+', label: 'Students Enrolled' },
            { icon: '⭐', number: '4.9/5', label: 'Average Rating' },
            { icon: '🏆', number: '100+', label: 'Courses & Services' },
            { icon: '💼', number: '95%', label: 'Job Placement' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-shadow duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-2xl lg:text-3xl font-bold text-[#9333EA] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-foreground-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 space-y-6 animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h3>
            <p className="text-foreground-secondary">
              Join our community of successful students and professionals. Transform your career with expert-led courses and personalized support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <button
              onClick={() => {
                const el = document.getElementById("hero");
                if (el) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
              Enroll Now
            </button>

            <button className="px-8 py-4 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333EA] hover:text-white transform hover:scale-105 transition-all duration-200">
              View All Reviews
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-[#9333EA]/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real Success Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Authentic</span>
            </div>
          </div>
        </div>

        {/* Video Testimonials Teaser */}
        <div className="mt-12 p-8 lg:p-12 bg-gradient-to-br from-[#9333EA]/10 to-white rounded-3xl shadow-soft animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#9333EA]">
                Watch Video Testimonials
              </h3>
              <p className="text-foreground-secondary">
                Hear directly from our students and clients about their experiences and success stories with Cornor Tech.
              </p>
              <button className="px-6 py-3 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                <span>Watch Videos</span>
              </button>
            </div>

            <div className="relative">

              <div className="relative aspect-video rounded-xl overflow-hidden shadow-medium cursor-pointer">
                {/* Thumbnail */}
                <img
                  src="https://img.youtube.com/vi/mXkmS2asah8/hqdefault.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                  onClick={() => setShowVideo(true)}
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    onClick={() => setShowVideo(true)}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>

                {/* Modal */}
                {showVideo && (
                  <div className='fixed inset-0 z-999 bg-black/70 flex items-center justify-center p-4'>
                    <div className='relaive w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden'>
                      {/* Close */}
                      <button
                        onClick={() => setShowVideo(false)}
                        className='absolute top-3 right-3 z-10 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center'
                      >
                        X
                      </button>

                      {/* Video iframe  */}
                      <iframe
                        src="https://www.youtube.com/embed/mXkmS2asah8?start=1&autoplay=1"
                        className='w-full h-full'
                        allow='autoplay; fullscreen'
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

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

export default Testimonials;