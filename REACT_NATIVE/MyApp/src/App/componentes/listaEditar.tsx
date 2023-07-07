import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import InputEditar from './inputEditar';
import BotaoConfirmar from './botaoConfirma';
import BotaoEditar from './botaoEditar';


interface Props {
  editarTarefa: (id: string, novoTitulo: string) => void;
  tarefa: Tarefa;
}

const ListaEditar: React.FC<Props> = (props) => {
  const [editando, setEditando] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(props.tarefa.titulo);

  const confirmar = () => {
    props.editarTarefa(props.tarefa.id, novoTitulo);
    setEditando(false);
  };

  return (
    <View style={Estilos.containerEditar}>
      {editando ? (
        <View>
          <InputEditar novoTitulo={novoTitulo} setNovoTitulo={setNovoTitulo} />
          <BotaoConfirmar confirmar={confirmar}/>
        </View>
      ) : (
        <BotaoEditar setEditando={setEditando}/>

      )}
    </View>
  );
}

export default ListaEditar;
