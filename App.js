import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import AppNavigator from './AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator></AppNavigator>
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



