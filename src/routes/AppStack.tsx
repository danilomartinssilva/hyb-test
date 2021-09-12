import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import React from 'react';
import CreditPixScren from '../screens/CreditPixScren';
import ExtractScreen from '../screens/ExtractScreen';
import PayScreen from '../screens/PayScreen';
import PixScreen from '../screens/PixScreen';
import TransferScreen from '../screens/TransferScreen';
import { NAVIGATORS, SCREENS } from './constants/route-names';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

// import { Container } from './styles';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ExtractStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = {SCREENS.EXTRACT_NAVIGATOR_SCREENS.EXTRACT} 

    >
      <Stack.Screen component = {SCREENS.EXTRACT_NAVIGATOR_SCREENS.Component} name={SCREENS.EXTRACT_NAVIGATOR_SCREENS.EXTRACT}
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const CreditPixStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = {SCREENS.CREDIT_PIX_NAVIGATOR_SCREEN.CREDIT_PIX} 
   
    >
      <Stack.Screen component = {SCREENS.CREDIT_PIX_NAVIGATOR_SCREEN.Component} name={SCREENS.CREDIT_PIX_NAVIGATOR_SCREEN.CREDIT_PIX}
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const PixStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = {SCREENS.PIX_NAVIGATOR_SCREENS.PIX} 
  
    >
      <Stack.Screen component = {SCREENS.PIX_NAVIGATOR_SCREENS.Component} name={SCREENS.PIX_NAVIGATOR_SCREENS.PIX}
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const PayStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = {SCREENS.PAY_NAVIGATOR_SCREEN.PAY} 
   
    >
      <Stack.Screen component = {SCREENS.PAY_NAVIGATOR_SCREEN.Component} name={SCREENS.PAY_NAVIGATOR_SCREEN.PAY}
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const TransferStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = {SCREENS.TRANSFER_NAVIGATOR_SCREEN.TRANSFER} 
   
    >
      <Stack.Screen component = {SCREENS.TRANSFER_NAVIGATOR_SCREEN.Component} name={SCREENS.TRANSFER_NAVIGATOR_SCREEN.TRANSFER}
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}


const AppStack: React.FC = () => {
  return (
    <Tab.Navigator  screenOptions = {({route})=>({
    
      tabBarIcon:({focused,color,size}) =>{
        return (
         <Ionicons 
         name = "ios-add"
         />
        )
      }
      
      
      
    
    })}
      >
      <Tab.Screen name="ExtractStack"  component = {ExtractStack} options = {{headerShown:false,title:"Extrato"}}/>
      <Tab.Screen name="CreditPixStack"  component = {CreditPixStack} options = {{headerShown:false,title:"Pix Crédito"}}/>
      <Tab.Screen name="PixStack"  component = {PixStack} options = {{headerShown:false,title:"Pix "}}/>
      <Tab.Screen name="PayStack"  component = {PayStack} options = {{headerShown:false,title:"Pagar"}}/>
      <Tab.Screen name="TransferStack"  component = {TransferStack} options = {{headerShown:false,title:"Transferir"}}/>   
    </Tab.Navigator>
  )

}

export default AppStack;