import { useState } from "react"
import "./CounterButtonStyle.css"

export function CounterButton(){

    const [count , setCount] = useState(0);

    return(
        <div className="Counter">
            <h2>My Counter</h2>
            <h2>{count}</h2>
            <button onClick={() => setCount(count +1)}>Increase</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

