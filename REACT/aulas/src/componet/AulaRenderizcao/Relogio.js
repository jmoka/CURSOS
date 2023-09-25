import React from "react";

let cssRelogio = {
    color : "black",
    backgroundColor : "yellow",
    textAlign: "center"
}

export default function relogio(){
    return(
        <>    
        <h1 style ={cssRelogio} >{new Date().toLocaleTimeString()}</h1>    
        {/* irá  retornar a data em formato de string , e sempra irá mudar toda vez que a hora a pagina for atualizada
        para que isso aconteça o tempo todo , a pagina ( do Virtual_Dom seja Renderizada) iremo escrever uma função la
        no index.js para que seja renderizada a cada minuto
             */}
        </>

    )
}