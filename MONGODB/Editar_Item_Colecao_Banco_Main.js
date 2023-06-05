import { ObjectId } from 'mongodb';
import { Atualizar } from './Editar_Item_Colecao_Banco.js';

// Exemplo de uso da função de atualização de idade
const nomeBanco = 'Banco_YYY';
const nomeColecao = 'Colecao_PPP';
const documentoId = new ObjectId('64763b6f9a1a21e6cfadfac7'); // Substitua pelo ID do documento que deseja atualizar
const novoNome = 'abreu'; // Substitua pelo novo nome desejado
const novaIdade = 50; // Substitua pela nova idade desejada
const novoEmail = 'jddd@gmail.com'; // Substitua pelo novo email desejado

Atualizar(nomeBanco, nomeColecao, documentoId, novoNome, novaIdade, novoEmail).catch(console.error);

