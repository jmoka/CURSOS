import { Conectar, FecharConexao } from './Conexao.js';

export async function InserirObjeto(nomeBanco, nomeColecao, obj) {
  try {
    // Conecta ao servidor do MongoDB
    const client = await Conectar();
    const db = client.db(nomeBanco);

    // Obtém a referência para a coleção desejada
    const collection = db.collection(nomeColecao);

    // Insere o objeto na coleção
    await collection.insertMany(obj);

    console.log('Objeto inserido com sucesso varios na coleção.');

  } finally {
    // Fecha a conexão com o servidor
    await FecharConexao();
  }
}