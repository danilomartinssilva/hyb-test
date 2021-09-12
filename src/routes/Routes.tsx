import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import React from 'react';
import { View } from 'react-native';
import AppStack from "./AppStack";
const RootStack = createNativeStackNavigator();
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator >
        <RootStack.Screen component = {AppStack} name = {"AppStack"} options = {{headerShown:false}} />
      </RootStack.Navigator>

      
    </NavigationContainer>
  )
}

export default Routes;