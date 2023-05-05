"use strict"


/*
! OPERADORES DE COMPARAÇÃO OU RELACIONAIS
1) >   MAIOR
2) <   MENOR
3) <=  MENOR OU IGUAL
4) >=  MAIOR OU IGUAL
5) !=  DIFERENTE (NESSE CASO TIPOS DIFERENTES SÃO ACEITOS)
5) !==  DIFERENTE (NESSE CASO TIPOS DIFERENTES NÃO ACEITOS)
6) ==  IGUAL (DO MESMO TIPO)
7) === IGUAL ( DE TIPOS DIFERENTES)
8) ! NOT (NEGAÇÃO)
*/

// TODO EXEMPLOS

// VARIÁVEIS DECLARADAS

let x = 10
let y = 2
let w = "10"


//! MAIOR >

// O RESULTADO É TRUE
let maior = x > y
console.log(maior," = " + x + " maior " + " que " + y )

//! MENOR <

// O RESULTADO É FALSO
let menor = x < y
console.log(menor," = " + x + " menor " + " que " + y  )

//! MENOR OU IGUAL <=

// O RESULTADO É TRUE
let menorIgual = y <= x
console.log(menorIgual," = " + y + " Menor ou Igual " + " que " + x  )

//! MAIOR OU IGUAL >=

// O RESULTADO É TRUE
let maiorIgual = x >= y
console.log(maiorIgual," = " + x + " Maior ou Igual " + " que " + y  )

//! DIFERENTE (NESSE CASO TIPOS DIFERENTES SÃO ACEITOS) != 

// O RESULTADO É FALSE ( X=10 NUMERO É IGUAL A W="10 STRING")
let diferenteTipoPermitido = x != w
console.log(diferenteTipoPermitido," = " + x + "  DIFERENTE  " + " que " + w  +" FORAM COPARADO NUMERO E ESTRING OS DOIS COM VALOR 10")

//! DIFERENTE (NESSE CASO TIPOS DIFERENTES NÃO ACEITOS) !== 

// O RESULTADO É TRUE ( X=10 NUMERO NÃO IGUAL A W="10 STRING")
let diferenteTipoNaoPermitido = x !== w
console.log(diferenteTipoNaoPermitido," = " + x + "  DIFERENTE  " + " que " + w  +" FORAM COPARADO NUMERO E ESTRING OS DOIS COM VALOR 10")


//! IGUAL (NESSE CASO TIPOS DIFERENTES SÃO ACEITOS) ==

// O RESULTADO É TRUE ( X=10 NUMERO É  IGUAL A W="10 STRING")
let igualTiposPermitido = (x == w)
console.log(igualTiposPermitido," = " + x + "  IGUAL  " + " que " + w  +" FORAM COPARADO NUMERO E ESTRING OS DOIS COM VALOR 10")

//! IGUAL (NESSE CASO TIPOS DIFERENTES NÃO SÃO ACEITOS) ===

// O RESULTADO É FALSE ( X=10 NUMERO NÃO IGUAL A W="10 STRING")
let igualTiposNaoPermitido = x === w
console.log(igualTiposNaoPermitido," = " + x + "  IGUAL  " + " que " + w  +" FORAM COPARADO NUMERO E ESTRING OS DOIS COM VALOR 10")


//! NOT (NEGAÇÃO) !

// A NEGAÇÃO OU NOT , INVERTE O RESULTADO DA OPERAÇÃO

// O RESULTADO É TRUE
let igualdade = (x==w)
console.log(igualdade, "= SEM USAR O OPERADOR NOT ! O RESULTADO É TRUE")
// USANDO O OPERADOR NOT ! O RESULTADO É FALSE
console.log(!igualdade,"= USANDO O OPERADOR NOT ! O RESULTADO É FALSE" )
