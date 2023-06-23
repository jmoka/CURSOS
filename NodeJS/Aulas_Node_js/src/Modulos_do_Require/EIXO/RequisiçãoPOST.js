const axios = require('axios');
// Importa o módulo 'axios' para fazer requisições HTTP.

// instalar o pacote com comando 
// npm install axios

axios.post('https://jsonplaceholder.typicode.com/posts',( 
    
{
    name: 'João luiz',
    username: 'Silva Tavares',
    email: 'jmokatavares@gmail.'
},
{
    name: 'Suely Pojo',
    username: 'Chagas Tavares',
    email: 'Suely@gmail.'
    }
))
  // Realiza uma requisição HTTP POST para a URL especificada, enviando um objeto como corpo da requisição.
  .then(response => {
    // Quando a requisição é concluída com sucesso, a função 'then' é executada, recebendo a resposta como parâmetro.

    console.log(response.data);
    // Imprime no console o corpo da resposta, acessado pela propriedade 'data' do objeto 'response'.
  })
  .catch(error => {
    // Em caso de erro na requisição, a função 'catch' é executada, recebendo o erro como parâmetro.

    console.error(error);
    // Imprime no console o erro ocorrido.
  });
