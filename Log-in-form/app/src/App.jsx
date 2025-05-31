import { useState, useEffect } from "react"
import "./App.css"
export default function App (){
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [disabled, setDisabled] = useState(true);
  return(
    <div className="container">
    <form autoComplete="off">
      <div className="flex">
        
        <div className="item">
            <input type="text" id="user" required onChange={e => setUser(e.target.value)}/>
            <span className="material-symbols-outlined">person</span>
            <label htmlFor="user">Username</label>
        </div>
        
        <div className="item">
            <input type="text" id="password" required onChange={e => setPassword(e.target.value)}/>
            <span className="material-symbols-outlined">visibility_off</span>
            <label htmlFor="password">Password</label>   
        </div>
        
      </div>
{/* <span class="material-symbols-outlined">
visibility
</span> */}
      <button type="submit" disabled={disabled}>Log In</button>
    </form>
    </div>
  )
}