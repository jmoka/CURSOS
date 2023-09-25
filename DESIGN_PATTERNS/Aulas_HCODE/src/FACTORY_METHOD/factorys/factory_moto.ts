import Interface_Veiculos from "../interfaces/interface_veiculos";
import pedido_realizado from "../objetos/Abstract_Logistica/Fuct_Abstract_Logistica";
import Motos from "../objetos/veiculos/moto";

export  default class FactoryMoto extends pedido_realizado{

    protected criarTransporte(): Interface_Veiculos {
        return new Motos();
    }

}