// http.request(options, [callback]):

// Envia uma requisição HTTP para um servidor.

const http = require('http');

const options = {
  hostname: 'api.example.com',
  path: '/data',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log(data.toString());
  });
});

req.end();
