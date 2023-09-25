// ou funcções abstract

import Interface_Veiculos from "../../interfaces/interface_veiculos";

export default abstract class Logistica {
    iniciar(): void{
        const chamado = this.criarTransporte();
        chamado.iniciarRota();

    };
    
   
    protected abstract criarTransporte():Interface_Veiculos;

};


