import {InserirObjeto} from "./Inserir_VARIOS_Obj_Colecao.js"


// Exemplo de uso:
const obj = [{
  nome: 'João',
  idade: 30,
  email: 'joao@example.com'
},
{
  nome: 'MARIA',
  idade: 40,
  email: 'maria@example.com'
},
{
  nome: 'JOSE',
  idade: 50,
  email: 'jose@example.com'
}];

const nomeBanco = "Banco_YYY";
const nomeColecao ='Colecao_PPP';


InserirObjeto(nomeBanco, nomeColecao, obj).catch(console.error);
