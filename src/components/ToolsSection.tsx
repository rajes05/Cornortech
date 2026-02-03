// import { Tool } from '@/types';

// const ToolCard = ({ tool, index }: { tool: Tool; index: number }) => {
//   return (
//     <div 
//       className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-300 hover-lift animate-slide-up"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       {/* Image */}
//       <div className="aspect-video bg-gradient-to-br from-dark-teal/20 to-accent-cyan/20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-dark-teal/10 flex items-center justify-center">
//           <div className="text-center space-y-2">
//             <div className="w-12 h-12 mx-auto bg-white/80 rounded-lg" />
//             <p className="text-xs text-foreground-secondary">{tool.category}</p>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6 space-y-3">
//         <h4 className="text-lg font-semibold text-foreground group-hover:text-dark-teal transition-colors">
//           {tool.title}
//         </h4>
//         <p className="text-sm text-foreground-secondary leading-relaxed">
//           {tool.description}
//         </p>
//       </div>

//       {/* Hover overlay */}
//       <div className="absolute inset-0 bg-dark-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//     </div>
//   );
// };

// const ToolsSection = ({ 
//   title, 
//   subtitle, 
//   tools, 
//   showCta = true, 
//   animateDelay = 0 
// }: { 
//   title: string; 
//   subtitle?: string; 
//   tools: Tool[]; 
//   showCta?: boolean;
//   animateDelay?: number;
// }) => {
//   return (
//     <div className="space-y-12">
//       {/* Header */}
//       <div className={`text-center space-y-4 animate-fade-in`} style={{ animationDelay: `${animateDelay}s` }}>
//         <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h3>
//         {subtitle && (
//           <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
//             {subtitle}
//           </p>
//         )}
//         {showCta && (
//           <button className="px-6 py-3 border-2 border-dark-teal text-dark-teal rounded-lg font-medium hover:bg-dark-teal hover:text-white transition-all duration-200">
//             Try online
//           </button>
//         )}
//       </div>

//       {/* Tools Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {tools.map((tool: Tool, index: number) => (
//           <ToolCard key={tool.title} tool={tool} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ToolsSection;