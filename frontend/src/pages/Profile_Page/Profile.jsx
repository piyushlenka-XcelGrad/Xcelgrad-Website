
// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   User, MapPin, Briefcase, GraduationCap, FileText, 
//   CheckCircle2, Loader2, Upload, Plus, X, 
//   ChevronRight, Save, Camera, Calendar, Building
// } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';

// // --- REUSABLE UI COMPONENTS ---
// const InputField = ({ label, type = "text", id, name, placeholder, value, onChange, required = false, disabled = false }) => (
//   <div className="mb-5 w-full">
//     <label htmlFor={id} className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <input
//       type={type} id={id} name={name || id} value={value || ''} onChange={onChange} disabled={disabled}
//       placeholder={placeholder}
//       className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white disabled:opacity-60 disabled:bg-slate-100 disabled:cursor-not-allowed"
//     />
//   </div>
// );

// const SelectField = ({ label, id, name, value, onChange, options, required = false }) => (
//   <div className="mb-5 w-full">
//     <label htmlFor={id} className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">
//       {label} {required && <span className="text-red-500">*</span>}
//     </label>
//     <select
//       id={id} name={name || id} value={value || ''} onChange={onChange}
//       className="w-full px-4 py-3 rounded-xl text-slate-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white"
//     >
//       <option value="" disabled>Select {label.toLowerCase()}</option>
//       {options.map((opt) => (
//         <option key={opt} value={opt}>{opt}</option>
//       ))}
//     </select>
//   </div>
// );

// const Modal = ({ isOpen, onClose, title, children }) => {
//   if (!isOpen) return null;
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
//       <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
//         <div className="flex items-center justify-between p-6 border-b border-slate-100">
//           <h3 className="text-xl font-black text-slate-900">{title}</h3>
//           <button onClick={onClose} className="p-2 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
//             <X size={20} />
//           </button>
//         </div>
//         <div className="p-6 overflow-y-auto">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- MAIN PROFILE COMPONENT ---
// export default function ProfilePage() {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);
//   const photoInputRef = useRef(null);
  
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [activeTab, setActiveTab] = useState('basic');
  
//   const [isEduModalOpen, setIsEduModalOpen] = useState(false);
//   const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  
//   const [newEdu, setNewEdu] = useState({ college_name: '', degree: '', specialization: '', graduation_year: '' });
//   const [newExp, setNewExp] = useState({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });

  
//   const [profile, setProfile] = useState({
//     full_name: '', email: '', headline: '', city: '', country: '',
//     phone_number: '', linkedin_url: '', job_role_interested: '',
//     job_type: '', preferred_location: '', open_to_relocation: false,
//     industry: '', current_salary: '', expected_salary: '',
//     total_experience: '', post_graduation_degree: '', post_graduation_year: '',
//     skills: [], educations: [], experiences: [], profile_completion_score: 0,
//     profile_photo_url: '', resume_url: ''
//   });

//   const [skillInput, setSkillInput] = useState('');

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await api.get('/website/profile/me');
//         setProfile(response.data);
//       } catch (err) {
//         toast.error('Failed to load profile from server.');
//         if (err.response?.status === 401) navigate('/login');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProfile(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSaveProfile = async () => {
//     setSaving(true);
//     const toastId = toast.loading('Saving changes...');
//     try {
//       // NEW: Included all 6 new fields in the payload
//       const payload = {
//         headline: profile.headline || "",
//         city: profile.city || "",
//         country: profile.country || "",
//         phone_number: profile.phone_number || "",
//         linkedin_url: profile.linkedin_url || "",
//         job_role_interested: profile.job_role_interested || "",
//         job_type: profile.job_type || "",
//         preferred_location: profile.preferred_location || "",
//         open_to_relocation: profile.open_to_relocation || false,
//         industry: profile.industry || "",
//         current_salary: profile.current_salary || "",
//         expected_salary: profile.expected_salary || "",
//         total_experience: profile.total_experience || "",
//         post_graduation_degree: profile.post_graduation_degree || "",
//         post_graduation_year: profile.post_graduation_year || "",
//         skills: profile.skills || []
//       };

//       const response = await api.put('/website/profile/me', payload);
//       setProfile(response.data);
//       toast.success('Profile updated successfully!', { id: toastId });
//     } catch (err) {
//       console.error("Save Error Details:", err.response?.data); 
//       const errorMessage = err.response?.data?.detail ? JSON.stringify(err.response.data.detail) : 'Failed to save profile. Please try again.';
//       toast.error(errorMessage, { id: toastId });
//     } finally {
//       setSaving(false);
//     }
//   };

//   const handlePhotoUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('file', file); 

//     const toastId = toast.loading('Uploading profile photo...');
//     try {
//       const response = await api.post('/website/profile/me/photo', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setProfile(response.data); 
//       toast.success('Photo uploaded!', { id: toastId });
//     } catch (err) {
//       toast.error('Photo upload failed. Check file size and type.', { id: toastId });
//     }
//   };

//   const handleResumeUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     const formData = new FormData();
//     formData.append('file', file); 
    
//     const toastId = toast.loading('Uploading resume...');
//     try {
//       const response = await api.post('/website/profile/me/resume', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       setProfile(response.data);
//       toast.success('Resume uploaded successfully!', { id: toastId });
//     } catch (err) {
//       toast.error('Resume upload failed. Try PDF or DOCX under 5MB.', { id: toastId });
//     }
//   };

