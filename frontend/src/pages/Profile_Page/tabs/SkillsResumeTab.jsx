// import React, { useState } from 'react';
// import { Upload, CheckCircle2, X, FileText, Plus, AlertCircle } from 'lucide-react';
// import SaveButton from '../../../components/ui/SaveButton';

// export default function SkillsResumeTab({ 
//   profile, handleResumeUpload, fileInputRef, 
//   skillInput, setSkillInput, handleAddSkill, 
//   removeSkill, handleSaveProfile, saving 
// }) {
//   // 1. Local state for validation errors
//   const [error, setError] = useState('');
  
//   // Validation Constants
//   const MAX_SKILLS = 50;
//   const MAX_SKILL_LENGTH = 40;

//   // Suggested skills for quick-add (Sales Focused)
//   const suggestedSkills = [
//     'B2B Sales', 
//     'Cold Calling', 
//     'Lead Generation', 
//     'Salesforce', 
//     'Account Management', 
//     'Negotiation', 
//     'Pipeline Management'
//   ];

//   // 2. Intercept the Enter key to validate before adding
//   const handleInputKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       const trimmedInput = skillInput.trim();

//       // Empty check
//       if (!trimmedInput) return;

//       // Character limit check
//       if (trimmedInput.length > MAX_SKILL_LENGTH) {
//         setError(`Skill must be ${MAX_SKILL_LENGTH} characters or less.`);
//         return;
//       }

//       // Max skills limit check
//       if (profile.skills.length >= MAX_SKILLS) {
//         setError(`You can add a maximum of ${MAX_SKILLS} skills.`);
//         return;
//       }

//       // Duplicate check (Case-insensitive)
//       const isDuplicate = profile.skills.some(
//         skill => skill.toLowerCase() === trimmedInput.toLowerCase()
//       );
//       if (isDuplicate) {
//         setError(`"${trimmedInput}" is already added.`);
//         return;
//       }

//       // If all checks pass, clear errors and call parent handler
//       setError('');
//       handleAddSkill(e);
//     }
//   };

//   const handleSuggestionClick = (suggested) => {
//     // Max skills limit check for suggestions
//     if (profile.skills.length >= MAX_SKILLS) {
//       setError(`You can add a maximum of ${MAX_SKILLS} skills.`);
//       return;
//     }
    
//     setError('');
//     setSkillInput(suggested);
//     // Slight delay ensures the state updates before triggering the Enter key simulation
//     setTimeout(() => handleAddSkill({ key: 'Enter', preventDefault: () => {} }), 50);
//   };

//   return (
//     <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-white p-6 lg:p-8 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] border border-slate-200">
      
//       {/* Header */}
//       <div className="mb-8 border-b border-slate-200 pb-4">
//         <h2 className="text-xl font-bold text-slate-900">Resume & Key Skills</h2>
//         <p className="text-sm text-slate-500 mt-1">Upload your latest CV and highlight your core competencies to stand out to recruiters.</p>
//       </div>
      
//       {/* --- RESUME UPLOAD SECTION --- */}
//       <div className="mb-10">
//         <div className="flex items-center justify-between mb-3">
//           <label className="block text-sm font-bold text-slate-800">
//             Resume / CV <span className="text-red-500">*</span>
//           </label>
//         </div>
        
//         {profile.resume_url ? (
//           /* Success State - Uploaded Resume Card */
//           <div className="flex items-center justify-between p-4 border border-slate-200 bg-slate-50 rounded-lg">
//             <div className="flex items-center gap-4">
//               <div className="bg-blue-100 p-3 rounded-md text-blue-600">
//                 <FileText size={24} strokeWidth={1.5} />
//               </div>
//               <div>
//                 <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
//                   Resume_Attached.pdf <CheckCircle2 size={16} className="text-green-600" />
//                 </h4>
//                 <p className="text-xs text-slate-500 mt-0.5">This document will be sent with your applications.</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => fileInputRef.current?.click()} 
//                 className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 hover:bg-blue-50 rounded-md border border-transparent hover:border-blue-100"
//               >
//                 Update File
//               </button>
//             </div>
//             <input type="file" ref={fileInputRef} onChange={handleResumeUpload} accept=".pdf,.doc,.docx" className="hidden" />
//           </div>
//         ) : (
//           /* Empty State - Drag & Drop Area */
//           <div className="relative group">
//             <input 
//               type="file" 
//               ref={fileInputRef} 
//               onChange={handleResumeUpload} 
//               accept=".pdf,.doc,.docx" 
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
//             />
//             <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg p-8 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all flex flex-col items-center justify-center">
//               <Upload size={32} className="text-slate-400 mb-3 group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
//               <h4 className="font-bold text-slate-800 text-sm mb-1">Upload your resume</h4>
//               <p className="text-slate-500 text-xs mb-4">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
//               <button className="bg-white border border-slate-300 text-slate-700 text-sm font-bold py-2 px-6 rounded-md shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
//                 Browse Files
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <hr className="border-slate-100 mb-8" />

