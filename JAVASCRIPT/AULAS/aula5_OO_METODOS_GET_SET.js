//! MÉTODOS GET
//* OS MÉTODOS GET É USADO OBTER OU RETORNAR AS PROPRIEDADES

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

    //? MÉTODO GET - RETORNA O VALOR DE UMA PROPRIEDADE OU ATRIBUTO
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    getAltura(){
        return this.altura
    }
    getInfo(){
        return [this.nome, this.idade, this.altura]
    }

    //? MÉTODO SeT - SETAR OU PASSAR UM NOVO VALOR PARA A PROPRIEDADE
    setNome(nome){
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
    setAltura(altura){
        this.altura = altura
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
console.log("=====APÓS INSTANCIAR PODEMOS MANIPULAR========")
console.log(novoObjetos.nome)
console.log(novoObjetos.idade)
console.log(novoObjetos.altura)
console.log(novoObjetos)
console.log("=====================")
//! CHAMANDO O MÉTODO 
//INFO
novoObjetos.info()


// CHAMANDO OS MÉTODOS GET
console.log("=========CHAMANDO OS MÉTODOS GET============")
console.log(novoObjetos.getNome())
console.log(novoObjetos.getIdade())
console.log(novoObjetos.getAltura())
console.log(novoObjetos.getInfo())
console.log(typeof(novoObjetos.getInfo()))
console.log(novoObjetos.getInfo()[0])
console.log(novoObjetos.getInfo()[1])
console.log(novoObjetos.getInfo()[2])
console.log("=====================")


for (e of novoObjetos.getInfo()){
    console.log(e)
}


// CHAMANDO O METODO SET

console.log(" nome não alterado",novoObjetos.getNome()) // valor não alterado

novoObjetos.setNome("maria") //! alterando valor da propriedade

console.log(" nome alterado", novoObjetos.getNome()) // valor alterado

for (e of novoObjetos.getInfo()){
    console.log(e)
}

console.log(novoObjetos.getNome())
