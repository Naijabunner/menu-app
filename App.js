import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import RootLayout from './_layout';
import { createStackNavigator } from '@react-navigation/stack';
import './gesture-handler';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
import { Ionicons } from '@expo/vector-icons'
import FavoriteContextProvider from './store/context/favorites-context';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle:{ backgroundColor: '#351401'},
      headerTintColor:'white',
      sceneStyle:{ backgroundColor: '#351401', borderRadius:100},
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1',
      drawerInactiveTintColor:'white',
      drawerContentStyle:{ backgroundColor:'#351401', marginTop:10 },
      drawerItemStyle:{borderRadius: 10}
    }}
    >
      <Drawer.Screen name='Meals category' component={CategoriesScreen} options={{
        title:'All Categories',
        drawerIcon:({ color, size })=>(
          <Ionicons name='list' color={color} size={size}/>
        )
      }} />
      <Drawer.Screen name='Favorite' component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (

    <RootLayout>
      <StatusBar style='light'/>
      <FavoriteContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{ backgroundColor: '#351401'},
            headerTintColor:'white',
            cardStyle:{ backgroundColor: '#351401'},
          }}>
            <Stack.Screen name='drawer' component={DrawerNavigator} 
            options={{
              headerShown: false
            }}
            />
            <Stack.Screen name='Meals overview' component={MealsOverviewScreen} />
            <Stack.Screen name='Meal Details' component={MealsDetailsScreen} options={{
              headerRight:()=>{
                return(<Text>Header</Text>)
              }
            }} />
          </Stack.Navigator>
        </NavigationContainer>
        </FavoriteContextProvider>
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
