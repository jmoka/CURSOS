import React from "react"
import Imagem_SRC from "../imgs/agil.jpg" // quando a imagem esta dentro de src

export default function Imagens (){
    return(
<>
<img src = { Imagem_SRC } alt=""/>

{/* Quando a imagen esta dentro de src */}
<img src="/logo_jota.jpg" alt=""></img> 
</>
 )
}

