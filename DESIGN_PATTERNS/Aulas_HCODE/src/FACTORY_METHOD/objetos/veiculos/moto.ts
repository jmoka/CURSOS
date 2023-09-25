import Interface_Veiculos from "../../interfaces/interface_veiculos";


export  default  class Motos implements Interface_Veiculos{
    iniciarRota(): void {
        console.log("ROTA INICIADA...");
        this.getCarga();
    };
    getCarga(): void {
        console.log("INDO BUSCAR A CARGA...");
        this.embarque();

    };
    embarque(): void {
        console.log("MERCADORIA ABORDO...")
        this.entrega();
    };
    entrega(): void {
        console.log("PRODUTO ENTREGUE");
    }

}