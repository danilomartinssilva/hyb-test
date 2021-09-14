import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { NAVIGATORS, SCREENS } from './constants/route-names';
const RootStack = createNativeStackNavigator();
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator >
        <RootStack.Screen component = {AuthStack}
        name = {NAVIGATORS.AUTH_NAVIGATOR}
        options={{headerShown: false}}
        />
        <RootStack.Screen
          component={AppStack}
          name={'AppStack'}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
