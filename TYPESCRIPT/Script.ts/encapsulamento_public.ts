class Carro2 {
    public marca: string;
    cor: string;
    placa: string;
    ano: number;

    constructor(marca: string, cor: string, placa: string, ano: number) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }

    public ligarveiculo(): boolean {
        return false
    }
}

const Carro21 = new Carro2("celta", "branco", "KTG45", 2023);
console.log(Carro21.cor);
console.log(Carro21.ligarveiculo());


class Livro2 {
    marca: string;
    cor: string;

    constructor(itemMarca: string, itemCor: string) {
        this.marca = itemMarca;
        this.cor = itemCor;
    }
}

const Livro21 = new Livro2("Pinóquio", "verde");
console.log("dddd",Livro21.marca);
console.log("dddd");