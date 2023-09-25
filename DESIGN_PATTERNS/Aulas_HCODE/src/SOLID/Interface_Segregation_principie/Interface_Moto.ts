import I_Veiculos from "./Interface_veiculos";

export default interface I_Motos extends I_Veiculos{
    configuracao_moto(
        partida_eletrica:boolean,
        
    ):void;
}