// http.get(options, [callback]):

// Faz uma requisição HTTP GET simplificada.

const http = require('http');

http.get('http://api.example.com/data', (res) => {
  console.log(`Status: ${res.statusCode}`);
  res.on('data', (data) => {
    console.log(data.toString());
  });
});
