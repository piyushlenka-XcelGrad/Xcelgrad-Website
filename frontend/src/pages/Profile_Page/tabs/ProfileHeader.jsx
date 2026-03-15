import React from 'react';
import { User, MapPin, Camera } from 'lucide-react';

export default function ProfileHeader({ profile, photoInputRef, handlePhotoUpload, score }) {
  let scoreTextClass = "text-red-600";
  let scoreBarClass = "bg-gradient-to-r from-red-500 to-rose-500";

  if (score >= 30 && score < 70) {
    scoreTextClass = "text-amber-500";
    scoreBarClass = "bg-gradient-to-r from-amber-400 to-orange-500";
  } else if (score >= 70 && score < 90) {
    scoreTextClass = "text-indigo-600";
    scoreBarClass = "bg-gradient-to-r from-indigo-500 to-blue-500";
  } else if (score >= 90) {
    scoreTextClass = "text-emerald-600";
    scoreBarClass = "bg-gradient-to-r from-emerald-500 to-green-500";
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
      <div className="relative group cursor-pointer" onClick={() => photoInputRef.current?.click()}>
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 p-1">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
            {profile.profile_photo_url ? (
              <img src={profile.profile_photo_url.startsWith('http') ? profile.profile_photo_url : `http://127.0.0.1:8000${profile.profile_photo_url}`} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User size={48} className="text-slate-300" />
            )}
          </div>
        </div>
        <div className="absolute bottom-1 right-1 bg-indigo-600 p-2.5 rounded-full border-4 border-white shadow-sm group-hover:scale-110 group-hover:bg-indigo-700 transition-all">
          <Camera size={16} className="text-white" />
        </div>
        <input type="file" ref={photoInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />
      </div>

      <div className="flex-1 text-center md:text-left w-full">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
          {profile.full_name || 'Set your name'}
        </h1>
        <p className="text-slate-500 font-medium mt-2 mb-5 flex items-center justify-center md:justify-start gap-2">
          <MapPin size={16} className="text-indigo-500" /> 
          {profile.city ? `${profile.city}, ${profile.country}` : 'Location not set'}
        </p>
        
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 w-full max-w-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Profile Completion</span>
            <span className={`text-sm font-black ${scoreTextClass}`}>{score}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${scoreBarClass}`} style={{ width: `${score}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}