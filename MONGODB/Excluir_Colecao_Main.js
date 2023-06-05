import {excluirColecao} from './Excluir_Colecao.js'

// Exemplo de uso
const nomeBanco = 'Banco_teste';
const nomeColecao = 'coleção_Teste';

excluirColecao(nomeBanco, nomeColecao).catch(console.error);