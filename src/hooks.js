import React, {useState} from "react";

function Hooks(){
    const[value , setvalue]=useState("White");
    return(
        <>
        <h>The Color Is - {value}</h>
        <button type="button" onClick={()=>setvalue("Blue")}> Blue</button>
        <button type="button" onClick={()=>setvalue("Red")}> Red</button>
        <button type="button" onClick={()=>setvalue("Pink")}> Pink</button>
        <button type="button" onClick={()=>setvalue("Green")}> Green</button>
        </>
    );
}
export default Hooks;
