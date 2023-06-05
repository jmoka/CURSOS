import { Conectar, FecharConexao } from './Conexao.js';
// Função para criar o banco de dados
export async function criarBancoDeDados(dbName, colecaoNome) {
  try {
     // Conecta ao servidor do MongoDB
     const client = await Conectar();


     //! Não é possivel criar um Banco sem criar uma coleção !!!
     //* Podemos Fazer de Duas Formas, em duas sintex ou em uma
    
     //todo: Em 1 sintex :  Cria o banco de dados e Cria a Colação
     await client.db(dbName).command({ create: colecaoNome });


     //todo: Em 2 sintex :  Cria o banco de dados e Cria a Colação
    //* Obtém uma referência ao banco de dados
    // const db = client.db(dbName);
    //* Cria uma coleção vazia no banco de dados (o banco de dados será criado automaticamente se não existir)
    // await db.createCollection(colecaoNome);


    console.log(`Banco de dados "${dbName}" criado com sucesso.`);     
    
  } finally {
    // Fecha a conexão com o servidor
    await FecharConexao();
  }
}



