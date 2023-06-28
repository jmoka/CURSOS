const express = require('express');
const app = express();

// Middleware para fazer o parsing do corpo da requisição como JSON
app.use(express.json());

// Rota GET para listar todos os usuários
app.get('/', (req, res) => { 
  // Simulando uma lista de usuários
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ];
  res.json(users);
});

// Rota POST para criar um novo usuário
app.post('/', (req, res) => {
  // Simulando a criação de um novo usuário
  const newUser = {
    id: 4,
    name: req.body.name
  };
  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log('Servidor em execução na porta 3000');
});
