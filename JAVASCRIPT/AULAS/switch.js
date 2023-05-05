/*
! SWITCH: 
É uma estrutura condicional que permite testar diferentes valores e executar diferentes blocos de código 
dependendo desses valores.
*"switch" dentro de parênteses, temos a condição a ser verificada
*“case”, em quantidade equivalente às condições que queremos verificar.
    *"instrução"
    *“break"
* “default”, que será executada caso nenhuma das condições representadas pelos “case” sejam atendidas.

Sua Sintax:

switch(numero1){
 	case 0:
      		instrução1;
      		break;
	case 1:
      		instrução2;
      		break;
	default:
      		instrução3;
     		break;
 }

*/
//! UTILIZANDO O SWITCH SEM USAR CONDICIONAIS
// NESSE CASO A CONDIÇÃO É INFORMADA FORA

let peso = 100

switch (peso) {
    case 69:
      console.log("Desclassificado.");
      break;
    case 80:
        console.log("Categoria Meio Leve");
      break;
    case 90:
        console.log("Categoria Meio Pesado");
      break;
    case 100:
        console.log("Categoria Pesado");
       break;
    default:
        console.log("Super Pesado.");
      break;
  }


  //! UTILIZANDO O SWITCH COM DUAS VARIÁVEIS
// NESSE CASO INFORMAMOS AS DUAS VARIÁVEIS E DENTRO DO PARENTESE DE SWITCH INFORMAMOS A CONDIÇÃO

let poder = 40
let magia = 40

switch (poder+magia) {
    case 69:
      console.log("magia da serpente.");
      break;
    case 80:
        console.log("magia do dragão");
      break;
    case 90:
        console.log("magia do unicornio");
      break;
    case 100:
        console.log("Magia do Fogo");
       break;
    default:
        console.log("Magia suprema.");
      break;
  }


  //! UTILIZANDO O SWITCH COM AS CONDIÇÕES DENTRO DO CASE
// NESSE CASO INFORMAMOS AS DUAS VARIÁVEIS E DENTRO DO PARENTESE DE SWITCH INFORMAMOS A CONDIÇÃO
//*PARA ISSO INFORMAMOS UMA CONDIÇÃO VERDADEIRA EM SWICTH
  let peso1 = 101;
  

switch (true) {
  case (peso1 <= 69):
    console.log("Desclassificado.");
    break;
  case (peso1 <= 70 || peso1  <=79):
    console.log("Categoria Meio Leve");
    break;
  case (peso1 <= 80 || peso1 <= 89):
    console.log("Categoria Meio Pesado");
    break;
    case (peso1 <= 90 || peso1 <= 100 ):
        console.log("Categoria Pesado");
    break;
  default:
    console.log("Super Pesado.");
    break;
}