//   const handleAddSkill = (e) => {
//     if (e.key === 'Enter' && skillInput.trim()) {
//       e.preventDefault();
//       if (!profile.skills.includes(skillInput.trim())) {
//         setProfile(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
//       }
//       setSkillInput('');
//     }
//   };
  
//   const removeSkill = (skillToRemove) => {
//     setProfile(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skillToRemove) }));
//   };

//   const handleSaveEducation = async () => {
//     if(!newEdu.college_name || !newEdu.degree) return toast.error("College and Degree are required.");
    
//     const toastId = toast.loading("Saving education...");
//     try {
//       const response = await api.post('/website/profile/me/education', newEdu);
//       setProfile(response.data); 
//       setNewEdu({ college_name: '', degree: '', specialization: '', graduation_year: '' });
//       setIsEduModalOpen(false);
//       toast.success("Education added!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to save education.", { id: toastId });
//     }
//   };

//   const handleSaveExperience = async () => {
//     if(!newExp.company_name || !newExp.role || !newExp.start_date) {
//       return toast.error("Company, Role, and Start Date are required.");
//     }

//     const payload = {
//       ...newExp,
//       start_date: `${newExp.start_date}-01`,
//       end_date: newExp.is_current || !newExp.end_date ? null : `${newExp.end_date}-01`
//     };

//     const toastId = toast.loading("Saving experience...");
//     try {
//       const response = await api.post('/website/profile/me/experience', payload);
//       setProfile(response.data); 
//       setNewExp({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });
//       setIsExpModalOpen(false);
//       toast.success("Experience added!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to save experience.", { id: toastId });
//     }
//   };

//   const SaveButton = () => (
//     <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
//       <button 
//         onClick={handleSaveProfile} disabled={saving}
//         className="flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
//       >
//         {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
//         {saving ? 'Saving...' : 'Save Changes'}
//       </button>
//     </div>
//   );

//   const TABS = [
//     { id: 'basic', label: 'Basic Info', icon: User },
//     { id: 'career', label: 'Career Prefs', icon: Briefcase },
//     { id: 'skills', label: 'Skills & Resume', icon: FileText },
//     { id: 'background', label: 'Background', icon: GraduationCap },
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-4">
//         <Loader2 className="animate-spin text-indigo-600" size={48} />
//         <p className="text-slate-500 font-medium animate-pulse">Loading your profile...</p>
//       </div>
//     );
//   }

//   // PROGRESS BAR COLORS
//   const score = profile?.profile_completion_score || 0;
//   let scoreTextClass = "text-red-600";
//   let scoreBarClass = "bg-gradient-to-r from-red-500 to-rose-500";

//   if (score >= 30 && score < 70) {
//     scoreTextClass = "text-amber-500";
//     scoreBarClass = "bg-gradient-to-r from-amber-400 to-orange-500";
//   } else if (score >= 70 && score < 90) {
//     scoreTextClass = "text-indigo-600";
//     scoreBarClass = "bg-gradient-to-r from-indigo-500 to-blue-500";
//   } else if (score >= 90) {
//     scoreTextClass = "text-emerald-600";
//     scoreBarClass = "bg-gradient-to-r from-emerald-500 to-green-500";
//   }

//   return (
//     <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased p-4 md:p-8 relative selection:bg-indigo-100 selection:text-indigo-900">
//       <Toaster position="top-center" toastOptions={{ style: { borderRadius: '12px', fontWeight: '600' } }} />

//       <div className="max-w-[1200px] mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
//         {/* --- TOP HEADER / PROGRESS --- */}
//         <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-6 flex flex-col md:flex-row items-center gap-6 md:gap-10">
//           <div className="relative group cursor-pointer" onClick={() => photoInputRef.current?.click()}>
//             <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 p-1">
//               <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
//                 {profile.profile_photo_url ? (
//                   <img src={profile.profile_photo_url.startsWith('http') ? profile.profile_photo_url : `http://127.0.0.1:8000${profile.profile_photo_url}`} alt="Profile" className="w-full h-full object-cover" />
//                 ) : (
//                   <User size={48} className="text-slate-300" />
//                 )}
//               </div>
//             </div>
//             <div className="absolute bottom-1 right-1 bg-indigo-600 p-2.5 rounded-full border-4 border-white shadow-sm group-hover:scale-110 group-hover:bg-indigo-700 transition-all">
//               <Camera size={16} className="text-white" />
//             </div>
//             <input type="file" ref={photoInputRef} onChange={handlePhotoUpload} accept="image/*" className="hidden" />
//           </div>

//           <div className="flex-1 text-center md:text-left w-full">
//             <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
//               {profile.full_name || 'Set your name'}
//             </h1>
//             <p className="text-slate-500 font-medium mt-2 mb-5 flex items-center justify-center md:justify-start gap-2">
//               <MapPin size={16} className="text-indigo-500" /> 
//               {profile.city ? `${profile.city}, ${profile.country}` : 'Location not set'}
//             </p>
            
//             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 w-full max-w-lg">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Profile Completion</span>
//                 <span className={`text-sm font-black ${scoreTextClass}`}>{score}%</span>
//               </div>
//               <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
//                 <div className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${scoreBarClass}`} style={{ width: `${score}%` }} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* --- MAIN CONTENT GRID --- */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="lg:w-72 flex-shrink-0">
//             <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 sticky top-24">
//               <div className="space-y-2">
//                 {TABS.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all ${
//                       activeTab === tab.id ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <tab.icon size={20} className={activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'} />
//                       {tab.label}
//                     </div>
//                     {activeTab === tab.id && <ChevronRight size={18} className="text-indigo-500" />}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
            
