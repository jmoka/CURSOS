//! INSTANCIANDO CLASS COM PARAMETRO
// ORIENTAÇÃO A OBJETO
// MÉTODO TRADICIONAL
// SINTAX
// IMPORTANTE INICIAR COM LETRA MAIUSCULA
class NomeClasse{
    // MÉTODO CONSTRUTOR
    constructor(nome, idade, altura){
        this.nome=nome
        this.idade=idade
        this.altura=altura
    }
}
// PARA INSTANCIAR A CLSSE TEMOS QUE CHAMAR O FUNÇÃO NEW E O NOME DA CLASSE 
// NEW INSTANCIA A NOVA CLASSE E CHAMA O MÉRODO CONSTRUTOR
let novoObjetos = new NomeClasse("joão", 12, 1.80)
// APÓS INSTANCIAR PODEMOS MANIPULAR
console.log(novoObjetos.nome)
console.log(novoObjetos.idade)
console.log(novoObjetos.altura)
console.log(novoObjetos)