import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { Global } from './components/styles';

export default function App() {
  const [count, setCount] = React.useState<string>('');
  return (
    <View style={Global.container}>
      <Header />
      <View style={Global.main}>
        <Text style={Global.text}>Soup</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
