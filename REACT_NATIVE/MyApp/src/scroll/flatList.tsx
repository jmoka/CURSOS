import React from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import BotaoDeletar from '../componentes/botaoDeletar';
import BotaoEditar from '../componentes/botaoEditar';

const lista = (props) => (
  <FlatList
    data={props.tarefas}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View key={item.id} style={Estilos.safeArea}>
        <Text style={Estilos.Text}>{item.id}, {item.titulo}</Text>
        <View style={Estilos.buttonAlinhar}>
          <View style={Estilos.buttonContainer}>
            <BotaoDeletar deletarTarefa={props.deletarTarefa} tarefa={props.tarefa} />
          </View>
          <BotaoEditar editarTarefa={props.editarTarefa} tarefa={props.tarefa} />
        </View>
      </View>
    )}
  />
);

export default lista;
