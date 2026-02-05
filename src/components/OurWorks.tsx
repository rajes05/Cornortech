import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  gradient: string;
  client?: string;
  year: string;
  link?: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className={`aspect-[4/3] ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {/* Placeholder for project image */}
          <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white/90 rounded-2xl flex items-center justify-center shadow-medium transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <svg className="w-10 h-10 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#9333EA] rounded-full text-xs font-semibold shadow-medium">
            {project.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#9333EA]/95 via-[#9333EA]/60 to-transparent transition-opacity duration-300 flex items-end p-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-md text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <button className="w-full px-6 py-3 bg-white text-[#9333EA] rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-medium flex items-center justify-center space-x-2">
              <span>View Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-12 h-12 bg-white/10 rounded-lg transform -rotate-12 group-hover:rotate-12 transition-transform duration-300" />
        <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground group-hover:text-[#9333EA] transition-colors">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-xs text-[#9333EA]/60 font-medium">
                {project.year}
              </span>
            )}
          </div>
          <p className="text-sm text-foreground-secondary leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Client Info */}
        {project.client && (
          <div className="flex items-center space-x-2 pt-2 border-t border-[#9333EA]/10">
            <div className="w-8 h-8 bg-[#9333EA]/5 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-[#9333EA]/70 font-medium">Client</p>
              <p className="text-sm text-[#9333EA] font-semibold">{project.client}</p>
            </div>
          </div>
        )}

        {/* Project Stats */}
        <div className="flex items-center justify-between pt-3 border-t border-[#9333EA]/10">
          <div className="flex items-center space-x-4 text-xs text-[#9333EA]/70">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>2.3k views</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span>142 likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWorks = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A fully responsive e-commerce website with payment integration, inventory management, and real-time order tracking for a leading retail brand.',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/projects/ecommerce.jpg',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
      client: 'Retail Solutions Ltd',
      year: '2024'
    },
    {
      id: '2',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Machine learning dashboard providing predictive analytics and data visualization for business intelligence and decision-making.',
      category: 'AI & ML',
      tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
      image: '/projects/analytics.jpg',
      gradient: 'bg-gradient-to-br from-[#7c3aed]/20 to-[#9333EA]/20',
      client: 'DataTech Corp',
      year: '2024'
    },
    {
      id: '3',
      title: 'Social Media Campaign',
      description: 'Comprehensive digital marketing campaign that increased brand awareness by 300% and generated 50k+ qualified leads.',
      category: 'Digital Marketing',
      tags: ['SEO', 'Social Media', 'Content', 'Analytics'],
      image: '/projects/marketing.jpg',
      gradient: 'bg-gradient-to-br from-[#9333EA]/15 to-[#a855f7]/25',
      client: 'Global Brands Inc',
      year: '2024'
    },
    {
      id: '4',
      title: 'Mobile Banking App',
      description: 'Secure and intuitive mobile banking application with biometric authentication, instant transfers, and investment tracking.',
      category: 'Mobile Development',
      tags: ['React Native', 'Firebase', 'UI/UX'],
      image: '/projects/banking.jpg',
      gradient: 'bg-gradient-to-br from-[#a855f7]/20 to-[#9333EA]/20',
      client: 'FinanceFirst Bank',
      year: '2023'
    },
    {
      id: '5',
      title: 'Brand Identity Design',
      description: 'Complete brand identity including logo design, color palette, typography, and brand guidelines for a tech startup.',
      category: 'Graphic Design',
      tags: ['Branding', 'Logo Design', 'UI/UX', 'Print'],
      image: '/projects/branding.jpg',
      gradient: 'bg-gradient-to-br from-[#9333EA]/25 to-[#7e22ce]/15',
      client: 'StartUp Innovate',
      year: '2024'
    },
    {
      id: '6',
      title: 'Cloud Migration Project',
      description: 'Successfully migrated enterprise infrastructure to AWS cloud, reducing costs by 40% and improving performance by 60%.',
      category: 'Cloud Solutions',
      tags: ['AWS', 'DevOps', 'Docker', 'Kubernetes'],
      image: '/projects/cloud.jpg',
      gradient: 'bg-gradient-to-br from-[#7e22ce]/20 to-[#9333EA]/20',
      client: 'Enterprise Systems',
      year: '2023'
    },
    {
      id: '7',
      title: 'Learning Management System',
      description: 'Custom LMS platform with video streaming, interactive quizzes, progress tracking, and certificate generation.',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: '/projects/lms.jpg',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#a855f7]/20',
      client: 'EduTech Academy',
      year: '2024'
    },
    {
      id: '8',
      title: 'Restaurant Management System',
      description: 'Point-of-sale system with inventory management, order tracking, and kitchen display system for restaurant chain.',
      category: 'Software Development',
      tags: ['React', 'Express', 'MySQL', 'Print'],
      image: '/projects/restaurant.jpg',
      gradient: 'bg-gradient-to-br from-[#7c3aed]/15 to-[#9333EA]/25',
      client: 'Culinary Delights',
      year: '2023'
    },
    {
      id: '9',
      title: 'Healthcare Portal',
      description: 'Patient management portal with appointment scheduling, medical records, telemedicine integration, and prescription management.',
      category: 'Web Development',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      image: '/projects/healthcare.jpg',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20',
      client: 'HealthCare Plus',
      year: '2024'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Development', 'AI & ML', 'Digital Marketing', 'Graphic Design', 'Cloud Solutions', 'Software Development'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-sm font-semibold">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            <span className="text-[#9333EA]">Our Works</span>
            <br />
            Projects That Make an Impact
          </h2>
          <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions and cutting-edge technology.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: '🎯', number: '150+', label: 'Projects Completed' },
            { icon: '😊', number: '120+', label: 'Happy Clients' },
            { icon: '🌍', number: '15+', label: 'Countries Served' },
            { icon: '⭐', number: '98%', label: 'Client Satisfaction' }
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

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-[#9333EA] text-white shadow-medium'
                  : 'bg-white text-[#9333EA] hover:bg-[#9333EA]/10 border border-[#9333EA]/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 space-y-6 animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              Have a Project in Mind?
            </h3>
            <p className="text-foreground-secondary">
              Let's bring your ideas to life. Our team of experts is ready to help you build something amazing.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
              Start a Project
            </button>
            <button className="px-8 py-4 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333EA] hover:text-white transform hover:scale-105 transition-all duration-200">
              View All Projects
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-[#9333EA]/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>On-Time Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Post-Launch Support</span>
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

export default OurWorks;