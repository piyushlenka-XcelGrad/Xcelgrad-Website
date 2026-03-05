import React from 'react'
import { Sparkles } from 'lucide-react'
const SparkleBtn = ({text}) => {
  return (
    <div>
       <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5B47F5]/10 border border-[#5B47F5]/20 text-[#5B47F5] font-semibold text-sm mb-8 backdrop-blur-sm shadow-[0_0_20px_rgba(91,71,245,0.15)] animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span>{text}</span>
          </div>
    </div>
  )
}

export default SparkleBtn
