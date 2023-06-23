// Importa o módulo 'http', que é um módulo nativo do Node.js usado para criar servidores HTTP.
const http = require('http');

// Cria um servidor HTTP utilizando a função createServer do módulo 'http'.
// O callback passado para createServer é executado sempre que uma requisição é feita ao servidor.
// veja nos módolos as funções do http
const server = http.createServer((req, res) => {
  // O callback recebe dois parâmetros: a requisição (req) e a resposta (res).

  // Define o cabeçalho da resposta HTTP.
  // Neste exemplo, é definido o status 200 (OK) indicando que a requisição foi bem-sucedida,
  // e o 'Content-Type' é definido como 'text/plain' para indicar que a resposta contém texto simples.
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Finaliza a resposta enviando o conteúdo 'Servidor HTTP funcionando!'
  // Após o 'end', a resposta é enviada de volta ao cliente e a conexão é encerrada.
  res.end('Servidor HTTP funcionando!');
});

// Inicia o servidor e faz com que ele escute na porta 3000.
server.listen(3000, () => {
  // Quando o servidor é iniciado, o callback passado para o método listen é executado.
  // Neste exemplo, ele imprime a mensagem informando que o servidor está em execução na porta 3000.
  console.log('Servidor rodando na porta 3000');
});



/*
Um servidor HTTP é responsável por receber solicitações HTTP de clientes (como navegadores da web) e fornecer respostas a essas solicitações. Ele é um componente fundamental para a comunicação entre clientes e servidores na web.

A função principal de um servidor HTTP é receber solicitações HTTP de clientes e processá-las. Isso envolve interpretar a solicitação recebida, tomar as ações apropriadas com base nos dados da solicitação e, em seguida, enviar uma resposta de volta ao cliente.

Os servidores HTTP permitem que você hospede aplicativos e sites da web, oferecendo serviços e recursos aos usuários que acessam esses aplicativos. Eles podem ser usados para fornecer conteúdo estático (como arquivos HTML, CSS, imagens) ou para executar aplicativos dinâmicos (usando frameworks web como Express, Flask, Django etc.) que geram respostas personalizadas com base nas solicitações recebidas.

Além disso, os servidores HTTP podem implementar rotas, autenticação, autorização, manipulação de formulários, APIs e muitos outros recursos para criar aplicativos e serviços web completos.

Em resumo, um servidor HTTP permite que você forneça conteúdo e serviços via web, respondendo às solicitações HTTP dos clientes e fornecendo as respostas apropriadas.

*/