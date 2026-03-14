import React from 'react';
import { 
  ArrowRight, 
  Building2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { pillars } from '../../Data/Home_Page_Data/Business';

const ForBusinesses = () => {

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Light Enterprise Card */}
        <div className="bg-slate-50 rounded-[40px] border border-slate-200 p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden group">
          
          {/* Inner Decorative Blurs */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
            
            {/* Left Content Area */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                <Building2 size={14} className="text-indigo-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Enterprise Solutions
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                For Businesses Seeking <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Predictable Execution
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                We work with B2B organizations to align GTM strategy, role design, hiring, and skill development — strengthening execution and radically reducing variability in performance.
              </p>
              <Link to="/businesses">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 group/btn">
                Explore Business Solutions
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>

            {/* Right Content Area - Visual Grid */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`bg-white border border-slate-100 p-6 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group/card ${pillar.borderHover}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3 ${pillar.bgClass}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover/card:text-indigo-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ForBusinesses;