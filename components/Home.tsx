import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { Global } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenNavigationProp = StackNavigationProp<
  {
    Home: undefined;
    Next: undefined;
  },
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  return (
    <View style={Global.main}>
      <Text style={Global.text}>Home Screen</Text>
      <Button
        title="Go to next screen"
        onPress={() => navigation.navigate('Next')}
      />
    </View>
  );
};

export default Home;
