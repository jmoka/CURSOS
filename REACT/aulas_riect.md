# Reactjs

	Utilizando a própria documentação, o React é uma biblioteca JavaScript para criar interfaces de usuário. Desenvolvida pelo Facebook, ela possui código aberto e é mantida 	por uma imensa comunidade de desenvolvedores individuais, sendo utilizada por grandes empresas, como, por exemplo, Netflix, Instagram, Tesla, Walmart e Airbnb.

	A manutenção de atualizações da biblioteca facilita a manipulação do front-end em páginas web e aplicativos móveis via React Native. O React trabalha em um modelo que 	podemos chamar de composicional, ou seja, o programador precisa enxergar seu ambiente de trabalho, o aplicativo, a tela ou a página segmentada em diferentes pedaços, que 	serão chamados de componentes.

	Tudo em Reactjs é JavaScript e Composicional ou seja tudo é um Componente!

## Exemplo

### Observe dois Componentes onde um retorna a soma  A+B e ou outro o Miltiplicação de A*B onde são componentes pequenos ee isolados
#### Componente 1

		function somaNums(A, B) {
    			return (A + B);
		}

#### Componente 2

		function prodNums(A, B) {
    			return (A * B);
		}

### Nesse casso OBSERVE que agora temos um componente maior que comporta chama os outross dois componentes menores formando somente um componete

#### Componente 3

		function quadSomaNums(A, B) {
    			return (prodNums(A, A) + 2 * prodNums(A, B) + prodNums(B, B));
		}

# Natureza declarativa
	Outra característica do React é sua natureza declarativa.

## Exemplo ( Diferença entre Proceidual e Declaratica)

### Exemplo - Proceidual:
	
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];
		let copiaMeses = [];
		for (let i = 0; i < meses.length; i++) {
    			copiaMeses[i] = "Mês de " + meses[i];
		}

### Exemplo - Declarativa:
	
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril"];
	let copiaMeses = meses.map((mes) => "Mês de " + mes);  

