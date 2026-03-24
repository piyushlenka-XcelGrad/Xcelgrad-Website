import React from 'react';
import { 
  Clock, 
  Milestone,
  Lock,
  Map
} from 'lucide-react';
import { roles } from '../../Data/CareerPath/Section1Data';

const CareerPathways = () => {


  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-slate-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Community Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden group">
          
          {/* Background Texture for "Coming Soon" vibe */}
          <div 
            className="absolute inset-0 opacity-[0.4]" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)`, 
              backgroundSize: '24px 24px' 
            }} 
          />
          
          {/* Large Watermark Icon */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-105">
            <Map className="w-96 h-96 text-slate-900" />
          </div>

          <div className="relative z-10">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-200/50 border border-slate-300 mb-8 backdrop-blur-sm shadow-sm">
                <Clock size={16} className="text-slate-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                  Under Development
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-400 mb-6 tracking-tight leading-[1.15]">
                B2B Sales Career Pathways
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed">
                Explore progression in B2B sales.
              </p>
            </div>

            {/* Locked Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
              {roles.map((role, index) => (
                <div 
                  key={index}
                  className="flex items-center p-5 md:p-6 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-[24px] shadow-sm grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 group/card"
                >
                  <div className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center mr-4 bg-slate-200 text-slate-500 transition-transform duration-500 group-hover/card:scale-110">
                    {role.icon}
                  </div>
                  <div className="flex-grow">
                    <span className="text-md font-bold text-slate-600 block">
                      {role.title}
                    </span>
                  </div>
                  <Lock size={16} className="text-slate-300 group-hover/card:text-indigo-400 transition-colors" />
                </div>
              ))}
            </div>

            {/* Footer Information Box */}
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Understand the evolving skill requirements at each stage and how structured capability building supports progression.
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 border border-slate-200 rounded-xl">
                <Milestone size={16} className="text-slate-400" />
                <span className="text-sm font-bold tracking-widest uppercase text-slate-500">
                  Skill mapping tools coming soon
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathways;