// import React, { useState, useEffect, useRef } from 'react';
// import { User, Briefcase, GraduationCap, FileText, LayoutDashboard, Loader2, ChevronRight, Building } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import api from '../../api';

// // UI Components
// import Modal from '../../components/ui/Modal';
// import InputField from '../../components/ui/InputField';
// import SelectField from '../../components/ui/SelectField';

// // Tab Components
// import ProfileHeader from './tabs/ProfileHeader';
// import DashboardTab from './tabs/DashboardTab';
// import BasicInfoTab from './tabs/BasicInfoTab';
// import CareerPrefsTab from './tabs/CareerPrefsTab';
// import SkillsResumeTab from './tabs/SkillsResumeTab';
// import EducationTab from './tabs/EducationTab';
// import ExperienceTab from './tabs/ExperienceTab';

// export default function ProfilePage() {
//   const navigate = useNavigate();
//   const fileInputRef = useRef(null);
//   const photoInputRef = useRef(null);
  
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard'); 
  
//   // Modals & Forms State
//   const [isEduModalOpen, setIsEduModalOpen] = useState(false);
//   const [isExpModalOpen, setIsExpModalOpen] = useState(false);
//   const [editingEduId, setEditingEduId] = useState(null);
//   const [editingExpId, setEditingExpId] = useState(null);
//   const [newEdu, setNewEdu] = useState({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' });
//   const [newExp, setNewExp] = useState({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });
//   const [skillInput, setSkillInput] = useState('');

//   // Data State
//   const [appliedJobs, setAppliedJobs] = useState([]);
//   const [loadingJobs, setLoadingJobs] = useState(false);
//   const [profile, setProfile] = useState({
//     full_name: '', email: '', headline: '', city: '', country: '',
//     phone_number: '', linkedin_url: '', job_role_interested: '',
//     job_type: '', preferred_location: '', open_to_relocation: false,
//     industry: '', current_salary: '', expected_salary: '',
//     total_experience: '', skills: [], educations: [], experiences: [], 
//     profile_completion_score: 0, profile_photo_url: '', resume_url: ''
//   });

//   // --- 1. USE EFFECTS ---
//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await api.get('/website/profile/me');
//         setProfile(response.data);
//       } catch (err) {
//         toast.error('Failed to load profile from server.');
//         if (err.response?.status === 401) navigate('/auth');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   useEffect(() => {
//     if (activeTab === 'dashboard') {
//       const fetchApplications = async () => {
//         setLoadingJobs(true);
//         try {
//           const response = await api.get('/website/profile/me/applications');
//           setAppliedJobs(response.data);
//         } catch (err) {
//           toast.error("Failed to load your applications.");
//         } finally {
//           setLoadingJobs(false);
//         }
//       };
//       fetchApplications();
//     }
//   }, [activeTab]);

//   // --- 2. HANDLER FUNCTIONS ---
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
//         skills: profile.skills || []
//       };

//       const response = await api.put('/website/profile/me', payload);
//       setProfile(response.data);
//       toast.success('Profile updated successfully!', { id: toastId });
//     } catch (err) {
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
      
      
//       const newPhotoUrl = response.data.profile_photo_url || response.data; 

     
//       setProfile(prev => ({
//         ...prev,
//         ...response.data, // Only use this line if your API returns the FULL profile object
//         profile_photo_url: `${newPhotoUrl}?t=${new Date().getTime()}` 
//       }));
      
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

//   // --- 3. MODAL & BACKGROUND HANDLERS ---
//   const openEditEduModal = (edu) => {
//     setNewEdu({ ...edu });
//     setEditingEduId(edu.id);
//     setIsEduModalOpen(true);
//   };

//   const handleDeleteEducation = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this education?")) return;
//     const toastId = toast.loading("Deleting education...");
//     try {
//       const response = await api.delete(`/website/profile/me/education/${id}`);
//       setProfile(response.data);
//       toast.success("Education deleted!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to delete education.", { id: toastId });
//     }
//   };

//   const handleSaveEducation = async () => {
//     if(!newEdu.education_level || !newEdu.college_name || !newEdu.degree) {
//       return toast.error("Education Level, Institution, and Degree are required.");
//     }
    
