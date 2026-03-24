import React from 'react';
import { Plus, Pencil, Trash2, GraduationCap, Calendar } from 'lucide-react';

export default function EducationTab({ 
  profile, 
  openEditEduModal, handleDeleteEducation, 
  setNewEdu, setEditingEduId, setIsEduModalOpen
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      
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
    </div>
  );
}
