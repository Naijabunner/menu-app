import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

const MealsDetailsScreen = ({ route }) => {
    const id= route.params.categoryId;
    const selectedMeal= MEALS.find(meal=>meal.id === id)
  return (
    <View>
        <Image source={{uri: selectedMeal.imageUrl}}/>
      <Text> {selectedMeal.title}</Text>
    <MealDetails 
    duration={selectedMeal.duration}
    complexity={selectedMeal.complexity}
    affordability={selectedMeal.affordability}
    />
    <Text>
        Ingedients
    </Text>
    {selectedMeal.ingredients.map((ingredient)=>{
        <Text key={ingredient}>
            {ingredient}
        </Text>
    })}
    <Text>
        Steps
    </Text>
    {selectedMeal.steps.map((step)=>{
        <Text key={step}>
            {ingredient}
        </Text>
    })}
    </View>
  )
}

export default MealsDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color:'white'
  },
});