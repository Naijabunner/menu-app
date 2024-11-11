import { StyleSheet, Text, View } from "react-native";
import React from "react";

const List = ({ selectedMeal }) => {
  return selectedMeal.map((ingredient) => {
    return (
      <View key={ingredient} style={styles.listItem}>
        <Text style={styles.itemText} >{ingredient}</Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical:4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: 'white'
    },
    itemText:{
        color: '#351401',
        textAlign:'center',

    }
});
