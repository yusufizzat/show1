import { Home,Favorit,Cart } from '../pages';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();


const Bottom = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: false,

      tabBarStyle: {height: 70,position: 'relative'},

      tabBarIcon: ({focused, size, color}) => {
        let iconName: any;
        if (route.name === 'home') {
          iconName = focused ? 'home' : 'home';
          color = focused ? '#6C70EB' : 'gray';
          size = focused ? size + 9 : size + 5;
        } else if (route.name === 'favorit') {
          iconName = focused ? 'heart' : 'heart';
          color = focused ? '#6C70EB' : 'gray';
          size = focused ? size + 9 : size + 5;
        } else if (route.name === 'cart') {
          iconName = focused ? 'cart' : 'cart';
          color = focused ? '#6C70EB' : 'gray';
          size = focused ? size + 9 : size + 5;
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}>
          <Tab.Screen name="home" component={Home}/>
          <Tab.Screen name="favorit" component={Favorit}/>
          <Tab.Screen name="cart" component={Cart}/>
        </Tab.Navigator>
  )
}

export default Bottom

const styles = StyleSheet.create({})