import React from "react";
import { StyleSheet, View, Text } from "react-native";

const exibir = (v1) => {
  if (v1) {
    return (
      <View style={styles.cp1}>
        <Text style={styles.text}>Liberado</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.cp2}>
        <Text style={styles.text1}>Proibido</Text>
      </View>
    );
  }
};

// var permissao = false;

const Cubos = (props) => {
  return (
    <View style={styles.cp}>
      {exibir(props.permissao)}
    </View>
  );
};

const styles = StyleSheet.create({
  cp: {
    backgroundColor: "yellow",
    padding: 20,
  },
  cp1: {
    backgroundColor: "black",
  },
  cp2: {
    backgroundColor: "yellow",
  },
  text1: {
    color: "black",
    fontSize: 30,
  },
  text: {
    color: "red",
    fontSize: 30,
  },
});

export default Cubos;
