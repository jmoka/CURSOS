import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import Estilos from '../estilo/eexterno';

const BotaoEdittar = () => {
  return (
    <TouchableOpacity style={[Estilos.button, Estilos.buttonBlue]}>
      <Text style={Estilos.Text}>Editar</Text>
    </TouchableOpacity>
  );
}

export default BotaoEdittar;
