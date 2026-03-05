import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom";
const PupleBtn = ({text , link}) => {
  return (
    <div>
      <Link to={link}>
        <button className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-1 active:scale-95 group">
          {text}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </Link>
    </div>
  )
}

export default PupleBtn
