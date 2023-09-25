/*
Em TypeScript, o tipo tuple é uma forma específica de array que permite definir o tipo de cada elemento individualmente, 
mantendo a ordem dos tipos. Em outras palavras, um tuple é uma sequência de tipos fixa, onde cada elemento pode ter um 
tipo diferente.

*/

// dessa forma de declata uma tuple , é um array definido a quantidfade de itens e definido quais tipos de itens em cada index  do array
let carro:[string, number, string,];


carro = ["",0,""]
console.log(carro)
carro=["ford",45,"celta"]
console.log(carro)
carro.map(i=>console.log(i))

