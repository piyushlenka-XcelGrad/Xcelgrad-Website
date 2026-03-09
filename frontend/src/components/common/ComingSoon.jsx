

import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden px-6">
      
      {/* Background Decorative Blurs & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/80 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/80 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #f1f5f9 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Work in Progress
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Soon</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We're currently building a  structured experience to elevate your B2B sales execution. Check back later for updates.
        </p>

        {/* Return Button */}
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-indigo-200 hover:bg-slate-50 text-slate-900 rounded-2xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 group"
          >
            <ArrowLeft size={18} className="text-slate-400 group-hover:text-indigo-600 group-hover:-translate-x-1 transition-all" />
            Return to Homepage
          </a>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;