import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  popular?: boolean;
}

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-[#9333EA] text-white rounded-full text-xs font-semibold shadow-medium">
            Popular
          </span>
        </div>
      )}

      {/* Service Header with Gradient */}
      <div className={`aspect-[16/10] ${service.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            {/* Icon */}
            <div className="w-24 h-24 mx-auto bg-white/90 rounded-2xl flex items-center justify-center shadow-medium transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-5xl">{service.icon}</span>
            </div>
          </div>
        </div>

        {/* Hover overlay with CTA */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#9333EA]/90 via-[#9333EA]/60 to-transparent transition-opacity duration-300 flex items-end p-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-full px-6 py-3 bg-white text-[#9333EA] rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-medium">
            Get Started
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 rounded-lg transform rotate-12 group-hover:rotate-45 transition-transform duration-300" />
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Service Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-[#9333EA] transition-colors">
            {service.title}
          </h3>
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-2 pt-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <svg className="w-5 h-5 text-[#9333EA] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-[#9333EA]/80">{feature}</span>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-[#9333EA]/10">
          <div className="flex items-center space-x-4 text-xs text-[#9333EA]/70">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Quality Work</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      title: 'Web Development',
      description: 'Build modern, responsive, and scalable web applications using cutting-edge technologies and best practices.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Integration & Development',
        'Performance Optimization'
      ],
      icon: '💻',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
      popular: true
    },
    {
      id: '2',
      title: 'Digital Marketing',
      description: 'Grow your business with data-driven digital marketing strategies that deliver measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Social Media Marketing',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting'
      ],
      icon: '📱',
      gradient: 'bg-gradient-to-br from-[#a855f7]/20 to-[#9333EA]/20',
      popular: true
    },
    {
      id: '3',
      title: 'Graphic Design',
      description: 'Create stunning visual designs that communicate your brand message and captivate your audience.',
      features: [
        'Brand Identity Design',
        'Logo & Visual Assets',
        'Marketing Materials',
        'Social Media Graphics',
        'Print & Digital Design'
      ],
      icon: '🎨',
      gradient: 'bg-gradient-to-br from-[#9333EA]/15 to-[#a855f7]/25'
    },
    {
      id: '4',
      title: 'Mobile App Development',
      description: 'Develop powerful mobile applications for iOS and Android that engage users and drive growth.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'UI/UX Design for Mobile',
        'App Store Optimization',
        'Maintenance & Support'
      ],
      icon: '📲',
      gradient: 'bg-gradient-to-br from-[#7c3aed]/20 to-[#9333EA]/20'
    },
    {
      id: '5',
      title: 'UI/UX Design',
      description: 'Design intuitive and beautiful user experiences that keep your customers engaged and satisfied.',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Interface Design',
        'Usability Testing',
        'Design System Creation'
      ],
      icon: '✨',
      gradient: 'bg-gradient-to-br from-[#9333EA]/25 to-[#7e22ce]/15'
    },
    {
      id: '6',
      title: 'Cloud Solutions',
      description: 'Leverage cloud technology to scale your infrastructure and optimize your business operations.',
      features: [
        'Cloud Migration Services',
        'AWS/Azure/GCP Setup',
        'DevOps & CI/CD',
        'Cloud Security',
        'Cost Optimization'
      ],
      icon: '☁️',
      gradient: 'bg-gradient-to-br from-[#7e22ce]/20 to-[#9333EA]/20'
    },
    {
      id: '7',
      title: 'E-commerce Solutions',
      description: 'Build powerful online stores that convert visitors into customers and drive revenue growth.',
      features: [
        'Custom E-commerce Platforms',
        'Payment Gateway Integration',
        'Inventory Management',
        'Shopping Cart Optimization',
        'Order Management Systems'
      ],
      icon: '🛒',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#a855f7]/20'
    },
    {
      id: '8',
      title: 'Branding & Strategy',
      description: 'Develop a compelling brand identity and strategic roadmap to stand out in your market.',
      features: [
        'Brand Strategy Development',
        'Market Research & Analysis',
        'Brand Guidelines',
        'Competitive Analysis',
        'Positioning Strategy'
      ],
      icon: '🎯',
      gradient: 'bg-gradient-to-br from-[#a855f7]/15 to-[#9333EA]/25'
    },
    {
      id: '9',
      title: 'Content Creation',
      description: 'Engage your audience with high-quality content that tells your story and builds trust.',
      features: [
        'Blog Writing & Articles',
        'Video Production',
        'Copywriting Services',
        'Social Media Content',
        'Content Strategy Planning'
      ],
      icon: '✍️',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20'
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#9333EA]/5 rounded-full blur-3xl" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-sm font-semibold">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            <span className="text-[#9333EA]">Comprehensive Solutions</span>
            <br />
            for Your Business Success
          </h2>
          <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
            From idea to execution, we provide end-to-end digital services that help your business thrive in the modern world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 space-y-6 animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Need a Custom Solution?
            </h3>
            <p className="text-foreground-secondary">
              Every business is unique. Let's discuss how we can create a tailored solution that meets your specific needs and goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333EA] hover:text-white transform hover:scale-105 transition-all duration-200">
              View Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-[#9333EA]/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>24/7 Support Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="bg-gradient-to-br from-[#9333EA]/5 to-white rounded-3xl p-8 lg:p-12 shadow-soft">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#9333EA] mb-3">
                Our Process
              </h3>
              <p className="text-foreground-secondary">
                A simple, transparent approach to delivering exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'Understand your needs and goals', icon: '🔍' },
                { step: '02', title: 'Planning', desc: 'Create a strategic roadmap', icon: '📋' },
                { step: '03', title: 'Execution', desc: 'Bring your vision to life', icon: '⚡' },
                { step: '04', title: 'Launch', desc: 'Deploy and optimize', icon: '🚀' }
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-3">
                  <div className="w-16 h-16 mx-auto bg-[#9333EA] text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-medium">
                    {item.step}
                  </div>
                  <div className="text-3xl">{item.icon}</div>
                  <h4 className="font-bold text-[#9333EA]">{item.title}</h4>
                  <p className="text-sm text-foreground-secondary">{item.desc}</p>
                </div>
              ))}
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

export default Services;