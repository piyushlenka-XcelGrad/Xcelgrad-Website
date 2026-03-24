import React from 'react';
import { 
  GraduationCap, 
} from 'lucide-react';

const FreshersHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white overflow-hidden pt-20 pb-24">
      {/* Background Decorative Blurs & Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/60 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #f1f5f9 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        
      

        {/* Top Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <GraduationCap size={16} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Students & Freshers
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-[5rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Early Career in <br className="hidden sm:block" />
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              B2B Sales
            </span>
            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-indigo-200/50" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="max-w-2xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          For students and freshers exploring structured entry into professional B2B sales roles.
        </p>

      </div>

      {/* Global Animation Styles for this component */}
      <style >{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FreshersHero;