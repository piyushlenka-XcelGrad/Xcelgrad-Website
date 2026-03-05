import React from 'react';
import { 
  BookOpen, 
  UserCheck, 
  Calendar, 
  Target, 
  Layers, 
  TrendingUp,
  FileText,
  Video
} from 'lucide-react';

const LearningPage = () => {
  const topics = [
    {
      title: "Role clarity in B2B sales",
      icon: <UserCheck className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50",
      border: "hover:border-indigo-200"
    },
    {
      title: "Sales planning discipline",
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "Prospecting intelligence",
      icon: <Target className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50",
      border: "hover:border-emerald-200"
    },
    {
      title: "Execution frameworks",
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    {
      title: "Performance review systems",
      icon: <TrendingUp className="w-6 h-6 text-sky-600" />,
      bg: "bg-sky-50",
      border: "hover:border-sky-200"
    }
  ];

  return (
    <div className="w-full flex flex-col min-h-screen">
      
      {/* ==========================================
          HEADER SECTION
          ========================================== */}
      <div className="pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center bg-white relative overflow-hidden px-6 border-b border-slate-100">
        
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

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
            <BookOpen size={16} className="text-indigo-500" />
            <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
              Learning Center
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Structured B2B <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Sales Learning</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Practical frameworks and execution-focused learning aligned to real B2B environments.
          </p>

        </div>
      </div>


      {/* ==========================================
          SECTION 1: FREE RESOURCES
          ========================================== */}
      <section className="relative py-24 bg-slate-50 overflow-hidden flex-grow">
        
        {/* Background Decorative Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-100/40 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
              <FileText size={14} className="text-indigo-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
                Knowledge Base
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Resources</span>
            </h2>
            
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Access articles, videos, and structured insights focused exclusively on B2B sales.
            </p>

            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <FileText size={16} className="text-indigo-400" /> Articles
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <Video size={16} className="text-blue-400" /> Videos
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                <BookOpen size={16} className="text-emerald-400" /> Insights
              </div>
            </div>
          </div>

          {/* Topics Grid - Centered Wrap Layout */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className={`flex items-center p-5 sm:p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${topic.border}`}
              >
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${topic.bg}`}>
                  {topic.icon}
                </div>
                <h3 className="text-md sm:text-lg font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                  {topic.title}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default LearningPage;