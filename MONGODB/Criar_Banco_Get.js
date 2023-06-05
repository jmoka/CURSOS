import { criarBancoDeDados } from './Criar_Banco_Set.js';

// Chame a função createCollection e passe o nome do banco de dados desejado e o nome da coleção
const NovoBanco ="Banco_YYY"
const NomeColecao = "Colecao_YYY"
criarBancoDeDados(NovoBanco, NomeColecao).catch(console.error);