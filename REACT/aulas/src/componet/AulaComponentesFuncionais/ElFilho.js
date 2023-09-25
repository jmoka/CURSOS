import React from "react"


export default function elemento_filho ( props) {

    let num1 = 14
    
    let num2 = 10
    return (
        <>

            <h1>"Soma e {num1} + {num2} = {props.pai_somar(num1,num2)} "</h1>
        
        </>

        
    )

}