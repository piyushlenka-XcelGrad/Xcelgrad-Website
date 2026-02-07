import React, { useState } from "react";
import {
  ChevronRight,
} from "lucide-react";
import HeadButton from "../../components/common/HeadButton";
import Title from "../../components/common/Title";
import Content from "../../components/common/Content";
import { Features } from "../../Data/Advantages";

const Advantages = () => {

  return (
    <div className="relative min-h-screen bg-white font-sans antialiased overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
        {/* Header Section */}
        <div className="max-w-3xl mb-20 mx-auto text-center">
          <HeadButton text="The XcelGrad Advantage"></HeadButton>

          <Title text1="Everything you need to" text2="scale your workforce" text3="with
            confidence." />

        <Content text=" Empowering learners with real-world skills, personalized mentorship,
            and job-ready programs. We bridge the gap between education and
            employment — with outcomes that matter"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full flex flex-col p-8 bg-white border border-slate-200 rounded-[32px] transition-all duration-500 ease-out hover:shadow-[0_20px_50px_rgba(91,71,245,0.08)] hover:-translate-y-2 hover:border-indigo-200 cursor-default"
    >
      {/* Icon Wrapper */}
      <div
        className={`
        mb-8 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
        ${
          isHovered
            ? `${feature.color} text-white scale-110 rotate-3 shadow-lg shadow-indigo-200`
            : `${feature.lightColor} ${feature.textColor}`
        }
      `}
      >
        {feature.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
        {feature.title}
      </h3>

      <p className="text-slate-500 leading-relaxed text-[0.95rem] mb-8 flex-grow">
        {feature.description}
      </p>

      {/* Action */}
      <div className="relative flex items-center">
        <div
          className={`
          flex items-center space-x-2 text-sm font-bold transition-all duration-300
          ${isHovered ? "text-indigo-600 translate-x-2" : "text-slate-400"}
        `}
        >
          <span>Explore Details</span>
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${
              isHovered ? "translate-x-1" : ""
            }`}
          />
        </div>

        <div
          className={`
          absolute -left-4 w-0 h-8 bg-indigo-50 rounded-full -z-10 transition-all duration-500
          ${isHovered ? "w-full opacity-100" : "opacity-0"}
        `}
        />
      </div>
    </div>
  );
};

export default function App() {
  return <Advantages />;
}
