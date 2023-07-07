import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Cubos = (props) => {
  let liberado = <Text style={styles.text}>Liberado</Text>;
  let proibido = <Text style={styles.text1}>Proibido</Text>;
  return (
    <View style={styles.cp}>
      {props.permissao && liberado || proibido}
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
