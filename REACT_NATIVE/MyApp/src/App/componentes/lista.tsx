import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import BotaoDeletar from '../componentes/botaoDeletar';
import BotaoEditar from '../componentes/botaoEditar';

const lista = (props) => (
  props.tarefas.map((tarefa) => (
    <View key={tarefa.id} style={Estilos.safeArea}>
      <Text style={Estilos.Text}>{tarefa.titulo}</Text>
      <View style={Estilos.buttonAlinhar}>
        <View style={Estilos.buttonContainer}>
          <BotaoDeletar deletarTarefa={props.deletarTarefa} tarefa={tarefa} />
        </View>
          <BotaoEditar/>
      </View>
    </View>
  ))
);

export default lista;
