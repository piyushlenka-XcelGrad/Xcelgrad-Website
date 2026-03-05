import React from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Target, 
  UserCircle 
} from 'lucide-react';

const ForProfessionals = () => {
  const features = [
    {
      title: "Curated B2B sales opportunities",
      icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-200"
    },
    {
      title: "Structured learning aligned to execution",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-200"
    },
    {
      title: "Role-based progression clarity",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-200"
    },
    {
      title: "Long-term performance orientation",
      icon: <Target className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "hover:border-purple-200"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Inner Card */}
        <div className="bg-slate-50 rounded-[40px] border border-slate-200 p-8 md:p-12 lg:p-16 overflow-hidden relative">
          
          {/* Inner Decorative Blurs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-100/50 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
            
            {/* Left Content Area */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                <UserCircle size={14} className="text-indigo-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Sales Professionals
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
                For Professionals Serious About <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  B2B Sales
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed max-w-lg">
                Join a structured ecosystem designed to elevate your career, map your skills to the right roles, and drive consistent, long-term success.
              </p>
              
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 group">
                Explore Opportunities
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content Area - Features Stack */}
            <div className="space-y-4 md:space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center p-5 sm:p-6 bg-white border border-slate-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group ${feature.borderColor}`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.bgColor}`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                    {feature.title}
                  </h4>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ForProfessionals;