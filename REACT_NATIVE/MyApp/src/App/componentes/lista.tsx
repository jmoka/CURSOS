import React from "react";
import { FlatList, Text, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import BotaoDeletar from './botaoDeletar';
import ListaEditar from './listaEditar';

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
        <View style={{backgroundColor:"black"}}>
        <Text style={Estilos.Text}>{item.titulo}</Text>
        </View>
        <View style={Estilos.buttonAlinhar}>
          <View style={Estilos.buttonContainer}>
            <BotaoDeletar deletarTarefa={props.deletarTarefa} tarefa={item} />
          </View>
          <ListaEditar editarTarefa={props.editarTarefa} tarefa={item} BotaoAdiconar={props.BotaoAdiconar} BotaoDeletar={BotaoDeletar} />
        </View>
      </View>
    )}
  />
);

export default Lista;
