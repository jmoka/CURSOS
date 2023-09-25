
import InterfaceCartao from "./Interface_cartao";
// abstract    => torna esse class abstrata não podendo ser estanciada 
// essa classe fica parecendo uma ingterface , porém podemos criar métodos nessa classe
// pelo fato dessa classe não poder ser estanciada , obria as outras classes extenderem dela
// classe PAI

export default abstract class Cartao implements InterfaceCartao {

    validacao():void{
        console.log("Cartao sendo validado...");

    }
    
    pagamento():void {
            console.log("Pagamento realizado");

    }
}