

import React from "react";
import Testimonials from "./Testimonials";
import HeroSection from "./Hero";
import B2BSalesProblem from "./B2BFoucus";
import GallerySection from "./Gallery";
import HowXcelGradWorks from "./Working";
import ForProfessionals from "./SalesProfessionals";
import EarlyCareerHighlight from "./Career";
import ForBusinesses from "./ForBusinesses";
import SelectedEngagements from "./Engagements";
import SalesInsights from "./Sales";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-[#5B47F5]/20 selection:text-[#5B47F5] overflow-x-hidden relative">
      
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
    </div>
  );
};

export default Home;