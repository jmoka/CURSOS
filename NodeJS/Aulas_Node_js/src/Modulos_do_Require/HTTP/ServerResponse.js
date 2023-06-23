// http.ServerResponse:

// Classe que representa uma resposta HTTP enviada pelo servidor.

const http = require('http');

// Importa o módulo 'http' do Node.js.

const server = http.createServer((req, res) => {
  // Cria um servidor HTTP utilizando a função createServer do módulo 'http'.
  // O callback passado para createServer é executado sempre que uma requisição é feita ao servidor.
  
  res.statusCode = 200;
  // Define o status da resposta como 200, indicando que a requisição foi bem-sucedida.
  
  res.setHeader('Content-Type', 'text/plain');
  // Define o cabeçalho da resposta com o tipo de conteúdo como 'text/plain' (texto simples).
  
  res.write('Hello, ');
  // Escreve "Hello, " como parte da resposta.
  
  res.end('World!');
  // Finaliza a resposta escrevendo "World!" e encerra a conexão com o cliente.
});

server.listen(3000);
// Inicia o servidor e faz com que ele escute na porta 3000.
