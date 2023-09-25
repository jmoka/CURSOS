import React from "react"

import ElFilho from './ElFilho'

const somar = ( num1, num2)=>{
    return num1 + num2
}

export default function funcaoPai(){

    return(
        <>
           <ElFilho 
           pai_somar = {somar}/>        
        </>
    )
}