import { useState } from "react"
import "./LikeButtonStyle.css"

export function LikeButton(){
    const [like , setLike] = useState(false);
    
    return (
        <div className="LikeCounter">
            <span>{like ? "liked" : "Not Liked"}</span>
            <button onClick={() => setLike(!like) }>❣️</button>
        </div>
    )
}