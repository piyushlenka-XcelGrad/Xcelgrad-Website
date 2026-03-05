import React from 'react';
import { 
  Lightbulb, 
  ArrowRight, 
  Target, 
  ShieldCheck, 
  Zap, 
  Layers 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SalesInsights = () => {
  // Data for the insights grid mapped to match your light theme style
  const insightPillars = [
    {
      title: "B2B Sales Skills",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Role Clarity",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Execution Discipline",
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    },
    {
      title: "Performance Systems",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bgClass: "bg-purple-50",
      borderHover: "hover:border-purple-200"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[30%] h-[30%] bg-indigo-50/80 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-50/80 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
            <Lightbulb size={14} className="text-yellow-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Knowledge Hub
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
            Sales Thinking <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              & Insights
            </span>
          </h2>
          
          <p className="text-lg text-slate-600 font-medium mb-10 max-w-2xl mx-auto">
            We document structured thinking around B2B sales skills, role clarity, execution discipline, and performance systems.
          </p>
          <Link to="/saleslearning">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 group mx-auto">
            Explore Sales Learning
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          </Link>
        </div>

        {/* Dynamic Grid of Insight Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insightPillars.map((pillar, index) => (
            <div 
              key={index}
              className={`group flex flex-col bg-white border border-slate-100 p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${pillar.borderHover}`}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-50 to-slate-100 group-hover:from-indigo-500 group-hover:to-blue-500 transition-all duration-500" />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${pillar.bgClass}`}>
                {pillar.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Footer Line */}
        <div className="mt-20 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-sm font-bold tracking-widest uppercase text-slate-400 gap-4 text-center sm:text-left">
          <p>Exclusively focused on B2B sales.</p>
          <p className="text-indigo-600">Built for long-term performance.</p>
        </div>

      </div>
    </section>
  );
};

export default SalesInsights;