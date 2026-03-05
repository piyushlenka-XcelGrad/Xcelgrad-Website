import React from 'react';
import { 
  Briefcase, 
  Users, 
  Target, 
  Search, 
  BarChart3, 
  Award,
  Info
} from 'lucide-react';

const InternshipProjects = () => {
  const opportunities = [
    {
      text: "Working with B2B teams",
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      text: "Live prospecting exercises",
      icon: <Target className="w-8 h-8 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      text: "Account research assignments",
      icon: <Search className="w-8 h-8 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      text: "Sales planning simulations",
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      text: "Performance-based evaluation",
      icon: <Award className="w-8 h-8 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Centered Context & Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Briefcase size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Hands-on Experience
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Internship & <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Live Projects
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Structured exposure opportunities designed to transition you from theoretical knowledge to practical execution.
          </p>
        </div>

        {/* Opportunities Grid (Centered Flex Layout for 5 Items) */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {opportunities.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center text-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] p-8 md:p-10 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${item.border}`}
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.bg}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                {item.text}
              </h3>
            </div>
          ))}
        </div>

        {/* Centered Note Box */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 p-6 md:p-8 bg-white border border-slate-200 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
              <Info className="w-6 h-6 text-slate-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-black tracking-widest text-slate-400 uppercase mb-2">
                Important Note
              </p>
              <p className="text-lg text-slate-700 font-medium">
                Both paid and unpaid internships may be available based on the role and engagement type.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternshipProjects;