import React from 'react';
import { Linkedin, GraduationCap, Briefcase, Award } from 'lucide-react';
import Deepak_Verma from "../../assets/images/Deepak_Verma.png"
import priyanka from "../../assets/images/priyanka.jpg"

const Founders = () => {
  const founders = [
    {
      name: "Deepak Verma",
      designation: "Founder",
      image: Deepak_Verma, // Professional placeholder
      bio: "Deepak Verma is a seasoned leader with 18+ years of experience across Agritech, B2B E-commerce, Banking, and Digital transformation. An alumnus of IIT Kharagpur and IIM Indore, he held leadership roles at Zomato’s Hyperpure and served as Agriculture Business Lead at ONDC. He has driven innovation in Indian agriculture by digitizing value chains and empowering farmers through scalable, tech-driven commerce.",
      credentials: ["IIT Kharagpur", "IIM Indore"],
      expertise: "Agritech • Digital Transformation • Supply Chain",
      linkedin: "#"
    },
    {
      name: "Priyanka Singh",
      designation: "Co-Founder",
      image: priyanka, // Professional placeholder
      bio: "Priyanka Singh brings 18+ years of experience in Financial services, Edtech, and IT Services. A graduate of IIT Kanpur and IIM Kolkata, she began her career at Tata Steels before transitioning to roles at Barclays, BlackRock, and Air India. Her focus has been driving Digital transformation and delivering strategic solutions in large-scale enterprises. She has been instrumental in shaping different business foundations.",
      credentials: ["IIT Kanpur", "IIM Kolkata"],
      expertise: "Financial Services • IT Strategy • EdTech",
      linkedin: "#"
    }
  ];

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-4">Leadership</h2>
           */}
             <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
    </span>
    <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
    FOUNDERS
    </span>
  </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Founders</span>
          </h1>
          <p className="text-lg text-slate-600">
            Led by industry veterans with a combined experience of nearly four decades in driving digital innovation and enterprise growth.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {founders.map((founder, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-[40px] p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Image Section */}
                <div className="shrink-0 relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden bg-slate-100 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <a 
                    href={founder.linkedin}
                    className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors border border-slate-100"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{founder.name}</h3>
                    <p className="text-indigo-600 font-semibold tracking-wide uppercase text-sm flex items-center gap-2">
                      <Briefcase size={14} />
                      {founder.designation}
                    </p>
                  </div>

                  {/* Academic Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.credentials.map((edu, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                        <GraduationCap size={12} className="text-indigo-500" />
                        {edu}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio & Expertise */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-slate-600 leading-relaxed text-[0.95rem] mb-6">
                  {founder.bio}
                </p>
                
                {/* <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-wider uppercase">
                  <Award size={14} className="text-indigo-400" />
                  <span>CORE EXPERTISE:</span>
                  <span className="text-slate-700">{founder.expertise}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-blue-500/10">
            <div className="bg-white px-8 py-4 rounded-[14px] border border-white">
              <p className="text-slate-500 text-sm italic font-medium">
                "Driven by the mission to bridge the gap between complex technology and real-world business impact."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;