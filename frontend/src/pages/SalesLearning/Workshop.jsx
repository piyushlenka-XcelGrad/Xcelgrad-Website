import React from 'react';
import { 
  Presentation,
  ClipboardCheck,
  Search,
  Clock,
  UserCheck,
  TrendingUp
} from 'lucide-react';
import { workshops } from '../../Data/Sales_Leaning/Workshops';

const WorkshopsAndAssessments = () => {
  // Section 3 Data


  // Section 4 Data
  const assessments = [
    {
      title: "Role readiness",
      icon: <UserCheck className="w-7 h-7 text-slate-500" />,
      bg: "bg-slate-100"
    },
    {
      title: "Skill gaps",
      icon: <Search className="w-7 h-7 text-slate-500" />,
      bg: "bg-slate-100"
    },
    {
      title: "Performance alignment",
      icon: <TrendingUp className="w-7 h-7 text-slate-500" />,
      bg: "bg-slate-100"
    }
  ];

  return (
    <div className="w-full flex flex-col">

      {/* ==========================================
          SECTION 3: WORKSHOPS & COHORTS
          ========================================== */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Context & Heading */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
                <Presentation size={14} className="text-indigo-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                  Interactive Sessions
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
                Workshops & <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                  Cohorts
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                Focused programs and workshops built around practical applications and real-world execution.
              </p>
            </div>

            {/* Right Column: Workshop Topics */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {workshops.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center p-5 md:p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group ${item.borderHover}`}
                  >
                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ==========================================
          SECTION 4: SKILL ASSESSMENT (COMING SOON)
          ========================================== */}
      <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-[40px] p-8 md:p-16 relative overflow-hidden group">
            
            {/* Background Texture for "Coming Soon" vibe */}
            <div className="absolute inset-0 opacity-[0.5]" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
            
            {/* Large Watermark Icon */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
              <ClipboardCheck className="w-96 h-96 text-slate-900" />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
              
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-200/50 border border-slate-300 mb-8 backdrop-blur-sm shadow-sm">
                <Clock size={16} className="text-slate-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                  Coming Soon
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-400 mb-6 tracking-tight leading-[1.15]">
                Skill Assessment
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                Structured evaluation tools to help professionals map their capabilities and understand exactly where they stand.
              </p>
            </div>

            {/* Assessment Features Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {assessments.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-8 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-[32px] shadow-sm grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                >
                  <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-600">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default WorkshopsAndAssessments;