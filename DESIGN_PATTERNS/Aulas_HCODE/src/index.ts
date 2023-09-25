import Client from "./SOLID/Single_Responsibility_Principle/Client";
import Notify from "./SOLID/Single_Responsibility_Principle/Notify";
import TypeVehicle from "./SOLID/Open_Closed_Principle/TypeVehicle";
import Carro from "./SOLID/Open_Closed_Principle/Car";
import Moto from "./SOLID/Open_Closed_Principle/Motorcycle";
import Credito from "./SOLID/Liskov_Substitution_Principle/pag_credito";
import Debito from "./SOLID/Liskov_Substitution_Principle/pag_debito";
import Pontos from "./SOLID/Liskov_Substitution_Principle/cartaoPontos_PAI";
import carros from "./SOLID/Interface_Segregation_principie/carros";
import Car from "./SOLID/Open_Closed_Principle/Car";
import Abstracti_Logistica from "./FACTORY_METHOD/objetos/Abstract_Logistica/Fuct_Abstract_Logistica";
import FactorCarros from "./FACTORY_METHOD/factorys/factory_carro";
import FactoryMoto from "./FACTORY_METHOD/factorys/factory_moto";



console.log("================================================");
console.log("=TESTANDO A RENDERIZAÇÃO=");
console.log("================================================");

const nome:string = "ja";
console.log(nome);

console.log("================================================");
console.log("=SINGLE RESPONSIBILITY=");
console.log("================================================");

const cliente = new Client("joao", "jota@gmail.com");
const notificacao = new Notify(cliente);

notificacao.deletandoEmail();
notificacao.envianoEmail();
notificacao.lendoEmail()

cliente.create();
cliente.read();
cliente.update();
cliente.delete();

console.log("================================================");
console.log("=OPEN CLOSED=");
console.log("================================================");

let type = TypeVehicle.CAR;
let veiculo;
if (type === TypeVehicle.CAR){
    veiculo =new Carro("preto",2023, 1.8, 6, 4);
}else if (type === TypeVehicle.MOTORCYCLE){
    veiculo =new Moto("preto",2023, 1.8);
}


console.log("================================================");
console.log("=LISKOV=");
console.log("================================================");

const credito = new Credito();
const debito = new Debito();
const pontos = new Pontos()

credito.validacao();
credito.pagamento();

console.log("================================================");
debito.validacao();
debito.pagamento();

console.log("==VERIFICAÇÃO DOS PONTOS===");
pontos.validacao()
pontos.pagamento();

console.log("================================================");
console.log("=I=");
console.log("================================================");

const car = new carros(4,4,true,"branco", 2.0, "terrestre", "gasolina", 4) 

console.log("================================================");
console.log("=FACTORY METHOD=");
console.log("================================================");



// VARIAVEL DE PROCESSOS - VARIAVEL NATIVA 
declare var process:any;
let logistica: Abstracti_Logistica;
if (process.argv.includes("--Uber")){
    logistica = new FactorCarros();
} else if (process.argv.includes("--Ifood")){
    logistica = new FactoryMoto();
}else{
    console.log("Escolha um Parâmetro");
}

if (logistica){
    logistica.iniciar();
}