//             {/* --- TAB: BASIC INFO --- */}
//             {activeTab === 'basic' && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//                 <h2 className="text-2xl font-black text-slate-900 mb-8">Basic Information</h2>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//                   <InputField label="Full Name" id="full_name" placeholder="e.g. John Doe" value={profile.full_name} onChange={handleInputChange} disabled />
//                   <InputField label="Email Address" id="email" type="email" placeholder="e.g. email@example.com" value={profile.email} onChange={handleInputChange} disabled />
//                 </div>
                
//                 <InputField 
//                   label="Professional Headline" id="headline" 
//                   placeholder="e.g. Senior Sales Executive | B2B SaaS | Revenue Driver"
//                   value={profile.headline} onChange={handleInputChange} 
//                 />

//                 {/* NEW: Industry Input */}
//                 <InputField 
//                   label="Current Industry" id="industry" 
//                   placeholder="e.g. Software, Healthcare, Sales"
//                   value={profile.industry} onChange={handleInputChange} 
//                 />
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//                   <InputField label="City" id="city" placeholder="e.g. Mumbai" value={profile.city} onChange={handleInputChange} />
//                   <InputField label="Country" id="country" placeholder="e.g. India" value={profile.country} onChange={handleInputChange} />
//                 </div>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//                   <InputField label="Phone Number" id="phone_number" placeholder="+91 9876543210" value={profile.phone_number} onChange={handleInputChange} />
//                   <InputField label="LinkedIn URL" id="linkedin_url" placeholder="e.g. linkedin.com/in/sales-pro" value={profile.linkedin_url} onChange={handleInputChange} />
//                 </div>

//                 <SaveButton />
//               </div>
//             )}

//             {/* --- TAB: CAREER PREFERENCES --- */}
//             {activeTab === 'career' && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//                 <h2 className="text-2xl font-black text-slate-900 mb-8">Career Preferences</h2>
                
//                 <InputField 
//                   label="Desired Job Role" id="job_role_interested" 
//                   placeholder="e.g. Sales Manager, Business Development Executive"
//                   value={profile.job_role_interested} onChange={handleInputChange} 
//                 />
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
//                   <SelectField 
//                     label="Preferred Job Type" id="job_type" 
//                     value={profile.job_type} onChange={handleInputChange}
//                     options={['Full-time', 'Part-time', 'Internship', 'Contract']}
//                   />
//                   <InputField 
//                     label="Preferred Location" id="preferred_location" 
//                     placeholder="e.g. Remote, Bangalore, Delhi"
//                     value={profile.preferred_location} onChange={handleInputChange} 
//                   />
//                 </div>

//                 {/* NEW: Current and Expected Salary Inputs */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
//                   <InputField 
//                     label="Current Salary" id="current_salary" 
//                     placeholder="e.g. 8 Lakhs or $60k"
//                     value={profile.current_salary} onChange={handleInputChange} 
//                   />
//                   <InputField 
//                     label="Expected Salary" id="expected_salary" 
//                     placeholder="e.g. 12 Lakhs or $80k"
//                     value={profile.expected_salary} onChange={handleInputChange} 
//                   />
//                 </div>
                
//                 <div className="flex items-center justify-between p-6 mt-4 bg-slate-50 border border-slate-200 rounded-2xl">
//                   <div>
//                     <h3 className="font-bold text-slate-900 text-lg">Open to Relocation</h3>
//                     <p className="text-sm text-slate-500 font-medium mt-1">Are you willing to move for the right job opportunity?</p>
//                   </div>
//                   <label className="relative inline-flex items-center cursor-pointer">
//                     <input type="checkbox" name="open_to_relocation" checked={profile.open_to_relocation} onChange={handleInputChange} className="sr-only peer" />
//                     <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
//                   </label>
//                 </div>

//                 <SaveButton />
//               </div>
//             )}

//             {/* --- TAB: SKILLS & RESUME --- */}
//             {activeTab === 'skills' && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//                 <h2 className="text-2xl font-black text-slate-900 mb-8">Skills & Resume</h2>
                
//                 <div className="mb-10">
//                   <label className="block text-xs font-bold text-slate-700 tracking-wide mb-3 uppercase">Upload Resume</label>
//                   <div className="border-2 border-dashed border-slate-300 bg-slate-50 rounded-3xl p-10 text-center hover:bg-slate-100 hover:border-indigo-400 transition-colors relative group">
//                     <input type="file" ref={fileInputRef} onChange={handleResumeUpload} accept=".pdf,.doc,.docx" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
//                     <div className="flex flex-col items-center justify-center pointer-events-none">
//                       <div className="bg-white p-5 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
//                         <Upload size={32} className="text-indigo-600" />
//                       </div>
//                       <h4 className="font-bold text-slate-900 text-lg mb-1">Click to upload or drag & drop</h4>
//                       <p className="text-slate-500 text-sm font-medium mb-5">PDF, DOC, DOCX up to 5MB</p>
                      
