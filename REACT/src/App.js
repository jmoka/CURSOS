// Importação

  // Importação de dentro da pasta   src
  // import nome-qualquer from './nome-arquivo';

  // Importação de dentro da pasta src/componet/imgs
  // import nome-qualquer from './componet/imgs/nome-arquivo';

  // Importação de dentro da Public
  // Usr o caminho Absoluto     
  // const agil = process.env.PUBLIC_URL + '/agil.jpg';
  // ou simplismente
  // const agil ='/agil.jpg';


import logo from './logo.svg';
import logo_J from './componet/imgs/logo_jota.jpg';
import Header from './componet/header'
import Botao from './componet/botoes/btn'
import ComponentePai from './componet/Aula_Propriedades/ComponentePai'
import Enviarfunc from './componet/Enviar_Funcoes/el_pai'
import CSS from './componet/Aula_CSS/AulaCSS'
import './App.css';
const agil = '/agil.jpg';


// // 

function App() {
let nome = "Joãao ";
const sobrenome = "Tavares";

let nun = 1
let num1 =2

function soma(){
  return nun + num1
}

const subtrair = ()=>{
  return num1 - nun
}

  return (
    <div className="Ap">

       <Botao/>
       <Header/>
       <ComponentePai/> 
       <Enviarfunc/> 
       <CSS/>
      <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" /> 
        <img src={logo_J} className="App-logo" alt="logo" />
        <img src={agil} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. <br/>
          <br/> 
          Declarando das Constantes e Variáveis usando Chaves {}
          {nome} {sobrenome}
          Declarando a string dentro da tag
          <p>João {sobrenome}</p>
           Declarando a string dentro das Chaves
           <p> {nome + "Tavares" }</p>

           Retorno de uma Função Nomal
           <p>{soma()}</p>

          Retorno de uma Arrow Function
           <p>{subtrair()}</p>


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu primeiro App React
          
        </a>
      </header>
    </div>
  );
}
export default App;




// SINTAX BÁSICA




// import React from "react"
// import Header from './componet/header'

// export default function App(){
//   return (
    
//     <Header/>
    
//   )
// }

