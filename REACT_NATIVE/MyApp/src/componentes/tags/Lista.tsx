import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ComponenteImagem() {
  const data = ['Bolo de Chocolate', 'Bolo de Morango', 'Bolo de Cenoura'];

  const renderItem = ({ item }) => {
    return <Text>{item}</Text>;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
