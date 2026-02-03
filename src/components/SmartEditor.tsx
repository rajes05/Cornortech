// import { features } from '@/data';
// import { Feature } from '@/types';

// const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
//   return (
//     <div 
//       className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover-lift cursor-pointer animate-slide-up"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       <div className="space-y-4">
//         {/* Icon */}
//         <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//           <div className="w-8 h-8 bg-white rounded-lg opacity-80" />
//         </div>

//         {/* Content */}
//         <div className="space-y-3">
//           <h3 className="text-lg font-semibold text-foreground group-hover:text-dark-teal transition-colors">
//             {feature.title}
//           </h3>
//           <p className="text-sm text-foreground-secondary leading-relaxed">
//             {feature.description}
//           </p>
//         </div>

//         {/* Hover indicator */}
//         <div className="flex items-center text-dark-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <span>Learn more</span>
//           <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SmartEditor = () => {
//   return (
//     <section className="py-20 lg:py-32 bg-gray-50">
//       <div className="container-custom">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">
//             Smart Editor & Generator
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature: Feature, index: number) => (
//             <FeatureCard key={feature.title} feature={feature} index={index} />
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center space-x-8">
//             {['AI video maker', 'AI dialogue scene', 'AI video generator', 'AI image generator'].map((item, index) => (
//               <div key={item} className="animate-slide-up" style={{ animationDelay: `${(index * 0.1) + 0.6}s` }}>
//                 <a href="#" className="text-sm text-foreground-secondary hover:text-dark-teal transition-colors">
//                   {item}
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SmartEditor;