import {Conectar, FecharConexao} from './Conexao.js'

export async function ConcsultarItem(nomeBanco, nomeColecao, obj){
try{
    const client =  await Conectar();
const db = client.db(nomeBanco);
const colecao = db.collection(nomeColecao)
// {} informamos que queremos buscar com a seguinte sinitax : nomeCampo:""
// Exemplo: .findOne({ nome: "joão" , email: "jose@gmail.com"})
const consulta  = await colecao.findOne(obj)
console.log(consulta)
console.log(consulta.nome)
console.log(consulta.idade)
console.log(consulta.email)
console.log("Consulta Realizada Com Sucesso")
}catch{
    console.log("Erro na Consulta Realizada")
}finally{
    await FecharConexao()
}
}   


   


