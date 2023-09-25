class Carro3 {
    public marca: string;
    protected cor: string;
    placa: string;
    ano: number;

    constructor(marca: string, cor: string, placa: string, ano: number) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }

    mudarCor(): void {
      console.log(this.cor = "yellow")        
    }

    public mudancas():void{
      this.mudarCor();
      this.mudarPlaca();
    }

    protected mudarPlaca(){
        console.log(this.placa = "23456")  
    }
    
}

const Carro31 = new Carro3("celta", "branco", "KTG45", 2023);
console.log(Carro31)
console.log(Carro31.mudancas());
console.log(Carro31)

