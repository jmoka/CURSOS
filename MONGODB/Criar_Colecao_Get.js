import { CriarColecao } from './Criar_Colecao_Set.js';

const obj = {
  nome: "joao",
  sobrenome: "tavares333sss"
};
const nomeBanco = "BANCO23";
const nomeColecao = "COLECAO233"; // Coloque o nome da coleção desejada aqui
CriarColecao(nomeColecao, nomeBanco, obj).catch(console.error);

