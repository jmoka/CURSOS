import { Conectar, FecharConexao } from './Conexao.js';
import { ObjectId } from 'mongodb';

// Função para atualizar os valores de um documento na coleção
export async function Atualizar(nomeBanco, nomeColecao, documentId, novoNome, novaIdade, novoEmail) {
  try {
    // Conecte-se ao servidor do MongoDB
    const client = await Conectar();
    const db = client.db(nomeBanco);

    // Obtenha a referência para a coleção
    const collection = db.collection(nomeColecao);

    // Atualize o documento usando o método updateOne()
    const result = await collection.updateOne(
      { _id: new ObjectId(documentId) }, // Critério de correspondência do documento a ser atualizado
      { $set: { nome: novoNome, idade: novaIdade, email: novoEmail } } // Novos valores para nome, idade e email
    );

    console.log(`${result.modifiedCount} documento(s) atualizado(s) com sucesso.`);

  } finally {
    // Encerre a conexão com o servidor
    await FecharConexao();
  }
}
