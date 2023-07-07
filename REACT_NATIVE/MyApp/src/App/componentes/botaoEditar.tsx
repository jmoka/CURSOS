import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import Estilos from '../estilo/eexterno';

interface Props {
  confirmar: () => void;
}

const botaoDeletarVisivel =(props) => {
  props.BotaoDeletar.setVisible(true);
}

const BotaoEditar: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={[Estilos.button, Estilos.buttonBlue]} onPress={(botaoDeletarVisivel) => props.setEditando(true)}>
    <Text style={Estilos.Text}>Editar</Text>
  </TouchableOpacity>
  );
}

export default BotaoEditar;
