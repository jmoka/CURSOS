import React from 'react';
import {
  Text,
  Platform,
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
const StyleComponente = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.Text}>Olá Dev</Text>
        <TextInput
          placeholderTextColor='#E5E5CB'
          placeholder = 'Digite a Nova Tarefa...'
          style = {styles.inputs} />
        <TouchableOpacity style={styles.button} activeOpacity={0.3}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default StyleComponente;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A120B', // Cinza claro padrão comercial
    padding: 16,
    borderRadius: 8,
  },
  Text:{
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
    padding: Platform.OS == 'ios' ? 15 : 12, // podenddo fazer essa ferificação em qualquer componente
    marginTop: 10,
    borderRadius: 6,
  },
});
