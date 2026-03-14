import React from 'react';
import { Loader2, Save } from 'lucide-react';

const SaveButton = ({ onSave, saving }) => (
  <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
    <button 
      onClick={onSave} disabled={saving}
      className="flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0"
    >
      {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
      {saving ? 'Saving...' : 'Save Changes'}
    </button>
  </div>
);

export default SaveButton;