import React from "react";
import {View, Text, Image, StyleSheet} from "react-native"

const Img = () => {
  return (
    <View style={styles.cp}>
      <View style={styles.text}>
        <Text style={styles.text}>IMAGEM ANEXADA NO APP</Text>
      </View>
      <View style={styles.container}>
          <Image style={styles.im} source={require('./hw.png')} />
          <Image style={styles.im} source={{ uri: 'https://jotaempresas.com/arq/arqMarketing/LOGOS/logojotaddddd.jpg' }} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cp: {
    backgroundColor: "yellow",
    padding: 15,
    alignItems: "center",
    height:"100%"
  },
  text: {
    color: "red",
    fontSize: 25,
  },
  // fromatando a imagem, posicionamento dentro do container e dimensão
  im: {
    width: "100%",
    height: "48%",
    marginBottom: 8,
  },
  container: {
    backgroundColor:"blue",
    height:"100%",
    width:"100%",
    alignItems: "center",

  },
});

export default Img;


// resizeMode: 'contain'
// ajusta a omagem no container

// resizeMode: 'stretch',
// estica a imegm no container

// resizeMode: 'cover',
// ajusta lateralmente

//  resizeMode: 'repeat',
// repete a imagem no container
