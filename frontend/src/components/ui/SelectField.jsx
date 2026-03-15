import React from 'react';

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

export default SelectField;