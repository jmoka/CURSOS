"use strict";
class Carro3 {
    constructor(marca, cor, placa, ano) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }
    mudarCor() {
        console.log(this.cor = "yellow");
    }
    mudancas() {
        this.mudarCor();
        this.mudarPlaca();
    }
    mudarPlaca() {
        console.log(this.placa = "23456");
    }
}
const Carro31 = new Carro3("celta", "branco", "KTG45", 2023);
console.log(Carro31);
console.log(Carro31.mudancas());
console.log(Carro31);
//# sourceMappingURL=encapsulamento_protected.js.map