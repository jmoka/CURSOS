import InterfaceCartao from "./Interface_cartao";


export default class Pontos implements InterfaceCartao {

    validacao():void{
        console.log("Verificando pontos");

    };


    pagamento():void{
        console.log("Pontos Aceitos pagamento realizado");

    };

}