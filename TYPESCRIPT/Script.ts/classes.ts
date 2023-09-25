class Carro {
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

const carro1 = new Carro("celta", "branco", "KTG45", 2023);
console.log(carro1.cor);
console.log(carro1.ligarveiculo());


class Livro {
    marca: string;
    cor: string;

    constructor(itemMarca: string, itemCor: string) {
        this.marca = itemMarca;
        this.cor = itemCor;
    }
}

const livro1 = new Livro("Pinóquio", "verde");
console.log("dddd",livro1.marca);
console.log("dddd");