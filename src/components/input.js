import {useState, useEffect, useRef} from "react";

function Input({ label, type='text', ...props }) {

  const inputRef = useRef()
  const [show, setShow] = useState(false)
  const [inputType, setType] = useState(type)

  useEffect(() => {
    if(show) {
      setType('text')
      inputRef.current.focus()
    } else if(type === 'password') {
      setType('password')
    }
  } ,[show])
 
  return (
    <div>
      <label className=" relative flex bg-zinc-50 rounded-sm border focus-within::border-gray-400">
        <input
          ref={inputRef}
          required={true}
          type={inputType}
          className="px-2 text-xs outline-none focus:border-gray-400 w-full h-[38px] peer valid:pt-[10px]"
          {...props}
        />
        <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
          {label}
        </small>
        {type == 'password' && props?.value && (
          <button type="button" onClick={() => setShow(show => !show)} className="absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2">
            {show ? 'Hide' : 'Show'}
          </button>
        )}
      </label>
    </div>
  );
}

export default Input;
