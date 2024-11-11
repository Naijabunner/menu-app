import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealItem from '../MealItem';

const MealsList = ({mealsToDisplay}) => {

    function renderMealItem(itemData) {
        return <MealItem {...itemData.item} />;
      }
    
      return (
        <View style={styles.container}>
          <FlatList
            data={mealsToDisplay}
            keyExtractor={(itemData) => itemData.id}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})