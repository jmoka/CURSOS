import {InserirObjeto} from "./Inserir_UM_Obj_Colecao.js"

// Exemplo de uso:
const obj = {
  nome: 'João',
  idade: 30,
  email: 'joao@example.com'
}

const nomeColecao = 'Colecao_YYY';
const nomeBanco = "Banco_YYY";

InserirObjeto(nomeBanco, nomeColecao, obj).catch(console.error);
