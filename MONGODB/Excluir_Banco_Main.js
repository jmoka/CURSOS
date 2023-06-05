import { excluirBancoDeDados } from './Excluir_Banco.js';

const dbName = 'BANCO23';
excluirBancoDeDados(dbName).catch(console.error);
