import { Conectar, FecharConexao } from './Conexao.js';

export async function excluirColecao(nomeBanco, nomeColecao) {
 

  // Conecta ao servidor do MongoDB
   const client = await Conectar();

  // Obtém uma referência ao banco de dados
  const db = client.db(nomeBanco);

  // Exclui a coleção
  await db.collection(nomeColecao).drop();

  console.log(`Coleção '${nomeColecao}' excluída com sucesso do banco '${nomeBanco}'.`);

  // Fecha a conexão com o servidor
  await FecharConexao();
}

