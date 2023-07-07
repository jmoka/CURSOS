import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

const StyleComponente = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.buttonText}> Olá Dev Jota </Text>
      </View>
    </SafeAreaView>
  );
};

export default StyleComponente;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: ' <View>  </View>', // Cinza claro padrão comercial
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
    color: '#FFFFFF', // Branco padrão comercial
    fontSize: 24,
    fontWeight: 'bold',
  },
});
