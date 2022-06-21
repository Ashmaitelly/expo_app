import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Global } from './styles';

const Header = () => {
  return (
    <View style={Global.header}>
      <Text style={Global.title}>Soup</Text>
    </View>
  );
};

export default Header;
