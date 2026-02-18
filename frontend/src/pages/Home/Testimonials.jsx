import React from 'react';
import { Quote, Star, Building2, UserCircle2 } from 'lucide-react';
import { testimonials } from '../../Data/Testimonials';
import Content from '../../components/common/Content';
import HeadButton from '../../components/common/HeadButton';
const Testimonials = () => {

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden font-sans">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
         <HeadButton text="Testimonials"/>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Trusted by <span className="text-indigo-600">Industry Leaders</span>
          </h2>
          
          <Content text="Discover how XcelGrad is bridging the gap between talent and enterprise needs through professional, result-oriented hiring support." />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white border border-slate-200 rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2 hover:border-indigo-100"
            >
              {/* Card Top: Stars and Type */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                  {item.type}
                </span>
              </div>

              {/* Quote Content */}
              <div className="relative mb-8 flex-grow">
                <Quote className="absolute -top-4 -left-2 w-8 h-8 text-slate-100 -z-0" />
                <p className="relative z-10 text-slate-600 leading-relaxed text-[0.95rem]">
                  "{item.content}"
                </p>
              </div>

              {/* Author Section */}
              <div className="pt-8 border-t border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {item.company === "Altysys" ? <Building2 size={24} /> : <UserCircle2 size={24} />}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{item.author}</h4>
                  <p className="text-indigo-600 font-bold text-xs uppercase tracking-wide">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        
      </div>
    </section>
  );
};

export default Testimonials;