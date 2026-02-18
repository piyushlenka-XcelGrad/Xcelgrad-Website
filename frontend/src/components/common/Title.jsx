import React from 'react'

const Title = ({text1 , text2, text3}) => {
  return (
    <div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            {text1}{" "}
            <span className="text-indigo-600">{text2}</span>{" "}{text3}
          </h2>
    </div>
  )
}

export default Title
