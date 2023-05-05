/*
! FOR
 é uma estrutura de controle que permite executar um bloco de código um determinado número de vezes, 
 com base em uma condição e em um contador.

 *SINTAX
 for (início; condição; incremento) {
   bloco de código a ser executado enquanto a condição for verdadeira
}cls


*/
//todo:/ Nesse caso criamos uma variável contador que   
let contador;
for(contador=0; contador<5; contador++){
    console.log(contador)
}

    
//todo:/ Outro Exemplo
/* 
*i -  Indica o indice
Então i indice é no momento 0;
* Se faz uma condição
onde o loop vai parar quando a mesma for Falsa
* Encremento ( ação enquanto a condição for verdadeira)
Enquanto a condição determinada  for verdadeira, será realizado a ação,
essa ação pode ser com qualquer operador
* Em seguida podemos retornar o valor de i 

*obs: Inicia a contagem do indece 0

*/
//*EX1 ( Encremento )
for (i=3; i<20;i++){
    console.log(i)
}

//*EX1 ( Decremento )
for (i=10; i>0;i--){
   console.log(i)
}

//*EX1 ( Soma )
for (i=0; i<10; i+=1){
  console.log(i)
}

//*EX1 ( Subtração )
for (i=10; i>0; i-=1){
  console.log(i)
}

//*EX1 ( Multiplicar )
for (i=1; i<6; i*=2){
  console.log(i)
}

//*EX1 ( Dividir )
for (i=10; i>2; i/=2){
  console.log(i)
}


//! EX1 ( FOR simples - ARRAY )
//! Usando FOR simples para percorrer uma ARRAY E RETORNA O INDECES DISPONIVEIS NA ARRAY
//* RETORNANDO O INDICE
//! OBSERVAÇÃO : INICIA COM O INDICE INFORMADO NA VARIÁVEL i, E TERMINA QUANDO A CONDIÇÃO FORM FALSA RETORNANDO OS INDICES
//OU SEJA NESSE CASO VAI RETORNAR DE 0 A 5 POIS TEMOS 6 ELEMENTOS
//*IMPORTANTE VERIFICAR QUE UMA ARRAY COMPORTA VARIOS TRIPOS DE DADOS
//*FOR SIMPLES
const variavel = 50
const myArray=["a",1.2,"d",3,variavel,6];
for (let i=0; i< myArray.length; i++){
  console.log(i)
}



//! EX2 ( FOR OF  - ARRAY )
//! Usando FOR OF  para percorrer uma ARRAY E RETORNA O SEUS ELEMENTOS DISPONIVEIS NA ARRAY
//* RETORNANDO OS ELEMENTOS ( Laço "for...of" para iterar sobre um array:)
//OU SEJA NESSE CASO VAI RETORNAR TUDO QUE ESTIVER DENTRO DA ARRAY
//*IMPORTANTE VERIFICAR A SUA SINTAX
/*
array
for(i of array);
*/
//*FOR OF
const myArray1 = ['maçã', 5, 'laranja', variavel, "pedro", 1.50];
for (const i of myArray1) {
  console.log(i);
}

//! EX3 ( FOR IN  - ARRAY )
//! Usando FOR IN  para percorrer uma ARRAY E RETORNA O SEUS ELEMENTOS DISPONIVEIS NA ARRAY
//* RETORNANDO OS ELEMENTOS ( Laço "for...in" para iterar sobre as propriedades de um objeto:)
//OU SEJA NESSE CASO VAI RETORNAR TUDO QUE ESTIVER DENTRO DA ARRAY
//*IMPORTANTE VERIFICAR A SUA SINTAX
/*
array
for(i of array);
*/
//*FOR IN ( DESSA FORMA RETORNA O INDICE)
const myArray2 = ['maçã', 5, 'laranja', variavel, "pedro", 1.50];
for (const i in myArray2) {
  console.log(i);
}

//! EX3 ( FOR IN  - OBJETO )
//*FOR IN ( DESSA FORMA RETORNA O AS PROPRIEDADES DO OBJETO)
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

for (const propriedade in pessoa) {
     console.log(propriedade + " = " + pessoa[propriedade])
  }



//! EX4 ( FOR  - PULOS NA INTERAÇÃO )
//*Laço "for" que pula iterações com "continue"
// Ou seja , em determinado pomento a interação passa dando um saldo , com o uso do continui
// No exemplo: 1,2,4,5,6,8,9 , terá um salto no 3 e no 7
  for (let ii = 0; ii < 10; ii++) {
    if (ii === 3 || i === 7) {
      continue;
    }
    console.log(ii);
  }

  //! EX5 ( FOR  - COM BREACK , PREMATURAMENTE )

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log(i);
  }