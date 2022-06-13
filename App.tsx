import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './navigation/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootStackNavigator navigation={undefined}  />
    </NavigationContainer>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
