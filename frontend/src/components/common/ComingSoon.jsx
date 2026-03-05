// import React, { useState } from 'react';
// import { 
//   Hourglass, 
//   ArrowLeft, 
//   Mail, 
//   Bell,
//   Sparkles
// } from 'lucide-react';

// const ComingSoon = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email) {
//       setIsSubmitted(true);
//       // Here you would typically handle the API call to save the email
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden p-6">
      
//       {/* Background Decorative Blurs & Grid */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
//         <div 
//           className="absolute inset-0 opacity-[0.3]" 
//           style={{ 
//             backgroundImage: `radial-gradient(circle at 2px 2px, #cbd5e1 1px, transparent 0)`,
//             backgroundSize: '40px 40px' 
//           }} 
//         />
//       </div>

//       <div className="relative z-10 w-full max-w-3xl mx-auto">
        
//         {/* Main Card */}
//         <div className="bg-white rounded-[40px] border border-slate-200 p-8 md:p-16 shadow-[0_20px_60px_rgba(91,71,245,0.05)] text-center relative overflow-hidden group">
          
//           {/* Subtle Inner Glow */}
//           <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-50 rounded-full blur-[80px] pointer-events-none" />

//           <div className="relative z-10 flex flex-col items-center">
            
//             {/* Animated Icon */}
//             <div className="w-20 h-20 bg-indigo-50 border border-indigo-100 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm relative">
//               <Hourglass className="w-10 h-10 text-indigo-600 animate-bounce-slow" />
//               <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
//                 <Sparkles className="w-3 h-3 text-blue-600" />
//               </div>
//             </div>

//             {/* Top Badge */}
//             <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
//               <div className="w-2 h-2 rounded-full bg-indigo-500 animate-ping absolute opacity-75" />
//               <div className="w-2 h-2 rounded-full bg-indigo-600 relative" />
//               <span className="text-xs font-bold tracking-widest uppercase text-slate-600 ml-2">
//                 Under Development
//               </span>
//             </div>

//             {/* Headlines */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
//               Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Powerful</span> <br className="hidden sm:block" />
//               is Coming Soon.
//             </h1>

//             <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-lg mx-auto mb-10">
//               We are building a highly structured experience to elevate your B2B sales execution. Drop your email below to be the first to know when we launch.
//             </p>

//             {/* Email Capture Form */}
            
//             {/* Back to Home Link */}
//             <a 
//               href="/" 
//               className="mt-12 inline-flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors group"
//             >
//               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
//               Return to Homepage
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* Custom Animations */}
//       <style jsx>{`
//         @keyframes bounce-slow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-8px); }
//         }
//         .animate-bounce-slow {
//           animation: bounce-slow 3s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ComingSoon;


import React from 'react';
import { Sparkles, ArrowLeft } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden px-6">
      
      {/* Background Decorative Blurs & Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50/80 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/80 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div 
          className="absolute inset-0 opacity-[0.4]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, #f1f5f9 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles size={16} className="text-indigo-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-600">
            Work in Progress
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
          Coming <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Soon</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          We're currently building a  structured experience to elevate your B2B sales execution. Check back later for updates.
        </p>

        {/* Return Button */}
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-indigo-200 hover:bg-slate-50 text-slate-900 rounded-2xl font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95 group"
          >
            <ArrowLeft size={18} className="text-slate-400 group-hover:text-indigo-600 group-hover:-translate-x-1 transition-all" />
            Return to Homepage
          </a>
        </div>

      </div>
    </div>
  );
};

export default ComingSoon;