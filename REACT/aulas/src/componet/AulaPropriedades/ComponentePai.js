import React from "react"

import CompFilho from './ComponenteFilho'

export default function componentePai (){
    let nome = "joão luiz"
    let sobrenome = "Tavares"
    let idade = 43

    return (
        <>
        <h1>Componente Pai</h1>
        <p>"Comp_Filho nome= {nome} sobrenome= {sobrenome} idade= {idade}"</p>        
        <CompFilho nome={nome} sobrenome={sobrenome} idade={idade} />
        </>
    )
}

// Esse componente deve ser Importado para o componente pai de todos App.js