//                       {profile.resume_url && (
//                         <div className="flex items-center gap-2 text-emerald-700 bg-emerald-100/50 border border-emerald-200 px-5 py-2.5 rounded-full font-bold text-sm">
//                           <CheckCircle2 size={18} /> Resume successfully uploaded
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-xs font-bold text-slate-700 tracking-wide mb-3 uppercase">Professional Skills</label>
//                   <div className="p-3 border border-slate-200 rounded-2xl bg-slate-50 focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 focus-within:bg-white transition-all flex flex-wrap gap-2 min-h-[100px] content-start">
//                     {profile.skills.map((skill) => (
//                       <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-100 text-indigo-800 rounded-xl text-sm font-bold animate-in zoom-in duration-200">
//                         {skill}
//                         <X size={14} className="cursor-pointer hover:text-indigo-900 bg-indigo-200/50 rounded-full p-0.5" onClick={() => removeSkill(skill)} />
//                       </span>
//                     ))}
//                     <input 
//                       type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={handleAddSkill}
//                       placeholder={profile.skills.length === 0 ? "e.g. Salesforce, Cold Calling, B2B Sales (Press Enter)" : "Type and press Enter..."}
//                       className="flex-1 min-w-[200px] bg-transparent outline-none p-1.5 text-slate-900 placeholder-slate-400 font-medium"
//                     />
//                   </div>
//                 </div>

//                 <SaveButton />
//               </div>
//             )}

//             {/* --- TAB: BACKGROUND (Education & Experience) --- */}
//             {activeTab === 'background' && (
//               <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                
//                 {/* NEW: Standalone Details block for Experience & Post Grad before the arrays */}
//                 <div className="mb-10 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
//                   <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">General Background</h3>
                  
//                   <InputField 
//                     label="Total Professional Experience" id="total_experience" 
//                     placeholder="e.g. 5 Years, 3 Months"
//                     value={profile.total_experience} onChange={handleInputChange} 
//                   />

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
//                     <InputField 
//                       label="Post Graduation Degree" id="post_graduation_degree" 
//                       placeholder="e.g. MBA, MCA"
//                       value={profile.post_graduation_degree} onChange={handleInputChange} 
//                     />
//                     <InputField 
//                       label="Post Graduation Year" id="post_graduation_year" 
//                       placeholder="e.g. 2024"
//                       value={profile.post_graduation_year} onChange={handleInputChange} 
//                     />
//                   </div>
                  
//                   {/* Local Save for just this section */}
//                   <div className="flex justify-end mt-2">
//                     <button onClick={handleSaveProfile} disabled={saving} className="text-sm font-bold bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl hover:bg-indigo-200 transition-colors">
//                       {saving ? 'Saving...' : 'Save Background'}
//                     </button>
//                   </div>
//                 </div>

//                 {/* EDUCATION SECTION */}
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-black text-slate-900">Education</h2>
//                   <button onClick={() => setIsEduModalOpen(true)} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors">
//                     <Plus size={16} /> Add Education
//                   </button>
//                 </div>
                
//                 {profile.educations.length === 0 ? (
//                   <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium mb-10">
//                     No education details added yet. Let recruiters know where you studied!
//                   </div>
//                 ) : (
//                   <div className="space-y-4 mb-10">
//                     {profile.educations.map((edu, idx) => (
//                       <div key={idx} className="flex gap-5 p-5 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
//                         <div className="mt-1 bg-indigo-50 p-3.5 rounded-xl text-indigo-600 h-fit"><GraduationCap size={24} /></div>
//                         <div>
//                           <h4 className="font-bold text-slate-900 text-lg">{edu.degree} {edu.specialization && `in ${edu.specialization}`}</h4>
//                           <p className="text-slate-600 font-semibold mt-0.5">{edu.college_name}</p>
//                           <p className="text-slate-400 text-sm mt-1.5 flex items-center gap-1.5"><Calendar size={14}/> Class of {edu.graduation_year}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 <hr className="border-slate-100 mb-10" />

//                 {/* EXPERIENCE SECTION */}
//                 <div className="flex items-center justify-between mb-6">
//                   <h2 className="text-2xl font-black text-slate-900">Experience Roles</h2>
//                   <button onClick={() => setIsExpModalOpen(true)} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors">
//                     <Plus size={16} /> Add Experience
//                   </button>
//                 </div>

//                 {profile.experiences.length === 0 ? (
//                   <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium">
//                     No experience roles added yet.
//                   </div>
//                 ) : (
//                   <div className="space-y-4">
//                     {profile.experiences.map((exp, idx) => (
//                       <div key={idx} className="flex gap-5 p-5 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white">
//                         <div className="mt-1 bg-blue-50 p-3.5 rounded-xl text-blue-600 h-fit"><Briefcase size={24} /></div>
//                         <div className="flex-1">
//                           <h4 className="font-bold text-slate-900 text-lg">{exp.role}</h4>
//                           <p className="text-slate-600 font-semibold mt-0.5 flex items-center gap-1.5"><Building size={16} className="text-slate-400"/> {exp.company_name}</p>
//                           <p className="text-slate-400 text-sm mt-1.5 flex items-center gap-1.5">
//                             <Calendar size={14}/> {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
//                           </p>
//                           {exp.work_description && (
//                             <p className="mt-3 text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
//                               {exp.work_description}
//                             </p>
//                           )}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* --- MODALS --- */}
//       <Modal isOpen={isEduModalOpen} onClose={() => setIsEduModalOpen(false)} title="Add Education">
//         <div className="space-y-4">
//           <InputField label="College / University Name" id="college_name" required placeholder="e.g. Delhi University" value={newEdu.college_name} onChange={(e) => setNewEdu({...newEdu, college_name: e.target.value})} />
//           <InputField label="Degree" id="degree" required placeholder="e.g. BBA, MBA, B.Com" value={newEdu.degree} onChange={(e) => setNewEdu({...newEdu, degree: e.target.value})} />
//           <InputField label="Specialization / Major" id="specialization" placeholder="e.g. Business Administration" value={newEdu.specialization} onChange={(e) => setNewEdu({...newEdu, specialization: e.target.value})} />
//           <InputField label="Graduation Year" id="graduation_year" placeholder="e.g. 2026" type="number" value={newEdu.graduation_year} onChange={(e) => setNewEdu({...newEdu, graduation_year: e.target.value})} />
//           <button onClick={handleSaveEducation} className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">Save Education</button>
//         </div>
//       </Modal>

