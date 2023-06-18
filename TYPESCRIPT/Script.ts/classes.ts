class Carro {
    marca: string;
    cor: string;
    placa: string;
    ano: number;

    constructor(marca: string, cor: string, placa: string, ano: number) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }
}

const carro1 = new Carro("celta", "branco", "KTG45", 2023);
console.log(carro1);

class Livro {
    marca: string;
    cor: string;

    constructor(itemMarca: string, itemCor: string) {
        this.marca = itemMarca;
        this.cor = itemCor;
    }
}

const livro1 = new Livro("Pinóquio", "verde");
console.log(livro1);
