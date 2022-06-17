import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [count, setCount] = React.useState<string>('');
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.main}>
        <Text style={styles.text}>Soup</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontFamily: 'sans-serif-condensed',
  },
});
