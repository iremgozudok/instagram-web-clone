import React from 'react'

function Input({label, ...props}) {
  return (
    <div>
        <label className="block relative">
              <input required={true} className="bg-zinc-50 px-2 text-xs rounded-sm border outline-none focus:border-gray-400 w-full h-[38px] peer valid:pt-[10px]" {...props} />
              <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            </label>
    </div>
  )
}

export default Input