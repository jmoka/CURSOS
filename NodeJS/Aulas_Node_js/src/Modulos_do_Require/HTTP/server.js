// http.Server:

// Classe que representa um servidor HTTP

const http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000);
