import React from 'react';
import { 
  Briefcase,
} from 'lucide-react';
import { engagementAreas } from '../../Data/Business/Areas';

const EngagementAreas = () => {
  
 

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
    
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
      
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <Briefcase size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Engagement Areas
            </span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Engagements</span>
          </h2>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {engagementAreas.map((area, index) => (
            <div 
              key={index}
              className={`group flex items-center p-6 md:p-8 bg-white border border-slate-100 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-default ${area.borderHover}`}
            >
              
              
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mr-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${area.bgClass}`}>
                {area.icon}
              </div>
            
              <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                {area.title}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EngagementAreas;