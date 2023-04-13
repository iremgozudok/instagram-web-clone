import {useState} from "react";
import Input from "components/input";

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const enable = username && password

  return (
     <>
      <div className="h-full w-full flex gap-x-8 items-center justify-center">
        <div className="w-[380.32px] h-[581.15px] bg-logo-pattern relative bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        </div>
        <div className="w-[350px] bg-white border px-[40px] pt-10 pb-2">
          <a href="#" className="flex items-center justify-center mb-8">
          <img className="h-[51px] w-[175px] object-cover" src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"></img>
          </a>
          <form className="grid gap-y-1.5">
            <Input type="text" value={username} onChange={e => setUsername(e.target.value)} label="Phone number, username or e-mail" />
            <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
            
            <button type="submit" disabled={!enable} className="h-[30px] rounded font-medium bg-brand text-white text-sm disabled:opacity-50">Log In</button>
            <div className="flex items-center">
              <div className="h-px bg-gray-300 flex-1" />
              <span className="px-4 text-[13px] text-gray-500 font-medium">OR</span>
              <div className="h-px bg-gray-300 flex-1" />
            </div>
          </form>
        </div>
      </div>

      
     </>
  );
}

export default App;
