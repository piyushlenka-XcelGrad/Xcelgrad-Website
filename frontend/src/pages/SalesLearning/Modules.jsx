import React from 'react';
import { 
  GraduationCap, 
} from 'lucide-react';
import { learningPaths } from '../../Data/Sales_Leaning/Modules';

const StructuredLearningModules = () => {


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
            <GraduationCap size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Curriculum Paths
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Structured Learning <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Modules
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Role-aligned learning paths designed to accelerate capability building from the ground up to leadership.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPaths.map((path, index) => (
            <div 
              key={index}
              className={`group flex flex-col items-center text-center bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-sm transition-all duration-500 hover:-translate-y-2 cursor-pointer ${path.borderHover} ${path.shadowHover}`}
            >
              <div className={`w-20 h-20 shrink-0 rounded-[1.25rem] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${path.bg}`}>
                {path.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">
                {path.role}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StructuredLearningModules;