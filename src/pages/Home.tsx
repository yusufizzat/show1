import { Image, StatusBar, StyleSheet, Text, TextInput, View,ScrollView, TouchableOpacity,FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Header} from '../components';
import cart from './Cart';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
import { RootStackParam } from '../App';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();


const Home = () => {
  const Navigation =
      useNavigation<NativeStackNavigationProp<RootStackParam>>()
      
      const Stack = createNativeStackNavigator<RootStackParam>();    
  const [items2, setItems2] = useState([
    {
      id: 1,

    },
  ])
  const [items, setItems] = useState([
    {
      id: 1,
      image: require('../assets/image/baju.png'),
      nama: 'Olive Zip-Front Jacket',
      harga: 'Rs. 3,499'
    },
    {
      id: 2,
      image: require('../assets/image/celanaPendek.png'),
      nama: 'FILA Men’s shorts',
      harga: 'Rs. 3,499'
    },
    {
      id: 3,
      image: require('../assets/image/celanaPendek.png'),
      nama: 'FILA Men’s shorts',
      harga: 'Rs. 3,499'
    },
    {
      id: 4,
      image: require('../assets/image/baju.png'),
      nama: 'Olive Zip-Front Jacket',
      harga: 'Rs. 3,499'
    },
    {
      id: 5,
      image: require('../assets/image/baju.png'),
      nama: 'Olive Zip-Front Jacket',
      harga: 'Rs. 3,499'
    },
    {
      id: 6,
      image: require('../assets/image/celanaPendek.png'),
      nama: 'Olive Zip-Front Jacket',
      harga: 'Rs. 3,499'
    },

  ])
  function Home() {
    return(
      <View style={{backgroundColor: '#F9FAFB',flex: 1}}>
      <Header title={'tokoyusuf'} Icon1={"notifications-outline"} Icon2={require('../assets/icon/Menu.png')} />
      <FlatList
        data={items2}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View style={styles.SearchContainer}>
            <TextInput style={styles.Search} placeholder={'Search for tshirts, jeans, shorts, jackets'}/>
            <Image source={require('../assets/icon/search.png')} style={styles.SearchIcon}/>
          </View>
        }
        ListHeaderComponentStyle={{marginBottom: 10}}
        contentContainerStyle={{paddingBottom: 10, backgroundColor: '#F9FAFB'}}
        renderItem={({item}) => (
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <View style={{flexDirection: 'row',marginHorizontal: 24, marginTop: 40}}>
                <TouchableOpacity onPress={() => Navigation.navigate('Men')}>
                    <View style={styles.men1}>
                      <Text style={{fontFamily: 'Poppins-SemiBold', color: "#FFFFFF", fontSize: 26}}>men</Text>
                      <Image source={require('../assets/image/orang.png')} style={styles.orang}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.men2}>
                      <Text style={{fontFamily: 'Poppins-SemiBold', color: "#FFFFFF", fontSize: 26}}>women</Text>
                      <Image source={require('../assets/image/orang2.png')} style={styles.orang2}/>
                    </View>
                </TouchableOpacity>
              </View>
                  </ScrollView>

  )}
  ListFooterComponent={
    <View style={{marginTop: 32,paddingHorizontal: 24}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:0,alignItems:'center', marginBottom: 10}}>
        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 20, color: 'black'}}>Recommended</Text>
        <Text>See all</Text>
      </View>
      <View style={{flex:1}}>
        <FlatGrid
          itemDimension={150}
          data={items}
          style={{marginHorizontal: -15}}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View>
                <Image source={item.image} style={{width: 175, height: 178}}/>
                <Text style={{marginLeft:6,fontSize:14,fontFamily:'Poppins-Medium',color: 'black'}}>{item.nama}</Text>
                <Text style={{marginLeft:6}}>{item.harga}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  }
/>

    </View>
    )
  }
  function Men() {
    return (
      <View style={{flex:1}}>
      <Header title={'Categories'} Icon1={'search-outline'} Icon2={require('../assets/icon/back.png')}/>
      <View style={{flex:1,paddingHorizontal: 20}}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View>
            <View style={{backgroundColor:'#6C70EB',height: 144,borderRadius:16,paddingLeft:33,paddingTop:29}}>
              <Text>SEASON SALE</Text>
              <Text>UP TO 25% OFF</Text>
              <Text>Terms & Conditions apply*</Text>
            </View>
          </View>        
        }
       
        renderItem={({item}) => (
          <View></View>

        )}
        ListFooterComponent={
          <View >
            <FlatGrid
              itemDimension={150}
              data={items}
              
              style={{marginHorizontal: -10}}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={{backgroundColor: 'white',width: 170,height: 170,alignItems: 'center',justifyContent: 'center',borderRadius:16}}>
                    <Text>{item.nama}</Text>
                  </View>
                </TouchableOpacity>
              )}
              />
          </View>
        } 
        />
        
    </View>

      </View>
    )
  }
  return (

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/> 
        <Stack.Screen name="Men" component={Men} options={{headerShown: false}}/> 
      </Stack.Navigator>


  )
}

export default Home

const styles = StyleSheet.create({
  SearchContainer: {
    marginTop: 16,
  
  },
  Search: {
    backgroundColor: '#EDEEEF',
    marginHorizontal: 20,
    paddingVertical: 26,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 56,
    paddingRight: 33,
    borderRadius: 16
  },
  SearchIcon: {
    position: 'absolute',
    left:42,
    bottom: 33
  },
  men1: {
    backgroundColor: "#6C70EB",
    width: 309,
    height: 186,
    borderRadius: 16,
    padding: 25,
    elevation: 5
  },
  men2: {
    backgroundColor: "#7BCFFF",
    width: 309,
    height: 186,
    marginLeft: 24,
    borderRadius: 16,
    padding: 25,
    elevation: 5
  },
  orang: {
    position: "absolute",
    bottom: 0,
    right: 20
  },
  orang2: {
    position: "absolute",
    bottom: 0,
    right: 20,
    width: 156,
    height: 220,

  },

})