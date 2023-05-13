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


## IMPORTANTE

	1 - Dados sempre de cima para baixo;
	2 - Ações ou eventos no sentido de baixo para cima;
	3 - As propriedades (props) são passadas apenas de pais para filhos e não podem ser alteradas;
	4 - O estado (state) mantém o estado interno de cada componente e pode ser alterado pelos filhos.

# INSTALAÇÃO
## INSTALAÇÃO RÁPIDA
	Após a Clonar ou Quando Criar um novo Diretório
		1- npm install -g create-react-app
		2- yarn add expo
		3- npm start 
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

# Prmeiro APP
	Site: https://reactnative.dev/
	Guia: https://reactnative.dev/docs/getting-started

## Execute o seguinte comando para criar um novo projeto React Native
## Instalando Pacote ( create-react-app )
	Para instalar comando de linha de comando (cmdlet) no seu ambiente ( Para ambiente que não suporta o comando diretamente.)

	npm install -g create-react-app
##  Framework Expo
	yarn add expo
## NPM
### Instalar 

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

< perigoso >

	npm run 	
	
## SUPORTE PARA WEB - DEPENDENCIAS

	npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1

##  BAIXE O Expo Project PARA O SEU CELULAR
	- Android - https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www
	- iOS - https://apps.apple.com/app/apple-store/id982107779

	obs: Após baixar , scanei o QRcod da Inicialização

## Android Studio (opcional)
	https://developer.android.com/studio


## INICIALIZAR
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

### Obs: Dentro do componente so poderá haver uma tag, e todo o conteudo dentro dela
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

## Importação de dentro da pasta src
  
  		import nome-qualquer from './nome-arquivo';

## CRIAR UM COMPONET
### Os componentes são criados dentro da pasta componentes dentro da pasta src
#### - servem para cir exatamente componentes do site como , header, seções, rodape, um  independente do outro
#### - usar a simtax basica 
		
		import React from "react"	
	
			export default function Qualquer-Nome(){
   
					return (
						<header>
    						<h1 class="bg-primary"> CABEÇALHO</h1>          
                
		    			</header>
					)
				}
## - IMPORTAR UM COMPONENTE
	Abra o arquivo App.js
	import Qualquer-nome(convenção-nome-do-componante) from './components/nome-componente'
	import Qualquer-nome(convenção-nome-do-componante) from './components/sub-pasta/nome-componente'

	Obs: A pasta COMPONENT esta dentro da pasta SRC


## - ENVIAR DADOS DO COMPONENTE PAI PARA O COMPONENTE FILHO ( PROPS )
	- Isso permite a criação de uma estrutura de componentes modular e reutilizável.
#### Sintax componente FILHO:

##### 1 Sintex Básica

		import React from "react"

			export default function nome_componente(){

				<>
				<p>Nome:</p>				// propriedade nome
				<p>Sobrenome:</p>			// propriedade pai
				</>

			}	
		
##### 2 Sintex recebendo os Atributos do Pai

			import React from "react"

			export default function nome_componente(props){

				<>
				<p>Nome:{props.nome}</p>					// propriedade nome acessada do pai ( props.nome )
				<p>Sobrenome:{props.sobrenome}</p>			// propriedade sonbrenome acessada do pai ( props.nome )
				</>
			}	
#### Observações
	OBS: O componente pai de todos é o APP.JS
	OBS: O componente pai pode se qualquer um componente , mas para que seja rendesirazado no virtial-Dom
		 prcisa com que esse componente pai seja importado em nosso APP.JS ou seja no componente pai de todos.
	OBS: O componente pai importa os componentes filhos e o componente pai de todos importa os componentes pais
 #### Sintax componente PAI:
 
### Criar as Propriedades no Componente FILHO
	- Os Atributos são criados no componente Pai e enviado para os Filhos que tiverem a propriedade PROPS


		import React from "react"

		import Componente-filho(convenção-nome-do-componante) from './components/nome-componente'

			export default function app(){
				return(

					<>
					// Declarar os componentes que serão renderizado no virtial-dom, lembando que estamos no componente pai de todos APP.ja


						<Componente-filho(Nome declarado na Importação) 				

							nome =""
							sobrenome =""

							// Obseve que o atributoos foram criados no componente filho
							// Agora o componente filho ao usar props.  estará acessando os atributos que o pai está passando
						/>

					</>
					

				)

			}

		
## CSS 
	- O CSS pode ser implementada das tês formas, como no javaScript

			1- Inline
			2- Incorporado
			3- Classes

### INLINE
	- Dentro da própria tag chamamos o "style" com 2 chaves

		<h1 style ={{}}>Jota Contabilidade</h1> // observe o uso das chaves

			ex: 
				<h1 style ={{clolor:"blue", border:"solid"}}>Jota Contabilidade</h1> // observe o uso das chaves
	- Observação
		- Dentros das chaves tem qur ser separado por virgula "," 
		- As Palavas compostas deverão ser unida e a segunda palavra iniciar com letra maiuscula
			ex: font-size     /   fonteSize
			<h1 style ={{clolor:"blue", border:"solid", fonteSize:"5em"}}>Jota Contabilidade</h1>
### INCORPORADO
	- Dentro de export default criaremos um objeto literal contenddo todas as propriedades css daquele objeto
	- Utilizamos Apenas uma chave para chamar o objeto
		ex:

		export default function (){

				const Capa = {
					clolor:"blue", 
					border:"solid", 
					fonteSize:"5em"
					}
				
				return (

					<h1 style= {Capa}></h1>	 // Apenas uma chave

				)
			}

			
