

/* ⁡⁣⁢⁢test()⁡⁡	 ⁡⁢⁢⁢Retorna um valor booleano que indica se uma string contém uma correspondência com a 
expressão regular fornecida⁡.*/	

// ⁡⁢⁣⁣Verificar se uma string contém um nome  válido:⁡
var texto = "Bacu Digital";
var reg = /Bacu/;
let resposta = reg.test(texto); // true⁡
console.log(resposta);

// ⁡⁢⁣⁣Verificar se uma string contém um número de telefone válido⁡:
let telefone = "123-456-7890";
let regex = /\d{3}-\d{3}-\d{4}/;
let resultado = regex.test(telefone); // true

// ⁡⁢⁣⁣Verificar se uma string contém apenas letras maiúsculas⁡:
let texto2 = "Mosquirro Brasil";
let regex2 = /^[A-Z]+$/;
let resposta1 = regex2.test(texto2); // False
console.log(resposta1);

// ⁡⁢⁣⁣Verificar se uma string contém letras maiúsculas⁡:
let texto3 = "Mosquirro Brasil";
let regex3 = /[A-Z]/;
let resposta3 = regex3.test(texto3); // True
console.log(resposta3);

// ⁡⁢⁣⁣Substituir todas as ocorrências de uma palavra por outra em uma string:⁡
let texto4 = "O rato roeu a roupa do rei de Roma";
let regex4 = /rato/gi;
let novoTexto = texto4.replace(regex4, "pato");
console.log(novoTexto); // "O gato roeu a roupa do rei de Roma"

// ⁡⁢⁣⁣Verificar se uma string é um endereço de email válido:⁡
let email = "fulanoemai@l.com";
let regex5 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let resultado5 = regex5.test(email); // true
console.log(resultado5);

// ⁡⁢⁣⁣Verificar se uma string contém pelo menos um caractere especial:⁡
let senha = "Senha123#";
let regex6 = /[@#$%^&+=]/;
let resultado6 = regex6.test(senha); // true
console.log(resultado6);

// ⁡⁢⁣⁣Verificar se uma string contém pelo menos um caractere especial:⁡
let placa = "QDW8049";
let regex7 = /^[A-Z]{3}[0-9]{2}[0-9]{2}$/;
let resultado7 = regex7.test(placa); // true
console.log(resultado7);