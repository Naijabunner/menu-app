import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useL, useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

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


  
  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={mealsToDisplay}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
