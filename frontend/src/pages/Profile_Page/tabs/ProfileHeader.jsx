import React from 'react';
import { User, MapPin, Camera, Mail, Phone, Briefcase, ChevronRight } from 'lucide-react';
import api from '../../../api';

export default function ProfileHeader({ profile, photoInputRef, handlePhotoUpload, score, setActiveTab }) {
  

  let scoreTextClass = "text-red-600";
  let scoreBarClass = "bg-red-500";
  let statusText = "Needs Work";

  if (score >= 40 && score < 75) {
    scoreTextClass = "text-amber-500";
    scoreBarClass = "bg-amber-400";
    statusText = "Intermediate";
  } else if (score >= 75) {
    scoreTextClass = "text-emerald-600";
    scoreBarClass = "bg-emerald-500";
    statusText = "Excellent";
  }

  // --- HELPER FUNCTION ---
  const getProfileImageUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('http')) return url;
    const backendDomain = new URL(api.defaults.baseURL).origin; 
    return `${backendDomain}${url.startsWith('/') ? '' : '/'}${url}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] border border-slate-200 mb-6 overflow-hidden flex flex-col lg:flex-row">
      
      {/* --- LEFT SECTION: PROFILE DETAILS --- */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        
        {/* Avatar Upload Container */}
        <div className="relative group cursor-pointer shrink-0" onClick={() => photoInputRef.current?.click()}>
          <div className="w-28 h-28 rounded-full border-4 border-slate-50 bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm relative">
            {profile.profile_photo_url ? (
              <img 
                src={getProfileImageUrl(profile.profile_photo_url)} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <User size={48} className="text-slate-300" />
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera size={24} className="text-white" />
            </div>
          </div>
          <input type="file" ref={photoInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />
        </div>

        {/* User Information */}
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            {profile.full_name || 'Your Name'}
          </h1>
          
          <p className="text-sm font-medium text-slate-700 mt-1 mb-4">
            {profile.headline || 'Add a professional headline......'}
          </p>

          <hr className="border-slate-100 mb-4" />

          {/* Key Metadata Grid (Naukri Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-600">
              <MapPin size={16} className="text-slate-400" />
              <span>{profile.city ? `${profile.city}, ${profile.country}` : <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setActiveTab('basic')}>Add Location</span>}</span>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-600">
              <Briefcase size={16} className="text-slate-400" />
              <span>{profile.total_experience ? `${profile.total_experience}` : <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setActiveTab('experience')}>Add Experience</span>}</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-600">
              <Phone size={16} className="text-slate-400" />
              <span>{profile.phone_number || <span className="text-blue-600 cursor-pointer hover:underline" onClick={() => setActiveTab('basic')}>Add Phone Number</span>}</span>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-600">
              <Mail size={16} className="text-slate-400" />
              <span className="truncate max-w-[200px]">{profile.email || 'Email not provided'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- RIGHT SECTION: PROFILE COMPLETENESS WIDGET --- */}
      <div className="lg:w-80 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 p-6 lg:p-8 flex flex-col justify-center">
        <div className="flex justify-between items-end mb-2">
          <div>
            <h3 className="text-sm font-bold text-slate-800">Profile Strength</h3>
            <p className={`text-xs font-semibold mt-0.5 ${scoreTextClass}`}>{statusText}</p>
          </div>
          <span className={`text-2xl font-black ${scoreTextClass}`}>{score}%</span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${scoreBarClass}`} 
            style={{ width: `${score}%` }} 
          />
        </div>

        {/* Call to Action */}
        {score < 100 ? (
          <div className="mt-2">
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              Recruiters are <strong>3x more likely</strong> to contact you if you complete your profile.
            </p>
            <button 
              onClick={() => setActiveTab && setActiveTab('basic')} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2.5 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              Complete Profile <ChevronRight size={16} />
            </button>
          </div>
        ) : (
          <div className="mt-2 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold p-3 rounded-lg text-center">
            Your profile is fully optimized for recruiters!
          </div>
        )}
      </div>

    </div>
  );
}