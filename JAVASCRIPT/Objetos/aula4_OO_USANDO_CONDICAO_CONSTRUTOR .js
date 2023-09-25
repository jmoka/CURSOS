//! USANDO CONDICIONAIS NA CLASSE CONSTRUTORA

// ORIENTAÇÃO A OBJETO
// MÉTODO TRADICIONAL

// SINTAX
// IMPORTANTE INICIAR COM LETRA MAIUSCULA
//! PODEMOS TAMBÉM DECLARAR CONDIÇÕES NO CONSTRUTOR

class NomeClasse{
    nome;
    idade;
    altura;
    // MÉTODO CONSTRUTOR
    constructor(nome, idade, altura){
        this.nome=nome
        if (idade>=18){this.idade = "maior de idade"
    }else{
        this.idade = "menor de idade"
    }
        this.altura=altura
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

