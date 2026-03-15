import React from 'react';
import InputField from '../../../components/ui/InputField';
import SaveButton from '../../../components/ui/SaveButton';

export default function BasicInfoTab({ profile, handleInputChange, handleSaveProfile, saving }) {
  return (
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

      <SaveButton onSave={handleSaveProfile} saving={saving} />
    </div>
  );
}