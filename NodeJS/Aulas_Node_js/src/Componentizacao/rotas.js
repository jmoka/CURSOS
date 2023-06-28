const express = require('express');
const rotas = express.Router();;

// Banco de dados !!
// json simulando

const banco=[
    {"nome": "joao", "idade":"43"},
    {"nome": "cupu", "idade":"40"},
    {"nome": "tatiana", "idade":"44"},
    {"nome": "suely", "idade":"48"},
];


rotas.get("/" , (req, res)=>{
    res.json({"ola":"seja bem vindo"})
})

// PASSANDO PARAMETRO DE CONSULTA PARA A URL
rotas.get("/:ParametNoNome" , (req, res)=>{
   const nomeInformado = req.params.ParametNoNome
   let nomePesquisado = banco.find(item => item.nome==nomeInformado)
   if(curso){
    res.status(200).json(nomePesquisado)
    console.log("Nome Encontrado")

   }else{
    res.status(404).json(
        {erro:"Nome Não Encontrado, ", nomePesquisado:nomeInformado}
    )

   }
})
module.exports = rotas