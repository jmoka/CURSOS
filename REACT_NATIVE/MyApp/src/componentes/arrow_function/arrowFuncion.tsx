import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Arrow() {
  const arrow1 = (p1) => p1 * 2;

  const arrow2 = (p1, p2) => p1 * p2;

  const arrow3 = ()=>{
    let n1 = 5;
    let n2 = 10;
    return n1 * n2
  }

  return (

    <View style={styles.cp}>
      <View style={styles.cp1}>
        <Text style={styles.text}>Arrow Function simples sem retorno não precisa das chaves e nem o return</Text>
        <Text style={styles.text}>resultado é = {arrow1(6)}</Text>
      </View>
      <View style={styles.cp1}>
        <Text style={styles.text}>Arrow Function simples sem retorno não precisa das chaves e nem o return</Text>
        <Text style={styles.text}>resultado é = {arrow2(6, 3)}</Text>
      </View>
      <View style={styles.cp1}>
        <Text style={styles.text}>Arrow Function simples com retorno precisa das chaves e o return</Text>
        <Text style={styles.text}>resultado é = {arrow3()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cp: {
    backgroundColor: "yellow",
    padding: 15,
    alignItems: "center",
    height: "100%",
  },
  cp1: {
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
   },
  text: {
    color: "red",
    fontSize: 25,
  },
});
