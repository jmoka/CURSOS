//! = USANDO ID

// ! document.getElementById

/*
Referenciar um elemento da árvore DOM através do valor do seu atributo “id”. 
Pesquise também sobre document.getElementByClassName.

todo: para usarmos o getElementById, teremos duas etapas.
1 - iremos pegar(get) o elemento que estiver com ID selecionada, armazenar em uma variável, 
usando (document.getElementeById)
2 - Depois iremos usar criar outra variável para armazenar o texto, usaremos o .textcontent para separar 
o valor do elemento ID ( variavel.textcontent)
*/

//todo/ 1 -  Primeira Parte ( pegando o elemento que tenha a ID )
// observe que selecionamos o elemento ID
let x = document.getElementById("h1")
console.log("Primeira Parte (pegando o elemnto com a ID) " ,x)
//todo/ 2 -  Segunda Parte ( retirando apenas o texto do elemento ja celecionado, no casop a variavel x )
let texto = x.textContent
console.log("TEXTO EXTRAIDO E ARMAZENADO NA VARIÁVEL TEXTO: (", texto, ")")



//! = USANDO CLASS

//! document.getElementsByClassName
// Selecionar todos os elementos com a classe "minhaClasse"
var elementos = document.getElementsByClassName("minhaClasse");
console.log(elementos)
var elementos1 = document.getElementsByClassName("h2");
console.log(elementos1)

// Nesse for //todo: length  - comprimento (serve para contar a quantidade de elementos)
// i++ Operador de Encremento, vai acrecentar +1 acada interação
let i;
for (i in elementos) {
    //imprime a quantidade de classes existentes
    console.log(" for dentro de um elemento de class", elementos[i]);
  
}



//! querySelectorAll
//! SELECIONAR UM ELEMNETO IGUAIS PELA SUA POSIÇÃO

//* OBSERVE QUE PRIMNEIRO SELECIONAMOS TODOS OS ELEMENTOS QUE QUEREMOS SELECIONAR COM O "QUERYSELECTORALL"
//DEPOIS CRIAR UMA VARIÁVEL PARA ARMAZENAR O VALOR DO ELEMNTO
/* 
TODO:  E PARA SELECIONAR BASTA INFORMAR A VARIÁVEL QUE RECEBERÁ A QUERYSELECALL, E ATRAVÉS DE COLCHETES INFORMAR A POSIÇÃO DO ELEMENTO
*/
let elemento = document.querySelectorAll("p"); // seleciona todos os links na página
let elemento0  = elemento[0]; // seleciona o primeiro link
let elemento1 = elemento[1]; // seleciona o segundo link
let elemento2 = elemento[2]; // seleciona o segundo link
let elemento3 = elemento[3]; // seleciona o segundo link

console.log(elemento1)



