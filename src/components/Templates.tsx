import { Template } from '@/types';

const TemplateCard = ({ template, index }: { template: Template; index: number }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Template Image */}
      <div className="aspect-[3/4] bg-gradient-to-br from-dark-teal/20 to-accent-cyan/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-teal/10 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto bg-white/80 rounded-xl" />
            <p className="text-sm text-foreground-secondary">{template.category}</p>
          </div>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-teal/80 via-dark-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white space-y-2">
            <h4 className="font-semibold">{template.title}</h4>
            <p className="text-sm opacity-90">Click to use this template</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Templates = () => {
  // Sample template data
  const templates: Template[] = [
    { id: '1', title: 'Modern Business', image: '/templates/business.jpg', category: 'Professional' },
    { id: '2', title: 'Social Media Vlog', image: '/templates/vlog.jpg', category: 'Social' },
    { id: '3', title: 'Product Showcase', image: '/templates/product.jpg', category: 'Commercial' },
    { id: '4', title: 'Travel Diary', image: '/templates/travel.jpg', category: 'Lifestyle' },
    { id: '5', title: 'Music Video', image: '/templates/music.jpg', category: 'Entertainment' },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
            Templates for Everything
          </h2>
          <p className="text-lg lg:text-xl text-foreground-secondary max-w-3xl mx-auto">
            From AI-generated designs to timeless classics, find the perfect one-click start for any video on CapCut.
          </p>
          <button className="px-8 py-3 border-2 border-dark-teal text-dark-teal rounded-lg font-medium hover:bg-dark-teal hover:text-white transition-all duration-200">
            Try online
          </button>
        </div>

        {/* Templates Gallery */}
        <div className="relative">
          {/* Scroll indicator for mobile */}
          <div className="lg:hidden absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-medium">
            <svg className="w-5 h-5 text-foreground-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Templates Grid */}
          <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 xl:grid-cols-5 lg:overflow-visible">
            {templates.map((template: Template, index: number) => (
              <div key={template.id} className="flex-shrink-0 w-72 lg:w-full">
                <TemplateCard template={template} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center pt-8">
          <button className="px-6 py-3 bg-dark-teal text-white rounded-lg font-medium hover:bg-dark-teal/90 transition-colors">
            Explore All Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Templates;