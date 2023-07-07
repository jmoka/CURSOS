import React from "react";
import { View, StyleSheet } from "react-native";

const Container = () => {
  return (
    <View style={styles.container}>
      <View style={styles.itens1}></View>
      <View style={styles.itens2}></View>
      <View style={styles.itens3}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    width: '50%',



  },
  itens1: {
    height: 50,
    width: 50,
    backgroundColor: "<pink>" // Substitua "<cor_aqui>" pela cor desejada
  },
  itens2: {
    height: 50,
    width: 50,
    backgroundColor: "<black>" // Substitua "<cor_aqui>" pela cor desejada
  },
  itens3: {
    height: 50,
    width: 50,
    backgroundColor: "<what>" // Substitua "<cor_aqui>" pela cor desejada
  }
});

export default Container;
