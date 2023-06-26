import Estilos from '../estilo/eexterno';
import React from 'react';
import {Text} from 'react-native';

const Titulo = () => {
  return (<Text style={Estilos.Text}>Lista de Tarefas</Text>);
};


const Sub_Titulo = () => {
  return (<Text style={Estilos.Text}>Tarefas Agendadas</Text>);
};



export default Titulo; Sub_Titulo;

