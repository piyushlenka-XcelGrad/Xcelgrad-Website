import React from 'react';
import { Sparkles, Target, Layers, ShieldCheck } from 'lucide-react';

const AboutCoreStatement = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[50%] h-[50%] bg-indigo-50/80 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[50%] h-[50%] bg-blue-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Top Badge - Muted for an executive feel */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-10 shadow-sm">
          <Sparkles size={14} className="text-slate-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Our Purpose
          </span>
        </div>

        {/* Main Heading Typography */}
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.15] mb-8">
          Bringing Structure to <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">B2B Sales</span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto mb-16">
          XcelGrad exists to professionalise B2B sales — by introducing role clarity, skill discipline, and structured execution into a function that is often treated informally.
        </p>

        {/* Bottom Accent Metrics/Pillars */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-12 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Target size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-slate-900">100% Focus</span>
              <span className="block text-xs font-bold tracking-widest uppercase text-slate-400">B2B Exclusivity</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Layers size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-slate-900">Structure</span>
              <span className="block text-xs font-bold tracking-widest uppercase text-slate-400">Skill Clarity</span>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200"></div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-slate-900">Discipline</span>
              <span className="block text-xs font-bold tracking-widest uppercase text-slate-400">Performance</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCoreStatement;