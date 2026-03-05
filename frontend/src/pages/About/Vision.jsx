import React from 'react';
import Title from '../../components/common/Title';
import Content from '../../components/common/Content';
import HeadButton from '../../components/common/HeadButton';
import { visionCards } from '../../Data/VisionData';
const Vision = () => {


  return (
    <section className="py-24 bg-white font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-2">
          <HeadButton text="Vision"/>
          
          <Title text1="Our" text2="Vision" />
          <Content text="To become the most trusted partner in building predictable B2B sales performance engines." />
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