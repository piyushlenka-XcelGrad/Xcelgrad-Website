import React from 'react'

const Content = ({text}) => {
  return (
    <div>
        <p className="text-lg font-semibold text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {text}
          </p>
    </div>
  )
}

export default Content
