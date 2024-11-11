import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
const IconBtn = ({icon, color, onPress, size }) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
     <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
  )
}

export default IconBtn

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})