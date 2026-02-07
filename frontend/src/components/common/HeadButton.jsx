import React from 'react'

const HeadButton = ({text}) => {
  return (
    <div>
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
    </span>
    <span className="text-xs font-bold tracking-widest uppercase text-indigo-600">
      {text}
    </span>
  </div>
    </div>
  )
}

export default HeadButton
