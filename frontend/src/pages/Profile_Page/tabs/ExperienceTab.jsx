import React from 'react';
import { Plus, Pencil, Trash2, Calendar, Briefcase, Building, GraduationCap } from 'lucide-react';
import InputField from '../../../components/ui/InputField';

export default function ExperienceTab({ 
  profile, handleInputChange, handleSaveProfile, saving,
  openEditExpModal, handleDeleteExperience,
  setNewExp, setEditingExpId, setIsExpModalOpen
}) {
  
  // 1. Determine if the user is currently marked as a Fresher
  const isFresher = profile.total_experience?.toLowerCase() === 'fresher' || profile.total_experience === '0';

  // 2. Handle the toggle switch
  const handleExperienceTypeChange = (type) => {
    if (type === 'fresher') {
      // Set to "Fresher" to trigger backend auto-credit
      handleInputChange({ target: { id: 'total_experience', name: 'total_experience', value: 'Fresher' } });
    } else {
      // Clear the field so they can type their actual experience (e.g., "3 Years")
      handleInputChange({ target: { id: 'total_experience', name: 'total_experience', value: '' } });
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      
      {/* 3. The Fresher vs Experienced Toggle UI */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => handleExperienceTypeChange('fresher')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border-2 font-bold transition-all ${
            isFresher 
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700' 
              : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-200 hover:bg-slate-50'
          }`}
        >
          <GraduationCap size={20} />
          I am a Fresher
        </button>
        
        <button
          onClick={() => handleExperienceTypeChange('experienced')}
          className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl border-2 font-bold transition-all ${
            !isFresher 
              ? 'bg-indigo-50 border-indigo-500 text-indigo-700' 
              : 'bg-white border-slate-200 text-slate-500 hover:border-indigo-200 hover:bg-slate-50'
          }`}
        >
          <Briefcase size={20} />
          I have Experience
        </button>
      </div>

      {/* 4. Experience Input Form (Only visible if Experienced) */}
      {!isFresher && (
        <div className="mb-10 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 animate-in fade-in zoom-in-95 duration-300">
          <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Total Professional Experience</h3>
          
          <InputField 
            label="Total Experience (Years & Months)" id="total_experience" name="total_experience"
            placeholder="e.g. 5 Years, 3 Months"
            value={profile.total_experience === 'Fresher' ? '' : profile.total_experience} 
            onChange={handleInputChange} 
          />
          
          <div className="flex justify-end mt-2">
            <button onClick={handleSaveProfile} disabled={saving} className="text-sm font-bold bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl hover:bg-indigo-200 transition-colors">
              {saving ? 'Saving...' : 'Save Experience'}
            </button>
          </div>
        </div>
      )}

      {/* 5. Fresher Saving Action (Visible if Fresher) */}
      {isFresher && (
        <div className="mb-10 flex justify-end">
           <button onClick={handleSaveProfile} disabled={saving} className="text-sm font-bold bg-indigo-600 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm">
              {saving ? 'Saving...' : 'Save Profile Status'}
            </button>
        </div>
      )}

      <hr className="border-slate-100 mb-10" />

      {/* 6. Conditionally Render the Roles Timeline */}
      {isFresher ? (
        <div className="text-center p-10 bg-indigo-50/50 rounded-3xl border border-dashed border-indigo-200">
          <GraduationCap size={48} className="mx-auto text-indigo-300 mb-4" />
          <h3 className="text-xl font-bold text-slate-800 mb-2">Experience not required</h3>
          <p className="text-slate-500 max-w-md mx-auto">
            Since you are a fresher, you don't need to fill out work history. Focus on adding your Skills and Education to reach 100% profile strength!
          </p>
        </div>
      ) : (
        <div className="animate-in fade-in duration-500">
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
  );
}