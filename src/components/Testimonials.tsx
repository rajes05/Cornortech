import { Testimonial } from '@/types';

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-6">
        {/* Quote */}
        <blockquote className="text-foreground-secondary leading-relaxed">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold">
              {testimonial.author.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
            <p className="text-sm text-foreground-secondary">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Sarah Johnson",
      role: "Content Creator",
      avatar: "/avatars/sarah-johnson.jpg"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Olivia Turner",
      role: "Video Editor",
      avatar: "/avatars/olivia-turner.jpg"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "PixelPantry",
      role: "YouTube Creator",
      avatar: "/avatars/pixel-pantry.jpg"
    },
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jayden_M",
      role: "Vlogger",
      avatar: "/avatars/jayden-m.jpg"
    }
  ];

  const stats = [
    { value: "100+", label: "Clients" },
    { value: "2000+", label: "Students" },
    { value: "4.7", label: "Ratings" },
    { value: "20+", label: "Instructors" }
  ];

  return (
    <div className="space-y-20">
      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container-custom space-y-16">
          {/* Header */}
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
              Voice of Our Clients 
            </h2>
            <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="px-8 py-3 border-2 border-dark-teal text-dark-teal rounded-lg font-medium hover:bg-dark-teal hover:text-white transition-all duration-200">
              Try online
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial: Testimonial, index: number) => (
              <TestimonialCard key={testimonial.author} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#9333EA]">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center space-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-white">{stat.value}</h3>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;