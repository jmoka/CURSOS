"use strict";
class Carro {
    constructor(marca, cor, placa, ano) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }
}
const carro1 = new Carro("celta", "branco", "KTG45", 2023);
console.log(carro1);
class Livro {
    constructor(itemMarca, itemCor) {
        this.marca = itemMarca;
        this.cor = itemCor;
    }
}
const livro1 = new Livro("Pinóquio", "verde");
console.log(livro1);
//# sourceMappingURL=classes.js.map