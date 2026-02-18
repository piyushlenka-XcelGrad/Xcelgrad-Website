import React from 'react';
import { GraduationCap, Globe, Trophy } from 'lucide-react';
import Title from '../../components/common/Title';
import Content from '../../components/common/Content';
import HeadButton from '../../components/common/HeadButton';
const Vision = () => {
  const visionCards = [
    {
      title: "Enterprise Sales Enablement",
      icon: <GraduationCap className="w-10 h-10" />,
      content: "We deliver hands-on, industry-aligned sales training designed for B2B environments equipping professionals with real-world selling skills across IT, HoReCa and HR Tech to perform confidently from Day 1.",
      isHighlighted: false
    },
    {
      title: "B2B Industry Ecosystem",
      icon: <Globe className="w-10 h-10" />,
      content: "We foster a strong network of sales professionals, mentors, and B2B organizations that bridges the gap between learning and revenue enabling faster onboarding, sharper execution, and consistent deal outcomes.",
      isHighlighted: true
    },
    {
      title: "High-Impact Sales Careers",
      icon: <Trophy className="w-10 h-10" />,
      content: "We prepare future sales professionals to drive pipelines, close meaningful deals, and create measurable business impact becoming productive contributors from their very first day on the job.",
      isHighlighted: false
    }
  ];

  return (
    <section className="py-24 bg-white font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-2">
          <HeadButton text="Vision"/>
          <Title text1="Our" text2="Vision" />
          <Content text="A world where every corporate hire in India and beyond is job-ready, productive, and impactful from Day 1." />
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {visionCards.map((card, index) => (
            <div 
              key={index}
              className={`flex flex-col rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${card.isHighlighted ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
            >
              {/* Top Section (Title & Icon) */}
              <div className={`p-10 flex flex-col items-center justify-center text-center space-y-6 h-64 ${
                card.isHighlighted ? 'bg-[#5B47F5] text-white' : 'bg-[#f8fafc] text-[#1e293b]'
              }`}>
                <h3 className="text-2xl font-extrabold leading-tight px-4">
                  {card.title}
                </h3>
                <div className={`${card.isHighlighted ? 'text-white' : 'text-[#5B47F5]'}`}>
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex-grow bg-white flex items-center justify-center">
                <p className="text-[#64748b] text-center leading-relaxed text-base md:text-[0.95rem]">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;