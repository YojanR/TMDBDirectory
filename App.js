import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './screens/MovieDetails/movieDetails';
import MovieList from './screens/MovieList/movieList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MovieList">
        <Stack.Screen options={{
          headerTitle: 'Películas',
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerStyle:{
            backgroundColor:'black'
          }
        }} name='MovieList' component={MovieList} />
        <Stack.Screen options={{
          headerTitle: '',
          headerTintColor: 'white',
          headerBackTitle: true,
          headerStyle:{
            backgroundColor:'black'
          }
        }} name='MovieDetail' component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
