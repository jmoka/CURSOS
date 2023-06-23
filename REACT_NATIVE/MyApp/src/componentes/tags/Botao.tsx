import React, {Text, TouchableOpacity} from 'react-native';
export default function ComponenteImagem() {
  return (
    <TouchableOpacity onPress={() => console.log('Botão pressionado')}>
      <Text>Pressione-me</Text>
    </TouchableOpacity>
  );
}
