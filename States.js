import { useState } from "react";

export default function States(){
    const [name,setName] = useState(0);
    const [value,setValue] = useState("");
    return(
        <>
            <h1>{name}</h1>
            <button onClick={()=>{setName(name+1)}}>Change Naam</button>
            <h1>{value}</h1>
            <input type="text" onChange={(e)=>{setValue(e.target.value)}}/>
        </>
    )
}