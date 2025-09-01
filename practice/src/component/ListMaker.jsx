import { useState } from "react"
import "./ListMakerStyle.css"

export function ListMaker(){
    const [items , setItems] = useState([]);
    const [inputValue , setInputValue] = useState("");

    function AddList(){
        if(inputValue.trim() === "") return;
        setItems([...items , inputValue]);
        setInputValue("");
    }

    return (
        <div className="ListMakerCounter">
            <input type="text" onChange={(e)=> setInputValue(e.target.value)} value={inputValue}/>
            <button onClick={AddList}>Add</button>
            <button onClick={()=> setItems([])}>Clear</button>
            <ul>
                {items.map((item , index)=> <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}