import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/mealsList/MealsList'
import { FavoriteContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'

const FavoriteScreen = () => {
  const FavoriteMealsCtx = useContext(FavoriteContext)
  const favoriteMeals = MEALS.filter(meal=> FavoriteMealsCtx.ids.includes(meal.id))
  
  
  return (
    <>
    <MealsList mealsToDisplay={favoriteMeals}/>
    </>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({})