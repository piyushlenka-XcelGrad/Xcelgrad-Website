import React from 'react';
import { 
  ShieldCheck
} from 'lucide-react';
import { salesEngagements } from '../../Data/Home_Page_Data/Engagement';

const SelectedEngagements = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-indigo-50/80 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <ShieldCheck size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Proven Track Record
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Selected B2B Sales <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Engagements
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Real-world execution driving predictable performance across industries.
          </p>
        </div>

        {/* Dynamic Grid of Engagement Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {salesEngagements.map((engagement) => (
            <div 
              key={engagement.id}
              className={`group flex flex-col bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${engagement.borderHover}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-50 to-slate-100 group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-500" />

              {/* Icon & Category */}
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${engagement.bgClass}`}>
                  {engagement.icon}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  {engagement.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {engagement.title}
              </h3>
              
              <p className="text-slate-500 font-medium leading-relaxed flex-grow mb-8">
                {engagement.description}
              </p>

              {/* Bottom "Read More" visual indicator */}
              {/* <div className="mt-auto pt-6 border-t border-slate-100 flex items-center text-sm font-bold text-slate-400 group-hover:text-indigo-600 transition-colors cursor-pointer">
                <span>View Case Details</span>
                <ArrowUpRight size={16} className="ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedEngagements;