import React from 'react';
import { 
  Settings,
  Target,
  SlidersHorizontal,
  Users,
  Zap
} from 'lucide-react';
import PupleBtn from '../../components/common/PupleBtn';
import { Link } from 'react-router-dom';
const HowWeWork = () => {
  const steps = [
    {
      title: "Role clarity assessment",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Skill alignment review",
      icon: <SlidersHorizontal className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Hiring calibration",
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Execution support",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Settings size={14} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              How We Work
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`group flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${step.borderHover}`}
            >
              <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${step.bgClass}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
     <div className="flex justify-center items-center mt-10">
  <a href="mailto:elearning@xcelgrad.org" className="inline-block">
    <PupleBtn text="Schedule a Discussion"/>
  </a>
</div>
    
    </section>
  );
};

export default HowWeWork;