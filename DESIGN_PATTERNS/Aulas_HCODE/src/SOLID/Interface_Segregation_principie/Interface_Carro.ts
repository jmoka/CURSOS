import I_Veiculos from "./Interface_veiculos";

export default interface I_Carros extends I_Veiculos{

    configuracao_carro(
        portas:number,
        acentos:number,
        teto_solar:boolean,
    ):void;
}