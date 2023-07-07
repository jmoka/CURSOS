import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import Estilos from '../estilo/eexterno';

interface Props {
  confirmar: () => void;
}

const BotaoConfirma: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={[Estilos.button, Estilos.buttonGreen]} onPress={props.confirmar}>
      <Text style={Estilos.Text}>Confirmar</Text>
    </TouchableOpacity>
  );
}

export default BotaoConfirma;
