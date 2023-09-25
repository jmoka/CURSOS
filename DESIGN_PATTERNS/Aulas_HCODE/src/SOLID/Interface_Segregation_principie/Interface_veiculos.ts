export default interface I_Veiculos{

    ligar():void;

    desligar():void;
    
    configuracao_Geral(
        cor:string,
        motor:number,
        tipo:string,
        combustivel:string,
        quantidade_passageiros:number
    ):void;



}