import { Conectar, FecharConexao } from './Conexao.js';

// Função para excluir um banco de dados
export async function excluirBancoDeDados(dbName) {
  try {
    // Conecta ao servidor do MongoDB
    const client = await Conectar();

    // Exclui o banco de dados
    await client.db(dbName).dropDatabase();

    console.log(`Banco de dados '${dbName}' excluído com sucesso.`);
  } finally {
    // Fecha a conexão com o servidor
    await FecharConexao();
  }
}
