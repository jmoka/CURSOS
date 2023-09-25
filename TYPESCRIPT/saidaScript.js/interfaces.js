"use strict";
const clientes = {
    nome: "cupu",
    idade: 25,
    endereco: "rua coronel josé do ó, 1645",
};
console.log(clientes);
const fornecedor = {
    nome: "joão",
    idade2: 43,
};
console.log("observe que o sobre nome não foi informado o sobrenome somente o nome é : ", fornecedor.nome, " minha idade é : ", fornecedor.idade2);
const filhos = {
    nome: "joão",
    sobrenome: "tavares",
    idade: 43
};
filhos.nome = "maria";
filhos.idade = 45;
console.log(filhos.nome, filhos.sobrenome, filhos.idade);
//# sourceMappingURL=interfaces.js.map