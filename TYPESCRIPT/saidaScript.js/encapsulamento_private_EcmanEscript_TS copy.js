"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Moto_ligar, _Triciclo_ligar;
class Moto {
    constructor() {
        this.ignicao = "123";
        _Moto_ligar.set(this, "098");
    }
    mostarligar() {
        return __classPrivateFieldGet(this, _Moto_ligar, "f");
    }
}
_Moto_ligar = new WeakMap();
class Triciclo extends Moto {
    constructor() {
        super(...arguments);
        _Triciclo_ligar.set(this, "567");
        this.parar = "rrr";
    }
    mostrarLigar2() {
        return __classPrivateFieldGet(this, _Triciclo_ligar, "f");
    }
}
_Triciclo_ligar = new WeakMap();
const honda = new Moto;
console.log(honda);
console.log(honda.mostarligar());
const triciclo_top = new Triciclo;
console.log(triciclo_top);
console.log(triciclo_top.mostarligar());
console.log(triciclo_top.mostrarLigar2());
console.log("DANDO ERRO O TYPESCRIP MESMO ASSIM O VALOR É RECUPERADO ==>", honda.ignicao);
console.log("DANDO ERRO O ECMANSCRIP , DESSA FORMA NÃO É RECUPERADO O VALOR ==>", honda.ligar);
//# sourceMappingURL=encapsulamento_private_EcmanEscript_TS%20copy.js.map