import React, {View, Text, Image} from 'react-native';
export default function ComponenteImagem() {
  return (
    <View>
      <Text>Componente Imagem hhhh</Text>
      <Image source={require('../../img/hw.png')} />
    </View>
  );
}
