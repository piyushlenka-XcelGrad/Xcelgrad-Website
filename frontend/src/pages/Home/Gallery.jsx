import React from 'react';
import { Camera, ArrowUpRight, Sparkles } from 'lucide-react';
import { galleryItems } from '../../Data/Home_Page_Data/Gallery';
const GallerySection = () => {


  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-blue-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <Camera size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Visual Highlights
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Execution in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Action</span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Glimpses from our structured learning sessions, live cohort discussions, and strategic B2B workshops.
          </p>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden rounded-[32px] bg-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/50 ${item.span}`}
            >
              {/* Image with zoom effect on hover */}
              <img 
                src={item.imgUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Hover Content Container */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                
                {/* Category Badge - Slides down smoothly on hover */}
                <div className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold tracking-widest uppercase text-white shadow-sm">
                    <Sparkles size={12} className="text-indigo-200" />
                    {item.category}
                  </span>
                </div>
                
                {/* Title & Icon - Slides up smoothly on hover */}
                <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl md:text-3xl font-bold text-white leading-tight pr-4 drop-shadow-md">
                    {item.title}
                  </h3>
                  
                  {/* Action Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <ArrowUpRight size={20} className="group-hover:rotate-12 transition-transform" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;