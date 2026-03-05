import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Lightbulb, 
  Briefcase, 
  Radio, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

const B2BSalesCommunity = () => {
  const communityFeatures = [
    {
      text: "Discuss execution challenges",
      icon: <MessageSquare className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Exchange structured thinking",
      icon: <Lightbulb className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Share field experiences",
      icon: <Briefcase className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    },
    {
      text: "Participate in live discussions",
      icon: <Radio className="w-6 h-6 text-slate-500" />,
      bg: "bg-slate-200"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-slate-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Community Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden group">
          
          {/* Background Texture for "Coming Soon" vibe */}
          <div 
            className="absolute inset-0 opacity-[0.4]" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)`, 
              backgroundSize: '24px 24px' 
            }} 
          />
          
          {/* Large Watermark Icon */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-105">
            <Users className="w-96 h-96 text-slate-900" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Context & CTA */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-200/50 border border-slate-300 mb-8 backdrop-blur-sm shadow-sm">
                <Clock size={16} className="text-slate-600" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-700">
                  Coming Soon
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-400 mb-6 tracking-tight leading-[1.15]">
                B2B Sales <br className="hidden lg:block" /> Community
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                A focused network for sales professionals to connect, learn, and elevate their execution together.
              </p>

              {/* Greyed Out Button */}
              <button 
                disabled 
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-200/50 text-slate-400 border border-slate-300 rounded-2xl font-bold cursor-not-allowed transition-all shadow-sm"
              >
                Notify Me When Live
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Right Column: Features Grid */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {communityFeatures.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-5 md:p-6 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-[24px] shadow-sm grayscale opacity-75 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:-translate-y-1"
                  >
                    <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center mr-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.bg}`}>
                      {item.icon}
                    </div>
                    <span className="text-md font-bold text-slate-600">
                      {item.text}
                    </span>
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

export default B2BSalesCommunity;