

import React from "react";
import { ArrowRight, Ear, Play } from "lucide-react";

import ThreeDBackground from "../../Threejs/ThreeDBackground";
import Testimonials from "./Testimonials";
import HeroSection from "./Hero";
import B2BSalesProblem from "./B2BFoucus";
import GallerySection from "./Gallery";
import SparkleBtn from "../../components/common/SparkleBtn";
import Title from "../../components/common/Title";
import HowXcelGradWorks from "./Working";
import ForProfessionals from "./SalesProfessionals";
import EarlyCareerHighlight from "./Career";
import ForBusinesses from "./ForBusinesses";
import SelectedEngagements from "./Engagements";
import SalesInsights from "./Sales";
// import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#5B47F5]/20 selection:text-[#5B47F5] overflow-x-hidden relative">
      
    
      {/* <ThreeDBackground />

     
      <main className="relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

        
          <SparkleBtn text="Creating Day 1 Performers" />

          <Title text1="Who" text2="We Are" size="7xl" />

         
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
            We believe in bridging the gap between education and employment with{" "}
            <span className="text-slate-900 font-semibold">
              outcomes that matter.
            </span>{" "}
            Transform your potential into professional power.
          </p>

     
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full sm:w-auto">
            
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#5B47F5] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#4A38D4] transition-all duration-300 shadow-[0_8px_24px_rgba(91,71,245,0.3)] hover:shadow-[0_12px_32px_rgba(91,71,245,0.4)] hover:-translate-y-1 active:scale-95">
              Get Started 
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-200 hover:border-[#5B47F5] hover:text-[#5B47F5] transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 active:scale-95 shadow-sm">
              <Play className="w-5 h-5" fill="currentColor" />
              Watch Video
            </button>

          </div>
        </div>
      </main> */}

      {/* SUB SECTIONS */}
      <HeroSection/>
      <B2BSalesProblem/>
      <HowXcelGradWorks/>
      <ForProfessionals/>
      <EarlyCareerHighlight/>
      <ForBusinesses/>
      <Testimonials />
      <SelectedEngagements/>
      <GallerySection/>
      <SalesInsights/>
      {/* <Advantages /> */}
      {/* <Founders /> */}
      {/* <Mission /> */}
      {/* <Vision /> */}
      {/* <Testimonials /> */}

    </div>
  );
};

export default Home;