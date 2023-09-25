import Interface_Veiculos from "../../interfaces/interface_veiculos";


export  default  class Carros implements Interface_Veiculos{
    iniciarRota(): void {
        console.log("INICIANDO A ROTA...");
        this.getCarga();
    };
    getCarga(): void {
        console.log("INDO BUSCAR A CARGA...");
        this.embarque();
    };
    embarque(): void {
        console.log("PASSAGEIRO ABORDO")
        this.entrega();
    };
    entrega(): void {
        console.log("PASSAGEIRO DESEMBARCOU");
    }


}