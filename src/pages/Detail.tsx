import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParam } from '../App'
import AsyncStorage from '@react-native-async-storage/async-storage'

type Navigation = NativeStackScreenProps<RootStackParam, 'detail'>
interface ListData {
    name: string
    email:string
    phone: string
    address:  string
    city: string
    photo: string,
}

const Detail = ({navigation,route} : Navigation) => {
    const [data,setData] = useState<ListData[]>([])
    useEffect(() => {
        console.log(route.params.no_id);
        AsyncStorage.getItem('token').then(value => {


var requestOptions = {
  method: 'GET',
  headers: {Authorization: `Bearer ${value}`},
  redirect: 'follow'
};

fetch(`https://frontendreq.pondokprogrammer.com/api/show/${route.params.no_id}`, requestOptions)
  .then(response => response.json())
  .then(result => {console.log(result.data), setData(result.data)})
  .catch(error => console.log('error', error));
        })
    },[])
  return (
      <>
    <View style={{flex:1}}>
      
        {data.map((value,index) => (
            <View key={index}>
              <Image source={{uri: value.photo}} style={{width: 100,height: 100}}/>
              <Text>{value.name}</Text>
              <Text>{value.address}</Text>
            </View>
        ))}
      <Text>Detail</Text>
    </View>
    </>
  )
}

export default Detail

const styles = StyleSheet.create({})