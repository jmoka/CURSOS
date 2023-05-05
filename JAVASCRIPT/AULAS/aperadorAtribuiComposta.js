//! O operador de atribuição composta em JavaScript

/*
O operador de atribuição composta em JavaScript é usado para combinar a atribuição e a 
operação aritmética em uma única expressão. A sintaxe geral do operador de atribuição composta é:

"operador" é o operador aritmético desejado (+, -, *, /, %, **),

sitax
variavel operador= valor;

*/

let x=2
let y=3
let c=5
let b=6

//* SOMA
/* no caso vamos somar x+x , podiamos declarar x = x+x , mas vamos simplificar*/
// * RESULTADO 2
console.log(x+=x)

//* SUBTRAÇÃO
/* no caso vamos subtração y-y , podiamos declarar x = x-x , mas vamos simplificar*/
// * RESULTADO 0
console.log(y-=y)

//* MULTIPLICAÇÃO
/* no caso vamos somar c*c , podiamos declarar x = c*c , mas vamos simplificar*/
// * RESULTADO 25
console.log(c*=c)

/* no caso vamos somar c/b , podiamos declarar z = c/b , mas vamos simplificar*/
// * RESULTADO 25
console.log(c/=b)



