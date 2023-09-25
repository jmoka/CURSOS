/*
Uma função geradora em JavaScript é uma função especial que permite a criação de iteradores de maneira 
mais simples e concisa. Ela é declarada usando a sintaxe function* e contém um ou mais pontos de 
suspensão marcados com a palavra-chave yield.

O iterador gerado por uma função geradora pode ser pausado e retomado durante sua execução, permitindo 
a geração de sequências de valores sob demanda, em vez de gerá-los todos de uma vez. Isso é especialmente 
útil quando você está lidando com grandes conjuntos de dados ou tarefas que podem levar tempo para serem 
concluídas.
*/

function* cores(){
    const valor = yield "Digite um valor:";
    yield `Você digitou: ${valor}`;
    yield 'azul'
    yield "preto"
    yield "amarelo"
    yield "roxo"
    yield "verde"

    yield `Você digitou: ${valor}`;
    yield 'azul'
    yield "preto"
    yield "amarelo"
    yield "roxo"
    yield "verde"
   
}
const itc = cores();
console.log(itc.next().value);
console.log(itc.next(12).value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);

// USANDO UM FOR


for (let i = 0; i < 7; i++) {
    console.log(itc.next().value);
}

console.log("================================================");

for (let c of itc){
    console.log("usando o for  ,", c)
}


console.log("================================================") 

// função que retorna um valor numero todas as vezes que for chamada

function* contador(){
    let i = 0;
    while (true) {
        yield i++;
    }
}

const itc2 = contador();
console.log(itc2.next().value); // primeira chamada
console.log(itc2.next().value); // segunda chamada
console.log(itc2.next().value); // terceira chamada

for(let c  of itc2){
    console.log(c);
    break
}
