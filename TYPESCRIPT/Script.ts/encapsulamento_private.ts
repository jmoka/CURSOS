class Carro7 {
    public marca: string;
    protected cor: string;
    private placa: number;
    public ano: number;

    constructor(marca: string, cor: string, placa: number, ano: number) {
        this.marca = marca;
        this.cor = cor;
        this.placa = placa;
        this.ano = ano;
    }

    private mudarCor(): void {
      console.log(this.cor = "yellow")        
    }

    protected mudancasPrivadas():void{
      this.mudarCor();
      this.mudarPlaca();
    }

    private mudarPlaca(){
        console.log(this.placa = 23456999999)  
    }

    public mudancasPublicas(){
        this.placa = 99999999
        this.cor = "azul"
        console.log(this.placa , this.cor)
        console.log(this.marca = "celta");
        console.log(this.ano=2022)
        console.log(this.mudancasPrivadas());

    }  
    
    
}

const fusca = new Carro7("fusca","preto",234678,2023);
console.log(fusca);
// mudar as propiedades
fusca.marca = "celta";
fusca.ano = 2022;
// somente as propiedades marca e ano que podem ser acessadas de fora da classe por serem publicas
fusca.mudancasPublicas();
// somente esses dois métodos que podem ser chamados de fora da classe por serem publicos
