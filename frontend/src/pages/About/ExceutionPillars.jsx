import React from 'react';
import { Target, Users, Zap, TrendingUp, Network } from 'lucide-react';

const ExecutionPillars = () => {
  const pillars = [
    {
      id: "01",
      title: "Sales Engine Design",
      description: "Defining the right sales motion, role architecture, skill expectations, and execution model aligned to business context.",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200",
      numColor: "text-indigo-100"
    },
    {
      id: "02",
      title: "Skill-Led Hiring & Talent Activation",
      description: "Building the right sales team (freshers and laterals) using clear, role-linked criteria and activating them effectively.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200",
      numColor: "text-blue-100"
    },
    {
      id: "03",
      title: "Early Productivity Enablement",
      description: "Structured induction, field rhythm discipline, and guided execution to accelerate performance.",
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200",
      numColor: "text-emerald-100"
    },
    {
      id: "04",
      title: "Performance Stabilisation & Enhancement",
      description: "Sustaining and improving performance through role-specific training, planning systems, incentive alignment, and review discipline.",
      icon: <TrendingUp className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200",
      numColor: "text-purple-100"
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Network size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Execution Framework
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Pillars</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            XcelGrad designs, builds, activates, and stabilises B2B sales engines to deliver predictable performance.
          </p>
        </div>

        {/* 2x2 Grid of Execution Pillars */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar) => (
            <div 
              key={pillar.id} 
              className={`relative bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden group ${pillar.borderHover}`}
            >
              {/* Background Number Accent */}
              <div className={`absolute -right-4 -bottom-6 text-9xl font-black opacity-30 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none select-none ${pillar.numColor}`}>
                {pillar.id}
              </div>
              
              {/* Card Content */}
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${pillar.bgClass}`}>
                  {pillar.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {pillar.title}
                </h3>
                
                <p className="text-slate-600 font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Footer Statement */}
        <div className="text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-slate-500 bg-white inline-block px-8 py-4 rounded-full border border-slate-200 shadow-sm">
            These pillars define how we execute and create measurable business impact
          </p>
        </div>

      </div>
    </section>
  );
};

export default ExecutionPillars;