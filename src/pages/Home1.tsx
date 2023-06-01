import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParam } from '../App'
import AsyncStorage from '@react-native-async-storage/async-storage'

  interface ListData {
      id: number
      name: string
      address: string
      photo: string
  }

const Home1 = () => {
    const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParam>>()
    const [data,setData] = useState<ListData[]>([])
    useEffect(() => {
        AsyncStorage.getItem('token').then(value => {    
          console.log(value);
                
            var requestOptions = {
              method: 'GET',
              headers: {Authorization: `Bearer ${value}`},
              redirect: 'follow'
            };
            
            fetch("https://frontendreq.pondokprogrammer.com/api/index", requestOptions)
              .then(response => response.json())
              .then(result => {console.log(result.data),setData(result.data)})
              .catch(error => console.log('error', error));    
        })
    },[])

    const Logout = () => {
      AsyncStorage.getItem('token').then(value => {


var requestOptions = {
  method: 'POST',
  headers: {Authorization: `Bearer ${value}`},
  redirect: 'follow'
};

fetch("https://frontendreq.pondokprogrammer.com/api/logout", requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result), AsyncStorage.removeItem('token'),Navigation.replace('Login')})
  .catch(error => console.log('error', error));
      })
    }
  return (
    <View>
      <TouchableOpacity onPress={() => Logout()}>
        <Text>T</Text>
      </TouchableOpacity>
      <Text>Home1</Text>
      {data.map((value,index) => (
        <TouchableOpacity key={index} onPress={() => Navigation.navigate('detail',{no_id: value.id})}>
            <View >
              <Image source={{uri: value.photo}} style={{width: 100,height: 100}}/>
              <Text>{value.name}</Text>
              <Text>{value.address}</Text>
            </View>
          </TouchableOpacity>
      ))}
    </View>
  )
}

export default Home1

const styles = StyleSheet.create({})

