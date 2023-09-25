"use strict";
var _Morador1_instances, _Morador1_trocarsenha;
class Morador1 {
    constructor() {
        _Morador1_instances.add(this);
        this.id = "5tyfy87tigbu89";
        this.nome = "joão";
        this.senha = "23457788";
        this.idade = 43;
    }
}
_Morador1_instances = new WeakSet(), _Morador1_trocarsenha = function _Morador1_trocarsenha(novaSenha) {
    this.senha = novaSenha;
};
const inquilino1 = new Morador1();
inquilino1.trocarsenha("hghinojno");
console.log("readonly --- ", inquilino1.id);
console.log("public --- ", inquilino1.nome);
console.log("private --- ", inquilino1.senha);
console.log("protected --- ", inquilino1.idade);
console.log("superSenha --- ", inquilino1.superSenha);
console.log("--------------------------------");
inquilino1.id = "nova id - readonly";
inquilino1.nome = "novo nome - público";
inquilino1.senha = "nova senha - privado";
inquilino1.idade = 30;
inquilino1.superSenha = "trocar super senha sem o #";
console.log("readonly --- ", inquilino1.id);
console.log("public --- ", inquilino1.nome);
console.log("private --- ", inquilino1.senha);
console.log("protected --- ", inquilino1.idade);
console.log("superSenha --- ", inquilino1.superSenha);
console.log(inquilino1);
//# sourceMappingURL=teste_encapsulamentos.js.map