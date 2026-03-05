import React from 'react';
import { BookOpen } from 'lucide-react';

const LearningHeader = () => {
  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center bg-white relative overflow-hidden px-6 border-b border-slate-100">
      
      {/* Background Decorative Blurs & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/80 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/80 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #f1f5f9 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <BookOpen size={16} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Learning Center
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Structured B2B <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Sales Learning</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          Practical frameworks and execution-focused learning aligned to real B2B environments.
        </p>

      </div>
    </div>
  );
};

export default LearningHeader;