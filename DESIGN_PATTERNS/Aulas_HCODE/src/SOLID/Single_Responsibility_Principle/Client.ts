
export default class Client {
    nome: string;
    email: string;

    constructor (nome:string, emial:string) {

        this.nome = nome;
        this.email = emial;
    }
   

    create(): void {
        console.log(`criando cliente : ${this.nome}  com email: ${this.email}`)
        

    }

    read(): void {
        console.log(`lendo cliente : ${this.nome}  com email: ${this.email}`)

    }

    update(): void {
        console.log(`atualizando cliente : ${this.nome}  com email: ${this.email}`)

    }

    delete(): void {
        console.log(`deletando cliente : ${this.nome}  com email: ${this.email}`)

    }

}
