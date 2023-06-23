import React from 'react';
import {View} from 'react-native';
// import Texto from './src/componentes/tags/text';
// import Container from './src/componentes/tags/view';
// import Imagem from './src/componentes/tags/imagem';
// import Input from './src/componentes/tags/input';
// import Scrol from './src/componentes/tags/ScrollView';
// import Botao from './src/componentes/tags/Botao';
// import Lista from './src/componentes/tags/Lista';
// import ComponenteFuncao from './src/componentes/funcionais/componenteFuncional';
// import ComponenteFuncao2 from './src/componentes/funcionais/componenteFuncional2';
// import ComponenteClasse from './src/componentes/classes/componenteClasse';
import TextInput from './src/componentes/inputs/textInput'
// import Home from './src/App/Home';

// prettier-ignore
export default function App() {
  return (
    <View style={{flex:1}}>
      {/*<Text>HELLO WORLD</Text>
       <Texto/>
      <Container/>
      <Imagem/>
      <Input/>
      <Scrol/>
      <Botao/>
      <Lista/>
      <ComponenteFuncao2/>
      <ComponenteFuncao/>
      <ComponenteClasse/>
       <Home/>
        */}
      <TextInput/>

    </View>
  );
}