//       <Modal isOpen={isExpModalOpen} onClose={() => setIsExpModalOpen(false)} title="Add Experience">
//         <div className="space-y-4">
//           <InputField label="Company Name" id="company_name" required placeholder="e.g. TechCorp Sales" value={newExp.company_name} onChange={(e) => setNewExp({...newExp, company_name: e.target.value})} />
//           <InputField label="Role / Title" id="role" required placeholder="e.g. Sales Intern" value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} />
//           <div className="grid grid-cols-2 gap-4">
//             <InputField label="Start Date" id="start_date" type="month" required value={newExp.start_date} onChange={(e) => setNewExp({...newExp, start_date: e.target.value})} />
//             <InputField label="End Date" id="end_date" type="month" disabled={newExp.is_current} value={newExp.end_date} onChange={(e) => setNewExp({...newExp, end_date: e.target.value})} />
//           </div>
//           <label className="flex items-center gap-3 cursor-pointer mt-2 mb-4">
//             <input type="checkbox" checked={newExp.is_current} onChange={(e) => setNewExp({...newExp, is_current: e.target.checked, end_date: ''})} className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
//             <span className="font-medium text-slate-700">I currently work here</span>
//           </label>
//           <div className="mb-5 w-full">
//             <label htmlFor="work_description" className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">Work Description</label>
//             <textarea id="work_description" rows="4" placeholder="What did you do? Key achievements?" value={newExp.work_description} onChange={(e) => setNewExp({...newExp, work_description: e.target.value})} className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white resize-none"></textarea>
//           </div>
//           <button onClick={handleSaveExperience} className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">Save Experience</button>
//         </div>
//       </Modal>

//     </div>
//   );
// }








import React, { useState, useEffect, useRef } from 'react';
import { 
  User, MapPin, Briefcase, GraduationCap, FileText, 
  CheckCircle2, Loader2, Upload, Plus, X, 
  ChevronRight, Save, Camera, Calendar, Building,
  Pencil, Trash2 // <-- NEW ICONS
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

// --- REUSABLE UI COMPONENTS ---
const InputField = ({ label, type = "text", id, name, placeholder, value, onChange, required = false, disabled = false }) => (
  <div className="mb-5 w-full">
    <label htmlFor={id} className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type} id={id} name={name || id} value={value || ''} onChange={onChange} disabled={disabled}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white disabled:opacity-60 disabled:bg-slate-100 disabled:cursor-not-allowed"
    />
  </div>
);

