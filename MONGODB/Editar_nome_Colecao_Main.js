import {RenomearColecao} from "./Editar_nome_Colecao.js"

// Exemplo de uso:
const nomeBanco = 'Banco_YYY';
const nomeColecaoAntiga = 'Colecao_YYY';
const nomeColecaoNova = 'Colecao_PPP';

RenomearColecao(nomeBanco, nomeColecaoAntiga, nomeColecaoNova).catch(console.error);