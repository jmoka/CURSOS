import React from 'react';
import {Text, TextInput, View, StyleSheet, SafeAreaView} from 'react-native';
const StyleComponente = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.buttonText}> Olá Dev Jota </Text>
        <TextInput style={styles.inputs}/>
      </View>
    </SafeAreaView>
  );
};
export default StyleComponente;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'pink', // Cinza claro padrão comercial
    padding: 16,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  button: {
    backgroundColor: '#007AFF', // Azul padrão comercial
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#f1f1f1', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputs: {
    backgroundColor: '#29292e',
    color: '#f1f1f1',
    fontSize: 18,
    padding: 15,
    marginTop: 10,
    borderRadius: 15,
  },
});
