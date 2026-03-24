import React from 'react';
import { Diamond } from 'lucide-react'; // Added missing icon import
import { values } from '../../Data/About_Section/Core_Values';


const CoreValues = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <Diamond size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Our Principles
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Values</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            The foundational beliefs driving our execution, shaping our culture, and defining our impact.
          </p>
        </div>

        {/* Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <div 
              key={value.id} 
              className={`group relative bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(91,71,245,0.08)] transition-all duration-500 hover:-translate-y-1 overflow-hidden ${value.borderHover}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-slate-50 to-slate-100 group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-500" />
              
              <div className="flex flex-col h-full gap-6">
                
                {/* Icon Container */}
                <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${value.bgClass}`}>
                  {value.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-black tracking-widest text-slate-300 group-hover:text-indigo-300 transition-colors">
                      {value.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {value.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {value.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;