 /*  
 ! IF , ELSE IF, ELSE

Os comandos IF, ELSE IF e ELSE são estruturas condicionais em JavaScript que permitem executar diferentes 
blocos de código dependendo de uma condição.

  
 */

//todo/ COM APENAS UMA CONDIÇÃO
//* Nessa situação só temos i IF
//O comando IF é usado para executar um bloco de código se uma condição especificada for verdadeira. Por exemplo:
let idade = 18
if (idade >= 18) {
    console.log("Você é maior de idade.");
  }
  

//todo/ COM DUAS CONDIÇÕES
//* Nessa situação usaremos o IF e ELSE
//O comando ELSE é usado para executar um bloco de código se todas as condições IF e ELSE IF anteriores forem falsas. Por exemplo:
let altura = 1.7
if (altura >= 1.8) {
    console.log("Apto para o Exército.");
  }else{
    console.log("Apto para Guarda de Transito.");
  }

  //todo/ COM MAIS DE DUAS CONDIÇÕES
//* Nessa situação usaremos o IF , ELSE IF, ELSE
//O comando ELSE IF é usado para testar uma nova condição se a primeira condição IF não for atendida. Por exemplo:
let peso = 101
if (peso <= 69) {
  console.log("Desclassificado.");
} else if (peso <= 70 || peso  <=79 ) {
  console.log("Categoria Meio Leve");
} else if (peso <= 80 || peso <= 89 ) {
  console.log("Categoria Meio Pesado");
} else if (peso <= 90 || peso <= 100 ) {
  console.log("Categoria Pesado");
} else {
  console.log("Super Pesado.");
}
