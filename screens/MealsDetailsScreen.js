import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import List from '../components/mealDetails/List';
import Subtitle from '../components/mealDetails/Subtitle';
import IconBtn from '../components/IconBtn';
import { FavoriteContext } from '../store/context/favorites-context';

const MealsDetailsScreen = ({ route, navigation }) => {
  const FavoriteMealsCtx= useContext(FavoriteContext)
    const id= route.params.categoryId;
    const selectedMeal= MEALS.find(meal=>meal.id === id)
    const mealIsFavorite = FavoriteMealsCtx.ids.includes(id)

    function changeFavoriteHandler(){
      if (mealIsFavorite) {
         FavoriteMealsCtx.removeFavorite(id)
      }else{
        FavoriteMealsCtx.addFavorite(id)
      }
    }

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:()=>{
          return(
            <IconBtn icon={mealIsFavorite?'star': 'star-outline' }size={24} color={'white'} onPress={changeFavoriteHandler}/>
          )
         
        }
      })
    })


  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}> {selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.dtailText}
      />
      <Subtitle>Ingedients</Subtitle>
      <List selectedMeal={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List selectedMeal={selectedMeal.steps} />
    </ScrollView>
  );
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
  dtailText:{
    color:'white'
  },
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
});