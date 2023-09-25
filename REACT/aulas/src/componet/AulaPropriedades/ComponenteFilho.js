import React from "react"

export default function componenteFilho (props){
    return (
        <>
        <h1>Componente Filho</h1>
        <h3>Nome: {props.nome}</h3> 
        <h3>Sobrenome: {props.sobrenome}</h3> 
        <h3>Idade: {props.idade}</h3> 
        </>
    )
}