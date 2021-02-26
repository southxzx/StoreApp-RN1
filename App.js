import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import AppNavigator from './AppNavigator';
import CartProvider from './provider/CartProvider';

export default class App extends Component {
  render() {
    return (
      <CartProvider>
        <AppNavigator/>
      </CartProvider>

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



