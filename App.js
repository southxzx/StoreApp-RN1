import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Category from './screens/Category';
import Categories from './screens/Categories';

export default class App extends Component {
  render() {

    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Categories}/>
            <Stack.Screen 
              name="Category" 
              component={Category}
              options={({route}) => ({title: route.params.nameCate})}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});



