"use strict";
var _Morador_superSenha;
class Morador {
    constructor() {
        this.id = "5tyfy87tigbu89";
        this.nome = "joão";
        this.senha = "23457788";
        this.idade = 43;
        _Morador_superSenha.set(this, "jhbijnji4y877999y7b9uj");
    }
}
_Morador_superSenha = new WeakMap();
const inquilino = new Morador;
console.log("readonly ---  ", inquilino.id);
console.log("public ---  ", inquilino.nome);
console.log("private ---  ", inquilino.senha);
console.log("protected ---  ", inquilino.idade);
console.log("supersenha ---  ", inquilino.superSenha);
console.log("--------------------------------");
inquilino.id = "nova ide - readonly";
inquilino.nome = "novo nome - publico";
inquilino.senha = "nova senha - private";
inquilino.idade = 30;
inquilino.supersenha = "trocar super senha sem o  - #";
console.log("readonly ---  ", inquilino.id);
console.log("public ---  ", inquilino.nome);
console.log("private ---  ", inquilino.senha);
console.log("protected ---  ", inquilino.idade);
console.log("supersenha ---  ", inquilino.supersenha);
console.log(inquilino);
//# sourceMappingURL=encapsulamento_READONLY_TS.js.map