Obs: Observe o uso do Arrow Function ( https://www.w3schools.com/js/js_arrow_function.asp )

# Vinculação unidirecional

	O React segue uma forma de fluxo de dados unidirecional também conhecido como vinculação unidirecional. Em geral, esse conceito significa que os dados possuem uma e 		apenas uma maneira de serem passados para outra parte da sua aplicação.
	Esse fluxo geralmente obedece à forma de um componente pai para o seu componente filho. Com isso, o filho consegue apenas ler dados do pai sem permitir uma alteração 		dessa informação no componente pai.

# States

	Os dados armazenados no componente pai

# Props
	Valor passado para o componente filho


# IMPORTANTE

	1 - Dados sempre de cima para baixo;
	2 - Ações ou eventos no sentido de baixo para cima;
	3 - As propriedades (props) são passadas apenas de pais para filhos e não podem ser alteradas;
	4 - O estado (state) mantém o estado interno de cada componente e pode ser alterado pelos filhos.

# INSTALAÇÃO

### Node.js
	https://nodejs.org/en/download
	Instalar - LTS
	
	Após a instalação abra o Prompt de Comando do Windos e digite:	
	- Verifique a veersão do sistema caso não apareça refaça o procedimento	

	node --version 

### Editor Visual Studio Code
	Obs/; IDE (Ambiente de Desenvolvimento Integrado) escolha a de sua preferencia
	Baixar : 
	https://code.visualstudio.com/Download

	Online:
	https://vscode.dev/

# PRIMEIRO APP
	Site: https://reactnative.dev/
	Guia: https://reactnative.dev/docs/getting-started

## Execute o seguinte comando para criar um novo projeto React Native

## INSTALNDDO O PACOTE ( create-react-app )
	 para instalar comando de linha de comando (cmdlet) no seu ambiente ( Para ambiente que não suporta o comando diretamente.)

	npm install -g create-react-app


## NPM

	< Instalar >

		npx create-react-app NOME-PROJETO
					- Esse instalador é usado para criar um novo projeto React padrão

		npx create-expo-app NOME-PROJETO
					- Esse instalador é usado para criar um novo projeto Expo. O Expo é um framework que simplifica o desenvolvimento de aplicativos móveis com React Native. Com o Expo, você pode criar aplicativos para iOS e Android usando JavaScript e React Native, sem precisar lidar diretamente com a configuração nativa de cada plataforma

		
		RESUMO:
			Em resumo, enquanto o create-react-app é usado para criar projetos React tradicionais com configuração mínima, o create-expo-app é voltado para criar projetos Expo que simplificam o desenvolvimento de aplicativos móveis usando React Native.

## COMANDOS

### Inicia o servidor de desenvolvimento
	 npm start 

### Cria os arquivos estáticos otimizados para produção

	 npm run build 
	
### Inicia o executor de testes.

	npm test 

### Eject remove essa ferramenta e copia as dependências de compilação, arquivos de configuração e scripts para o diretório do aplicativo. Se você fizer isso, não poderá voltar atrás!

	npm run 	
	

## SUPORTE PARA WEB - DEPENDENCIAS

	npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1

##  BAIXE O Expo Project PARA O SEU CELULAR
	- Android - https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
	- iOS - https://apps.apple.com/app/apple-store/id982107779

	obs: Após baixar , scanei o QRcod da Inicialização

## Android Studio (opcional)
	https://developer.android.com/studio


## INICIALIZR
	< Navegue até a pasta do prrojeto >
		cd NOME-PROJETO
	
	< Inicialize >
		npx expo start

		- Responda: y

		- E escolha uma das opções

		pressione: 
		
		'a'		Para abrir o aplicativo no Android		 
		'w'		Para abrir no navegador, pressione
		'j' 	Para abrir o depurador
		'r' 	Para recarregar o aplicativo
		'm'     Para alternar o menu
		'?'		Ver todos os comandos disponíveis



# Sintex Básica ( App.js)

	import React from "react"

	export default function App(){
		return (
			<>
    			<p>Jota</p>
		    </>
			)
		}

### obs: dentro do componente so poderá haver uma tag, e todo o conteudo dentro dela
			ex: 
			<>
				conteudo aqui dentro
			</>

			ex:
			<p>
				conteudo aqui
			</p>

### Obs: Fechamento das tags

	As tags devrão ser fechadas sempre
		ex:
		 
		  <p></p>		
		  <h/>
		  <div></div>
		  <div/>

## Bloco de Declaração
	- As funções, as variáveis as constantes toda programação JavaScrip devera ser declaradas antes do RETURN.
	- Para poder declarar no essas variáveis no JSX, será necessário o uso {} chaves

		Ex:
			import React from "react"

			export default function App(){
												// bloco de declaração
				const nome = "joão"
				let sobrenome = "tavares"

				let nun = 1
				let num1 =2

				function soma(){               // função normal
  						return nun + num1
					}

				const sobtracao()=>{		//arrow function
					return nun - num1
				}

				return (
					<>
						<p>{nome} {sobrenome}</p> // obsserve aqui uso das chaves
						{ soma() }  // Chaves ao chamar a função normal
						{ subtracao() }  // Chaves ao chamar a arrow function
					</>
				)
			}

	- String dentro da tag

			<>
				<p> João {sobrenome} </p> // obs serve aqui uso das chaves
			</>
		
	- Função sendo Chamada também tem que está entre chaves {}
			<>
			{ soma() }
			</>
		
# CAMINHOS DE DIRTÓRIO

## Diretório Public
	- Usar o caminho Absoluto
		const qualquer-nome = process.env.PUBLIC_URL + '/nome-arquivo'

		ou simplismente

		const qualquer-nome = '/nome-arquivo'

## Diretório Component

		import nome-qualquer from './componet/nome-arquivo';

## Importação de dentro da pasta   src
  
  		import nome-qualquer from './nome-arquivo';

## CRIAR UM COMPONET

	Os componentes são criados dentro da pasta componentes dentro da pasta src
	- servem para cir exatamente componentes do site como , header, seções, rodape, um  independente do outro
	- usase a simtax basica 
		
		import React from "react"	
	
			export default function Header(){
   
					return (
						<header>
    						<h1 class="bg-primary"> CABEÇALHO</h1>          
                
		    			</header>
					)
				}

## CSS NO COMPONENTE
// criar antes de retune constantes com a formatação desejada do css e depois e so aplicar da tag desejada
		import React from "react"	
	
			export default function Header(){

				const css_header = {
					 	backgroundColor: "blue",
        				color: "white",
        				padding: "10px",

				}
   
					return (
						<header  style={css_header}>
    						<h1 class="bg-primary"> CABEÇALHO</h1>          
                
		    			</header>
					)
				}
  






	
	
	
	

