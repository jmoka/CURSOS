"use strict";
let num1;
let num2;
let const_string;
let string_convertida;
let somaNumero;
let somaNumeroConvertido;
let pontoFlutuante;
num1 = 2;
num2 = 3;
somaNumero = num1 * num2;
console.log("A soma entre Numeros é = ", somaNumero);
const_string = "400";
console.log("Tipo da const_string = ", typeof (const_string));
string_convertida = Number(const_string);
console.log("string_convertida é do tipo=  ", typeof (string_convertida));
somaNumeroConvertido = string_convertida * num1;
console.log(`A soma entre Numeros ${num1} e a Estring Convertida ${string_convertida} para Número é = ${somaNumeroConvertido}`);
pontoFlutuante = "23.78";
console.log(parseInt(pontoFlutuante));
console.log(parseFloat(pontoFlutuante));
//# sourceMappingURL=number.js.map