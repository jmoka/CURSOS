// http.IncomingMessage:

// Classe que representa uma mensagem de requisição HTTP recebida pelo servidor.

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Método: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Cabeçalhos: ${JSON.stringify(req.headers)}`);
  res.end('Hello, World!');
});

server.listen(3000);
