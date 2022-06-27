import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './components/Home';
import Next from './components/Next';

type RootStackParamList = {
  Home: undefined;
  Next: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [count, setCount] = React.useState<string>('');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Next" component={Next} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
