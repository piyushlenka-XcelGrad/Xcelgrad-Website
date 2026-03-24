import React from 'react';
import { 
  ArrowRight, 
  Milestone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { nextSteps } from '../../Data/FreshersData/NextStep';

const FreshersNextSteps = () => {
  

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-indigo-50/80 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <Milestone size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Take Action
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Ready to Begin? <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Next Steps
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Choose your path below to start building a structured, predictable career in B2B sales.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {nextSteps.map((step, index) => (
            <button 
              key={index}
              className={`group flex flex-col items-center text-center p-8 md:p-10 bg-white border border-slate-200 rounded-[32px] transition-all duration-500 hover:-translate-y-2 cursor-pointer ${step.borderHover} ${step.shadowHover}`}
            >
          
              <div className={`w-20 h-20 shrink-0 rounded-[1.25rem] flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${step.bgClass}`}>
                {step.icon}
              </div>
              
        
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 px-2 flex-grow">
                {step.title}
              </h3>

          <Link to={step.link}>
              <div className={`mt-auto inline-flex items-center gap-2 font-bold text-sm tracking-wide uppercase transition-colors ${step.buttonColor}`}>
                Get Started
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              </Link>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FreshersNextSteps;