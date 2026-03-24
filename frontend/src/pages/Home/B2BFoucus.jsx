import React from 'react';
import { AlertTriangle, Crosshair } from 'lucide-react';

const B2BSalesProblem = () => {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Main Content Card */}
        <div className="bg-white border border-slate-200 rounded-[40px] p-8 md:p-12 lg:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden flex flex-col items-center text-center">
          
     
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600" />

          {/* Centered Heading */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
              <AlertTriangle size={16} className="text-blue-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                The B2B Sales Problem
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              B2B Sales Is Not <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Trial and Error
              </span>
            </h2>
          </div>

          {/* Centered Body Content */}
          <div className="space-y-6 md:space-y-2 max-w-3xl mx-auto">
            
            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              In B2B environments, sales outcomes depend on clearly defined roles, aligned hiring, and structured capability building.
            </p>

            {/* Highlighted Quote Box - Adjusted to fit a centered layout */}
            <div className="p-6 md:p-8 bg-slate-50 border-t-4 border-blue-500 rounded-2xl shadow-sm">
              <p className="text-lg md:text-xl text-slate-800 font-semibold italic leading-relaxed">
                When expectations and skills are mismatched, effort increases but results remain inconsistent.
              </p>
            </div>

            <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              Sales performance becomes predictable when execution is supported by clarity and discipline.
            </p>

        \
            <div className="pt-4 flex items-center justify-center gap-4">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                <Crosshair className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                That is where we focus.
              </span>
            </div>
            
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default B2BSalesProblem;