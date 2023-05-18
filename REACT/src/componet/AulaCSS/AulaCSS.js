import React from "react"
import './Css.css'  


export default function CSS (){
    let css_incorporado = {
        color :"blue",
        background :"red",
        fontSize : "5mn"
    }
    return (
        <>
            <h1>APLICANDO O CSS INLINE</h1>
            <h1 style={{color:"yellow", fontSize:"5mn"}}>CSS INLINE SENDO USADO</h1>

            <h1>APLICANDO O CSS INCORPORADO</h1>
            <h1 style={css_incorporado}>CSS INCORPORADO SENDDO USADO</h1> 

            <h1>APLICANDO O CSS EM CLASSES</h1>
            <h1 className="classeCSS"> CSS EM CLASSES SENDO USADA</h1>

        </>
    
    )


}


