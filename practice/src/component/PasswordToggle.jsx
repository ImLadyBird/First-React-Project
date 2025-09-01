import { useState } from "react"
import "./PasswordToggleStyle.css"

export function PasswordToggle(){
    const [show , setShow] = useState(false)
    return (
        <div className="PasswordToggleCounter">
            <input type={show ? "text" : "password"} value={12345}/>
            <button onClick={() => setShow(!show)}>{show ? "👀" : "🙈"}</button>
        </div>
    )
}