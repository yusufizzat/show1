import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Register,Home1,Login,Home,Splash} from './pages'
import { Bottom } from './components';
import Detail from './pages/Detail';


export type RootStackParam = {
  Register: undefined
  Home1: undefined
  detail:{no_id: number}
  Login: undefined
  Home: undefined
  Bottom: undefined
  Men:undefined
  Splash: undefined

}

const Stack = createNativeStackNavigator<RootStackParam>();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/> 
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
          <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/> 
        <Stack.Screen name="Home1" component={Home1} options={{headerShown: false}}/> 
        <Stack.Screen name="detail" component={Detail} options={{headerShown: false}}/> 
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Bottom" component={Bottom} options={{headerShown: false}}/> 

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})