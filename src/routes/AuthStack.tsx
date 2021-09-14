import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SCREENS} from './constants/route-names';

// import { Container } from './styles';

function AuthStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={SCREENS.AUTH_NAVIGATOR_SCREENS.AUTH}
        component={SCREENS.AUTH_NAVIGATOR_SCREENS.Component}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