//       {/* --- PROFESSIONAL SKILLS SECTION --- */}
//       <div className="mb-8">
//         <div className="flex justify-between items-end mb-1">
//           <label className="block text-sm font-bold text-slate-800">
//             Key Skills
//           </label>
//           <span className={`text-xs font-semibold ${profile.skills.length >= MAX_SKILLS ? 'text-red-500' : 'text-slate-500'}`}>
//             {profile.skills.length} / {MAX_SKILLS} added
//           </span>
//         </div>
//         <p className="text-xs text-slate-500 mb-3">Add skills that best define your expertise. Recruiters search for candidates using these keywords.</p>
        
//         {/* Unified Input & Tags Container - dynamically turns red if error exists */}
//         <div 
//           className={`group relative flex flex-wrap items-center gap-2 p-3 bg-white border rounded-lg transition-all min-h-[80px] cursor-text ${
//             error 
//               ? 'border-red-400 focus-within:ring-1 focus-within:ring-red-400' 
//               : 'border-slate-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500'
//           }`} 
//           onClick={() => document.getElementById('skill-input').focus()}
//         >
//           {profile.skills.map((skill) => (
//             <span 
//               key={skill} 
//               className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-sm font-semibold animate-in zoom-in duration-200"
//             >
//               {skill}
//               <button 
//                 onClick={(e) => { 
//                   e.stopPropagation(); 
//                   removeSkill(skill); 
//                   setError(''); // Clear errors when a user removes a skill
//                 }}
//                 className="text-blue-400 hover:text-blue-800 hover:bg-blue-100 rounded p-0.5 transition-colors focus:outline-none"
//               >
//                 <X size={14} strokeWidth={2.5} />
//               </button>
//             </span>
//           ))}

//           <input 
//             id="skill-input"
//             type="text" 
//             value={skillInput} 
//             onChange={(e) => {
//               setSkillInput(e.target.value);
//               if (error) setError(''); // Clear error on new typing
//             }} 
//             onKeyDown={handleInputKeyDown}
//             placeholder={profile.skills.length === 0 ? "e.g., Salesforce, Cold Calling (Press Enter)" : "Type and press Enter to add..."}
//             className="flex-1 min-w-[200px] bg-transparent border-none text-sm text-slate-800 focus:outline-none focus:ring-0 placeholder:text-slate-400 py-1 px-1 outline-none"
//             disabled={profile.skills.length >= MAX_SKILLS}
//           />
//         </div>

//         {/* 3. Validation Error Message Display */}
//         {error && (
//           <p className="text-red-500 text-xs mt-2 flex items-center gap-1 animate-in slide-in-from-top-1 duration-200">
//             <AlertCircle size={14} />
//             {error}
//           </p>
//         )}

//         {/* Smart Suggestions */}
//         <div className="mt-5 bg-slate-50 p-4 rounded-lg border border-slate-200">
//           <p className="text-xs text-slate-600 mb-3 font-semibold flex items-center gap-1.5">
//              <AlertCircle size={14} className="text-blue-500" />
//              Suggested skills 
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {suggestedSkills
//               .filter(s => !profile.skills.includes(s))
//               .map(suggested => (
//               <button
//                 key={suggested}
//                 type="button"
//                 onClick={() => handleSuggestionClick(suggested)}
//                 disabled={profile.skills.length >= MAX_SKILLS}
//                 className={`flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-600 rounded-md text-xs font-semibold transition-all shadow-sm ${
//                   profile.skills.length >= MAX_SKILLS 
//                     ? 'opacity-50 cursor-not-allowed' 
//                     : 'hover:bg-slate-100 hover:text-slate-900'
//                 }`}
//               >
//                 <Plus size={14} className="text-slate-400" /> {suggested}
//               </button>
//             ))}
//             {suggestedSkills.filter(s => !profile.skills.includes(s)).length === 0 && (
//               <span className="text-xs text-slate-400 italic">All suggested skills added!</span>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Action Footer */}
//       <div className="pt-6 border-t border-slate-200 flex justify-end">
//         <SaveButton onSave={handleSaveProfile} saving={saving} />
//       </div>
      
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Upload, CheckCircle2, X, FileText, Plus, AlertCircle } from 'lucide-react';
import SaveButton from '../../../components/ui/SaveButton';

