import React from 'react';
import InputField from '../../../components/ui/InputField';
import SelectField from '../../../components/ui/SelectField';
import SaveButton from '../../../components/ui/SaveButton';

export default function CareerPrefsTab({ profile, handleInputChange, handleSaveProfile, saving }) {
  return (
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

      <SaveButton onSave={handleSaveProfile} saving={saving} />
    </div>
  );
}