const SelectField = ({ label, id, name, value, onChange, options, required = false }) => (
  <div className="mb-5 w-full">
    <label htmlFor={id} className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      id={id} name={name || id} value={value || ''} onChange={onChange}
      className="w-full px-4 py-3 rounded-xl text-slate-900 focus:outline-none transition-all duration-300 border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white"
    >
      <option value="" disabled>Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-xl font-black text-slate-900">{title}</h3>
          <button onClick={onClose} className="p-2 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- MAIN PROFILE COMPONENT ---
export default function ProfilePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('basic');
  
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  
  // NEW: Track IDs for editing
  const [editingEduId, setEditingEduId] = useState(null);
  const [editingExpId, setEditingExpId] = useState(null);

  const [newEdu, setNewEdu] = useState({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' });
  const [newExp, setNewExp] = useState({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });

  const [profile, setProfile] = useState({
    full_name: '', email: '', headline: '', city: '', country: '',
    phone_number: '', linkedin_url: '', job_role_interested: '',
    job_type: '', preferred_location: '', open_to_relocation: false,
    industry: '', current_salary: '', expected_salary: '',
    total_experience: '',
    skills: [], educations: [], experiences: [], profile_completion_score: 0,
    profile_photo_url: '', resume_url: ''
  });

  const [skillInput, setSkillInput] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/website/profile/me');
        setProfile(response.data);
      } catch (err) {
        toast.error('Failed to load profile from server.');
        if (err.response?.status === 401) navigate('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    const toastId = toast.loading('Saving changes...');
    try {
      const payload = {
        headline: profile.headline || "",
        city: profile.city || "",
        country: profile.country || "",
        phone_number: profile.phone_number || "",
        linkedin_url: profile.linkedin_url || "",
        job_role_interested: profile.job_role_interested || "",
        job_type: profile.job_type || "",
        preferred_location: profile.preferred_location || "",
        open_to_relocation: profile.open_to_relocation || false,
        industry: profile.industry || "",
        current_salary: profile.current_salary || "",
        expected_salary: profile.expected_salary || "",
        total_experience: profile.total_experience || "",
        skills: profile.skills || []
      };

      const response = await api.put('/website/profile/me', payload);
      setProfile(response.data);
      toast.success('Profile updated successfully!', { id: toastId });
    } catch (err) {
      const errorMessage = err.response?.data?.detail ? JSON.stringify(err.response.data.detail) : 'Failed to save profile. Please try again.';
      toast.error(errorMessage, { id: toastId });
    } finally {
      setSaving(false);
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file); 

    const toastId = toast.loading('Uploading profile photo...');
    try {
      const response = await api.post('/website/profile/me/photo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setProfile(response.data); 
      toast.success('Photo uploaded!', { id: toastId });
    } catch (err) {
      toast.error('Photo upload failed. Check file size and type.', { id: toastId });
    }
  };

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file); 
    
    const toastId = toast.loading('Uploading resume...');
    try {
      const response = await api.post('/website/profile/me/resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setProfile(response.data);
      toast.success('Resume uploaded successfully!', { id: toastId });
    } catch (err) {
      toast.error('Resume upload failed. Try PDF or DOCX under 5MB.', { id: toastId });
    }
  };

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!profile.skills.includes(skillInput.trim())) {
        setProfile(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
      }
      setSkillInput('');
    }
  };
  
  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({ ...prev, skills: prev.skills.filter(s => s !== skillToRemove) }));
  };

  // --- EDUCATION CRUD HANDLERS ---
  const openEditEduModal = (edu) => {
    setNewEdu({ ...edu });
    setEditingEduId(edu.id);
    setIsEduModalOpen(true);
  };

  const handleDeleteEducation = async (id) => {
    if (!window.confirm("Are you sure you want to delete this education?")) return;
    const toastId = toast.loading("Deleting education...");
    try {
      const response = await api.delete(`/website/profile/me/education/${id}`);
      setProfile(response.data);
      toast.success("Education deleted!", { id: toastId });
    } catch (err) {
      toast.error("Failed to delete education.", { id: toastId });
    }
  };

  const handleSaveEducation = async () => {
    if(!newEdu.education_level || !newEdu.college_name || !newEdu.degree) {
      return toast.error("Education Level, Institution, and Degree are required.");
    }
    
    const toastId = toast.loading("Saving education...");
    try {
      let response;
      if (editingEduId) {
        response = await api.put(`/website/profile/me/education/${editingEduId}`, newEdu);
      } else {
        response = await api.post('/website/profile/me/education', newEdu);
      }
      
      setProfile(response.data); 
      setNewEdu({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' });
      setEditingEduId(null);
      setIsEduModalOpen(false);
      toast.success("Education saved!", { id: toastId });
    } catch (err) {
      toast.error("Failed to save education.", { id: toastId });
    }
  };

  // --- EXPERIENCE CRUD HANDLERS ---
  const openEditExpModal = (exp) => {
    setNewExp({ 
      ...exp, 
      start_date: exp.start_date ? exp.start_date.substring(0, 7) : '', // Format YYYY-MM
      end_date: exp.end_date ? exp.end_date.substring(0, 7) : '' 
    });
    setEditingExpId(exp.id);
    setIsExpModalOpen(true);
  };

  const handleDeleteExperience = async (id) => {
    if (!window.confirm("Are you sure you want to delete this experience?")) return;
    const toastId = toast.loading("Deleting experience...");
    try {
      const response = await api.delete(`/website/profile/me/experience/${id}`);
      setProfile(response.data);
      toast.success("Experience deleted!", { id: toastId });
    } catch (err) {
      toast.error("Failed to delete experience.", { id: toastId });
    }
  };

  const handleSaveExperience = async () => {
    if(!newExp.company_name || !newExp.role || !newExp.start_date) {
      return toast.error("Company, Role, and Start Date are required.");
    }

    const payload = {
      ...newExp,
      start_date: newExp.start_date.length === 7 ? `${newExp.start_date}-01` : newExp.start_date,
      end_date: newExp.is_current || !newExp.end_date ? null : (newExp.end_date.length === 7 ? `${newExp.end_date}-01` : newExp.end_date)
    };

    const toastId = toast.loading("Saving experience...");
    try {
      let response;
      if (editingExpId) {
        response = await api.put(`/website/profile/me/experience/${editingExpId}`, payload);
      } else {
        response = await api.post('/website/profile/me/experience', payload);
      }
      
      setProfile(response.data); 
      setNewExp({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });
      setEditingExpId(null);
      setIsExpModalOpen(false);
      toast.success("Experience saved!", { id: toastId });
    } catch (err) {
      toast.error("Failed to save experience.", { id: toastId });
    }
  };

  const SaveButton = () => (
    <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
      <button 
        onClick={handleSaveProfile} disabled={saving}
        className="flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
        {saving ? 'Saving...' : 'Save Changes'}
      </button>
    </div>
  );

  const TABS = [
    { id: 'basic', label: 'Basic Info', icon: User },
    { id: 'career', label: 'Career Prefs', icon: Briefcase },
    { id: 'skills', label: 'Skills & Resume', icon: FileText },
    { id: 'background', label: 'Background', icon: GraduationCap },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-indigo-600" size={48} />
        <p className="text-slate-500 font-medium animate-pulse">Loading your profile...</p>
      </div>
    );
  }

  // PROGRESS BAR COLORS
  const score = profile?.profile_completion_score || 0;
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
    <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased p-4 md:p-8 relative selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster position="top-center" toastOptions={{ style: { borderRadius: '12px', fontWeight: '600' } }} />

      <div className="max-w-[1200px] mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* --- TOP HEADER / PROGRESS --- */}
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

        {/* --- MAIN CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 sticky top-24">
              <div className="space-y-2">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl font-bold transition-all ${
                      activeTab === tab.id ? 'bg-indigo-50 text-indigo-700 shadow-sm' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <tab.icon size={20} className={activeTab === tab.id ? 'text-indigo-600' : 'text-slate-400'} />
                      {tab.label}
                    </div>
                    {activeTab === tab.id && <ChevronRight size={18} className="text-indigo-500" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
            
            {/* --- TAB: BASIC INFO --- */}
            {activeTab === 'basic' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black text-slate-900 mb-8">Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <InputField label="Full Name" id="full_name" placeholder="e.g. John Doe" value={profile.full_name} onChange={handleInputChange} disabled />
                  <InputField label="Email Address" id="email" type="email" placeholder="e.g. email@example.com" value={profile.email} onChange={handleInputChange} disabled />
                </div>
                
                <InputField label="Professional Headline" id="headline" placeholder="e.g. Senior Sales Executive | B2B SaaS | Revenue Driver" value={profile.headline} onChange={handleInputChange} />
                <InputField label="Current Industry" id="industry" placeholder="e.g. Software, Healthcare, Sales" value={profile.industry} onChange={handleInputChange} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <InputField label="City" id="city" placeholder="e.g. Mumbai" value={profile.city} onChange={handleInputChange} />
                  <InputField label="Country" id="country" placeholder="e.g. India" value={profile.country} onChange={handleInputChange} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <InputField label="Phone Number" id="phone_number" placeholder="+91 9876543210" value={profile.phone_number} onChange={handleInputChange} />
                  <InputField label="LinkedIn URL" id="linkedin_url" placeholder="e.g. linkedin.com/in/sales-pro" value={profile.linkedin_url} onChange={handleInputChange} />
                </div>

                <SaveButton />
              </div>
            )}

            {/* --- TAB: CAREER PREFERENCES --- */}
            {activeTab === 'career' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                <h2 className="text-2xl font-black text-slate-900 mb-8">Career Preferences</h2>
                
                <InputField label="Desired Job Role" id="job_role_interested" placeholder="e.g. Sales Manager, Business Development Executive" value={profile.job_role_interested} onChange={handleInputChange} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                  <SelectField label="Preferred Job Type" id="job_type" value={profile.job_type} onChange={handleInputChange} options={['Full-time', 'Part-time', 'Internship', 'Contract']} />
                  <InputField label="Preferred Location" id="preferred_location" placeholder="e.g. Remote, Bangalore, Delhi" value={profile.preferred_location} onChange={handleInputChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
                  <InputField label="Current Salary" id="current_salary" placeholder="e.g. 8 Lakhs or $60k" value={profile.current_salary} onChange={handleInputChange} />
                  <InputField label="Expected Salary" id="expected_salary" placeholder="e.g. 12 Lakhs or $80k" value={profile.expected_salary} onChange={handleInputChange} />
                </div>
                
                <div className="flex items-center justify-between p-6 mt-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Open to Relocation</h3>
                    <p className="text-sm text-slate-500 font-medium mt-1">Are you willing to move for the right job opportunity?</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" name="open_to_relocation" checked={profile.open_to_relocation} onChange={handleInputChange} className="sr-only peer" />
                    <div className="w-14 h-7 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                <SaveButton />
              </div>
            )}

            {/* --- TAB: SKILLS & RESUME --- */}
            {activeTab === 'skills' && (
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

                <SaveButton />
              </div>
            )}

            {/* --- TAB: BACKGROUND (Education & Experience) --- */}
            {activeTab === 'background' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                
                <div className="mb-10 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Professional Background</h3>
                  
                  <InputField 
                    label="Total Professional Experience" id="total_experience" 
                    placeholder="e.g. 5 Years, 3 Months"
                    value={profile.total_experience} onChange={handleInputChange} 
                  />
                  
                  <div className="flex justify-end mt-2">
                    <button onClick={handleSaveProfile} disabled={saving} className="text-sm font-bold bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl hover:bg-indigo-200 transition-colors">
                      {saving ? 'Saving...' : 'Save Background'}
                    </button>
                  </div>
                </div>

                {/* EDUCATION SECTION */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-slate-900">Education</h2>
                  <button onClick={() => { setNewEdu({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' }); setEditingEduId(null); setIsEduModalOpen(true); }} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors">
                    <Plus size={16} /> Add Education
                  </button>
                </div>
                
                {profile.educations.length === 0 ? (
                  <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium mb-10">
                    No education details added yet. Let recruiters know where you studied!
                  </div>
                ) : (
                  <div className="space-y-4 mb-10">
                    {profile.educations.map((edu) => (
                      <div key={edu.id} className="flex gap-5 p-5 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white relative group">
                        
                        {/* --- EDIT / DELETE ACTIONS --- */}
                        <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openEditEduModal(edu)} className="text-slate-400 hover:text-indigo-600 transition-colors"><Pencil size={18} /></button>
                          <button onClick={() => handleDeleteEducation(edu.id)} className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                        </div>

                        <div className="mt-1 bg-indigo-50 p-3.5 rounded-xl text-indigo-600 h-fit"><GraduationCap size={24} /></div>
                        <div className="pr-12">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-0.5 rounded-md">{edu.education_level}</span>
                          </div>
                          <h4 className="font-bold text-slate-900 text-lg">{edu.degree} {edu.specialization && `in ${edu.specialization}`}</h4>
                          <p className="text-slate-600 font-semibold mt-0.5">{edu.college_name}</p>
                          <p className="text-slate-400 text-sm mt-1.5 flex items-center gap-1.5"><Calendar size={14}/> Class of {edu.graduation_year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <hr className="border-slate-100 mb-10" />

                {/* EXPERIENCE SECTION */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-slate-900">Experience Roles</h2>
                  <button onClick={() => { setNewExp({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' }); setEditingExpId(null); setIsExpModalOpen(true); }} className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-xl transition-colors">
                    <Plus size={16} /> Add Experience
                  </button>
                </div>

                {profile.experiences.length === 0 ? (
                  <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500 font-medium">
                    No experience roles added yet.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {profile.experiences.map((exp) => (
                      <div key={exp.id} className="flex gap-5 p-5 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-white relative group">
                        
                        {/* --- EDIT / DELETE ACTIONS --- */}
                        <div className="absolute top-4 right-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => openEditExpModal(exp)} className="text-slate-400 hover:text-indigo-600 transition-colors"><Pencil size={18} /></button>
                          <button onClick={() => handleDeleteExperience(exp.id)} className="text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={18} /></button>
                        </div>

                        <div className="mt-1 bg-blue-50 p-3.5 rounded-xl text-blue-600 h-fit"><Briefcase size={24} /></div>
                        <div className="flex-1 pr-12">
                          <h4 className="font-bold text-slate-900 text-lg">{exp.role}</h4>
                          <p className="text-slate-600 font-semibold mt-0.5 flex items-center gap-1.5"><Building size={16} className="text-slate-400"/> {exp.company_name}</p>
                          <p className="text-slate-400 text-sm mt-1.5 flex items-center gap-1.5">
                            <Calendar size={14}/> {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                          </p>
                          {exp.work_description && (
                            <p className="mt-3 text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                              {exp.work_description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      <Modal isOpen={isEduModalOpen} onClose={() => setIsEduModalOpen(false)} title={editingEduId ? "Edit Education" : "Add Education"}>
        <div className="space-y-4">
          <SelectField 
            label="Education Level" id="education_level" required 
            options={['10th', '12th', 'Diploma', 'Graduation', 'Post Graduation', 'PhD']} 
            value={newEdu.education_level} onChange={(e) => setNewEdu({...newEdu, education_level: e.target.value})} 
          />
          <InputField label="School / College / University Name" id="college_name" required placeholder="e.g. Delhi University" value={newEdu.college_name} onChange={(e) => setNewEdu({...newEdu, college_name: e.target.value})} />
          <InputField label="Degree / Class" id="degree" required placeholder="e.g. B.Tech, 12th, MBA" value={newEdu.degree} onChange={(e) => setNewEdu({...newEdu, degree: e.target.value})} />
          <InputField label="Specialization / Stream" id="specialization" placeholder="e.g. PCM, Science, Finance" value={newEdu.specialization} onChange={(e) => setNewEdu({...newEdu, specialization: e.target.value})} />
          <InputField label="Passing Year" id="graduation_year" placeholder="e.g. 2026" type="number" value={newEdu.graduation_year} onChange={(e) => setNewEdu({...newEdu, graduation_year: e.target.value})} />
          <button onClick={handleSaveEducation} className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">{editingEduId ? "Update Education" : "Save Education"}</button>
        </div>
      </Modal>

      <Modal isOpen={isExpModalOpen} onClose={() => setIsExpModalOpen(false)} title={editingExpId ? "Edit Experience" : "Add Experience"}>
        <div className="space-y-4">
          <InputField label="Company Name" id="company_name" required placeholder="e.g. TechCorp Sales" value={newExp.company_name} onChange={(e) => setNewExp({...newExp, company_name: e.target.value})} />
          <InputField label="Role / Title" id="role" required placeholder="e.g. Sales Intern" value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} />
          <div className="grid grid-cols-2 gap-4">
            <InputField label="Start Date" id="start_date" type="month" required value={newExp.start_date} onChange={(e) => setNewExp({...newExp, start_date: e.target.value})} />
            <InputField label="End Date" id="end_date" type="month" disabled={newExp.is_current} value={newExp.end_date} onChange={(e) => setNewExp({...newExp, end_date: e.target.value})} />
          </div>
          <label className="flex items-center gap-3 cursor-pointer mt-2 mb-4">
            <input type="checkbox" checked={newExp.is_current} onChange={(e) => setNewExp({...newExp, is_current: e.target.checked, end_date: ''})} className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
            <span className="font-medium text-slate-700">I currently work here</span>
          </label>
          <div className="mb-5 w-full">
            <label htmlFor="work_description" className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">Work Description</label>
            <textarea id="work_description" rows="4" placeholder="What did you do? Key achievements?" value={newExp.work_description} onChange={(e) => setNewExp({...newExp, work_description: e.target.value})} className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white resize-none"></textarea>
          </div>
          <button onClick={handleSaveExperience} className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">{editingExpId ? "Update Experience" : "Save Experience"}</button>
        </div>
      </Modal>

    </div>
  );
}