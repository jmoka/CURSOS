import Estilos from '../estilo/eexterno';
import React from 'react';
import {TextInput} from 'react-native';

const Inputcomponent = (props) => {
  return (
    <TextInput
      id='inputId'
      value={props.novaTarefa}
      onChangeText={props.setNovaTarefa}
      placeholderTextColor='#E5E5CB'
      placeholder='Digite a Nova Tarefa...'
      style={Estilos.inputs}/>
   );
};

export default Inputcomponent;
