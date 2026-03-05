import React from 'react';
import { Target, BookOpen, UserCheck, ArrowRight, Settings } from 'lucide-react';

const HowXcelGradWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Role Clarity",
      description: "Define what each B2B sales role requires — from entry-level sales to revenue leadership — aligned with real GTM realities.",
      icon: <Target className="w-7 h-7 text-indigo-600" />,
      badgeColor: "bg-indigo-100 text-indigo-700",
      iconBg: "bg-indigo-50",
      borderColor: "hover:border-indigo-200"
    },
    {
      id: "02",
      title: "Skill Development",
      description: "Structured learning focused on practical B2B execution, not generic communication training.",
      icon: <BookOpen className="w-7 h-7 text-blue-600" />,
      badgeColor: "bg-blue-100 text-blue-700",
      iconBg: "bg-blue-50",
      borderColor: "hover:border-blue-200"
    },
    {
      id: "03",
      title: "Performance-Linked Hiring",
      description: "Connecting businesses with role-aligned sales talent to reduce ramp-up time and improve consistency in results.",
      icon: <UserCheck className="w-7 h-7 text-emerald-600" />,
      badgeColor: "bg-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-50",
      borderColor: "hover:border-emerald-200"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100/50 rounded-[100%] blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Settings size={14} className="text-indigo-500 animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              How Xcelgrad Works
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Our Approach to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              B2B Sales Performance
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            A structured framework designed to eliminate guesswork, build real capability, and seamlessly connect talent with execution.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-100 via-blue-200 to-emerald-100 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className={`group relative bg-white rounded-[40px] p-8 md:p-10 border border-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(91,71,245,0.08)] ${step.borderColor}`}
              >
                {/* Step Number Badge */}
                <div className={`absolute -top-4 left-10 px-4 py-1.5 rounded-full text-sm font-black tracking-widest shadow-sm border border-white ${step.badgeColor}`}>
                  STEP {step.id}
                </div>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${step.iconBg}`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.description}
                </p>

                {/* Decorative Arrow indicating flow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-10 top-20 w-8 h-8 items-center justify-center text-slate-300">
                    <ArrowRight size={24} className="group-hover:text-indigo-400 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HowXcelGradWorks;