"use strict";
class Carro7 {
    constructor(marca, cor, placa, ano) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }
    mudarCor() {
        console.log(this.cor = "yellow");
    }
    mudancasPrivadas() {
        this.mudarCor();
        this.mudarPlaca();
    }
    mudarPlaca() {
        console.log(this.placa = 23456999999);
    }
    mudancasPublicas() {
        this.placa = 99999999;
        this.cor = "azul";
        console.log(this.placa, this.cor);
        console.log(this.marca = "celta");
        console.log(this.ano = 2022);
        console.log(this.mudancasPrivadas());
    }
}
const fusca = new Carro7("fusca", "preto", 234678, 2023);
console.log(fusca);
fusca.marca = "celta";
fusca.ano = 2022;
fusca.mudancasPublicas();
//# sourceMappingURL=encapsulamento_private%20copy.js.map