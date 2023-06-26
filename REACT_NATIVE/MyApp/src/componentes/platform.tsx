import React from 'react';
import Estilos from './css/eexterno';
import { Text, Platform, TouchableOpacity, TextInput, View, StyleSheet, SafeAreaView } from 'react-native';
import Titulo from '../App/titulos';
import Sub_Titulo from '../App/titulos';
import InputComponent from '../App/input';
import BotaoAdiconar from '../App/componentes/botaoAdiconar';
import Lista from '../App/lista';



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



        {/* {tarefas.map((tarefa) => (
          <View key={tarefa.id} style={Estilos.safeArea}>
            <Text style={Estilos.Text}>Tarefa: {tarefa.titulo}</Text>
            <View style={Estilos.buttonAlinhar}>
              <View style={Estilos.buttonContainer}>
                <TouchableOpacity style={[Estilos.button, Estilos.buttonRed]} onPress={() => deletarTarefa(tarefa.id)}>
                  <Text style={Estilos.Text}>Deletar</Text>
                </TouchableOpacity>
              </View>
              <View style={Estilos.buttonContainer}>
                <TouchableOpacity style={[Estilos.button, Estilos.buttonBlue]} onPress={() => deletarTarefa(tarefa.id)}>
                  <Text style={Estilos.Text}>Alterar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))} */}
        <Text style={{ color: '#f1f1f1' }}>{novaTarefa}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HookState;
