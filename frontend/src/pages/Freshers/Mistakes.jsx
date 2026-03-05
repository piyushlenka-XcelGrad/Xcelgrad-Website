import React from 'react';
import { 
  AlertTriangle, 
  Compass, 
  Clock, 
  Layers, 
  MonitorPlay, 
  Wrench, 
  Rocket, 
  Target, 
  Map,
  CheckCircle2
} from 'lucide-react';

const EarlyCareerJourney = () => {
  const mistakes = [
    {
      text: "Entering sales without understanding role expectations",
      icon: <Compass className="w-6 h-6 text-indigo-600" />
    },
    {
      text: "Treating sales as temporary",
      icon: <Clock className="w-6 h-6 text-indigo-600" />
    },
    {
      text: "Lack of structured capability building",
      icon: <Layers className="w-6 h-6 text-indigo-600" />
    }
  ];

  const supports = [
    {
      title: "Career orientation webinars",
      icon: <MonitorPlay className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Role-readiness workshops",
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Internship programs",
      icon: <Rocket className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      title: "Live industry assignments",
      icon: <Target className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      title: "Entry-level job pathways",
      icon: <Map className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-5%] w-[40%] h-[40%] bg-rose-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ==========================================
            SECTION 3: COMMON EARLY MISTAKES
            ========================================== */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-100 mb-6 shadow-sm">
              <AlertTriangle size={14} className="text-rose-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-rose-600">
                The Pitfalls
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Common Early <span className="text-rose-500">Mistakes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((mistake, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-8 bg-white border border-slate-100 rounded-[32px] shadow-sm hover:shadow-md hover:border-rose-100 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {mistake.icon}
                </div>
                <p className="text-lg font-bold text-slate-700 leading-relaxed">
                  {mistake.text}
                </p>
              </div>
            ))}
          </div>
        </div>


        {/* ==========================================
            SECTION 4: HOW XCELGRAD SUPPORTS
            ========================================== */}
        <div className="bg-slate-50 rounded-[40px] border border-slate-200 p-8 md:p-12 lg:p-16 shadow-sm relative overflow-hidden">
          
          {/* Inner Card Blurs */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <CheckCircle2 size={14} className="text-indigo-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                The Solution
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              How XcelGrad Supports <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                Early Careers
              </span>
            </h2>
          </div>

          {/* Bento-style Grid for 5 items (3 on top, 2 centered below on desktop) */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {supports.map((support, index) => (
              <div 
                key={index}
                className={`flex items-center p-5 sm:p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${support.border}`}
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center mr-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${support.bg}`}>
                  {support.icon}
                </div>
                <h3 className="text-md sm:text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {support.title}
                </h3>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EarlyCareerJourney;