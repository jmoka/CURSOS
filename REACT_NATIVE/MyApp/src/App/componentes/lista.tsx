import React from "react";
import { FlatList, Text, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import BotaoDeletar from '../componentes/botaoDeletar';
import BotaoEditar from '../componentes/botaoEditar';

interface Props {
  tarefas: Tarefa[];
  deletarTarefa: (id: string) => void;
  editarTarefa: (id: string) => void;
}

const Lista: React.FC<Props> = (props) =>  (
  <FlatList
    data={props.tarefas}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View key={item.id} style={Estilos.safeArea}>
        <Text style={Estilos.Text}>{item.titulo}</Text>
        <View style={Estilos.buttonAlinhar}>
          <View style={Estilos.buttonContainer}>
            <BotaoDeletar deletarTarefa={props.deletarTarefa} tarefa={item} />
          </View>
          <BotaoEditar editarTarefa={props.editarTarefa} tarefa={item} />
        </View>
      </View>
    )}
  />
);

export default Lista;
