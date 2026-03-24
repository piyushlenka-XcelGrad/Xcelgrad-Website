import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const TransparentBtn = ({ text, link, className = "" }) => {
  return (
    <Link
      to={link}
      className={`
        inline-flex items-center gap-1.5
        text-sm font-bold text-slate-500
        hover:text-indigo-600
        transition-colors group
        ${className}
      `}
    >
     
      <button className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 hover:border-indigo-200 hover:bg-slate-50 text-slate-900 rounded-2xl underline-offset-0 font-bold transition-all hover:-translate-y-1 active:scale-95">
               {text}
            </button>
    </Link>
  );
};

export default TransparentBtn;