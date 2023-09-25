import Interface_Veiculos from "../interfaces/interface_veiculos";
import pedido_realizado from "../objetos/Abstract_Logistica/Fuct_Abstract_Logistica";
import Carros from "../objetos/veiculos/carro";


export default class FactorCarros extends pedido_realizado{

    protected criarTransporte(): Interface_Veiculos {
        return new Carros();
    }

}