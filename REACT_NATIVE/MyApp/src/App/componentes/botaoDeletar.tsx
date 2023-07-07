import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import Estilos from '../estilo/eexterno';

const BotaoDeletar: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity  style={[Estilos.button, Estilos.buttonRed]} onPress={() => props.deletarTarefa(props.tarefa.id)}>
      <Text style={Estilos.Text}>Deletar</Text>
    </TouchableOpacity>
  );
}

export default BotaoDeletar;
