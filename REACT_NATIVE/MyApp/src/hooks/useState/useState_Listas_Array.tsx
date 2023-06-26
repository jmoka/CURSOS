import React from 'react';
import {
  Text,
  Platform,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

interface Tarefa {
  id: string;
  titulo: string;
}

const hookState = () => {
  const [novaTarefa, setNovaTarefa] = React.useState("");
  const [tarefas, setTarefas] = React.useState<Tarefa[]>([]);

  const adicionarTarefa = () => {
    const dados: Tarefa = {
      id: String(new Date().getTime()),
      titulo: novaTarefa ? novaTarefa : 'Tarefa Vazia',
    };
    setTarefas([...tarefas, dados]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.Text}>Tarefas</Text>
        <TextInput
          onChangeText={setNovaTarefa}
          placeholderTextColor='#E5E5CB'
          placeholder='Digite a Nova Tarefa...'
          style={styles.inputs}
        />
        <TouchableOpacity onPress={adicionarTarefa} style={styles.button} activeOpacity={0.3}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.Text}>Lista de Tarefas</Text>
        {tarefas.map((tarefa) => (
          <View key={tarefa.id} style>
            <Text style={{color:'black'}}>Tarefa: {tarefa.titulo}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.3} key={tarefa.id}>
            <Text style={{color:'black'}}>Deletar</Text>
            </TouchableOpacity>
          </View>

          <View>
          <TouchableOpacity style={styles.button} activeOpacity={0.3} key={tarefa.id}>
              <Text style={{color:'black'}}>Editar</Text>
            </TouchableOpacity>
          </View>
        ))}
        <Text style={{ color: '#f1f1f1' }}>{novaTarefa}</Text>
      </View>
    </SafeAreaView>
  );
};

export default hookState;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A120B', // Cinza claro padrão comercial
    padding: 16,
    borderRadius: 8,
  },
  Text: {
    color: '#f1f1f1', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  button: {
    backgroundColor: '#FFD93D', // Azul padrão comercial
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#1A120B', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputs: {
    backgroundColor: '#3C2A21',
    color: '#f1f1f1',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 10,
    borderRadius: 6,
  },
});
