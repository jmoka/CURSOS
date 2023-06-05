import { Conectar, FecharConexao } from './Conexao.js';

export async function RenomearColecao(nomeBanco, nomeColecaoAntiga, nomeColecaoNova) {
  try {
    // Conecta ao servidor do MongoDB
    const client = await Conectar();
    const db = client.db(nomeBanco);

    // Renomeia a coleção
    await db.renameCollection(nomeColecaoAntiga, nomeColecaoNova);

    console.log(`A coleção '${nomeColecaoAntiga}' foi renomeada para '${nomeColecaoNova}' no banco de dados '${nomeBanco}'.`);

  } finally {
    // Fecha a conexão com o servidor
    await FecharConexao();
  }
}