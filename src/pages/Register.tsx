import {
  ActivityIndicator,
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParam } from '../App';


const Register = () => {
  const Navigation =
    useNavigation<NativeStackNavigationProp<RootStackParam>>()
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password_Confirmation, setPassword_Confirmation] =
    useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const reg = () => {
    if(name == ''&&email == ''&&password == ''&&password_Confirmation == '') {
      Alert.alert('Ups!','Anda belum memasukkan apapun',[
        {
          text: 'ok'
        }
      ])
    } else if (name == '') {
      Alert.alert('Ups!','Name wajib diisi',[
        {
          text: 'ok'
        }
      ])
    } else if(email == '') {
      Alert.alert('Ups!','Email wajib diisi',[
        {
          text: 'ok'
        }
      ])
    } else if(password == '') {
      Alert.alert('Ups!','Password wajib diisi',[
        {
          text: 'ok'
        }
      ])
    } else if (
        email.split('@')[1] !== 'gmail.com' &&
        email.split('@')[1] !== 'email.com'
    ) {
      Alert.alert('Ups!','Email yang anda masukkan tidak valid',[
        {
          text: 'ok'
        }
      ])
    } else if(password.length < 8) {
      Alert.alert('Ups!','Password minimal 8 karakter',[
        {
          text: 'ok'
        }
      ])
    } else if(password_Confirmation !== password ){
      Alert.alert('Ups!','password Confirmation tidak sesuai',[
        {
          text: 'ok'
        }
      ])
    } else {

      setLoading(true);
      var formdata = new FormData();
      formdata.append('name', name);
      formdata.append('email', email);
      formdata.append('password', password);
      formdata.append('password_confirmation', password_Confirmation);
      
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };
      
      fetch(
        'https://frontendreq.pondokprogrammer.com/api/register',
        requestOptions,
        )
        .then(response => response.json())
        .then(result => {console.log(result); Navigation.navigate('Login')})
        .catch(error => console.log('error', error))
        .finally(() => setLoading(false));
      };
    }
      
      return (
        <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Name</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={(nm: string) => setName(nm)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Email</Text>
        <TextInput
          placeholder="email"
          style={styles.input}
          onChangeText={(em: string) => setEmail(em)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password</Text>
        <TextInput
          placeholder="password"
          style={styles.input}
          onChangeText={(pass: string) => setPassword(pass)}
        />
      </View>
      <View style={styles.conterInput}>
        <Text style={styles.name}>Password Confirmation</Text>
        <TextInput
          placeholder="password confirmation"
          style={styles.input}
          onChangeText={(passConfirm: string) =>
            setPassword_Confirmation(passConfirm)
          }
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => reg()}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.textButton}>Register</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 35,
  },
  conterInput: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  name: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: 'gray',
    marginTop: 5,
  },
  button: {
    width: '90%',
    height: 45,
    backgroundColor: 'blue',
    alignSelf: 'center',
    marginTop: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  textButton: {
    fontSize: 20,
    color: 'white',
  },
});