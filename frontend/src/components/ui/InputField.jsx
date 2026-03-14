import React from 'react';

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

export default InputField;