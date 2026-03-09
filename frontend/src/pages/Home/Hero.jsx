import React from 'react';
import { 

  ChevronRight

} from 'lucide-react';
import HeadButton from '../../components/common/HeadButton';
import Title from '../../components/common/Title';
import Content from '../../components/common/Content';
import TransparentBtn from '../../components/common/TransparentBtn';
import PupleBtn from '../../components/common/PupleBtn';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* Background Decor - Matched to Founders/Advantages theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Badge - Matched to Founders style */}

         <HeadButton text="B2B Sales Specialist" />
         <Title text1="Bringing" text2="Structure" text3="and Performance Discipline to B2B Sales" />
         <div className="c">
         <Content text="XcelGrad focuses exclusively on B2B sales — helping professionals build serious careers and enabling businesses to achieve predictable sales performance through role clarity, skill alignment, and disciplined execution." />
         </div>


        

          {/* CTA Container */}
          <div className="flex flex-wrap justify-center mt-6 items-center gap-4 mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            {/* Primary CTA */}
           <PupleBtn text="Get a Job" link="/jobs"/>

            {/* Secondary CTA */}

            <TransparentBtn text="Learn B2B Sales" link="/saleslearning"/>
            <TransparentBtn text="Community" link="/community"/>
          </div>

          {/* Small Text Link */}
          <div className="mb-20 animate-in fade-in duration-1000 delay-500">
            <a href="/businesses" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors group">
              FOR BUSINESSES
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;