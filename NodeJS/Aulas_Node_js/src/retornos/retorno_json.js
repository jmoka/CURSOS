const http = require("http");
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
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
  console.log(`Server running at http://${host}:${port}/`);
});







