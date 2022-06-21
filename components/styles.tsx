import { StyleSheet } from 'react-native';

export const Global = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'orange',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