export default function SkillsResumeTab({ 
  profile, handleResumeUpload, fileInputRef, 
  skillInput, setSkillInput, handleAddSkill, 
  removeSkill, handleSaveProfile, saving 
}) {
  // 1. Local state for validation errors
  const [error, setError] = useState('');
  
  // Validation Constants
  const MAX_SKILLS = 50;
  const MAX_SKILL_LENGTH = 40;

  // Suggested skills for quick-add (Sales Focused)
  const suggestedSkills = [
    'B2B Sales', 
    'Cold Calling', 
    'Lead Generation', 
    'Salesforce', 
    'Account Management', 
    'Negotiation', 
    'Pipeline Management'
  ];

  // Helper function to extract the real filename from the Google Cloud URL
  const getFilenameFromUrl = (url) => {
    if (!url) return 'Resume_Attached.pdf';
    try {
      const parts = url.split('/');
      let filename = parts[parts.length - 1];
      // Decode any URL characters (like %20 for spaces)
      filename = decodeURIComponent(filename);
      // Optional: If your backend prepends "ID_", you can split it here, 
      // but showing the whole filename is usually fine!
      return filename;
    } catch (err) {
      return 'Resume_Attached.pdf';
    }
  };

  // 2. Intercept the Enter key to validate before adding
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const trimmedInput = skillInput.trim();

      // Empty check
      if (!trimmedInput) return;

      // Character limit check
      if (trimmedInput.length > MAX_SKILL_LENGTH) {
        setError(`Skill must be ${MAX_SKILL_LENGTH} characters or less.`);
        return;
      }

      // Max skills limit check
      if (profile.skills.length >= MAX_SKILLS) {
        setError(`You can add a maximum of ${MAX_SKILLS} skills.`);
        return;
      }

      // Duplicate check (Case-insensitive)
      const isDuplicate = profile.skills.some(
        skill => skill.toLowerCase() === trimmedInput.toLowerCase()
      );
      if (isDuplicate) {
        setError(`"${trimmedInput}" is already added.`);
        return;
      }

      // If all checks pass, clear errors and call parent handler
      setError('');
      handleAddSkill(e);
    }
  };

  const handleSuggestionClick = (suggested) => {
    // Max skills limit check for suggestions
    if (profile.skills.length >= MAX_SKILLS) {
      setError(`You can add a maximum of ${MAX_SKILLS} skills.`);
      return;
    }
    
    setError('');
    setSkillInput(suggested);
    // Slight delay ensures the state updates before triggering the Enter key simulation
    setTimeout(() => handleAddSkill({ key: 'Enter', preventDefault: () => {} }), 50);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-white p-6 lg:p-8 rounded-xl shadow-[0_2px_8px_rgb(0,0,0,0.08)] border border-slate-200">
      
      {/* Header */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h2 className="text-xl font-bold text-slate-900">Resume & Key Skills</h2>
        <p className="text-sm text-slate-500 mt-1">Upload your latest CV and highlight your core competencies to stand out to recruiters.</p>
      </div>
      
      {/* --- RESUME UPLOAD SECTION --- */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-bold text-slate-800">
            Resume / CV <span className="text-red-500">*</span>
          </label>
        </div>
        
        {profile.resume_url ? (
          /* Success State - Uploaded Resume Card */
          <div className="flex items-center justify-between p-4 border border-slate-200 bg-slate-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-md text-blue-600">
                <FileText size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 max-w-[200px] sm:max-w-[400px] truncate">
                  {/* Dynamic Filename Display Here */}
                  <span className="truncate" title={getFilenameFromUrl(profile.resume_url)}>
                    {getFilenameFromUrl(profile.resume_url)}
                  </span>
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">This document will be sent with your applications.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => fileInputRef.current?.click()} 
                className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors px-4 py-2 hover:bg-blue-50 rounded-md border border-transparent hover:border-blue-100 whitespace-nowrap"
              >
                Update File
              </button>
            </div>
            <input type="file" ref={fileInputRef} onChange={handleResumeUpload} accept=".pdf,.doc,.docx" className="hidden" />
          </div>
        ) : (
          /* Empty State - Drag & Drop Area */
          <div className="relative group">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleResumeUpload} 
              accept=".pdf,.doc,.docx" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
            />
            <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg p-8 text-center hover:bg-blue-50/50 hover:border-blue-300 transition-all flex flex-col items-center justify-center">
              <Upload size={32} className="text-slate-400 mb-3 group-hover:text-blue-500 transition-colors" strokeWidth={1.5} />
              <h4 className="font-bold text-slate-800 text-sm mb-1">Upload your resume</h4>
              <p className="text-slate-500 text-xs mb-4">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
              <button className="bg-white border border-slate-300 text-slate-700 text-sm font-bold py-2 px-6 rounded-md shadow-sm group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                Browse Files
              </button>
            </div>
          </div>
        )}
      </div>

      <hr className="border-slate-100 mb-8" />

      {/* --- PROFESSIONAL SKILLS SECTION --- */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-1">
          <label className="block text-sm font-bold text-slate-800">
            Key Skills
          </label>
          <span className={`text-xs font-semibold ${profile.skills.length >= MAX_SKILLS ? 'text-red-500' : 'text-slate-500'}`}>
            {profile.skills.length} / {MAX_SKILLS} added
          </span>
        </div>
        <p className="text-xs text-slate-500 mb-3">Add skills that best define your expertise. Recruiters search for candidates using these keywords.</p>
        
        {/* Unified Input & Tags Container - dynamically turns red if error exists */}
        <div 
          className={`group relative flex flex-wrap items-center gap-2 p-3 bg-white border rounded-lg transition-all min-h-[80px] cursor-text ${
            error 
              ? 'border-red-400 focus-within:ring-1 focus-within:ring-red-400' 
              : 'border-slate-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500'
          }`} 
          onClick={() => document.getElementById('skill-input').focus()}
        >
          {profile.skills.map((skill) => (
            <span 
              key={skill} 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-800 border border-blue-200 rounded-md text-sm font-semibold animate-in zoom-in duration-200"
            >
              {skill}
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  removeSkill(skill); 
                  setError(''); // Clear errors when a user removes a skill
                }}
                className="text-blue-400 hover:text-blue-800 hover:bg-blue-100 rounded p-0.5 transition-colors focus:outline-none"
              >
                <X size={14} strokeWidth={2.5} />
              </button>
            </span>
          ))}

          <input 
            id="skill-input"
            type="text" 
            value={skillInput} 
            onChange={(e) => {
              setSkillInput(e.target.value);
              if (error) setError(''); // Clear error on new typing
            }} 
            onKeyDown={handleInputKeyDown}
            placeholder={profile.skills.length === 0 ? "e.g., Salesforce, Cold Calling (Press Enter)" : "Type and press Enter to add..."}
            className="flex-1 min-w-[200px] bg-transparent border-none text-sm text-slate-800 focus:outline-none focus:ring-0 placeholder:text-slate-400 py-1 px-1 outline-none"
            disabled={profile.skills.length >= MAX_SKILLS}
          />
        </div>

        {/* 3. Validation Error Message Display */}
        {error && (
          <p className="text-red-500 text-xs mt-2 flex items-center gap-1 animate-in slide-in-from-top-1 duration-200">
            <AlertCircle size={14} />
            {error}
          </p>
        )}

        {/* Smart Suggestions */}
        <div className="mt-5 bg-slate-50 p-4 rounded-lg border border-slate-200">
          <p className="text-xs text-slate-600 mb-3 font-semibold flex items-center gap-1.5">
             <AlertCircle size={14} className="text-blue-500" />
             Suggested skills 
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedSkills
              .filter(s => !profile.skills.includes(s))
              .map(suggested => (
              <button
                key={suggested}
                type="button"
                onClick={() => handleSuggestionClick(suggested)}
                disabled={profile.skills.length >= MAX_SKILLS}
                className={`flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-300 text-slate-600 rounded-md text-xs font-semibold transition-all shadow-sm ${
                  profile.skills.length >= MAX_SKILLS 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Plus size={14} className="text-slate-400" /> {suggested}
              </button>
            ))}
            {suggestedSkills.filter(s => !profile.skills.includes(s)).length === 0 && (
              <span className="text-xs text-slate-400 italic">All suggested skills added!</span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-slate-200 flex justify-end">
        <SaveButton onSave={handleSaveProfile} saving={saving} />
      </div>
      
    </div>
  );
}