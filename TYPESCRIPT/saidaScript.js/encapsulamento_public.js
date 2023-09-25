"use strict";
class Carro2 {
    constructor(marca, cor, placa, ano) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }
    ligarveiculo() {
        return false;
    }
}
const Carro21 = new Carro2("celta", "branco", "KTG45", 2023);
console.log(Carro21.cor);
console.log(Carro21.ligarveiculo());
class Livro2 {
    constructor(itemMarca, itemCor) {
        this.marca = itemMarca;
        this.cor = itemCor;
    }
}
const Livro21 = new Livro2("Pinóquio", "verde");
console.log("dddd", Livro21.marca);
console.log("dddd");
//# sourceMappingURL=encapsulamento_public.js.map