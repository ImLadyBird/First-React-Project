import { useState } from "react"
import "./ShowHideTextStyle.css"

export function ShowHideText(){
    const [show , setShow] = useState(false);
    return (
        <div className="ShowHideTextCounter">      
            <p>{show ? "Hello! This text can be hidden" : ""}</p>
            <button onClick={() => setShow(!show)}>Show/Hide</button>
        </div>
    )
}