import React from 'react';
import { Upload, CheckCircle2, X } from 'lucide-react';
import SaveButton from '../../../components/ui/SaveButton';

export default function SkillsResumeTab({ 
  profile, handleResumeUpload, fileInputRef, 
  skillInput, setSkillInput, handleAddSkill, 
  removeSkill, handleSaveProfile, saving 
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-2xl font-black text-slate-900 mb-8">Skills & Resume</h2>
      
      <div className="mb-10">
        <label className="block text-xs font-bold text-slate-700 tracking-wide mb-3 uppercase">Upload Resume</label>
        <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-3xl p-10 text-center hover:bg-slate-100 hover:border-indigo-400 transition-colors relative group">
          <input type="file" ref={fileInputRef} onChange={handleResumeUpload} accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
          <div className="flex flex-col items-center justify-center pointer-events-none">
            <div className="bg-white p-5 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
              <Upload size={32} className="text-indigo-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-lg mb-1">Click to upload or drag & drop</h4>
            <p className="text-slate-500 text-sm font-medium mb-5">PDF, DOC, DOCX up to 5MB</p>
            
            {profile.resume_url && (
              <div className="flex items-center gap-2 text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-5 py-2.5 rounded-full font-bold text-sm">
                <CheckCircle2 size={18} /> Resume successfully uploaded
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 tracking-wide mb-3 uppercase">Professional Skills</label>
        <div className="p-3 border border-slate-200 rounded-2xl bg-slate-50 focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 focus-within:bg-white transition-all flex flex-wrap gap-2 min-h-[100px] content-start">
          {profile.skills.map((skill) => (
            <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-bold animate-in zoom-in duration-200">
              {skill}
              <X size={14} className="cursor-pointer hover:text-indigo-900 bg-indigo-200/50 rounded-full p-0.5" onClick={() => removeSkill(skill)} />
            </span>
          ))}
          <input 
            type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleAddSkill}
            placeholder={profile.skills.length === 0 ? "e.g. Salesforce, Cold Calling, B2B Sales (Press Enter)" : "Type and press Enter..."}
            className="flex-1 min-w-[200px] bg-transparent outline-none p-1.5 text-slate-900 placeholder-slate-400 font-medium"
          />
        </div>
      </div>

      <SaveButton onSave={handleSaveProfile} saving={saving} />
    </div>
  );
}