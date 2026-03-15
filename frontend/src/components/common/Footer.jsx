
import React from 'react';
import { Link } from 'react-router-dom';
import xcelgrad_logo from "../../assets/images/xcelgrad_logo2.png";
import { 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  GraduationCap,
  Box,
} from 'lucide-react';
// import { IconButton } from '@mui/material';
import { footerLinks } from '../../Data/FooterLinks';

export default function Footer() {
  return (
    <footer className="bg-[#1C2033] text-white pt-20 pb-8 relative z-10 border-t border-[#2A2E45]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            {/* <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <GraduationCap className="w-10 h-10 text-white" strokeWidth={1.5} />
                <ArrowRight className="w-4 h-4 text-[#38bdf8] absolute -top-1 -right-2 -rotate-45" strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-bold text-white tracking-wide uppercase">Xcelgrad</h2>
            </div> */}
             <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    {xcelgrad_logo ? (
                       <Box sx={{ bgcolor: '#0A1D20', p: 1, borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                         <img src={xcelgrad_logo} alt="XcelGrad" style={{ height: '30px', objectFit: 'contain' }} />
                       </Box>
                    ) : (
                       <span className="text-xl font-bold text-gray-900">Xcel<span className="text-[#5B47F5]">Grad</span></span>
                    )}

                  </Box>
            
            {/* Updated to Core Statement from Architecture Doc */}
            <p className="text-slate-300 leading-relaxed mb-6 text-[15px] font-light">
              XcelGrad focuses exclusively on B2B sales - bringing structure, skill clarity, and performance discipline to a function often treated informally.
            </p>

            {/* Mandatory Footer Lines */}
            <div className="mb-8 pl-4 border-l-2 border-[#38bdf8]">
              <p className="text-sm text-slate-300 font-medium tracking-wide">Exclusively focused on B2B sales.</p>
              <p className="text-sm text-slate-300 font-medium tracking-wide">Built for long-term performance.</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-[38px] h-[38px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/20">
                <Facebook className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://x.com/XcelGrad" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-sky-500/20">
                <Twitter className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.linkedin.com/company/xcelgrad" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-blue-700/20">
                <Linkedin className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              </a>
              <a href="https://www.instagram.com/xcelgrad/" target="_blank" rel="noopener noreferrer" className="w-[38px] h-[38px] rounded-full bg-[#E1306C] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-pink-500/20">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Explore</h3>
            <ul className="space-y-4">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Resources</h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className={`text-[15px] inline-block transition-all duration-300 ${link.highlight ? 'text-[#8B5CF6] font-bold hover:text-[#A78BFA] hover:scale-105' : 'text-slate-300 font-light hover:text-white hover:translate-x-1'}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium tracking-wide text-sm uppercase mb-6">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-[15px] text-slate-300 font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 flex items-center justify-center text-center border-t border-[#2A2E45]">
          <p className="text-[13px] text-slate-400 font-light">
            Copyright © {new Date().getFullYear()} · <span className="font-normal text-white">XcelGrad</span> · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}