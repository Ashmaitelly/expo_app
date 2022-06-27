import React from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
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
      <Pressable onPress={() => navigation.navigate('Next')}>
        <Text>Go to next screen</Text>
      </Pressable>
    </View>
  );
};

export default Home;
