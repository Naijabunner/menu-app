import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout';
import { createStackNavigator } from '@react-navigation/stack';
import './gesture-handler';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
const Stack = createStackNavigator()

export default function App() {
  return (
    <RootLayout>
      <StatusBar style='light'/>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{ backgroundColor: '#351401'},
            headerTintColor:'white',
            cardStyle:{ backgroundColor: '#351401'},
          }}>
            <Stack.Screen name='Meals category' component={CategoriesScreen} 
            // options={()=>{
            //   const catId = route.param.categoryID
            // }}
            />
            <Stack.Screen name='Meals overview' component={MealsOverviewScreen} />
            <Stack.Screen name='Meal Details' component={MealsDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
