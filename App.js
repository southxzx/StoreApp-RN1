import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './component/CategoryListItem';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cate: [
        {id: 1, name:"Weather forecast"},
        {id: 2, name:"Weather forecast"},
        {id: 3, name:"Weather forecast"},
        {id: 4, name:"Weather forecast"}
      ]
    }
  }
  render() {
    const {cate} = this.state;
    return (
      <View style={styles.container}>
        <FlatList
          data={cate}
          renderItem = {({item})=><CategoryListItem cate={item}/>}
          keyExtractor = {item => `${item.id}`}
          contentContainerStyle={{paddingRight: 16, paddingLeft: 16}}
        />
      <StatusBar style="auto" />
    </View>
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



