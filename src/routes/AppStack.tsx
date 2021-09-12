import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import React from 'react';
import CreditPixScren from '../screens/CreditPixScren';
import ExtractScreen from '../screens/ExtractScreen';
import PayScreen from '../screens/PayScreen';
import PixScreen from '../screens/PixScreen';
import TransferScreen from '../screens/TransferScreen';

// import { Container } from './styles';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ExtractStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = "ExtractScreen" 

    >
      <Stack.Screen component = {ExtractScreen} name="ExtractScreen"
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const CreditPixStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = "ExtractScreen" 
   
    >
      <Stack.Screen component = {ExtractScreen} name="ExtractScreen"
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

const PixStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = "PixScreen" 
  
    >
      <Stack.Screen component = {PixScreen} name="PixScreen"
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const PayStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = "PayScreen" 
   
    >
      <Stack.Screen component = {PayScreen} name="PayScreen"
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}
const TransferStack = ()=>{
  return (
    <Stack.Navigator initialRouteName = "TransferScreen" 
   
    >
      <Stack.Screen component = {TransferScreen} name="TransferScreen"
      
       options = {{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}


const AppStack: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ExtractStack"  component = {ExtractStack} options = {{headerShown:false,title:"Extrato"}}/>
      <Tab.Screen name="CreditPixStack"  component = {CreditPixStack} options = {{headerShown:false,title:"Pix Crédito"}}/>
      <Tab.Screen name="PixStack"  component = {PixStack} options = {{headerShown:false,title:"Pix "}}/>
      <Tab.Screen name="PayStack"  component = {PayStack} options = {{headerShown:false,title:"Pagar"}}/>
      <Tab.Screen name="TransferStack"  component = {TransferStack} options = {{headerShown:false,title:"Transferir"}}/>   
    </Tab.Navigator>
  )

}

export default AppStack;