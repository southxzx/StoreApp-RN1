
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

export default class Category extends Component {
  render() {
    const {navigation, route} = this.props;
    // Get param
    const {itemName} = route.params;
    return (
        <View>
            <Text>{itemName}</Text>
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



