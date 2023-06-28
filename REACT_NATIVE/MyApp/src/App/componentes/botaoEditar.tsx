import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import Estilos from '../estilo/eexterno';
import InputEditar from '../componentes/inputEditar';

interface Props {
  editarTarefa: (id: string, novoTitulo: string) => void;
  tarefa: Tarefa;
}

const BotaoEditar: React.FC<Props> = (props) => {
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
          <TouchableOpacity style={[Estilos.button, Estilos.buttonGreen]} onPress={confirmar}>
            <Text style={Estilos.Text}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={[Estilos.button, Estilos.buttonBlue]} onPress={() => setEditando(true)}>
          <Text style={Estilos.Text}>Editar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default BotaoEditar;

