import Cartao from "./cartao._PAI";

export default class Debito extends Cartao{

    validacao(): void {

        console.log("Validar se há saldo suficiente em sua conta...");

    };
    
  
}