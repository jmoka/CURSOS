//! MÉTODOS
//* OS MÉTODOS SÃO FUNÇÃO DENTRO DA CLASSE QUE SERÃO SER CHAMAS PARA EXECUTAR UMA DETERMINADA TAREFA

// ORIENTAÇÃO A OBJETO
// MÉTODO TRADICIONAL

// SINTAX
// IMPORTANTE INICIAR COM LETRA MAIUSCULA
//! PODEMOS TAMBÉM DECLARAR CONDIÇÕES NO CONSTRUTOR

class NomeClasse{

    //? MÉTODO CONSTRUTOR
    constructor(nome, idade, altura){
        this.nome=nome
        if (idade>=18){this.idade = "maior de idade"
    }else{
        this.idade = "menor de idade"
    }
        this.altura=altura
    }

    //? MÉTODOS
    info(){
        console.log("======SEM USAR TEMPLATE STRING===============")
        console.log("Informações do Objeto")
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("Altura: "+ this.altura)
        console.log("=====================")

        console.log("======USANDO TEMPLATE STRING===============")
        // TEMPLATE STRING USASE AS CRASES
        console.log("Informações do Objeto")

        console.log(`
        Nome: ${this.nome}
        Idade: ${this.idade}
        Altura: ${this.altura}
        `)        
        console.log("=====================")
    }

}

// PARA INSTANCIAR A CLSSE TEMOS QUE CHAMAR O FUNÇÃO NEW E O NOME DA CLASSE 
// NEW INSTANCIA A NOVA CLASSE E CHAMA O MÉRODO CONSTRUTOR
let novoObjetos = new NomeClasse("joão", 19, 1.80)

// APÓS INSTANCIAR PODEMOS MANIPULAR

console.log(novoObjetos.nome)
console.log(novoObjetos.idade)
console.log(novoObjetos.altura)
console.log(novoObjetos)

//! CHAMANDO O MÉTODO 
//INFO
novoObjetos.info()

