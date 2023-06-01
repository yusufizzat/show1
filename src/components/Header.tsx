import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string,
    Icon1: string
    Icon2: any
}

const Header:React.FC<Props> = ({title,Icon1,Icon2}) => {
  return (
    <View style={styles.Navbar}>
        <Image source={Icon2}/>
        <Text style={{fontSize: 18,color: 'black',fontFamily: 'Poppins-Medium',}}>{title}</Text>
        <Icon name={Icon1} size= {26} color='black'/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    Navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        paddingVertical: 17,
        alignItems: 'center',
      }
})