//     const toastId = toast.loading("Saving education...");
//     try {
//       let response;
//       if (editingEduId) {
//         response = await api.put(`/website/profile/me/education/${editingEduId}`, newEdu);
//       } else {
//         response = await api.post('/website/profile/me/education', newEdu);
//       }
      
//       setProfile(response.data); 
//       setNewEdu({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' });
//       setEditingEduId(null);
//       setIsEduModalOpen(false);
//       toast.success("Education saved!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to save education.", { id: toastId });
//     }
//   };

//   const openEditExpModal = (exp) => {
//     setNewExp({ 
//       ...exp, 
//       start_date: exp.start_date ? exp.start_date.substring(0, 7) : '', 
//       end_date: exp.end_date ? exp.end_date.substring(0, 7) : '' 
//     });
//     setEditingExpId(exp.id);
//     setIsExpModalOpen(true);
//   };

//   const handleDeleteExperience = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this experience?")) return;
//     const toastId = toast.loading("Deleting experience...");
//     try {
//       const response = await api.delete(`/website/profile/me/experience/${id}`);
//       setProfile(response.data);
//       toast.success("Experience deleted!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to delete experience.", { id: toastId });
//     }
//   };

//   const handleSaveExperience = async () => {
//     if(!newExp.company_name || !newExp.role || !newExp.start_date) {
//       return toast.error("Company, Role, and Start Date are required.");
//     }

//     const payload = {
//       ...newExp,
//       start_date: newExp.start_date.length === 7 ? `${newExp.start_date}-01` : newExp.start_date,
//       end_date: newExp.is_current || !newExp.end_date ? null : (newExp.end_date.length === 7 ? `${newExp.end_date}-01` : newExp.end_date)
//     };

//     const toastId = toast.loading("Saving experience...");
//     try {
//       let response;
//       if (editingExpId) {
//         response = await api.put(`/website/profile/me/experience/${editingExpId}`, payload);
//       } else {
//         response = await api.post('/website/profile/me/experience', payload);
//       }
      
//       setProfile(response.data); 
//       setNewExp({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });
//       setEditingExpId(null);
//       setIsExpModalOpen(false);
//       toast.success("Experience saved!", { id: toastId });
//     } catch (err) {
//       toast.error("Failed to save experience.", { id: toastId });
//     }
//   };

//   // --- 4. RENDER UI ---
//   const TABS = [
//     { id: 'dashboard', label: 'My Applications', icon: LayoutDashboard },
//     { id: 'basic', label: 'Basic Information', icon: User },
//     { id: 'career', label: 'Career Preferences', icon: Briefcase },
//     { id: 'skills', label: 'Skills & Resume', icon: FileText },
//     { id: 'education', label: 'Education', icon: GraduationCap },
//     { id: 'experience', label: 'Experience', icon: Building },
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-4">
//         <Loader2 className="animate-spin text-indigo-600" size={48} />
//         <p className="text-slate-500 font-medium animate-pulse">Loading your profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased p-4 md:p-8 relative">
//       <Toaster position="top-center" toastOptions={{ style: { borderRadius: '12px', fontWeight: '600' } }} />

//       <div className="max-w-[1200px] mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
//         <ProfileHeader 
//           profile={profile} 
//           photoInputRef={photoInputRef} 
//           handlePhotoUpload={handlePhotoUpload} 
//           score={profile?.profile_completion_score || 0} 
//           setActiveTab={setActiveTab}
//         />

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* SIDEBAR NAVIGATION */}
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

