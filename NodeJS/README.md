# Node.js
## Site 
	https://nodejs.org/en
## Versões
### LTS - VERSÂO EM MAIS ANTIGA ( RECOMENDADA PARA INICIAR PROJETO EM PRODUÇÃO )
	https://nodejs.org/dist/v18.16.0/node-v18.16.0-x64.msi
### Current - Versão atual ( Recursos atuais - porrem em testes, ideal para começar um projeto esperimental ou pessoal )
	https://nodejs.org/dist/v20.3.0/node-v20.3.0-x64.msi
### Após a Instalação, abra o prompt de comando e digite o seguinte comando
	node --version
	( Será Apresentado a versão que está instalada )
### Entre no node, digite no prompt 
	node
### Verifique os comando disponíveis, digitando o seguinte comando
	.help
### será Apresentado uma lista de comandos 
	.break Às vezes você fica preso, isso te tira dessa situação
	.clear Alias para .break
	.editor Entrar no modo de edição
	.exit Sair do REPL
	.help Imprimir esta mensagem de ajuda
	.load Carregar código JS de um arquivo para a sessão REPL
	.save Salvar todos os comandos avaliados nesta sessão REPL em um arquivo
### Para sair REPL pode usado os seguintes comandos
	ctrl+c 2x
	.exit
	ctrl+c e ctrl+d

### Carregar o arquivo js criado
#### Abra o prompt e navegue ate a pasta onde encontra-se seu arquivo.js e digite o seguinte comando
	node nome-do-arquivo.js
	(Dessa forma seu arquivo será renderizado e o resultado sairá no prompt)

# Criar um Servidos
## Sites de Apoio
### Cat
	http.cat
#### Usando o codigo do site em nosso projeto

<img src="https://http.cat/[status_code]" alt="HTTP Status Code">
Substitua [status_code] pelo código de status HTTP que você deseja exibir. Por exemplo, se você quiser exibir o gato correspondente ao código de status 404, use:
<img src="https://http.cat/404" alt="HTTP Status Code">

# Crindo o Código do Servidos
## Primmeiro cria-se uma constante na qual irá receber a requizição http através do comando
	const http = require("http")
## Tratar os dados de requizição e de resposta
### Chama-se a função nativa .createServe((req,res) =>{}) , fica assim:
#### É criado o servidor  e quando é recebe uma requizição será armazenado no primeiro parametro (req) e no segundo parametro será armazenado a resposta (res) , cria-se uma arrow-function onde é retornada a resposta
	http.createServe((req, res) =>{
		res.writeHead(200, {"content-type": "text/plain"}); // 
		res.write("resposta teste")
		res.end()

	}).listen(3000)


# Parametros da Requizição
A variável `req` em Node.js é um objeto que representa a solicitação HTTP recebida pelo servidor. Ela contém várias propriedades que fornecem informações sobre a solicitação. Aqui está uma tabela com alguns dos principais parâmetros e propriedades fornecidos pelo objeto `req`:

Aqui está uma lista com exemplos dos parâmetros e propriedades da solicitação `req`, substituindo os números por "##" e removendo o exemplo abaixo:

## `req.url`: 
### A URL da solicitação.
  Exemplo: `console.log(req.url);` // Output: "/" (se a URL da solicitação for "http://example.com/")

## `req.method`: 
### O método HTTP da solicitação (por exemplo, GET, POST, PUT, DELETE).
  Exemplo: `console.log(req.method);` // Output: "GET" (se a solicitação for um GET request)

  Aqui estão exemplos reais de como os métodos HTTP são utilizados em solicitações para interagir com recursos em um servidor:

#### `GET`: 
##### Recupera informações de um usuário específico.
  Exemplo: `GET /api/users/123` - Recupera as informações do usuário com ID 123.

#### `POST`: 
##### Cria um novo usuário no servidor.
  Exemplo: `POST /api/users` - Cria um novo usuário com os dados fornecidos no corpo da solicitação.

#### `PUT`: 
##### Atualiza as informações de um usuário existente.
  Exemplo: `PUT /api/users/123` - Atualiza as informações do usuário com ID 123 com os dados fornecidos no corpo da solicitação.

#### `DELETE`: 
##### Remove um usuário do servidor.
  Exemplo: `DELETE /api/users/123` - Remove o usuário com ID 123 do servidor.

#### `PATCH`: 
##### Realiza uma atualização parcial nas informações de um usuário.
  Exemplo: `PATCH /api/users/123` - Atualiza apenas alguns campos do usuário com ID 123 com os dados fornecidos no corpo da solicitação.

#### `HEAD`: 
##### Recupera apenas os cabeçalhos da resposta de um recurso.
  Exemplo: `HEAD /api/users/123` - Retorna apenas os cabeçalhos da resposta para o usuário com ID 123.

#### `OPTIONS`: 
##### Retorna as opções de comunicação disponíveis para um recurso.
  Exemplo: `OPTIONS /api/users` - Retorna as opções permitidas para interagir com a coleção de usuários.

#### `TRACE`: 
##### Retorna a mensagem de solicitação recebida de volta para o cliente.
  Exemplo: `TRACE /api/test` - Retorna a mensagem de solicitação recebida para fins de teste ou diagnóstico.