### CSS DE CLASSE
	- Criar um arquivo .css e nesse arquivo são declaradas as classe css
	- Pode ser criada variso arquivos css, pode usar um unico isso vai de cada organiação

#### Componente que recebe CSS
	
		export default function CSS (){

    		let css_incorporado = {
        		color :"blue",
        		background :"red",
        		fontSize : "5mn"
    		}
    		return (
        	<>
            	<h1>APLICANDO O CSS INLINE</h1>
            	<h1 style={{color:"blue", fontSize:"5mn"}}>CSS INLINE SENDO USADO</h1>

            	<h1>APLICANDO O CSS INCORPORADO</h1>
            	<h1 style={css_incorporado}>CSS INCORPORADO SENDDO USADO</h1> 

            	<h1>APLICANDO O CSS EM CLASSES</h1>
            	<h1 className="classeCSS"> CSS EM CLASSES SENDO USADA</h1>

        	</>    
    )


}

#### Componente CSS
	- Aplica as classe 

			ex:
			
			.classeCSS{
    			font-size: 5mm;
    			color: beige;
    			background: red;
			}




# COMPONENTES FUNCIONAIS
	- Bbasicamente é uma função declarada no componentee pai onde o componete filho aochamar a função do componente pai , recebe o retorno dela

## Sintax Componente - Filho

		import React from "react"

		export default function elemento_filho ( props) {

    		let num1 = 14    
    		let num2 = 10

    		return (
       		 <>

           		 <h1>"Soma e {num1} + {num2} = {props.pai_somar(num1,num2)} "</h1>
        
        	</>

        
    )

}

## Sintax Componente - Pai

		import React from "react"
		import El_Filho from './el.filho'

		const somar = ( num1, num2)=>{
    		return num1 + num2
		}

		export default function funcaoPai(){

    		return(
        	<>

           		<El_Filho 

           		pai_somar = {somar}
				
				/> 

       		</>
    	)
	}

# RENDERIZAÇÃO
	- renderização do React acontece da segunte forma
		- Tudo acontece no virtual-Dom, todas as mudanças feitas no virtual-ddom são passadas para o Dom , mas somente as mudanças, ou seja não carrega a pagina inteira e sim somente a mudança no elemento
	- Para o exemplo criaremos um componenete relogio que retorna a hora atual em formato de string
		- toda vez que a pagina atualizar vai mudar a hora
		- vamos fazer a pagina atualizar a cada um segundo
		- para isso é preciso usar a função interval(nome-função, intervalo)
		- com isso a pagina no vitual dom será atualizada e o qque ouver de mudança ele passará para o Dom
		- ou seja tuda vez que atualizar muda o segundo , e o dom virtual é atualizado e passa para o DOM
## Sintex Componente relogio

		import React from "react"

		export default function relogio(){
    		return(
        		<>    
        			<h1 style ={cssRelogio} >{new Date().toLocaleTimeString()}</h1>       				
				</>
    )
}

		- Irá  retornar a data em formato de string , e sempra irá mudar toda vez que a pagina for atualizada 	para que isso aconteça o tempo todo , a pagina ( do Virtual_Dom seja Renderizada) iremo escrever uma função la
        no index.js para que seja renderizada a cada minuto

## Sintex Componente Index.js
	
- Iremos criar uma função que darei o nome de Tick() , associarei ela a funçaõ nativa setInterval(tick000) 
	função essa que atializa a pagina  e sua edita é de milisegundas, ou seja um minuto e 1000 misegundos
		
		function tick(){
  				root.render(
    				<React.StrictMode>
      				<App />
    				</React.StrictMode>
  					);
				}
	setInterval(tick, 1000);
	tick()

// Atualiza a pagina aperte f12 e va em console , vc vai obsrevar que somente o componente relógio estará atualizando 
// Significa o que so renderiza o que foi alterado e não a pagina toda

# STATE
	- O STATE é uma maneira de armazenar e gerenciar dados que podem ser atualizados ao longo do tempo. Cada       componente pode ter seu próprio estado interno.
	- Quando o estado é alterado o componente e re-renderizado , o estado também é alterado e o próprio       componente e re-renderizado.

	- Primeiro temos que Importar o STATE !

## Sitax Importar
	import React, {useState} from "react"
## Sintax da STATE
	const [nome-estado,nome-função-que-altera-estado] = useState()
### Sintax do STATE em Componentes Funcionais
	
	export default function ReactFunction(){   
  
    let numb = 1
    const [num, setNum] = useState(numb); //  criada a state , onde o primeiro parametro é o stado, e o segundo o nome da função que irá alterar o estado

   const func = ()=>{       
           
        setNum(num +1)
   		}  
     return (
        	<>     
            	<h1>Variavel numb: {numb} </h1>    
            	<h1>valor do state : {num}</h1>      
            	<button onClick={func}>Botao </button>
       		</>
    	)
	}



            
# COMPONENTES DE CLASSE
		Componentes de classe são classes do ES6 (JavaScript) que também retornam um elemento do React. Eles:

		Gerenciam o próprio estado;
		Possuem grande nível de poder dentro da aplicação;
		Herdam os chamados métodos de ciclo de vida do React;
		Lidam com partes lógicas;
		Manipulam eventos por intermédio de métodos que podem ser chamados de qualquer lugar do componente ou em seus filhos

## Sintax

		Class NomeObjeo extends react.Component {
			constructor(pros){
				super(pros)

			}
		}


	
	
	
	

