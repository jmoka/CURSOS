class Morador{
  [x: string]: string;
    readonly id: string="5tyfy87tigbu89";
    public nome:string="joão";
    private senha:string="23457788";
    protected idade:number = 43;
   #superSenha:string="jhbijnji4y877999y7b9uj"

     
}

// estancia da classe
const inquilino = new Morador;

// Primeiro teste
// Chamar os valores de cada propriedade

console.log("readonly ---  ",inquilino.id); // somente leitora , ok ,, mostra o valor
console.log("public ---  ",inquilino.nome); // puclico todos tem acesso ao valor
console.log("private ---  ",inquilino.senha); // private , erro, não deveria mostrar o valor fora da classe
console.log("protected ---  ",inquilino.idade); // protecte , erro , não deveria mostrar o valor fora da classe
console.log("supersenha ---  ",inquilino.superSenha); // ok , perfeito , senha protegida , não pode er mostrada fpora da classe

console.log("--------------------------------");
// segundo teste
// trocar os valores
inquilino.id = "nova ide - readonly";
inquilino.nome = "novo nome - publico";
inquilino.senha = "nova senha - private";
inquilino.idade = 30;
inquilino.supersenha = "trocar super senha sem o  - #"

console.log("readonly ---  ",inquilino.id); // valor foi alterado, não deveria , pq somente leitura
console.log("public ---  ",inquilino.nome); // valor foi alterado ok, permitido
console.log("private ---  ",inquilino.senha); // valor foi alterado , não deveri pois o valor e privado
console.log("protected ---  ",inquilino.idade); // vallor foi alterado não deveria , por ser protected
console.log("supersenha ---  ",inquilino.supersenha); // aqui não veria mudar, de forma alguma por se tratar de privado do ECMAScript

console.log(inquilino);