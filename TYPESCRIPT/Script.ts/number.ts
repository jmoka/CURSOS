let num1 : number;
let num2 : number;
let const_string:string;
let string_convertida: number; 
let somaNumero: number;
let somaNumeroConvertido:number; 
let pontoFlutuante:string;


num1 = 2
num2 = 3

somaNumero = num1*num2;
console.log("A soma entre Numeros é = ", somaNumero);

// Convertendo a string em number


const_string="400"
console.log("Tipo da const_string = ", typeof(const_string));


string_convertida = Number(const_string);
console.log("string_convertida é do tipo=  ", typeof(string_convertida)); 

somaNumeroConvertido = string_convertida * num1;
console.log(`A soma entre Numeros ${num1} e a Estring Convertida ${string_convertida} para Número é = ${somaNumeroConvertido}`);

// Pode ser Inteiro ou Ponto Flutuante
pontoFlutuante = "23.78";

console.log(parseInt(pontoFlutuante)); // transforma para inteiro somente 23
console.log(parseFloat(pontoFlutuante)); // transforrma para ponto flutuante

