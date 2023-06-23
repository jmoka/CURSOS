
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  try {
    if (req.url === '/teste') { // informa a pagina que será chamado, podenso ser somente a / para pargina inicial
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!\n');
    } else if (req.url === '/about') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('About Page\n');
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Page Not Found\n');
    }
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`O banco está conectado em http://${hostname}:${port}/`);
});