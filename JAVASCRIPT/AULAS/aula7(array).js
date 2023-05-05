"use strict"

//!===============================================
// ARRAYS (lista , podenedo ser qualquer tipo)
//!===============================================

let nome = "pedro"
let listaNumero=[1,2,3]

let lista=['paulo', 'jose', 'pedro', 2, true, 'carlos', nome, listaNumero, [0,9,8] ]
console.log('NOSSA LISTA', lista)


//! BUSCANCO UM ELEMENTO NA ARRAY ATRAVÉS DO INDEX
console.log('LISTA EDEX 2', lista[2])

//! BUSCANDO UM ELEMENTO DE UMA LISTA DENTRO DE OUTRA
console.log('LISTA EDEX 7-0', lista[7][0])
console.log('LISTA EDEX 8-1', lista[8][1])

//! SUBSTITUINDO UM ITEM DE LISTA
lista[7][0] = "TROCOU PARA X"
lista[8][1] = "TROCOU PARA Y"
console.log('LISTA EDEX 7-0', lista[7][0])
console.log('LISTA EDEX 8-1', lista[8][1])


//!  MÉTODOS PARA PROCURAR ELEMENTO EM UMA STRING ( INDEXOF E INCLUDES)

//* MÉDOTO INDEXOF
//SERVE PARA ENCONTRA O INDICE DO LEMENTO QUE ESTA SENDO PROCURADO NA ARRAY
console.log('USANDO O INDEXOF PROCURANDO O NUMERO TRÊS QUE ESTA NO INDICE:',listaNumero.indexOf(2))
//TODO: QUANDO É INFORMADO UM VALOR QUE NÃO EXISTE RETORNA -1


//* MÉTODO FIND
// O MÉTODO FIND USA-SE UMA FUNÇÃO DENTRO DELA QUE TETERMINA TUDO
// BUSCA O ELEMNTO MAIOR QUE 1
let lista23 = [1,3,4,5,6]
console.log("lista original", lista23)
let lst=lista23.find(element => element > 1); // 3
console.log("identificando item na lista index 1", lst)


//* MÉTODO INCLUDES
//SERVE PARA ENCONTRA O LEMENTO AO SER ENCONTRADO RETORNA TRUE, FALSE
console.log('USANDO O INCLUDE O ELEMENTO SE ENCONTRA NA ARRAY:',listaNumero.includes(2))
//TODO: QUANDO O VALOR É ENCONTRATO RETORNA TRUE SE NÃO FALSE

//! INSERINDO VALORES EM UMA ARRAY
//PARA ADICIONARMOS VALORES EM UMA ARRAY
// VAMOS ATUALIZAR A LISTA nun

// * PUSH - NO FINAL DA ARRAY
// INSERENDO NO FINAL DA ARRAY ELEMENTOS NOVOS
let nun=[4,5]
console.log("LISTA ORIGINAL 4,5",nun)
nun.push(8,9,10)
console.log('INSERINDO NO FINAL DA ARRAY 8, 9 10', nun)

// * UNSHIFT - NO INICIO DA ARRAY
// INSERINDO NO INICÍCIO DA ARRAY ELEMENTOS NOVOS
nun.unshift(1,2,3)
console.log('INSERINDO NO INICIO DA ARRAY, 1,2,3', nun)

//* SPLICE - NO MEIO DA ARRAY
//todo: PARA ESSA PROPRIEDADE PRECISAMOS INFORMAR TRÊS PARAMETROS

//* A PARTIR DE QUAL INDICE VAI INICIAR
// O PRIMEIRO DE QUAL POSIÇÃO VAI INICIAL OU SEJA QUAL O INDEX, A PARTIR DE QUAL INDICE VAI INICIAR
//* VAI SER DELETADO ALGUM NUMERO
// A SEGUNDA É O SEGUINTE, VAI SER DELETADO ALGUM NUMERO, APÓS O INDEX, QUANTOS?
//* INFORMAMOS OS NOVOS ELEMENTOS NA ARRAY
// NA TERCEIRA PARTE INFORMAMOS OS NOVOS ELEMENTOS NA ARRAY
//TODO: A PERTIR DO INDEX 5 , NÃO DELETA NENHUM , E INSERE O 6 E O 7
nun.splice(5,0,6,7)
console.log('INSERINDO NO MEIO DA ARRAY, 6,7', nun)


//! REMOVENDO VALORES DA ARRAY
//POP(NO FINAL DA ARRAY), SHIFT(INICIO DA ARRAY), SPAICE(INFORMANDO APENAS DOIS PARAMETROS)
let lista1=[1,2,3,4,5,6]
//* POP(NO FINAL DA ARRAY)
console.log("lista Original", lista1)
console.log("valor retirado da lista ", lista1.pop())
console.log("lista alterada ", lista1)