//           {/* DYNAMIC TAB CONTENT AREA */}
//           <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
//             {activeTab === 'dashboard' && (
//               <DashboardTab appliedJobs={appliedJobs} loadingJobs={loadingJobs} />
//             )}
//             {activeTab === 'basic' && (
//               <BasicInfoTab profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving} />
//             )}
//             {activeTab === 'career' && (
//               <CareerPrefsTab profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving} />
//             )}
//             {activeTab === 'skills' && (
//               <SkillsResumeTab profile={profile} handleResumeUpload={handleResumeUpload} fileInputRef={fileInputRef} skillInput={skillInput} setSkillInput={setSkillInput} handleAddSkill={handleAddSkill} removeSkill={removeSkill} handleSaveProfile={handleSaveProfile} saving={saving} />
//             )}
//             {activeTab === 'education' && (
//                <EducationTab 
//                  profile={profile} 
//                  openEditEduModal={openEditEduModal} handleDeleteEducation={handleDeleteEducation} 
//                  setNewEdu={setNewEdu} setEditingEduId={setEditingEduId} setIsEduModalOpen={setIsEduModalOpen}
//                />
//             )}
//             {activeTab === 'experience' && (
//                <ExperienceTab 
//                  profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving}
//                  openEditExpModal={openEditExpModal} handleDeleteExperience={handleDeleteExperience}
//                  setNewExp={setNewExp} setEditingExpId={setEditingExpId} setIsExpModalOpen={setIsExpModalOpen}
//                />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* --- MODALS --- */}
//       <Modal isOpen={isEduModalOpen} onClose={() => setIsEduModalOpen(false)} title={editingEduId ? "Edit Education" : "Add Education"}>
//         <div className="space-y-4">
//           <SelectField 
//             label="Education Level" id="education_level" required 
//             options={['Secondary Education', 'Senior Secondary Education', 'Diploma', 'Graduation', 'Post Graduation', 'PhD']} 
//             value={newEdu.education_level} 
//             onChange={(e) => {
//               const val = e.target.value;
//               if (val === 'Secondary Education') {
//   setNewEdu({ ...newEdu, education_level: val, degree: '10th' });
// } else if (val === 'Senior Secondary Education') {
//   setNewEdu({ ...newEdu, education_level: val, degree: '12th' });
// } else {
  
//   setNewEdu({ ...newEdu, education_level: val });
// }
//             }} 
//           />
//           <InputField label="School / College / University Name" id="college_name" required placeholder="e.g. Delhi University" value={newEdu.college_name} onChange={(e) => setNewEdu({...newEdu, college_name: e.target.value})} />
//           <InputField label="Degree / Class" id="degree" required placeholder="e.g. B.Tech, 12th, MBA" value={newEdu.degree} onChange={(e) => setNewEdu({...newEdu, degree: e.target.value})} />
//           <InputField label="Specialization / Stream" id="specialization" placeholder="e.g. PCM, Science, Finance" value={newEdu.specialization} onChange={(e) => setNewEdu({...newEdu, specialization: e.target.value})} />
//           <InputField label="Passing Year" id="graduation_year" placeholder="e.g. 2026" type="number" value={newEdu.graduation_year} onChange={(e) => setNewEdu({...newEdu, graduation_year: e.target.value})} />
//           <button onClick={handleSaveEducation} className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">{editingEduId ? "Update Education" : "Save Education"}</button>
//         </div>
//       </Modal>

//       <Modal isOpen={isExpModalOpen} onClose={() => setIsExpModalOpen(false)} title={editingExpId ? "Edit Experience" : "Add Experience"}>
//         <div className="space-y-4">
//           <InputField label="Company Name" id="company_name" required placeholder="e.g. TechCorp Sales" value={newExp.company_name} onChange={(e) => setNewExp({...newExp, company_name: e.target.value})} />
//           <InputField label="Role / Title" id="role" required placeholder="e.g. Sales Intern" value={newExp.role} onChange={(e) => setNewExp({...newExp, role: e.target.value})} />
//           <div className="grid grid-cols-2 gap-4">
//             <InputField label="Join Date" id="start_date" type="month" required value={newExp.start_date} onChange={(e) => setNewExp({...newExp, start_date: e.target.value})} />
//             <InputField label="Leaving Date" id="end_date" type="month" disabled={newExp.is_current} value={newExp.end_date} onChange={(e) => setNewExp({...newExp, end_date: e.target.value})} />
//           </div>
//           <label className="flex items-center gap-3 cursor-pointer mt-2 mb-4">
//             <input type="checkbox" checked={newExp.is_current} onChange={(e) => setNewExp({...newExp, is_current: e.target.checked, end_date: ''})} className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
//             <span className="font-medium text-slate-700">I currently work here</span>
//           </label>
//           <div className="mb-5 w-full">
//             <label htmlFor="work_description" className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">Details about the work ex</label>
//             <textarea id="work_description" rows="4" placeholder="What did you do? Key achievements?" value={newExp.work_description} onChange={(e) => setNewExp({...newExp, work_description: e.target.value})} className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white resize-none"></textarea>
//           </div>
//           <button onClick={handleSaveExperience} className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">{editingExpId ? "Update Experience" : "Save Experience"}</button>
//         </div>
//       </Modal>

