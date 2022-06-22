import React from 'react';
import { View, Text, Button } from 'react-native';
import { Global } from './styles';

const Next = () => {
  return (
    <View style={Global.main}>
      <Text style={Global.text}>Home Screen</Text>
      <Button title="Go to next screen" />
    </View>
  );
};

export default Next;
