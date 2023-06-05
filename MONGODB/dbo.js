import { Conexao } from './conexao.js';

export async function dbo(nome) {
  const dbo = await Conexao().db
  console.log(`Banco '${nome}' criado com sucesso.`);
 
 }

 dbo("banco_testetttee")
 Conexao.close()