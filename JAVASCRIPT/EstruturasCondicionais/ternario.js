/*

! TERNÁRIO:  ?
é uma estrutura condicional que permite executar diferentes blocos de código dependendo de uma condição em uma única linha.
O operador ternário é uma forma compacta de escrever uma estrutura condicional com apenas uma linha de código. 
Ele utiliza a sintaxe condição ? valor_se_verdadeiro : valor_se_falso para avaliar uma condição e retornar um valor 
dependendo do resultado.



*SINTAX - 
condição ? código a ser executado se a condição for verdadeira : código a ser executado se a condição for falsa
*/

let nun1 = 1
let nun2 = 6
let nun3 = 10


let resultado = ((nun1+nun2) > 5 ? "maior que 5" : "menor que 5")
console.log(resultado)

let resultado1 = ((nun1+nun2) > 5 ? "a soma de "+nun1+" + "+nun2+" + "+ nun3 + " é ugual a " + (nun1+nun2+nun3)  : " menor que 5")
console.log(resultado1)



