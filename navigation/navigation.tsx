import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from '../components/LandingScreen';
import LogInScreen from '../components/LogInScreen';
import SignUpScreen from '../components/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackNavigator = ({navigation}) => (
    <RootStack.Navigator>
      <RootStack.Screen name="landing" component={LandingScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="Login" component={LogInScreen} options={{ headerShown: false }} />
      <RootStack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
    </RootStack.Navigator>
    
);
export default RootStackNavigator;