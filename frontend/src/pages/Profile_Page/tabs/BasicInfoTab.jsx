import React, { useState, useEffect } from 'react';
import CreatableSelect from 'react-select/creatable';
import { Country, City } from 'country-state-city';
import InputField from '../../../components/ui/InputField';
import SaveButton from '../../../components/ui/SaveButton';

export default function BasicInfoTab({ profile, handleInputChange, handleSaveProfile, saving }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  // 1. Load all countries on mount
  useEffect(() => {
    const allCountries = Country.getAllCountries().map(country => ({
      label: country.name,
      value: country.isoCode,
      name: country.name // Keep track of the actual name for your DB
    }));
    setCountries(allCountries);
  }, []);

  // 2. Load cities dynamically when a country is selected
  useEffect(() => {
    if (profile.country_code) {
      const countryCities = City.getCitiesOfCountry(profile.country_code).map(city => ({
        label: city.name,
        value: city.name
      }));
      setCities(countryCities);
    } else {
      setCities([]);
    }
  }, [profile.country_code]);

  // Handle Country Change
  const handleCountryChange = (selectedOption) => {
    const isCustom = selectedOption && selectedOption.__isNew__;
    
    handleInputChange({ target: { name: 'country', value: selectedOption ? selectedOption.label : '' } });
    handleInputChange({ target: { name: 'country_code', value: isCustom ? '' : (selectedOption ? selectedOption.value : '') } });
    handleInputChange({ target: { name: 'city', value: '' } });
  };

  // Handle City Change
  const handleCityChange = (selectedOption) => {
    handleInputChange({ target: { name: 'city', value: selectedOption ? selectedOption.value : '' } });
  };

  // 3. Tailwind-matched Styling for React Select
  const customStyles = {
    control: (base, state) => ({
      ...base,
      minHeight: '42px', // Matches standard Tailwind input height
      backgroundColor: 'transparent',
      borderRadius: '0.375rem', // rounded-md
      borderColor: state.isFocused ? '#3b82f6' : '#cbd5e1', // focus:border-blue-500 : border-slate-300
      boxShadow: state.isFocused ? '0 0 0 1px #3b82f6' : 'none', // focus:ring-1 focus:ring-blue-500
      '&:hover': {
        borderColor: state.isFocused ? '#3b82f6' : '#94a3b8' // hover:border-slate-400
      },
      cursor: 'text'
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 12px', // Matches px-3
    }),
    input: (base) => ({
      ...base,
      color: '#0f172a', // text-slate-900
      margin: '0',
      padding: '0',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#94a3b8', // text-slate-400
    }),
    singleValue: (base) => ({
      ...base,
      color: '#0f172a', // text-slate-900
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '0.375rem', // rounded-md
      marginTop: '4px', // mt-1
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // shadow-md
      zIndex: 50
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#f1f5f9' : 'white', // hover:bg-slate-100
      color: state.isSelected ? '#0f172a' : '#334155', // text-slate-900 or text-slate-700
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#e2e8f0', // bg-slate-200
      }
    }),
    indicatorSeparator: () => ({
      display: 'none', // Removes the line before the dropdown arrow for a cleaner look
    }),
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
      <h2 className="text-2xl font-black text-slate-900 mb-8">Basic Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        <InputField label="Full Name" id="full_name" placeholder="e.g. John Doe" value={profile.full_name} onChange={handleInputChange} />
        <InputField label="Email Address" id="email" type="email" placeholder="e.g. email@example.com" value={profile.email} onChange={handleInputChange} />
      </div>
      
      <InputField label="Current Job title" id="headline" placeholder="e.g. Senior Sales Executive | B2B SaaS | Revenue Driver" value={profile.headline} onChange={handleInputChange} />
      <InputField label="Current Industry" id="industry" placeholder="e.g. Software, Healthcare, Sales" value={profile.industry} onChange={handleInputChange} />
      
      {/* Searchable Dropdowns with Tailwind Styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mb-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700">Country</label>
          <CreatableSelect
            isClearable
            options={countries}
            styles={customStyles}
            placeholder="Select or type country..."
            value={profile.country ? { label: profile.country, value: profile.country_code || profile.country } : null}
            onChange={handleCountryChange}
          />
        </div>
        
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-slate-700">City</label>
          <CreatableSelect
            isClearable
            options={cities}
            styles={customStyles}
            placeholder="Select or type city..."
            value={profile.city ? { label: profile.city, value: profile.city } : null}
            onChange={handleCityChange}
            isDisabled={!profile.country} 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-2">
        <InputField label="Phone Number" id="phone_number" placeholder="+91 9876543210" value={profile.phone_number} onChange={handleInputChange} />
        <InputField label="LinkedIn URL" id="linkedin_url" placeholder="e.g. linkedin.com/in/sales-pro" value={profile.linkedin_url} onChange={handleInputChange} />
      </div>

      <div className="mt-6">
        <SaveButton onSave={handleSaveProfile} saving={saving} />
      </div>
    </div>
  );
}