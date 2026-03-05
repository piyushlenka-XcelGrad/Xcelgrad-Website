import React, { useEffect, useRef, useState } from 'react';
import { 
  BookOpen, 
  MonitorPlay, 
  Briefcase, 
  Users, 
  ClipboardCheck, 
  Code2, 
  Database, 
  BrainCircuit, 
  Cpu, 
  TrendingUp, 
  BarChart3,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';

// ==========================================
// CUSTOM HOOK: SCROLL REVEAL ANIMATION
// ==========================================
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Only animate once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
};

// ==========================================
// MOCK DATA (Based on Screenshot)
// ==========================================
const timelineSteps = [
  { 
    id: 1, 
    title: "Refresher Courses", 
    duration: "4 weeks", 
    desc: "Build foundational knowledge.", 
    icon: BookOpen 
  },
  { 
    id: 2, 
    title: "Hands-On Training", 
    duration: "8-12 weeks", 
    desc: "Master industry tools and technologies.", 
    icon: MonitorPlay 
  },
  { 
    id: 3, 
    title: "Live Projects & Internships", 
    duration: "8 weeks", 
    desc: "Gain real-world experience.", 
    icon: Briefcase 
  },
  { 
    id: 4, 
    title: "Workshops with Leaders", 
    duration: "Ongoing", 
    desc: "Learn from working professionals.", 
    icon: Users 
  },
  { 
    id: 5, 
    title: "Continuous Evaluation", 
    duration: "Throughout", 
    desc: "Tests, assignments, and advanced tools verify skill mastery.", 
    icon: ClipboardCheck 
  }
];

const programTracks = [
  { name: "Full Stack Developer", subtitle: "(MERN, Python)", icon: Code2, color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Databricks Data Engineer", subtitle: "Data Pipelines & Architecture", icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { name: "Databricks GenAI Engineer", subtitle: "LLMs & Applied AI", icon: BrainCircuit, color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "AI-ML & Gen AI", subtitle: "with Databricks Certification", icon: Cpu, color: "text-pink-400", bg: "bg-pink-400/10" },
  { name: "Enterprise Sales", subtitle: "(IT SaaS, Food Brands)", icon: TrendingUp, color: "text-orange-400", bg: "bg-orange-400/10" },
  { name: "Sales & Operations", subtitle: "(Retail Banking, FMCG)", icon: BarChart3, color: "text-amber-400", bg: "bg-amber-400/10" }
];

// ==========================================
// TIMELINE COMPONENT
// ==========================================
const Timeline = () => {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <div ref={ref} className="relative w-full max-w-7xl mx-auto py-16 px-4">
      
      {/* Desktop Connecting Line */}
      <div className="hidden lg:block absolute top-[110px] left-[10%] w-[80%] h-[3px] bg-gradient-to-r from-blue-100 via-[#5B47F5] to-blue-100 -z-10 rounded-full opacity-50" />
      
      <div className="flex flex-col lg:flex-row justify-between relative gap-12 lg:gap-4">
        {/* Mobile Connecting Line */}
        <div className="block lg:hidden absolute top-8 left-[39px] w-[3px] h-[calc(100%-100px)] bg-gradient-to-b from-blue-100 via-[#5B47F5] to-blue-100 -z-10 rounded-full opacity-50" />

        {timelineSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.id}
              className={`flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center relative w-full lg:w-1/5 group
                transition-all duration-700 ease-out transform
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon Node */}
              <div className="relative mb-0 lg:mb-6 mr-6 lg:mr-0 z-10 flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl shadow-blue-900/5 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:border-[#5B47F5]/30 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5B47F5]/0 to-[#5B47F5]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-8 h-8 text-[#5B47F5] group-hover:text-blue-600 transition-colors" />
                </div>
                
                {/* Node Dot for the Line */}
                <div className="hidden lg:block absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#5B47F5] shadow-[0_0_15px_rgba(91,71,245,0.4)]" />
              </div>

              {/* Content */}
              <div>
                <div className="inline-block px-3 py-1 mb-3 rounded-full bg-slate-100 text-slate-600 text-xs font-bold tracking-wide uppercase group-hover:bg-[#5B47F5]/10 group-hover:text-[#5B47F5] transition-colors">
                  {step.duration}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed max-w-[250px] mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==========================================
// TRACKS COMPONENT (Dark Theme)
// ==========================================
const ProgramTracks = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section ref={ref} className="bg-[#1C2033] py-24 lg:py-32 relative overflow-hidden rounded-t-[3rem] border-t border-[#2A2E45] mt-16">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#5B47F5] rounded-full blur-[150px] opacity-[0.07] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] opacity-[0.05] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#A78BFA] font-medium text-xs tracking-wider uppercase mb-6">
            <Sparkles className="w-4 h-4" />
            Specialized Pathways
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our Program Tracks
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed">
            Targeted curriculums engineered to make you an undisputed expert in high-demand technical and operational fields.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programTracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <div 
                key={index}
                className={`
                  group relative p-8 rounded-[2rem] bg-white/[0.03] backdrop-blur-sm border border-white/10 
                  hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 cursor-pointer
                  transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Highlight Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${track.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${track.bg} border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${track.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                    {track.name}
                  </h3>
                  
                  {track.subtitle && (
                    <p className="text-[#A78BFA] font-medium text-sm mb-6">
                      {track.subtitle}
                    </p>
                  )}
                  
                  <div className="mt-auto flex items-center gap-2 text-slate-400 group-hover:text-white text-sm font-medium transition-colors">
                    View Curriculum <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

// ==========================================
// MAIN SKILLING PAGE COMPONENT
// ==========================================
export default function Skilling() {
  const [headerRef, headerVisible] = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#5B47F5]/20 selection:text-[#5B47F5]">
      
      {/* Top Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div 
          ref={headerRef}
          className={`max-w-5xl mx-auto text-center relative z-10 transition-all duration-1000 transform ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5B47F5]/10 border border-[#5B47F5]/20 text-[#5B47F5] font-bold text-sm mb-8">
            <GraduationCap className="w-5 h-5" />
            <span>1. SKILLING</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
            We transform students into <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B47F5] to-blue-500">
              industry-ready professionals.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Achieving <span className="text-[#5B47F5] font-bold">90%+ placement</span> into targeted roles through an immersive, rigorous, and proven methodology.
          </p>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <Timeline />

      {/* Dark Theme Program Tracks Section */}
      <ProgramTracks />

    </div>
  );
}