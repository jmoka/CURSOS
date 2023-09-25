import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Aula de Renderização Continiação
// iremos criar uma função que darei o nome de Tick() , associarei ela a funçaõ nativa setInterval(tick,1000) função essa que atializa a pagina  e sua medita é de milisegundas, ou seja um minuto e 1000 misegundos
function tick(){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}
setInterval(tick, 1000);
tick()

// atualiza a pagina aperte f12 e va em console , vc vai obsrevar qque somnto o componente relógio estará atualizando 
// significa o que que so renderiza o que foi alterado e não a pagina toda






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
