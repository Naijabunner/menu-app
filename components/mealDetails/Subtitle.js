import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ( { children }) => {
  return (
    <View style={styles.subtitleCOntainer}>
    <Text style={styles.subtitle}>
    {children}
</Text>
</View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
      subtitle:{
        color: 'white',
        fontSize:18,
        fontWeight:'bold',
        margin:6,
        textAlign:'center',
        borderBottomColor:'white',
        borderBottomWidth: 2
      },
      subtitleCOntainer:{
        padding: 6,
        marginHorizontal: 24,
        marginVertical: 4,
        borderBottomColor: 'white',
        borderBottomWidth: 2
      }
})