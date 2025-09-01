import { useState } from "react"
import "./ListMakerStyle.css"

export function ListMaker(){

    const [inputValue , setInputValue] = useState("");
    const [items , setItems] = useState([]);

    function addList(){
        if(inputValue === "") return
        setItems([...items , inputValue]);
        setInputValue("");
    }
    function clearList(){
        setItems([]);
    }

    return (
        <div className="ListMakerCounter">
          <input type="text" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder="write here ..."/>
          <button onClick={addList}>Add</button>
          <button onClick={clearList}>Clear</button>
          <ul>
            {items.map((item,index)=> <li key={index}>{item}</li>)}
          </ul>
        </div>
    )
}