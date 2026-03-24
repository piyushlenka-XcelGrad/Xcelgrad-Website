
import React, { useState, useEffect, useRef } from 'react';
import { 
  Target, 
  ClipboardCheck, 
  CheckCircle2, 
  ArrowRight, 
  Users,
  LineChart
} from 'lucide-react';
import { hiringData } from '../../Data/skilling';
import { ThreeBackground } from '../../Threejs/HiringBg';
import SparkleBtn from '../../components/common/SparkleBtn';
<ThreeBackground/>

const ProcessCard = ({ process }) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'target': return <Target className="w-7 h-7" />;
      case 'clipboard': return <ClipboardCheck className="w-7 h-7" />;
      case 'users': return <Users className="w-7 h-7" />;
      case 'search': return <LineChart className="w-7 h-7" />;
      default: return <CheckCircle2 className="w-7 h-7" />;
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full flex flex-col p-8 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-[2rem] transition-all duration-500 ease-out hover:shadow-[0_20px_40px_rgba(91,71,245,0.08)] hover:-translate-y-2 hover:border-[#5B47F5]/30 cursor-pointer overflow-hidden"
    >
      {/* Subtle Background Glow on Hover */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#5B47F5]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Icon Wrapper */}
      <div
        className={`
          mb-8 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10
          ${isHovered 
            ? `${process.color} text-white scale-110 shadow-lg shadow-[#5B47F5]/30 -rotate-3` 
            : `${process.lightColor} ${process.textColor}`
          }
        `}
      >
        {renderIcon(process.iconName)}
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#5B47F5] transition-colors duration-300">
          {process.title}
        </h3>
        <p className="text-slate-500 leading-relaxed text-[15px] mb-8">
          {process.description}
        </p>
      </div>

      {/* Action Link */}
   
    </div>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
export default function Hiring() {
  return (
    <div className="relative min-h-screen bg-[#fafafa] font-sans selection:bg-[#5B47F5]/20 selection:text-[#5B47F5] overflow-x-hidden">
      
      {/* Interactive 3D Background */}
      <ThreeBackground />

      <div className="relative z-10 pt-32 pb-24 lg:pt-40 lg:pb-32">
        
        {/* --- Hero Section --- */}
        <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-center mb-24">
        

          <SparkleBtn text="The Talent Advantage" />

          <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-slate-900 tracking-tight mb-8 leading-[1.1] drop-shadow-sm">
            Everything you need to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B47F5] to-blue-500">
              scale your workforce.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
            {hiringData.header.subtitle}
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5B47F5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4A38D4] transition-all duration-300 shadow-[0_8px_24px_rgba(91,71,245,0.3)] hover:shadow-[0_12px_32px_rgba(91,71,245,0.4)] hover:-translate-y-1 active:scale-95">
              Start Hiring Today <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg hover:border-[#5B47F5] hover:text-[#5B47F5] transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 active:scale-95 shadow-sm">
              View Case Studies
            </button>
          </div> */}
        </section>

        {/* --- Core Processes Grid --- */}
        <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Methodology</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A scientific, proven approach to identifying and onboarding exceptional talent.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
            {/* Connecting line behind cards (visible on desktop) */}
            <div className="hidden lg:block absolute top-[6.5rem] left-0 w-full h-px bg-slate-200/80 -z-10" />
            
            {hiringData.processes.map((process) => (
              <ProcessCard key={process.id} process={process} />
            ))}
          </div>
        </section>

        {/* --- Benefits Section (Consistent with Footer Dark Theme) --- */}
        <section className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="bg-[#1C2033] rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl border border-[#2A2E45] relative overflow-hidden group">
            
            {/* Animated Decorative Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#5B47F5]/20 rounded-full blur-[120px] pointer-events-none group-hover:bg-[#5B47F5]/30 transition-colors duration-1000" />
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-1000" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Heading & CTA */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#A78BFA] font-medium text-xs tracking-wider uppercase mb-6">
                  Employer Benefits
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  {hiringData.benefits.title}
                </h2>
                <p className="text-slate-300 mb-10 text-lg leading-relaxed font-light">
                  Discover how our modern approach transforms your recruitment pipeline, drastically reducing time-to-hire while elevating talent quality.
                </p>
                <button className="inline-flex items-center justify-center gap-2 bg-[#5B47F5] text-white px-8 py-4 rounded-full font-bold hover:bg-[#4A38D4] transition-all duration-300 shadow-[0_0_30px_rgba(91,71,245,0.4)] hover:shadow-[0_0_50px_rgba(91,71,245,0.6)] hover:-translate-y-1 active:scale-95 w-full sm:w-auto">
                  Partner with us <ArrowRight size={20} />
                </button>
              </div>

              {/* Right Side: Premium Glassmorphism List */}
              <div className="lg:col-span-7">
                <ul className="space-y-5">
                  {hiringData.benefits.items.map((item) => (
                    <li 
                      key={item.id} 
                      className="flex items-start gap-5 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-x-2 cursor-default group/item"
                    >
                      <div className="mt-1 flex-shrink-0 bg-[#5B47F5]/20 p-2.5 rounded-full border border-[#5B47F5]/30 group-hover/item:bg-[#5B47F5]/30 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#A78BFA]" />
                      </div>
                      <p className="text-slate-300 text-[17px] leading-relaxed font-light">
                        <span className="text-white font-bold block mb-1.5 text-xl tracking-tight">{item.highlight}</span>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        </section>
        
      </div>
    </div>
  );
}