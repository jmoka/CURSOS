class Morador1 {
    readonly id: string = "5tyfy87tigbu89";
    public nome: string = "joão";
    private senha: string = "23457788";
    protected idade: number = 43;


    #trocarsenha(novaSenha){
        this.senha = novaSenha

    }
}

const inquilino1 = new Morador1();

inquilino1.trocarsenha("hghinojno")

// Primeiro teste - Acessando valores
console.log("readonly --- ", inquilino1.id); // Somente leitura, OK, mostra o valor
console.log("public --- ", inquilino1.nome); // Público, todos têm acesso ao valor
console.log("private --- ", inquilino1.senha); // Privado, erro, não deveria mostrar o valor fora da classe
console.log("protected --- ", inquilino1.idade); // Protegido, erro, não deveria mostrar o valor fora da classe
console.log("superSenha --- ", inquilino1.superSenha); // OK, perfeito, senha protegida, não pode ser mostrada fora da classe

console.log("--------------------------------");

// Segundo teste - Alterando valores
inquilino1.id = "nova id - readonly";
inquilino1.nome = "novo nome - público";
inquilino1.senha = "nova senha - privado";
inquilino1.idade = 30;
inquilino1.superSenha = "trocar super senha sem o #"; // Isso lançará um erro porque #superSenha é uma propriedade privada e não pode ser acessada fora da classe.

console.log("readonly --- ", inquilino1.id); // Valor não foi alterado, é somente leitura
console.log("public --- ", inquilino1.nome); // Valor foi alterado, OK, permitido
console.log("private --- ", inquilino1.senha); // Valor foi alterado, não deveria porque é privado
console.log("protected --- ", inquilino1.idade); // Valor foi alterado, não deveria porque é protegido
console.log("superSenha --- ", inquilino1.superSenha); // Aqui não deveria mudar, pois é privado e não pode ser acessado fora da classe.

console.log(inquilino1);
