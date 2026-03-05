import React from 'react';
import { 
  ArrowRight, 
  GraduationCap, 
  MonitorPlay, 
  Rocket, 
  Target,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EarlyCareerHighlight = () => {
  const programs = [
    {
      title: "Webinars",
      description: "Learn directly from B2B sales veterans.",
      icon: <MonitorPlay className="w-6 h-6 text-blue-600" />,
      bgColor: "bg-blue-50",
      borderColor: "hover:border-blue-200"
    },
    {
      title: "Internships",
      description: "Gain hands-on experience in real environments.",
      icon: <Rocket className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50",
      borderColor: "hover:border-indigo-200"
    },
    {
      title: "Live Projects",
      description: "Solve actual business problems.",
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      bgColor: "bg-emerald-50",
      borderColor: "hover:border-emerald-200"
    },
    {
      title: "Role-Readiness",
      description: "Structured programs to make you day-one ready.",
      icon: <GraduationCap className="w-6 h-6 text-purple-600" />,
      bgColor: "bg-purple-50",
      borderColor: "hover:border-purple-200"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
  
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-200/30 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-blue-200/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Highlight Card */}
        <div className="bg-white rounded-[40px] border border-slate-200 p-8 md:p-12 lg:p-16 shadow-[0_20px_60px_rgba(91,71,245,0.05)] relative overflow-hidden">
          
          {/* Subtle Inner Gradient */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
            
            {/* Left Content Area (Span 5) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
                <Sparkles size={14} className="text-indigo-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
                  Students & Freshers
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Starting Your Career in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Sales?</span>
              </h2>
              
              <div className="space-y-4 mb-10">
                <p className="text-lg text-slate-700 font-bold leading-relaxed">
                  Sales is one of the most dynamic professional paths — but entering it without clarity often leads to frustration.
                </p>
                <p className="text-[1.05rem] text-slate-500 font-medium leading-relaxed">
                  We work with students and freshers to build structured entry into B2B sales roles. Stop guessing and start executing with confidence.
                </p>
              </div>
               <Link to="/saleslearning">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 active:scale-95 group">
                Explore Early Career
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
            </div>

            {/* Right Content Area - Programs Grid (Span 7) */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {programs.map((program, index) => (
                  <div 
                    key={index}
                    className={`bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group ${program.borderColor}`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${program.bgColor}`}>
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyCareerHighlight;