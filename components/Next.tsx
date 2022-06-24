import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import ListItem from './ListItem';
import { Global } from './styles';

type list = { name: string; id: string }[];
const Next = () => {
  const [items] = useState<list>([
    { name: 'a', id: '0' },
    { name: 'b', id: '1' },
  ]);
  return (
    <View style={Global.main}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem text={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Next;