## `req.headers`: Os cabeçalhos da solicitação HTTP.
### Exemplo: 

#### Accept: 
##### Especifica os tipos de conteúdo que o cliente aceita.
	Exemplo: console.log(req.headers['accept']); 
	// Output: "application/json, text/html"

#### Content-Type: 
##### Indica o tipo de conteúdo do corpo da solicitação.
Exemplo: console.log(req.headers['content-type']); 
// Output: "application/json"

#### User-Agent: 
##### Identifica o agente de usuário (navegador ou aplicativo) que fez a solicitação.
Exemplo: console.log(req.headers['user-agent']); 
// Output: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36"

#### Authorization: 
##### Fornece credenciais de autenticação para acesso a recursos protegidos.
Exemplo: console.log(req.headers['authorization']); 
// Output: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

#### Cookie: 
##### Contém cookies enviados pelo cliente para o servidor.
Exemplo: console.log(req.headers['cookie']); 
// Output: "session_id=abc123; language=en"

#### Referer (ou Referer): Indica a URL de origem da solicitação.
Exemplo: console.log(req.headers['referer']); 
// Output: "http://example.com/page1"

#### Host: 
#### Especifica o nome do host do servidor.
Exemplo: console.log(req.headers['host']); // Output: "example.com"

#### Origin: 
##### Indica a origem da solicitação em uma solicitação de recurso cruzado (CORS).
Exemplo: console.log(req.headers['origin']); 
// Output: "http://example.com"

#### If-None-Match: 
##### Permite que o servidor retorne o código de status 304 (Not Modified) se a versão em cache do recurso ainda for válida.
Exemplo: console.log(req.headers['if-none-match']); 
// Output: "W/"123456789""

#### If-Modified-Since: 
##### Permite que o servidor retorne o código de status 304 (Not Modified) se o recurso não tiver sido modificado desde a data especificada.
Exemplo: console.log(req.headers['if-modified-since']); 
// Output: "Wed, 29 Sep 2021 10:00:00 GMT"


## `req.params`: Os parâmetros da rota (geralmente usados em rotas dinâmicas).
 Exemplo:
 
  // Rota definida como "/users/:id"
  // Se a URL for "/users/123", então:
  console.log(req.params.id); // Output: "123"
 

## `req.query`: Os parâmetros de consulta da URL (geralmente usados para filtrar ou paginar resultados).
  Exemplo:
  
  // Se a URL for "http://example.com/?page=1&limit=10", então:
  console.log(req.query.page); // Output: "1"
  console.log(req.query.limit); // Output: "10"

### Exempos de query

#### req.query.limit: 
##### Limita o número de resultados retornados.
Exemplo: http://example.com/api/users?limit=10

#### req.query.page: 
#### Especifica a página de resultados desejada.
Exemplo: http://example.com/api/posts?page=2

#### req.query.sort: 
##### Define a ordenação dos resultados.
Exemplo: http://example.com/api/products?sort=price

#### req.query.filter: 
##### Aplica um filtro aos resultados.
Exemplo: http://example.com/api/cars?filter=brand:Toyota

#### req.query.search: 
##### Realiza uma busca por termos específicos.
Exemplo: http://example.com/api/articles?search=Node.js

#### req.query.fields: 
##### Especifica quais campos devem ser retornados.
Exemplo: http://example.com/api/books?fields=title,author

#### req.query.include: 
##### Inclui relacionamentos adicionais nos resultados.
Exemplo: http://example.com/api/orders?include=products

#### req.query.exclude: 
##### Exclui campos específicos dos resultados.
Exemplo: http://example.com/api/customers?exclude=email

#### req.query.start: 
##### Define o ponto de partida para os resultados.
Exemplo: http://example.com/api/messages?start=2022-01-01

#### req.query.end: 
##### Define o ponto final para os resultados.
Exemplo: http://example.com/api/events?end=2023-12-31
  

## `req.body`: O corpo da solicitação (usado principalmente em solicitações POST e PUT).
  Exemplo:
 
  // Dependendo do corpo da solicitação enviado como JSON:
  console.log(req.body.name); // Output: "John" (se o corpo JSON contiver uma chave "name")
  

## `req.cookies`: Os cookies enviados pelo cliente.
  Exemplo:
 
  // Se o cliente enviou um cookie chamado "session_id":
  console.log(req.cookies.session_id); // Output: "abc123"
  

## `req.session`: A sessão do cliente (disponível quando usando middleware de sessão).
  Exemplo:
 
  // Usando o Express.js com o middleware de sessão:
  console.log(req.session.user_id); // Output: "123"
  

## `req.ip`: O endereço IP do cliente que fez a solicitação.
  Exemplo: `console.log(req.ip);` // Output: "127.0.0.1" (endereço IP do cliente)

## `req.hostname`: O nome do host da URL da solicitação.
  Exemplo: `console.log(req.hostname);` // Output: "example.com"

## `req.protocol`: O protocolo da solicitação (HTTP ou HTTPS).
  Exemplo: `console.log(req.protocol);` // Output: "http" ou "https"

Esses são alguns exemplos de como os parâmetros e propriedades da solicitação `req` podem ser utilizados em um servidor Node.js. Lembre-se de que o uso exato pode variar dependendo do framework ou biblioteca que você está usando, bem como da forma como seu servidor é configurado.