//* SHIFT (NO INICIO DA ARRAY)
console.log("lista Original", lista1)
console.log("valor retirado da lista ", lista1.shift())
console.log("lista alterada ", lista1)

//* SPAICE(INFORMANDO APENAS DOIS PARAMETROS)
console.log("lista Original", lista1)
// a quantidade de item a ser deletado , passa a contar do proprio item informado como inicio
console.log("valor retirado da lista iniciando pelo index 1 e apagando 1 item no caso o proprio item ", lista1.splice(1,1))
console.log("lista alterada ", lista1)


//! ARRAY DE REFERENCIA
// PASSAMOS MAIS DE UMA INFORMAÇÃO DENTRO DE UMA ARRAY
const filmes=[
    {id:1, filmeNome1:"Dejavu"},
    {id:2, filmeNome2:"De volta para o Futuro"},
    {id:3, filmeNome3:"Matrix"}
]
//todo: os valores são armazenados com referencias e para isso iremos usar o .FIND
// O . FIND E USADO COM UMA FUNÇÃO DENTRO DELE PARA RETORNAR O VALOR
// FOI CRIADO UMA VARIAVEL FilmeEscolhido onde colocamos o filme a ser vefificado
//*informamos a variavel filmes.find e criamos a função chamada filme, essa função retorna a função a array de referencia filmes
// se ele for igual ao valor da variavel filme escolhido
// chamamos a variavel filme encontrado 

// Todo: quando não encontra o valor retorna  undefined
// * Buscabdo Elemento através da ID
let filmeEncontrado=filmes.find(function(filme){
    return filme.id=1
})
console.log("filme escolhido",filmeEncontrado)

// * Buscabdo Elemento através da NOME
let filmeEncontrado1=filmes.find(function(filme){
    return filme.filmeNome2
})
console.log("filme escolhido",filmeEncontrado1)


//! ORDENANDO UMA ARRAY
const myArray = [3, 1, 2];
console.log("LISTA ORIGINAL ", myArray)
// Ordenando o array
myArray.sort(); // [1, 2, 3]
console.log("LISTA ORDENADA " ,myArray )


//! TRANSFORMANDO UMA ARRAY
// PODEMOS TRANSFORMAR UMA ARRAY USANDO OS SEGUINTES MÉTODOS
//* map(), filter(), reduce(), e slice().

const myArray1 = [1, 2, 3, 4,5,6,7];
console.log("LISTA ORIGINAL " ,myArray1 )

// * Usando o método map()
// MULTIPLICA CADA ELEMEMNTO DA ARRAI POR 2
const doubledArray = myArray1.map(element => element * 2); // [2, 4, 6]
console.log("LISTA MODIFICADA COM MAP " ,doubledArray )

// * Usando o método filter()
// FILTRO UTILIZADO É MAIOR QUE 1
const filteredArray = myArray1.filter(element => element > 1); // [2, 3]
console.log("LISTA FILTRADA COM FILTER " ,filteredArray)

// * Usando o método reduce()
// SOMA OS ITENS DA ARRAI OU SEJA , [1, 2,3]  ASOMA É 6
// PÓDEMOS TAMBME SOMAR MAIS UM ELEMNTO SOMANDO COM TODOS OS OUTROS , INFORMANDO QUALQUER NUMERO NO FIM DA FUNÇÃO
const sum = myArray1.reduce((accumulator, current) => accumulator + current, 0); // 6
console.log("LISTA REDUC " ,sum)

// * Usando o método slice()
/*
O método slice() é usado para criar uma nova cópia de uma parte de um array existente, 
sem modificar o array original. Ele recebe dois argumentos opcionais: 
o índice de início e o índice de fim (não incluso) da parte do array que se deseja copiar.

array.slice(start, end)

array é o array original que se deseja copiar uma parte
start é o índice de início da cópia (opcional, default é 0)
end é o índice de fim da cópia (opcional, default é o comprimento do array)
O método retorna um novo array contendo os elementos do array original que estão entre os índices especificados. 
Note que o array original não é modificado.
*/

// * CRIANDO UMA LISTA A PARTIR DE UM INICIO E FIM
const arrayDiferente = myArray1.slice(2, 4); // [2]
console.log("SLICE ARRAY DIFERENTE " ,arrayDiferente)

// * CRIANDO UMA LISTA A IDENTICA
const arrayIgual = myArray1.slice(); 
console.log("SLICE ARRAY IGUAL " ,arrayIgual)



