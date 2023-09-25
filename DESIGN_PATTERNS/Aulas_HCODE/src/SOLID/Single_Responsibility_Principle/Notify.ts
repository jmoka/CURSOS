import Client from "./Client";

export default class Notify {

    constructor(private client: Client) {             
        
    }

    envianoEmail(): void {
console.log(`enviando email ${this.client.email}`);
       
       
    }
    lendoEmail(): void {
        console.log(`lendo email ${this.client.email}`);
       
       
    }
    deletandoEmail(): void {
        console.log(`deletando email ${this.client.email}`);        
       
    }

}