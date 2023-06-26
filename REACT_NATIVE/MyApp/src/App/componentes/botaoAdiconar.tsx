import Estilos from '../estilo/eexterno';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface Tarefa {
  id: string;
  titulo: string;
}

const BotaoAdiconar = (props) => {

  return (
    <TouchableOpacity onPress={props.adicionarTarefa} style={Estilos.buttonAdicionar} activeOpacity={0.3}>
    <Text style={Estilos.buttonText}>Adicionar</Text>
    </TouchableOpacity>
   );
};

export default BotaoAdiconar;
