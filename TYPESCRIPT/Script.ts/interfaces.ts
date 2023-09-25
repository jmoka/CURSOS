interface Tipos{
    nome :string,
    idade : Number,
    endereco:string,
}

const clientes :Tipos = {
    nome :"cupu",
    idade : 25,
    endereco:"rua coronel josé do ó, 1645",

}

console.log(clientes)

//! ITEM OPCIONAL ( ? )
/*QUANDO SE COLOCA O ? APÓS O NOME DA PROPRIEDADE , INDICA QUE ESSA PROPRIEDADE É OPCIONAL E SE NÃO FOR IRFORMADO 
FUNCIOAN NORMALMENTE*/

interface IOpcional{
    nome:string;
    sobreNome?:string; // colocanddo a ? informa que o sobrenome é opcional
    idade2:number;
}

const fornecedor :IOpcional={
    nome:"joão",
    idade2:43,
}
console.log("observe que o sobre nome não foi informado o sobrenome somente o nome é : ", fornecedor.nome, " minha idade é : ", fornecedor.idade2)

//! readonly
/* INFORMA QUE A PROPRIEDADE É SOMENTE LEITURA , NÃO PODENDO SEU VALOR SEU ALTERADO
*/

interface IReadonly{
    nome:string;
    readonly sobrenome:string;
    idade:number;
}

const filhos: IReadonly ={
    nome:"joão",
    sobrenome:"tavares",
    idade:43
}
filhos.nome = "maria";
filhos.idade = 45;

// Observe que a propriedade sobrenome não pode mudar é somente leitura
// filhos.sobrenome = "jose"; 
console.log(filhos.nome, filhos.sobrenome, filhos.idade)


//! INTERFACE COM PARAMETRO FUNÇÕES
/*
USANDO UMA FUNÇÃO DENTRO DA INTERFACE
*/


// função é uma ação - nas funções devemos informar os nome, os parametros e o retorno, se não informar o nome a 
// deve ser feito um função anonima
// somenmte informar ()
interface IFuncoes{

}
