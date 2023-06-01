import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,StatusBar, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from '../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParam } from '../App';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
  const Navigation =
      useNavigation<NativeStackNavigationProp<RootStackParam>>()

  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const Log = () => {                                                           
    if(email == '') {
      Alert.alert('Ups!','email wajib diisi',[
        {
          text: 'ok'
        }
      ])
    } else if ( 
      email.split('@')[1] !== 'gmail.com' &&
      email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Ups!','email yang anda masukkan salah',[
        {
          text: 'ok'
        }
      ])
    } else if(password== ''){
      Alert.alert('Ups!','password harus diisi',[
        {
          text: 'ok'
        }
      ])
    } else{

      var formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch(
        "https://ed26-2001-448a-4043-27be-43f0-6218-f1e0-aa0b.ngrok-free.app/api/login", 
        requestOptions
        )
        .then(response => response.json())
        .then(result => {console.log(result)
            if(result.error_message){
              Alert.alert('Perhatian','akun yang anda masukkan salah/belum terdaftar',[
                {
                  text: 'Ok'
                }
              ])
            }else {
              console.log(result.access_token);
              AsyncStorage.setItem('token',result.access_token);
              Navigation.replace('Home1')
            }})
        .catch(error => console.log('error', error))
      }
  }
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent/>
        <View style={{alignItems: 'center',marginTop: 60}}>
          <View style={styles.Logo}>
            <Text style = {{fontSize: 38,fontFamily: 'Poppins-SemiBold',color: '#F9FAFB',marginTop:5}}>Y</Text>
          </View>
          <Text style={styles.LoginText}>Login to tokoyusuf</Text>
        </View>
        <View>
          <TextInput placeholder='Email' style={styles.TextInput} onChangeText={email => setEmail(email)}/>
          <Icon name="person-outline" size= {20} color='#A8AFB9' style={styles.icon}/>
        </View>
        <View style={styles.TextInputPassword}>
          <TextInput placeholder='Password' style={styles.TextInput} onChangeText={password => setPassword(password)} secureTextEntry={true}/>
          <Icon name="lock-closed-outline" size= {20} color='#A8AFB9' style={styles.icon}/>
        </View>
        <View style={styles.Bottom}>
          <TouchableOpacity>
            <Text style={styles.Forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <Button title='Login' onPress={Log} />
          <Text style={{marginVertical: 20}}>Or</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <View style={styles.sosmedIcon}>
              <TouchableOpacity>              
                <Image source={require('../assets/icon/fb.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon/google.png')}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../assets/icon/apple.png')}/>
                <Image source={require('../assets/icon/apel.png')} style={{position: 'absolute', right: 12,bottom: 11}}/>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',marginTop: 75}}>
              <Text>Don’t have an account?</Text>
                <TouchableOpacity>
                    <Text style={{color: '#6C70EB'}} onPress={() => Navigation.navigate('Register')}> Sign Up</Text>
                </TouchableOpacity> 
            </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    
  },
  Logo: {
    backgroundColor: '#6C70EB',
    height: 76,
    width: 76,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginTop: 100,
    marginBottom: 30,
    color: 'black'
  },
  TextInput: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 24,
    borderRadius: 16,
    paddingLeft: 64,
    elevation:1,
  },
  icon: {
    position: 'absolute',
    bottom: 13,
    left: 45, 
  },
  TextInputPassword: {
    marginTop: 24,
  },
  Forgot: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
    marginVertical: 20
  },
  Bottom: {
    alignItems: 'center',
  },
  Button: {
    backgroundColor: "#6C70EB",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: 24,
    borderRadius: 16
  },
  sosmedIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 100
  }
})