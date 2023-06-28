import React from "react";
import { TextInput, View } from 'react-native';
import Estilos from '../estilo/eexterno';

const inputEditar: React.FC<Props> = (props) => {
  return (
    <View>
       <TextInput style={Estilos.inputsEditar} value={props.novoTitulo} onChangeText={props.setNovoTitulo}          />
     </View>
   )
  }

export default inputEditar;
