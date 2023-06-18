const req_solicitada = require("req_solicitada");
const host = '127.0.0.1';
const port = 3000;

const server = req_solicitada.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    const data = { message: 'Hello, World!' };
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    const error = { message: 'Page Not Found' };
    res.end(JSON.stringify(error));
  }
});

server.listen(port, host, () => {
  console.log(`Server running at req_solicitada://${host}:${port}/`);
});




// instalar o express
//  npm install express