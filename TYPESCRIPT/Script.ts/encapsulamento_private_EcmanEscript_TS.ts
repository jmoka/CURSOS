class Moto{
    private ignicao:string="123"; // TS
    #ligar:string="098";


    mostarligar():string{
      return this.#ligar
    }
         

}

// Quando se extend de uma classe uma propriedade privada no typescript não é possivel acessar ,
// mas ja no o private do EcmasScript isso é possivel
class Triciclo extends Moto{

    #ligar="567"
   // ignicao = "444"
   parar = "rrr"

   mostrarLigar2():string{
     return this.#ligar
   }

}

const honda = new Moto();
console.log(honda)
console.log(honda.mostarligar())

const triciclo_top = new Triciclo();

console.log(triciclo_top)
console.log(triciclo_top.mostarligar())
console.log(triciclo_top.mostrarLigar2())

// console.log("DANDO ERRO O TYPESCRIP MESMO ASSIM O VALOR É RECUPERADO ==>", honda.ignicao) // DANDO ERRO O TYPESCRIP MESMO ASSIM O VALOR É RECUPERADO
// console.log("DANDO ERRO O ECMANSCRIP , DESSA FORMA NÃO É RECUPERADO O VALOR ==>", honda.ligar) // DANDO ERRO O ECMANSCRIP , DESSA FORMA NÃO É RECUPERADO O VALOR

// OBS:
// O PIVADO DO TYPESCRIP NÃO É BEM SEGURO , MAS O # DO ECMANSCRIP E SIM PRIVATE