import { useState } from 'react';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  icon: string;
  gradient: string;
}

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
    id='courses'
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up bg-white"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Course Header with Gradient */}
      <div className={`aspect-[16/9] ${course.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4 p-6">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto bg-white/90 rounded-2xl flex items-center justify-center shadow-medium transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl">{course.icon}</span>
            </div>
          </div>
        </div>
        
        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#9333EA]">
            {course.level}
          </span>
        </div>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-[#9333EA]/90 via-[#9333EA]/60 to-transparent transition-opacity duration-300 flex items-end p-6 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="w-full px-6 py-3 bg-white text-[#9333EA] rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200">
            Enroll Now
          </button>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#9333EA] uppercase tracking-wider">
              {course.category}
            </span>
            <div className="flex items-center text-xs text-[#9333EA]/70">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {course.duration}
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground group-hover:text-[#9333EA] transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-foreground-secondary line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Course Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-[#9333EA]/10">
          <div className="flex items-center space-x-4 text-xs text-[#9333EA]/70">
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.8</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 mr-1 text-[#9333EA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span>2.5k+ students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses: Course[] = [
    {
      id: '1',
      title: 'Graphic Design Masterclass',
      description: 'Learn professional graphic design from basics to advanced techniques. Master Adobe Creative Suite and design principles.',
      category: 'Design',
      duration: '12 weeks',
      level: 'Beginner',
      icon: '🎨',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#7c3aed]/20'
    },
    {
      id: '2',
      title: 'AI & Machine Learning',
      description: 'Dive into artificial intelligence and machine learning. Build intelligent systems and predictive models.',
      category: 'Technology',
      duration: '16 weeks',
      level: 'Intermediate',
      icon: '🤖',
      gradient: 'bg-gradient-to-br from-[#9333EA]/15 to-[#a855f7]/25'
    },
    {
      id: '3',
      title: 'MERN Stack Development',
      description: 'Master full-stack web development with MongoDB, Express, React, and Node.js. Build modern web applications.',
      category: 'Development',
      duration: '20 weeks',
      level: 'Intermediate',
      icon: '💻',
      gradient: 'bg-gradient-to-br from-[#7c3aed]/20 to-[#9333EA]/20'
    },
    {
      id: '4',
      title: 'Digital Marketing Pro',
      description: 'Become a digital marketing expert. Learn SEO, social media marketing, content strategy, and analytics.',
      category: 'Marketing',
      duration: '10 weeks',
      level: 'Beginner',
      icon: '📱',
      gradient: 'bg-gradient-to-br from-[#a855f7]/20 to-[#9333EA]/20'
    },
    {
      id: '5',
      title: 'Python Programming',
      description: 'Learn Python from scratch to advanced. Data structures, algorithms, automation, and real-world projects.',
      category: 'Programming',
      duration: '14 weeks',
      level: 'Beginner',
      icon: '🐍',
      gradient: 'bg-gradient-to-br from-[#9333EA]/25 to-[#7e22ce]/15'
    },
    {
      id: '6',
      title: 'Cybersecurity Specialist',
      description: 'Master cybersecurity fundamentals, ethical hacking, network security, and threat detection techniques.',
      category: 'Security',
      duration: '18 weeks',
      level: 'Advanced',
      icon: '🔒',
      gradient: 'bg-gradient-to-br from-[#7e22ce]/20 to-[#9333EA]/20'
    },
    {
      id: '7',
      title: 'UI/UX Design',
      description: 'Create stunning user interfaces and exceptional user experiences. Learn Figma, prototyping, and design thinking.',
      category: 'Design',
      duration: '12 weeks',
      level: 'Beginner',
      icon: '✨',
      gradient: 'bg-gradient-to-br from-[#9333EA]/20 to-[#a855f7]/20'
    },
    {
      id: '8',
      title: 'Data Science & Analytics',
      description: 'Analyze data, build visualizations, and derive insights. Master Python, R, SQL, and data visualization tools.',
      category: 'Technology',
      duration: '16 weeks',
      level: 'Intermediate',
      icon: '📊',
      gradient: 'bg-gradient-to-br from-[#a855f7]/15 to-[#9333EA]/25'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Design', 'Development', 'Technology', 'Marketing', 'Programming', 'Security'];

  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white via-[#9333EA]/5 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#9333EA]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-[#9333EA]/15 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 bg-[#9333EA]/10 text-[#9333EA] rounded-full text-sm font-semibold">
              Our Courses
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            <span className="text-[#9333EA]">Transform Your Career</span>
            <br />
            with Expert-Led Courses
          </h2>
          <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-relevant courses designed to help you master in-demand skills and advance your career.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
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

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center pt-12 space-y-6 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Start Learning?
            </h3>
            <p className="text-foreground-secondary max-w-2xl mx-auto">
              Join thousands of students already learning with Cornor Tech. Get lifetime access to course materials and expert support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#9333EA] text-white rounded-xl font-semibold hover:bg-[#9333EA]/90 transform hover:scale-105 transition-all duration-200 shadow-medium">
              Browse All Courses
            </button>
            <button className="px-8 py-4 bg-white text-[#9333EA] border-2 border-[#9333EA] rounded-xl font-semibold hover:bg-[#9333EA] hover:text-white transform hover:scale-105 transition-all duration-200">
              Contact Us
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-[#9333EA]/80">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Lifetime Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Certificate of Completion</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-[#9333EA]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert Instructors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-gray-50" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path d="M0,48 C320,48 320,0 640,0 C960,0 960,48 1280,48 L1440,48 L1440,0 L1280,0 C960,0 960,48 640,48 C320,48 320,0 0,0 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Courses;