const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('URL da solicitação:', req.url);
  console.log('Método da solicitação:', req.method);
  console.log('Cabeçalhos da solicitação:', req.headers);

  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});
