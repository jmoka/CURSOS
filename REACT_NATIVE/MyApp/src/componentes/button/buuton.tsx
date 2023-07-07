import React, { useState } from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

const msgAlert = () => Alert.alert("Hello world!");

export default function Butao() {

  return (
    <View style={styles.cp}>
      <View style={styles.ct}>
        <Text style={styles.tx}>Butão</Text>
      </View>
      <View style={styles.cb}>
        <Button title="Butão Alerte" onPress={msgAlert} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cp: {
    backgroundColor: "#AA3962",
    flexDirection: "column",
    height: "100%",
    padding: 10,
  },
  ct: {
    backgroundColor: "yellow",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  tx: {
    color: "black",
    fontSize: 50,
  },
  cb: {
    backgroundColor: "blue",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
 });
