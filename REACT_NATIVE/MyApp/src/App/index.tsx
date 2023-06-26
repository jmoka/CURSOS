import React from 'react';
import Estilos from '../App/estilo/eexterno';
import { Text, Platform, TouchableOpacity, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import Titulo from '../App/componentes/titulos';
import Sub_Titulo from '../App/componentes/titulos';
import InputComponent from '../App/componentes/input';
import BotaoAdiconar from '../App/componentes/botaoAdiconar';
import Lista from '../App/componentes/lista';

interface Tarefa {
  id: string;
  titulo: string;
}

const HookState = () => {
  const [novaTarefa, setNovaTarefa] = React.useState("");
  const [tarefas, setTarefas] = React.useState<Tarefa[]>([]);

  const adicionarTarefa = () => {
    const dados: Tarefa = {
      id: String(new Date().getTime()),
      titulo: novaTarefa ? novaTarefa : 'Tarefa Vazia',
    };
    setTarefas([...tarefas, dados]);
  };

  const deletarTarefa = (id: string) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <SafeAreaView style={Estilos.fundo}>
      <View>
        <Titulo/>
        <InputComponent novaTarefa={novaTarefa} setNovaTarefa={setNovaTarefa} />
        <BotaoAdiconar adicionarTarefa={adicionarTarefa}/>
        <Sub_Titulo/>
        <Lista deletarTarefa={deletarTarefa} tarefas={tarefas}/>
        <Text style={{ color: '#f1f1f1' }}>{novaTarefa}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HookState;
