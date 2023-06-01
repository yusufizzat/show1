import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
    title: string,
    onPress: () => void
}

const Button: React.FC<Props> = ({title,onPress}) => {
  return (
    <TouchableOpacity style={{flexDirection: 'row',}} onPress={onPress}>
        <View style={styles.Button}>
          <Text style={{fontSize: 18,fontFamily: 'Poppins-Medium',color: '#FFFFFF'}}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#6C70EB",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginHorizontal: 24,
        borderRadius: 16
      }
})