import React, { useState } from 'react';
import { View, Text, Button, FlatList, RefreshControl } from 'react-native';
import ListItem from './ListItem';
import { Global } from './styles';

type list = { name: string; id: string }[];

const Next = () => {
  const wait = (timeout: number) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [items] = useState<list>([
    { name: 'a', id: '0' },
    { name: 'b', id: '1' },
  ]);

  const handleRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  return (
    <View style={Global.main}>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem text={item.name} />}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      />
    </View>
  );
};

export default Next;
