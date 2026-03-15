import React from 'react';
import { 
  Building2, 
  Target, 
  UserCheck, 
  TrendingUp,
  Crosshair
} from 'lucide-react';

const BusinessHero = () => {
  const philosophyPillars = [
    {
      title: "Roles are clearly defined",
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      title: "Hiring aligns with execution realities",
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      title: "Skill development supports measurable outcomes",
      icon: <TrendingUp className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    }
  ];

  return (
    <div className="w-full flex flex-col">
      
     
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-32 bg-white overflow-hidden">
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

        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-6">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Building2 size={16} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              For B2B Organizations
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Predictable</span> <br className="hidden sm:block" />
            B2B Sales Performance
          </h1>

        </div>
      </section>

      {/* ==========================================
          SECTION 1: PHILOSOPHY
          ========================================== */}
      <section className="relative py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
        
        {/* Decorative Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
              Sales performance improves when:
            </h2>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {philosophyPillars.map((pillar, index) => (
              <div 
                key={index}
                className={`group flex flex-col items-center text-center bg-white border border-slate-100 p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(91,71,245,0.08)] ${pillar.borderHover}`}
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${pillar.bgClass}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug group-hover:text-indigo-600 transition-colors">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Concluding Focus Statement */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-8 bg-slate-900 text-white rounded-[32px] shadow-2xl relative overflow-hidden group">
              
              {/* Subtle inner highlight */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 pointer-events-none" />
              
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur-md">
                <Crosshair className="w-8 h-8 text-blue-400" />
              </div>
              
              <p className="text-xl md:text-2xl font-bold text-center sm:text-left leading-snug tracking-wide">
                We focus exclusively on aligning these elements in B2B environments.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BusinessHero;