//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from 'react';
import { User, Briefcase, GraduationCap, FileText, LayoutDashboard, Loader2, ChevronRight, Building } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

// UI Components
import Modal from '../../components/ui/Modal';
import InputField from '../../components/ui/InputField';
import SelectField from '../../components/ui/SelectField';

// Tab Components
import ProfileHeader from './tabs/ProfileHeader';
import DashboardTab from './tabs/DashboardTab';
import BasicInfoTab from './tabs/BasicInfoTab';
import CareerPrefsTab from './tabs/CareerPrefsTab';
import SkillsResumeTab from './tabs/SkillsResumeTab';
import EducationTab from './tabs/EducationTab';
import ExperienceTab from './tabs/ExperienceTab';

export default function ProfilePage() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const photoInputRef = useRef(null);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard'); 
  
  // Modals & Forms State
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [editingEduId, setEditingEduId] = useState(null);
  const [editingExpId, setEditingExpId] = useState(null);
  const [newEdu, setNewEdu] = useState({ education_level: '', college_name: '', degree: '', specialization: '', graduation_year: '' });
  const [newExp, setNewExp] = useState({ company_name: '', role: '', start_date: '', end_date: '', is_current: false, work_description: '' });
  const [skillInput, setSkillInput] = useState('');

  // Data State
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [profile, setProfile] = useState({
    full_name: '', email: '', headline: '', city: '', country: '',
    phone_number: '', linkedin_url: '', job_role_interested: '',
    job_type: '', preferred_location: '', open_to_relocation: false,
    industry: '', current_salary: '', expected_salary: '',
    total_experience: '', skills: [], educations: [], experiences: [], 
    profile_completion_score: 0, profile_photo_url: '', resume_url: ''
  });

  // --- 1. USE EFFECTS ---
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/website/profile/me');
        setProfile(response.data);
      } catch (err) {
        toast.error('Failed to load profile from server.');
        if (err.response?.status === 401) navigate('/auth');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  useEffect(() => {
    if (activeTab === 'dashboard') {
      const fetchApplications = async () => {
        setLoadingJobs(true);
        try {
          const response = await api.get('/website/profile/me/applications');
          setAppliedJobs(response.data);
        } catch (err) {
          toast.error("Failed to load your applications.");
        } finally {
          setLoadingJobs(false);
        }
      };
      fetchApplications();
    }
  }, [activeTab]);

  // --- 2. HANDLER FUNCTIONS ---
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
        full_name: profile.full_name || "",
        email: profile.email || "",
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
      
      // The backend returns the full profile object with the new Google Cloud Storage URL
      setProfile(prev => ({
        ...prev,
        ...response.data, 
        // We append a timestamp so the browser immediately refreshes the image visually
        profile_photo_url: response.data.profile_photo_url ? `${response.data.profile_photo_url}?t=${new Date().getTime()}` : ''
      }));
      
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

  // --- 3. MODAL & BACKGROUND HANDLERS ---
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

  const openEditExpModal = (exp) => {
    setNewExp({ 
      ...exp, 
      start_date: exp.start_date ? exp.start_date.substring(0, 7) : '', 
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

  // --- 4. RENDER UI ---
  const TABS = [
    { id: 'dashboard', label: 'My Applications', icon: LayoutDashboard },
    { id: 'basic', label: 'Basic Information', icon: User },
    { id: 'career', label: 'Career Preferences', icon: Briefcase },
    { id: 'skills', label: 'Skills & Resume', icon: FileText },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Building },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center space-y-4">
        <Loader2 className="animate-spin text-indigo-600" size={48} />
        <p className="text-slate-500 font-medium animate-pulse">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-16 bg-slate-50 font-sans antialiased p-4 md:p-8 relative">
      <Toaster position="top-center" toastOptions={{ style: { borderRadius: '12px', fontWeight: '600' } }} />

      <div className="max-w-[1200px] mx-auto relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <ProfileHeader 
          profile={profile} 
          photoInputRef={photoInputRef} 
          handlePhotoUpload={handlePhotoUpload} 
          score={profile?.profile_completion_score || 0} 
          setActiveTab={setActiveTab}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          {/* SIDEBAR NAVIGATION */}
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

          {/* DYNAMIC TAB CONTENT AREA */}
          <div className="flex-1 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200">
            {activeTab === 'dashboard' && (
              <DashboardTab appliedJobs={appliedJobs} loadingJobs={loadingJobs} />
            )}
            {activeTab === 'basic' && (
              <BasicInfoTab profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving} />
            )}
            {activeTab === 'career' && (
              <CareerPrefsTab profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving} />
            )}
            {activeTab === 'skills' && (
              <SkillsResumeTab profile={profile} handleResumeUpload={handleResumeUpload} fileInputRef={fileInputRef} skillInput={skillInput} setSkillInput={setSkillInput} handleAddSkill={handleAddSkill} removeSkill={removeSkill} handleSaveProfile={handleSaveProfile} saving={saving} />
            )}
            {activeTab === 'education' && (
               <EducationTab 
                 profile={profile} 
                 openEditEduModal={openEditEduModal} handleDeleteEducation={handleDeleteEducation} 
                 setNewEdu={setNewEdu} setEditingEduId={setEditingEduId} setIsEduModalOpen={setIsEduModalOpen}
               />
            )}
            {activeTab === 'experience' && (
               <ExperienceTab 
                 profile={profile} handleInputChange={handleInputChange} handleSaveProfile={handleSaveProfile} saving={saving}
                 openEditExpModal={openEditExpModal} handleDeleteExperience={handleDeleteExperience}
                 setNewExp={setNewExp} setEditingExpId={setEditingExpId} setIsExpModalOpen={setIsExpModalOpen}
               />
            )}
          </div>
        </div>
      </div>

      {/* --- MODALS --- */}
      <Modal isOpen={isEduModalOpen} onClose={() => setIsEduModalOpen(false)} title={editingEduId ? "Edit Education" : "Add Education"}>
        <div className="space-y-4">
          <SelectField 
            label="Education Level" id="education_level" required 
            options={['Secondary Education', 'Senior Secondary Education', 'Diploma', 'Graduation', 'Post Graduation', 'PhD']} 
            value={newEdu.education_level} 
            onChange={(e) => {
              const val = e.target.value;
              if (val === 'Secondary Education') {
  setNewEdu({ ...newEdu, education_level: val, degree: '10th' });
} else if (val === 'Senior Secondary Education') {
  setNewEdu({ ...newEdu, education_level: val, degree: '12th' });
} else {
  
  setNewEdu({ ...newEdu, education_level: val });
}
            }} 
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
            <InputField label="Join Date" id="start_date" type="month" required value={newExp.start_date} onChange={(e) => setNewExp({...newExp, start_date: e.target.value})} />
            <InputField label="Leaving Date" id="end_date" type="month" disabled={newExp.is_current} value={newExp.end_date} onChange={(e) => setNewExp({...newExp, end_date: e.target.value})} />
          </div>
          <label className="flex items-center gap-3 cursor-pointer mt-2 mb-4">
            <input type="checkbox" checked={newExp.is_current} onChange={(e) => setNewExp({...newExp, is_current: e.target.checked, end_date: ''})} className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300" />
            <span className="font-medium text-slate-700">I currently work here</span>
          </label>
          <div className="mb-5 w-full">
            <label htmlFor="work_description" className="block text-xs font-bold text-slate-700 tracking-wide mb-2 uppercase">Details about the work ex</label>
            <textarea id="work_description" rows="4" placeholder="What did you do? Key achievements?" value={newExp.work_description} onChange={(e) => setNewExp({...newExp, work_description: e.target.value})} className="w-full px-4 py-3 rounded-xl placeholder-slate-400 text-slate-900 focus:outline-none transition-all border border-slate-200 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 bg-slate-50 focus:bg-white resize-none"></textarea>
          </div>
          <button onClick={handleSaveExperience} className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl transition-colors">{editingExpId ? "Update Experience" : "Save Experience"}</button>
        </div>
      </Modal>

    </div>
  );
}