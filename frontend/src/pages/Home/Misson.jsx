import React from 'react';
import { Quote, Target, Briefcase, TrendingUp } from 'lucide-react';
import CommonDescription from '../../components/common/Description';

const Mission = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Sophisticated Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className='flex flex-col justify-center items-center mb-5'>
          <div className="inline-flex justify-center  items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
    </span>
    <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
      Mission
    </span>
    
  </div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
           Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Mission</span>
          </h1>
  </div>
        {/* Mission Content Card */}
        <div className="relative bg-white border border-slate-100 rounded-[40px] p-8 md:p-16 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
          {/* Decorative Quote Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Quote className="text-white w-6 h-6 fill-current" />
          </div>

          <div className="space-y-10 text-center">
            {/* Primary Mission Statement */}
            <p className="text-2xl md:text-2xl lg:text-3xl font-semibold text-slate-900 leading-[1.3] tracking-tight">
              At XcelGrad, our mission is to design, deliver and scale skilling programs that transform students and professionals into <span className="text-indigo-600">Day-1 performers</span> for startups and enterprises.
            </p>

            {/* Secondary Mission Detail */}
              <CommonDescription textColor="text-gray-500">
  We focus on building <span className="text-slate-900 font-bold italic">job-ready sales talent</span> by combining practical training, real-world exposure, and industry mentorship—enabling learners to drive pipelines, engage enterprise clients, and create measurable business impact across <span className="text-slate-900 font-bold uppercase tracking-tight">B2B IT, HoReCa and HR Tech</span> sectors.
</CommonDescription>
          </div>

        

          {/* Minimalist Sector Tags (For Visual Impact Only) */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {['Practical Training', 'Real-world Exposure', 'Industry Mentorship'].map((tag, i) => (
              <span key={i} className="px-4 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Graphic Detail */}
        <div className="mt-16 flex justify-center items-center space-x-4 opacity-20">
          <div className="h-px w-24 bg-slate-900" />
          <Target className="w-5 h-5 text-slate-900" />
          <div className="h-px w-24 bg-slate-900" />
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return <Mission />;
}