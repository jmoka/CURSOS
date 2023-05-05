//! MODO RESTRITO ( use strict)
/*
TODO: O MODO RESTRITO , COMO O PROPRIO NOME JÁ DIZ FAZ COM QUE O CODIGO FIQUE UM POUCO MAIS RÍGIDO EM SUA SINTAX
USANDO O MODO RESTRITO NÃO É POSSIVÉL DECLARAR VARIÁVEL SEM SUA DEVIDA DECLARAÇÃO

! PARA SE DECLARAR O MODO STRICT BASTA INSERIR NO CÓDIGO "use strict"

VAR , LET OU CONST

*/

// DARÁ ERRO NO EXEMPLO ABAIXO
// variavel = 2 - Aqui não é permitido
// var variavel = 4
// let variavel = 5

"use strict"

const variavel = 6
console.log(variavel)

let variavel1 = 7
console.log(variavel1)

var variavel2 = 8
console.log(variavel2)

// * observe que nessa linha por não ter sido declarada a variável dará erro na linha 29
variavel3 = 8
console.log(variavel3)






