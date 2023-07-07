import React from "react";
import { StyleSheet, Text, View } from "react-native";
import END_OR from "./usando_END_OR"
import IF from "./usando_IF"
import Ternario from "./usando_Ternario"

const controle = () => {
  let permissao = true;
  return (
    <View>
      <Text style={styles.text}>USANDO O END - OR</Text>
      <END_OR permissao={permissao} />
      <Text style={styles.text}>USANDO TERNARIO</Text>
      <Ternario permissao={permissao} />
      <Text style={styles.text}>USANDO IF</Text>
      <IF permissao={permissao} />
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "black",
    fontSize: 30,
  },
  text: {
    color: "red",
    fontSize: 30,
  },
});

export default controle;
