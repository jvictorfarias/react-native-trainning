import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return (
    <View>
      <Text> Hello World</Text>
    </View>
  );
}

Main.navigationOptions = {
  title: 'Users',
};
