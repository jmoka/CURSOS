import React from "react"

import El_Filho from './el.filho'

const somar = ( num1, num2)=>{
    return num1 + num2
}

export default function funcaoPai(){

    return(
        <>
           <El_Filho 
           pai_somar = {somar}/>        
        </>
    )
}