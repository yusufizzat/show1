import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../App'
import AsyncStorage from '@react-native-async-storage/async-storage'


const Splash = () => {
    const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParam>>()
    setTimeout(() => {
        AsyncStorage.getItem('token').then(value => {
            console.log(value);
            
            if(value !== null){
                Navigation.replace('Home1')
            } else {
                Navigation.replace('Login')
            }
        })
    }, 3000);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})