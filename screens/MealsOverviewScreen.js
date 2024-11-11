import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useL, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealsList from "../components/mealsList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const id = route.params.categoryId;
  const mealsToDisplay = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(id)
  );

  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find(
      (category) => category.id === id
    ).title;

    navigation.setOptions({
      title: CategoryTitle,
    });
  }, [id, navigation]);


  


  return (
    <>
    <MealsList mealsToDisplay={mealsToDisplay}/>
    </>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
