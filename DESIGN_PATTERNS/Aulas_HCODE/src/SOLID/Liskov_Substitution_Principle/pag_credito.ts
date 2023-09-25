import Cartao from "./cartao._PAI";

export default class Credito extends Cartao {

    validacao():void{
        console.log("Verificando o limite do crédito...");
    };
   
   }