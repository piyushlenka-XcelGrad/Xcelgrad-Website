// import React from 'react';
// import { Container, Typography, Box } from '@mui/material';
// import SchoolIcon from '@mui/icons-material/School';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white mt-auto">
//       <Container maxWidth="lg" className="py-8">
//         <div className="flex items-center justify-center gap-2 mb-4">
//           <div className="bg-[#5B47F5] rounded-xl p-2">
//             <SchoolIcon sx={{ color: 'white', fontSize: 28 }} />
//           </div>
//           <span className="text-2xl font-bold">
//             <span className="text-white">Xcel</span>
//             <span className="text-[#5B47F5]">Grad</span>
//           </span>
//         </div>

//         <Box className="text-center">
//           <Typography variant="body2" className="text-gray-400">
//             © {new Date().getFullYear()} XcelGrad. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GraduationCap
} from 'lucide-react';
import { footerLinks } from '../../Data/FooterLinks';
export default function Footer() {
  
  return (
    <footer className="bg-[#1C2033] text-white pt-20 pb-8 relative z-10 border-t border-[#2A2E45]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 mb-1">
              <div className="relative">
                <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
                <ArrowRight className="w-4 h-4 text-[#38bdf8] absolute -top-1 -right-2 -rotate-45" strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Xcelgrad</h2>
            </div>
            <p className="text-xs text-slate-300 tracking-[0.15em] mb-6 pl-[52px]">
              Creating Day 1 Performers
            </p>
            <p className="text-slate-300 leading-relaxed mb-8 text-[15px] font-light">
              Xcelgrad is a next-gen learning platform helping graduates become job-ready through industry mentorship, skill development, and real-world training.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                <Facebook className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">
                <Twitter className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-700/20">
                <Linkedin className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={`text-[15px] inline-block transition-all duration-300 ${link.highlight ? 'text-[#8B5CF6] font-bold hover:text-[#A78BFA] hover:scale-105' : 'text-slate-300 font-light hover:text-white hover:translate-x-1'}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 flex items-center justify-center text-center">
          <p className="text-[13px] text-white font-light">
            Copyright © {new Date().getFullYear()} · <span className="font-normal">XcelGrad</span> · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}