import React from 'react';
import { 
  ShieldCheck 
} from 'lucide-react';
import { benefits } from '../../Data/FreshersData/Sales';

const WhyChooseSales = () => {


  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-[-5%] w-[40%] h-[50%] bg-indigo-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Conclusion */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Sales?</span>
            </h2>
            
            <p className="text-xl text-slate-600 font-bold mb-10">
              B2B sales offers:
            </p>
            
            <div className="mt-4 p-6 bg-white border-l-4 border-indigo-500 rounded-r-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-indigo-600 shrink-0" />
                <p className="text-lg text-slate-800 font-medium leading-relaxed">
                  Success, however, requires structure and discipline.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Benefit Cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-6 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group ${benefit.border}`}
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center mr-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${benefit.bg}`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSales;