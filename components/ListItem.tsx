import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import { Global } from './styles';

const ListItem = ({ text }: { text: string }) => {
  return (
    <View>
      <TouchableOpacity style={Global.buttonItem}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
