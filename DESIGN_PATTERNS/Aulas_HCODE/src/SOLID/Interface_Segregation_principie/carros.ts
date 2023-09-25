import I_Carros from "./Interface_Carro";

export default class Carro implements I_Carros{

         portas: number;
         acentos: number; 
         teto_solar: boolean;
         cor: string;
          motor: number; 
         tipo: string;
         combustivel: string; 
         quantidade_passageiros: number

    constructor(
        portas: number, 
        acentos: number, 
        teto_solar: boolean,
        cor: string, 
        motor: number, 
        tipo: string, 
        combustivel: string, 
        quantidade_passageiros: number

    ){
        this.configuracao_carro(portas, acentos, teto_solar); 
        this.configuracao_Geral(cor, motor, tipo, combustivel, quantidade_passageiros)    

    }

    configuracao_carro(portas: number, acentos: number, teto_solar: boolean): void {

        this.portas=portas,
        this.acentos=acentos,
        this.teto_solar=teto_solar
        
        this.ligar()
        
    }
    ligar(): void {
        console.log("Carro ligado para teste");
        this.desligar()
    }
    desligar(): void {
        console.log("carro Desligar");
    }
    configuracao_Geral(cor: string, motor: number, tipo: string, combustivel: string, quantidade_passageiros: number): void {
       console.log(`carro da cor ${cor},teeto_solar${this.teto_solar}, acentos${this.acentos}, portas${this.portas}, motor ${motor}, tipo ${tipo}, combustivel ${combustivel}, quantidaded ${quantidade_passageiros}`);
    }
    
}